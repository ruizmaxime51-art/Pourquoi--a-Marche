import { getAllSlugs } from '@/lib/articles';
import { categoryList } from '@/lib/categories';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const now = new Date();

  const staticPaths = ['', '/a-propos', '/mentions-legales', '/politique-confidentialite', '/outils', '/outils/lessive-eau-dure'];
  const categoryPaths = categoryList.map((c) => `/${c.slug}`);
  const articlePaths = getAllSlugs().map((s) => `/articles/${s}`);

  const all = [...staticPaths, ...categoryPaths, ...articlePaths];

  return all.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith('/articles') ? 'monthly' : 'weekly',
    priority: path === '' ? 1 : path.startsWith('/articles') ? 0.8 : 0.6,
  }));
}
