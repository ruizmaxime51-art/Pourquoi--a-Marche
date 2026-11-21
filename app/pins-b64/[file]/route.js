// Contrôle visuel des épingles, uniquement sur les déploiements de préproduction.
export const dynamic = 'force-dynamic';
export async function GET(req, { params }) {
  if (process.env.VERCEL_ENV === 'production') return new Response('Not found', { status: 404 });
  const { file } = await params;
  const res = await fetch(new URL(`/pins/${file}`, req.url));
  const buf = Buffer.from(await res.arrayBuffer());
  return new Response(buf.toString('base64'), { headers: { 'content-type': 'text/plain' } });
}
