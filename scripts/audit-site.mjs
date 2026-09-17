import fs from 'node:fs';
import { getAllSlugs, getArticle, getFeaturedArticles } from '../lib/articles.js';
import { references } from '../lib/references.js';
import { journeys, getNextSteps } from '../lib/journeys.js';
import { categories } from '../lib/categories.js';

const errors = [];
const titles = new Map();
const descriptions = new Map();
const all = [];
const known = new Set(getAllSlugs().map((slug) => `/articles/${slug}`));
function walk(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => item.isDirectory() ? walk(`${dir}/${item.name}`) : [`${dir}/${item.name}`]); }
for (const file of walk('app').filter((file) => file.endsWith('/page.js') && !file.includes('['))) known.add(file.slice(3, -8) || '/');
for (const slug of getAllSlugs()) {
  const a = await getArticle(slug); all.push(a);
  if (!categories[a.category]) errors.push(`${slug}: catégorie inconnue`);
  for (const [map, field, value] of [[titles, 'title', a.seoTitle || a.title], [descriptions, 'description', a.seoDescription || a.excerpt]]) {
    if (map.has(value)) errors.push(`${slug}: ${field} identique à ${map.get(value)}`);
    map.set(value, slug);
  }
  const raw = fs.readFileSync(`content/${slug}.md`, 'utf8');
  for (const [, key] of raw.matchAll(/\{\{ref:([a-z0-9-]+)\}\}/g)) if (!references[key]) errors.push(`${slug}: source inconnue ${key}`);
  const ids = [...a.contentHtml.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${slug}: identifiant HTML répété`);
  if ((a.contentHtml.match(/class="faq-section"/g) || []).length !== (a.faq?.length ? 1 : 0)) errors.push(`${slug}: FAQ absente ou répétée`);
  if (/\{\{(?:affil|ref|faq|sommaire)/.test(a.contentHtml)) errors.push(`${slug}: shortcode non rendu`);
  if (['notion', 'repere'].includes(a.type) && !getNextSteps(slug).length) errors.push(`${slug}: aucune application pratique`);
}
for (const [key, journey] of Object.entries(journeys)) {
  for (const slug of journey.members) if (!known.has(`/articles/${slug}`)) errors.push(`${key}: membre absent ${slug}`);
  for (const step of journey.steps) if (!known.has(step.href)) errors.push(`${key}: destination absente ${step.href}`);
}
if (getFeaturedArticles().some((a) => a.type !== 'recette')) errors.push('Accueil : les projets doivent être de vraies recettes');
fs.mkdirSync('reports', { recursive: true });
fs.writeFileSync('reports/content-audit.json', JSON.stringify({ generatedAt: new Date().toISOString(), articles: all.length, journeys: Object.keys(journeys).length, errors }, null, 2));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS — ${all.length} contenus, métadonnées, sources, FAQ et ${Object.keys(journeys).length} parcours vérifiés.`);
