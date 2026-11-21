// Contrôle visuel des épingles, uniquement sur les déploiements de préproduction.
import { GET as pin } from '../../pins/[file]/route';
export const dynamic = 'force-dynamic';
export async function GET(req, ctx) {
  if (process.env.VERCEL_ENV === 'production') return new Response('Not found', { status: 404 });
  const res = await pin(req, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  return new Response(buf.toString('base64'), { headers: { 'content-type': 'text/plain' } });
}
