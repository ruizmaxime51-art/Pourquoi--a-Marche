import { ImageResponse } from 'next/og';
import { getAllArticlesMeta } from '@/lib/articles';
import { categories } from '@/lib/categories';
import { pins, tableaux, tableauDe } from '@/lib/pins';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Épingles Pinterest 1000 × 1500 (format 2:3 recommandé par Pinterest),
// générées au build : /pins/<slug>.png
export const dynamic = 'force-static';
export const dynamicParams = false;

const W = 1000;
const H = 1500;
const INK = '#111111';
const HI = '#f7e36b';
const PAPER = '#ffffff';

export function generateStaticParams() {
  const slugs = new Set(getAllArticlesMeta().map((a) => a.slug));
  return Object.keys(pins).filter((s) => slugs.has(s)).map((s) => ({ file: `${s}.png` }));
}

async function loadGoogleFont(family, weight, text) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

// Photo distante (Unsplash) ou image locale (/images/*.webp, convertie en JPEG pour le moteur de rendu).
async function photoSrc(image) {
  const m = /^(https:\/\/images\.unsplash\.com\/photo-[\w-]+)/.exec(image || '');
  if (m) return `${m[1]}?fm=jpg&fit=crop&w=${W}&h=980&q=80`;
  if (image && image.startsWith('/')) {
    try {
      const buf = await fs.readFile(path.join(process.cwd(), 'public', image));
      const jpg = await sharp(buf).resize(W, 980, { fit: 'cover' }).jpeg({ quality: 82 }).toBuffer();
      return `data:image/jpeg;base64,${jpg.toString('base64')}`;
    } catch {
      return null;
    }
  }
  return null;
}

export async function GET(_req, { params }) {
  const { file } = await params;
  const slug = file.replace(/\.png$/, '');
  const pin = pins[slug];
  const meta = getAllArticlesMeta().find((a) => a.slug === slug);
  if (!pin || !meta) return new Response('Not found', { status: 404 });

  const t = tableauDe(slug, meta.category);
  const cat = (t && tableaux[t].nom) || categories[meta.category]?.title || 'Fait maison';
  const photo = await photoSrc(meta.image);
  const allText = `${pin.accroche}${pin.promesse}${pin.badge}${cat}chimiemaison.frRecettes expliquées et sourcées`;
  const [display, textBold] = await Promise.all([
    loadGoogleFont('Archivo Black', 400, allText),
    loadGoogleFont('Source Sans 3', 700, allText),
  ]);
  const fonts = [];
  if (display) fonts.push({ name: 'Display', data: display, weight: 400, style: 'normal' });
  if (textBold) fonts.push({ name: 'Text', data: textBold, weight: 700, style: 'normal' });

  const len = pin.accroche.length;
  const titleSize = len > 34 ? 76 : len > 26 ? 86 : 96;

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: 'flex', flexDirection: 'column', background: PAPER, fontFamily: 'Text' }}>
        {/* Haut : le message clé */}
        <div style={{ display: 'flex', flexDirection: 'column', background: HI, padding: '56px 64px 48px', borderBottom: `6px solid ${INK}` }}>
          <div style={{ display: 'flex', fontSize: 30, color: INK, marginBottom: 18 }}>{cat}</div>
          <div style={{ display: 'flex', fontFamily: 'Display', fontSize: titleSize, lineHeight: 1.04, color: INK, letterSpacing: -1 }}>
            {pin.accroche}
          </div>
          <div style={{ display: 'flex', fontSize: 40, lineHeight: 1.2, color: INK, marginTop: 22 }}>{pin.promesse}</div>
        </div>

        {/* Milieu : la photo */}
        <div style={{ display: 'flex', position: 'relative', flexGrow: 1, background: '#e9e9e6', overflow: 'hidden' }}>
          {photo ? (
            <img src={photo} width={W} height={980} style={{ width: W, height: '100%', objectFit: 'cover' }} />
          ) : null}
          <div
            style={{
              position: 'absolute', left: 48, bottom: 48, display: 'flex',
              background: PAPER, color: INK, border: `4px solid ${INK}`, borderRadius: 999,
              padding: '14px 30px', fontSize: 38,
            }}
          >
            {pin.badge}
          </div>
        </div>

        {/* Bas : la marque */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: INK, color: PAPER, padding: '0 64px', height: 110 }}>
          <div style={{ display: 'flex', fontFamily: 'Display', fontSize: 40 }}>chimiemaison.fr</div>
          <div style={{ display: 'flex', fontSize: 28, color: HI }}>Recettes expliquées et sourcées</div>
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: fonts.length ? fonts : undefined,
      headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
    },
  );
}
