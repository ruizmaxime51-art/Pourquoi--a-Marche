import { getAllArticlesMeta } from '@/lib/articles';
import { pins, tableaux, tableauDe, importGroupe, dejaSurPinterest } from '@/lib/pins';
import { SITE_URL, SITE_NAME } from '@/lib/site';

// Flux RSS pour la publication automatique sur Pinterest : un flux par tableau.
// /rss/conserves.xml, /rss/fermentation.xml, /rss/cosmetiques.xml, /rss/menage.xml
// Chaque article n'a qu'une image (l'épingle 1000 × 1500), pour qu'une seule épingle soit créée.
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(tableaux).map((t) => ({ file: `${t}.xml` }));
}

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(_req, { params }) {
  const { file } = await params;
  const cle = file.replace(/\.xml$/, '');
  const tableau = tableaux[cle];
  if (!tableau) return new Response('Not found', { status: 404 });

  const exclus = new Set([...importGroupe, ...dejaSurPinterest]);
  const articles = getAllArticlesMeta().filter(
    (a) => pins[a.slug] && !exclus.has(a.slug) && tableauDe(a.slug, a.category) === cle,
  );

  const items = articles
    .map((a) => {
      const p = pins[a.slug];
      const lien = `${SITE_URL}/articles/${a.slug}?utm_source=pinterest&utm_medium=social&utm_campaign=rss`;
      const image = `${SITE_URL}/pins/${a.slug}.png`;
      const titre = `${p.accroche} – ${p.promesse}`.slice(0, 100);
      const description = a.pinterestDescription || a.excerpt || a.seoDescription || '';
      const date = new Date(a.date || Date.now()).toUTCString();
      return `    <item>
      <title>${esc(titre)}</title>
      <link>${esc(lien)}</link>
      <guid isPermaLink="false">${esc(a.slug)}</guid>
      <description>${esc(description)}</description>
      <pubDate>${date}</pubDate>
      <enclosure url="${esc(image)}" type="image/png" length="0" />
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(`${SITE_NAME} – ${tableau.nom}`)}</title>
    <link>${SITE_URL}</link>
    <description>${esc(`${tableau.nom} : recettes expliquées et sourcées`)}</description>
    <language>fr-FR</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cross-Origin-Resource-Policy': 'cross-origin' },
  });
}
