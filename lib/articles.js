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
  const { data, content } = matter(file);
  return {
    slug,
    ...data,
    readingTime: data.readingTime || estimateReadingTime(content),
  };
}

export function getAllArticlesMeta() {
  return getAllSlugs()
    .map(getArticleMeta)
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

export function getFeaturedArticles(limit = 4) {
  const all = getAllArticlesMeta();
  const priority = ['notion-tensioactifs', 'notion-saponification', 'notion-ph-nettoyants', 'notion-fermentation-maison'];
  const picked = priority.map((slug) => all.find((a) => a.slug === slug)).filter(Boolean);
  const rest = all.filter((a) => !priority.includes(a.slug));
  return [...picked, ...rest].slice(0, limit);
}

export function getArticlesByCategory(categorySlug) {
  return getAllArticlesMeta().filter((a) => a.category === categorySlug);
}

export function getArticlesGrouped(categorySlug) {
  const all = getArticlesByCategory(categorySlug);
  const guides = all.filter((a) => a.type === 'notion' || a.type === 'guide');
  const others = all.filter((a) => a.type !== 'notion' && a.type !== 'guide');
  return { guides, others };
}

export function getRelatedArticles(article, limit = 3) {
  const all = getAllArticlesMeta().filter((a) => a.slug !== article.slug);
  const explicit = normalizeArray(article.related)
    .map((slug) => all.find((a) => a.slug === slug))
    .filter(Boolean);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const sameCategory = all.filter((a) => a.category === article.category && !explicit.some((e) => e.slug === a.slug));
  const notions = all.filter((a) => a.category === 'comprendre' && !explicit.some((e) => e.slug === a.slug) && !sameCategory.some((s) => s.slug === a.slug));
  return [...explicit, ...sameCategory, ...notions].slice(0, limit);
}

function normalizeArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function estimateReadingTime(markdown) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{\{[^}]+\}\}/g, ' ')
    .replace(/[#>*_`\-[\]()]/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 230));
}

function preprocess(content) {
  const usedRefs = [];

  content = content.replace(/\{\{ref:([a-z0-9-]+)\}\}/g, (_, key) => {
    let idx = usedRefs.indexOf(key);
    if (idx === -1) {
      usedRefs.push(key);
      idx = usedRefs.length - 1;
    }
    const n = idx + 1;
    return `<sup class="ref-mark"><a href="#ref-${key}">${n}</a></sup>`;
  });

  content = content.replace(/\{\{affil:([a-z0-9-]+)\}\}/g, (_, key) =>
    '\n\n' + renderAffiliationBlock(key) + '\n\n'
  );
  content = content.replace(/\{\{affil-inline:([a-z0-9-]+)\}\}/g, (_, key) =>
    renderAffiliationInline(key)
  );

  return { content, usedRefs };
}

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


function wrapStandaloneImages(html) {
  return html.replace(/<p>\s*<img([^>]*?)alt="([^"]*)"([^>]*)>\s*<\/p>/g, (full, before, alt, after) => {
    const caption = alt && alt.trim() ? `<figcaption>${alt}</figcaption>` : '';
    return `<figure class="article-figure"><img${before}alt="${alt}"${after}>${caption}</figure>`;
  });
}

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

  const sommaireHtml = buildSommaire(content);
  const { content: processedContent, usedRefs } = preprocess(content);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(processedContent);
  let html = processed.toString();

  html = addHeadingIds(html);
  html = wrapStandaloneImages(html);

  if (html.includes('{{sommaire}}')) {
    html = html.replace('{{sommaire}}', sommaireHtml);
  } else if (data.sommaire) {
    html = sommaireHtml + html;
  }

  const refsHtml = renderReferences(usedRefs);
  if (html.includes('{{references}}')) {
    html = html.replace('{{references}}', refsHtml);
  } else if (refsHtml) {
    html = html + refsHtml;
  }

  return {
    ...data,
    slug,
    contentHtml: html,
    readingTime: data.readingTime || estimateReadingTime(content),
    takeaways: normalizeArray(data.takeaways),
    related: normalizeArray(data.related),
  };
}
