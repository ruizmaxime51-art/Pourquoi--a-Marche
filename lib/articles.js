import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

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

export async function getArticle(slug) {
  const file = fs.readFileSync(path.join(contentDir, `${slug}.md`), 'utf8');
  const { data, content } = matter(file);
  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  return { ...data, slug, contentHtml: processed.toString() };
}
