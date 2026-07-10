import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import { renderAffiliationBlock, renderAffiliationInline } from './affiliations.js';
import { renderReferences } from './references.js';

const contentDir = path.join(process.cwd(), 'content');

export function getAllSlugs() {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getArticleMeta(slug) {
  const file = fs.readFileSync(path.join(contentDir, `${slug}.md`), 'utf8');
  const { data } = matter(file);
  return { slug, ...data };
}

export function getAllArticlesMeta() {
  return getAllSlugs().map(getArticleMeta);
}

export function getArticlesByCategory(categorySlug) {
  return getAllArticlesMeta().filter((a) => a.category === categorySlug);
}

// Sépare le "guide" (notion mise en avant) des recettes dans une catégorie
export function getArticlesGrouped(categorySlug) {
  const all = getArticlesByCategory(categorySlug);
  const guides = all.filter((a) => a.type === 'notion' || a.type === 'guide');
  const others = all.filter((a) => a.type !== 'notion' && a.type !== 'guide');
  return { guides, others };
}

// ── Traitement des balises spéciales dans le markdown ──
// {{affil:key}}         → fiche produit
// {{affil-inline:key}}  → lien inline
// {{ref:key}}           → renvoi numéroté [n] (numérotation par ordre d'apparition)
// {{references}}        → bibliographie des sources citées
// {{sommaire}}          → sommaire cliquable auto-généré depuis les ## titres
function preprocess(content) {
  const usedRefs = [];

  // 1. Renvois de sources [n] — on collecte l'ordre d'apparition
  content = content.replace(/\{\{ref:([a-z0-9-]+)\}\}/g, (_, key) => {
    let idx = usedRefs.indexOf(key);
    if (idx === -1) {
      usedRefs.push(key);
      idx = usedRefs.length - 1;
    }
    const n = idx + 1;
    return `<sup class="ref-mark"><a href="#ref-${key}">${n}</a></sup>`;
  });

  // 2. Fiches d'affiliation
  content = content.replace(/\{\{affil:([a-z0-9-]+)\}\}/g, (_, key) =>
    '\n\n' + renderAffiliationBlock(key) + '\n\n'
  );
  content = content.replace(/\{\{affil-inline:([a-z0-9-]+)\}\}/g, (_, key) =>
    renderAffiliationInline(key)
  );

  return { content, usedRefs };
}

// Génère un sommaire cliquable à partir des titres de niveau 2 (## ...)
function buildSommaire(rawMarkdown) {
  const lines = rawMarkdown.split('\n');
  const items = [];
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.trim().startsWith('```')) inCodeBlock = !inCodeBlock;
    if (inCodeBlock) continue;
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) {
      const text = m[1].replace(/[#*`]/g, '').trim();
      const id = slugifyHeading(text);
      items.push({ text, id });
    }
  }
  if (items.length === 0) return '';
  const lis = items.map((it) => `<li><a href="#${it.id}">${it.text}</a></li>`).join('\n');
  return `<nav class="sommaire" aria-label="Sommaire">
<div class="sommaire-title">Au sommaire</div>
<ol>
${lis}
</ol>
</nav>`;
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Ajoute des id aux <h2> générés pour que les ancres du sommaire fonctionnent
function addHeadingIds(html) {
  return html.replace(/<h2>(.*?)<\/h2>/g, (full, inner) => {
    const plain = inner.replace(/<[^>]+>/g, '');
    const id = slugifyHeading(plain);
    return `<h2 id="${id}">${inner}</h2>`;
  });
}

export async function getArticle(slug) {
  const file = fs.readFileSync(path.join(contentDir, `${slug}.md`), 'utf8');
  const { data, content } = matter(file);

  // Sommaire (avant transformation, sur le markdown brut)
  const sommaireHtml = buildSommaire(content);

  // Balises spéciales
  const { content: processedContent, usedRefs } = preprocess(content);

  // Markdown → HTML
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(processedContent);
  let html = processed.toString();

  // id sur les h2 pour les ancres
  html = addHeadingIds(html);

  // Injection du sommaire (remplace {{sommaire}} ou en tête si absent et demandé)
  if (html.includes('{{sommaire}}')) {
    html = html.replace('{{sommaire}}', sommaireHtml);
  } else if (data.sommaire) {
    html = sommaireHtml + html;
  }

  // Injection de la bibliographie
  const refsHtml = renderReferences(usedRefs);
  if (html.includes('{{references}}')) {
    html = html.replace('{{references}}', refsHtml);
  } else if (refsHtml) {
    html = html + refsHtml;
  }

  return { ...data, slug, contentHtml: html };
}
