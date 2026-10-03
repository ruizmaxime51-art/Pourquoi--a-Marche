import fs from 'node:fs';
import path from 'node:path';

// Seulement les références littérales utilisées par le contenu et les composants.
// Les tables de dimensions peuvent contenir d'anciens visuels inutilisés.
export function mediaIn(text) {
  return [...new Set(text.match(/\/images\/[a-zA-Z0-9_./-]+\.(?:webp|png|jpe?g|gif|svg|avif)\b/g) || [])];
}

export function mediaInventory(root = process.cwd(), article) {
  const sources = new Map();
  function read(file) {
    for (const url of mediaIn(fs.readFileSync(path.join(root, file), 'utf8'))) {
      if (!sources.has(url)) sources.set(url, []);
      sources.get(url).push(file);
    }
  }
  function walk(dir) {
    for (const item of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const name = path.join(dir, item.name);
      if (item.isDirectory()) walk(name);
      else if (/\.(md|js|jsx|ts|tsx|css)$/.test(name) && name !== 'lib/imageDimensions.js') read(name);
    }
  }
  if (article) {
    if (!/^[a-z0-9-]+$/.test(article)) throw new Error('Slug invalide');
    read(`content/${article}.md`);
  } else {
    for (const dir of ['content', 'app', 'lib']) walk(dir);
  }
  return [...sources].sort(([a], [b]) => a.localeCompare(b)).map(([url, files]) => ({ url, files }));
}
