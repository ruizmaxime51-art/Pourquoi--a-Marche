import fs from 'node:fs';
import { getAllSlugs, getArticle } from '../lib/articles.js';
const urls = new Map();
for (const slug of getAllSlugs()) {
  const a = await getArticle(slug);
  for (const [, raw] of a.contentHtml.matchAll(/href="(https?:[^\"]+)"/g)) {
    const url = new URL(raw.replaceAll('&amp;', '&'));
    if (url.hostname === 'www.chimiemaison.fr') continue;
    url.hash = '';
    const value = url.toString();
    if (!urls.has(value)) urls.set(value, new Set());
    urls.get(value).add(slug);
  }
}
const results = [];
const queue = [...urls];
const workers = Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const [url, articles] = queue.shift();
    // Les anti-bots marchands ne donnent pas une information de disponibilité fiable.
    if (new URL(url).hostname.endsWith('amazon.fr')) { results.push({ url, status: 'manuel-marchand', articles: [...articles] }); continue; }
    try {
      const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(12000), headers: { 'User-Agent': 'ChimieMaisonLinkCheck/1.0' } });
      await response.body?.cancel();
      const status = response.ok ? 'accessible' : [404, 410].includes(response.status) ? 'introuvable' : 'a-revoir';
      results.push({ url, status, http: response.status, finalUrl: response.url, articles: [...articles] });
    } catch { results.push({ url, status: 'non-verifiable', articles: [...articles] }); }
  }
});
await Promise.all(workers);
results.sort((a,b)=>a.url.localeCompare(b.url));
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/external-links.json', JSON.stringify({ checkedAt:new Date().toISOString(), note:'HTTP accessible ne garantit ni pertinence scientifique ni disponibilité produit. 403/429/délais restent non concluants.', results }, null, 2));
const missing = results.filter((r)=>r.status==='introuvable');
const summary = Object.fromEntries([...new Set(results.map(r=>r.status))].map(s=>[s,results.filter(r=>r.status===s).length]));
console.log(JSON.stringify(summary));
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Contrôle des liens\n\n${Object.entries(summary).map(([status,n])=>`- ${status} : ${n}`).join('\n')}\n\nDétail dans l’artefact external-links.json. Aucun lien n’a été remplacé automatiquement.\n`);
if (missing.length) process.exitCode=1;
