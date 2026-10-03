import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { mediaInventory } from './media-inventory.mjs';

const root = process.cwd();
const rows = [];
for (const item of mediaInventory(root)) {
  try {
    const file = path.resolve(root, 'public', `.${item.url}`);
    if (!file.startsWith(path.join(root, 'public', 'images') + path.sep)) throw new Error('Chemin hors de public/images');
    const bytes = await fs.readFile(file);
    if (!bytes.length) throw new Error('Fichier vide');
    if (bytes.subarray(0, 128).toString().startsWith('version https://git-lfs.github.com/spec/')) {
      throw new Error('Pointeur Git LFS : les octets de l’image sont absents');
    }
    const picture = sharp(bytes, { failOn: 'error' });
    const { width, height } = await picture.metadata();
    if (!width || !height) throw new Error('Dimensions absentes');
    // Le décodage complet repère aussi les fichiers tronqués ayant un en-tête valide.
    await picture.stats();
    rows.push({ ...item, ok: true, bytes: bytes.length, width, height });
  } catch (error) {
    rows.push({ ...item, ok: false, error: error.message });
  }
}
await fs.mkdir('reports', { recursive: true });
await fs.writeFile('reports/media-local.json', JSON.stringify(rows, null, 2) + '\n');
const failures = rows.filter(row => !row.ok);
for (const row of failures) console.error(`${row.url} — ${row.error} (${row.files.join(', ')})`);
console.log(`${failures.length ? 'FAIL' : 'PASS'} — ${rows.length} images locales contrôlées, ${failures.length} erreur(s).`);
process.exitCode = failures.length ? 1 : 0;
