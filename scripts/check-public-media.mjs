// Contrôle en lecture seule après déploiement. 403/429 et réseau : résultat inconclusif.
import fs from 'node:fs/promises';
import sharp from 'sharp';
import { mediaInventory } from './media-inventory.mjs';

const args = process.argv.slice(2);
let base = 'https://www.chimiemaison.fr';
let article;
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === '--base' && args[i + 1]) base = args[++i];
  else if (args[i] === '--article' && args[i + 1]) article = args[++i];
  else throw new Error('Usage : npm run audit:media:public -- [--base URL] [--article slug]');
}
const origin = new URL(base);
if (!['http:', 'https:'].includes(origin.protocol) || origin.username || origin.password || origin.search || origin.hash || origin.pathname !== '/') {
  throw new Error('La base doit être une origine HTTP(S), sans identifiants, chemin ni paramètres.');
}
const rows = [];
const inventory = mediaInventory(process.cwd(), article);
for (const item of inventory) {
  const url = new URL(item.url, origin).href;
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'ChimieMaison-MediaCheck/1.0' } });
    const type = response.headers.get('content-type') || '';
    if (!response.ok) {
      await response.body?.cancel();
      rows.push({ path: item.url, status: response.status, result: [404, 410].includes(response.status) ? 'missing' : 'inconclusive' });
      continue;
    }
    if (!type.toLowerCase().startsWith('image/')) {
      await response.body?.cancel();
      rows.push({ path: item.url, status: response.status, type, result: 'invalid-content' });
      continue;
    }
    const data = Buffer.from(await response.arrayBuffer());
    await sharp(data, { failOn: 'error' }).stats();
    rows.push({ path: item.url, status: response.status, type, bytes: data.length, result: 'ok' });
  } catch (error) {
    rows.push({ path: item.url, result: error.name === 'TimeoutError' || error.cause || error.message === 'fetch failed' ? 'inconclusive' : 'invalid-content', error: error.message });
  }
}
await fs.mkdir('reports', { recursive: true });
await fs.writeFile('reports/media-public.json', JSON.stringify({ checkedAt: new Date().toISOString(), base: origin.href, article: article || null, rows }, null, 2) + '\n');
for (const row of rows) console.log(`${row.result.padEnd(15)} ${row.status || '—'} ${row.path}`);
console.log(`${rows.filter(row => row.result === 'ok').length}/${rows.length} images accessibles et décodables. Aucune publication effectuée.`);
// Un résultat inconclusif ne prouve pas une panne, mais ne permet pas de valider la diffusion.
process.exitCode = rows.every(row => row.result === 'ok') ? 0 : 1;
