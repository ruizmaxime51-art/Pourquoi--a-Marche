import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const project = process.cwd();
const realImage = await fs.readFile('public/images/crufiture-hero-photo.webp');

async function fixture() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'cm-media-'));
  for (const dir of ['content', 'app', 'lib', 'public/images']) await fs.mkdir(path.join(root, dir), { recursive: true });
  await fs.writeFile(path.join(root, 'content/example.md'), 'image: /images/example.webp\n');
  return root;
}

test('le garde-fou bloque un fichier absent, un pointeur LFS et une fausse image', async () => {
  const root = await fixture();
  const check = () => run(process.execPath, [path.join(project, 'scripts/audit-media.mjs')], { cwd: root });
  try {
    await assert.rejects(check(), error => error.code === 1);
    await fs.writeFile(path.join(root, 'public/images/example.webp'), 'version https://git-lfs.github.com/spec/v1\noid sha256:abc');
    await assert.rejects(check(), error => error.code === 1 && error.stderr.includes('Git LFS'));
    await fs.writeFile(path.join(root, 'public/images/example.webp'), '<html>Page introuvable</html>');
    await assert.rejects(check(), error => error.code === 1);
    await fs.writeFile(path.join(root, 'public/images/example.webp'), realImage);
    assert.match((await check()).stdout, /PASS/);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test('le contrôle public distingue image valide, HTML trompeur, 404 et accès refusé', async () => {
  const root = await fixture();
  let status = 200;
  let type = 'image/webp';
  let data = realImage;
  const server = http.createServer((request, response) => { response.writeHead(status, { 'Content-Type': type }); response.end(data); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}`;
  const check = () => run(process.execPath, [path.join(project, 'scripts/check-public-media.mjs'), '--base', url, '--article', 'example'], { cwd: root });
  const result = async () => JSON.parse(await fs.readFile(path.join(root, 'reports/media-public.json'), 'utf8')).rows[0].result;
  try {
    await check(); assert.equal(await result(), 'ok');
    type = 'text/html'; data = Buffer.from('<html>Not found</html>');
    await assert.rejects(check()); assert.equal(await result(), 'invalid-content');
    type = 'image/webp';
    await assert.rejects(check()); assert.equal(await result(), 'invalid-content');
    for (const [code, expected] of [[404, 'missing'], [403, 'inconclusive'], [429, 'inconclusive']]) {
      status = code;
      await assert.rejects(check()); assert.equal(await result(), expected);
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
    await fs.rm(root, { recursive: true, force: true });
  }
});
