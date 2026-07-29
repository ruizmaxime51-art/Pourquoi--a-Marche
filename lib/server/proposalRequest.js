import { SITE_URL } from '@/lib/site';
import { PROPOSAL_LIMITS } from '@/lib/proposalSchema';

function addVercelOrigin(origins, hostname) {
  if (!hostname) return;
  const normalized = hostname.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  if (/^[a-z0-9.-]+$/i.test(normalized)) origins.add(`https://${normalized}`);
}

export function getAllowedProposalOrigins() {
  const origins = new Set([SITE_URL, 'https://chimiemaison.fr']);
  addVercelOrigin(origins, process.env.VERCEL_URL);
  addVercelOrigin(origins, process.env.VERCEL_BRANCH_URL);
  addVercelOrigin(origins, process.env.VERCEL_PROJECT_PRODUCTION_URL);

  if (process.env.NODE_ENV !== 'production') {
    origins.add('http://localhost:3000');
    origins.add('http://127.0.0.1:3000');
  }

  return origins;
}

export function isAllowedProposalOrigin(request) {
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite === 'cross-site') return false;

  const origin = request.headers.get('origin');
  if (!origin) return false;

  try {
    return getAllowedProposalOrigins().has(new URL(origin).origin);
  } catch {
    return false;
  }
}

export async function readLimitedJson(request) {
  const declaredLength = Number(request.headers.get('content-length'));
  if (
    Number.isFinite(declaredLength) &&
    declaredLength > PROPOSAL_LIMITS.requestBytesMax
  ) {
    throw new Error('PROPOSAL_BODY_TOO_LARGE');
  }

  if (!request.body) throw new Error('PROPOSAL_BODY_MISSING');

  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > PROPOSAL_LIMITS.requestBytesMax) {
        await reader.cancel();
        throw new Error('PROPOSAL_BODY_TOO_LARGE');
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const text = new TextDecoder('utf-8', { fatal: true }).decode(body);
  return JSON.parse(text);
}
