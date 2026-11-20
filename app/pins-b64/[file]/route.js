// Temporaire : contrôle visuel des épingles (branche de préproduction uniquement).
import { GET as pin } from '../../pins/[file]/route';
export const dynamic = 'force-dynamic';
export async function GET(req, ctx) {
  const res = await pin(req, ctx);
  const buf = Buffer.from(await res.arrayBuffer());
  return new Response(buf.toString('base64'), { headers: { 'content-type': 'text/plain' } });
}
