// Vérifie au build que chaque image distante (Unsplash, Pexels, Wikimedia)
// citée dans le contenu répond bien. N'interrompt pas le build : les erreurs
// sont listées dans le journal (lignes « REMOTE FAIL ») pour être corrigées.
import fs from 'node:fs';
import path from 'node:path';

const pattern = /https:\/\/(?:images\.unsplash\.com|images\.pexels\.com|upload\.wikimedia\.org)\/[^\s"')\]]+/g;
const urls = new Map();
for (const file of fs.readdirSync('content')) {
  if (!file.endsWith('.md')) continue;
  const text = fs.readFileSync(path.join('content', file), 'utf8');
  for (const url of text.match(pattern) || []) {
    if (!urls.has(url)) urls.set(url, []);
    urls.get(url).push(file);
  }
}
let failures = 0;
await Promise.all([...urls].map(async ([url, files]) => {
  try {
    const response = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'chimiemaison-build-check' }, signal: AbortSignal.timeout(15000) });
    const type = response.headers.get('content-type') || '';
    if (!response.ok || !type.startsWith('image/')) throw new Error(`${response.status} ${type}`);
  } catch (error) {
    failures += 1;
    console.log(`REMOTE FAIL ${url} — ${error.message} (${files.join(', ')})`);
  }
}));
console.log(`${failures ? 'WARN' : 'PASS'} — ${urls.size} images distantes contrôlées, ${failures} en échec.`);
