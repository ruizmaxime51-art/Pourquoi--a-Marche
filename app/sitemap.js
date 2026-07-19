import { getAllArticlesMeta } from '@/lib/articles';
import { categoryList } from '@/lib/categories';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const siteUpdate = new Date('2026-07-18');

  const staticPaths = ['', '/recettes', '/a-propos', '/mentions-legales', '/politique-confidentialite', '/outils', '/outils/lessive-eau-dure'];
  const categoryPaths = categoryList.map((c) => `/${c.slug}`);

  const staticEntries = [...staticPaths, ...categoryPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: siteUpdate,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }));

  const articleEntries = getAllArticlesMeta().map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: new Date(article.updated || article.date || siteUpdate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}
