import fs from 'node:fs';
import path from 'node:path';
import { getAllSlugs, getArticle } from '../lib/articles.js';
import { affiliations } from '../lib/affiliations.js';

const slugs = getAllSlugs();
const slugSet = new Set(slugs);
const articles = new Map();
const errors = [];
const rows = [];

for (const slug of slugs) {
  articles.set(slug, await getArticle(slug));
}

function idsIn(html) {
  return new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
}

function hrefsIn(html) {
  return [...html.matchAll(/\bhref="([^"]+)"/g)].map((match) => match[1]);
}

function checkArticleTarget(sourceSlug, href) {
  const parsed = new URL(href, 'https://www.chimiemaison.fr');
  const match = parsed.pathname.match(/^\/articles\/([^/]+)\/?$/);
  if (!match) return;

  const targetSlug = match[1];
  if (!slugSet.has(targetSlug)) {
    errors.push(`${sourceSlug}: article introuvable ${href}`);
    return;
  }

  if (parsed.hash) {
    const targetId = decodeURIComponent(parsed.hash.slice(1));
    const targetIds = idsIn(articles.get(targetSlug).contentHtml);
    if (!targetIds.has(targetId)) {
      errors.push(`${sourceSlug}: ancre introuvable ${href}`);
    }
  }
}

function walkFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walkFiles(entryPath) : [entryPath];
  });
}

for (const slug of slugs.sort()) {
  const article = articles.get(slug);
  const ids = idsIn(article.contentHtml);
  const hrefs = hrefsIn(article.contentHtml);
  const sourcePath = path.join('content', `${slug}.md`);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const imagePaths = [
    ...source.matchAll(/(?:^|[\s("'=:])\/images\/([^\s)"'<>]+)/g),
  ].map((match) => path.join('public', 'images', match[1]));

  for (const imagePath of new Set(imagePaths)) {
    if (!fs.existsSync(imagePath)) {
      errors.push(`${slug}: image introuvable /${imagePath.replace(/^public\//, '')}`);
    } else if (fs.statSync(imagePath).size === 0) {
      errors.push(`${slug}: image vide /${imagePath.replace(/^public\//, '')}`);
    }
  }

  for (const href of hrefs) {
    if (href.startsWith('#')) {
      const id = decodeURIComponent(href.slice(1));
      if (!ids.has(id)) errors.push(`${slug}: ancre locale introuvable ${href}`);
    } else if (href.startsWith('/articles/')) {
      checkArticleTarget(slug, href);
    }
  }

  const materialHref =
    article.materialHref || (ids.has('materiel') ? '#materiel' : null);
  if (materialHref?.startsWith('#')) {
    const id = decodeURIComponent(materialHref.slice(1));
    if (!ids.has(id)) errors.push(`${slug}: bouton matériel introuvable ${materialHref}`);
  } else if (materialHref?.startsWith('/articles/')) {
    checkArticleTarget(slug, materialHref);
  }

  const shortcodeKeys = [
    ...source.matchAll(/\{\{affil(?:-inline)?:([a-z0-9-]+)\}\}/g),
  ].map((match) => match[1]);
  for (const key of shortcodeKeys) {
    if (!affiliations[key]) errors.push(`${slug}: affiliation inconnue ${key}`);
  }

  if (/https:\/\/www\.amazon\.fr\//.test(source)) {
    errors.push(`${slug}: lien Amazon codé en dur au lieu du catalogue central`);
  }

  const affiliateLinks = [
    ...article.contentHtml.matchAll(
      /<a\b[^>]*href="https:\/\/www\.amazon\.fr\/[^"]+"[^>]*>/g,
    ),
  ].map((match) => match[0]);
  for (const link of affiliateLinks) {
    const rel = link.match(/\brel="([^"]+)"/)?.[1] || '';
    if (!rel.includes('sponsored') || !rel.includes('nofollow')) {
      errors.push(`${slug}: lien affilié sans rel sponsored + nofollow`);
    }
  }

  rows.push({
    slug,
    material: materialHref || 'masqué',
    products: new Set(shortcodeKeys).size,
  });
}

for (const sourcePath of walkFiles('app').filter((file) => /\.(?:js|jsx|ts|tsx)$/.test(file))) {
  const source = fs.readFileSync(sourcePath, 'utf8');
  if (/https:\/\/www\.amazon\.fr\//.test(source)) {
    errors.push(`${sourcePath}: lien Amazon codé en dur au lieu du catalogue central`);
  }
}

for (const [key, product] of Object.entries(affiliations)) {
  const url = new URL(product.url);
  const asinInUrl = url.pathname.match(/\/dp\/([A-Z0-9]{10})(?:\/|$)/)?.[1];
  if (asinInUrl !== product.asin) {
    errors.push(`${key}: ASIN du catalogue différent de l’URL`);
  }
  if (url.searchParams.get('tag') !== 'maxscience06-21') {
    errors.push(`${key}: identifiant Amazon Partenaires absent ou incorrect`);
  }
}

for (const row of rows) {
  console.log(
    `${row.slug.padEnd(44)} matériel=${row.material.padEnd(54)} produits=${row.products}`,
  );
}

if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `\nPASS — ${rows.length} articles contrôlés, aucune ancre ou image cassée, aucun produit inconnu, aucun lien Amazon codé en dur et catalogue affilié cohérent.`,
);
