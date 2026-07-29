import { createHmac } from 'node:crypto';
import { isIP } from 'node:net';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

let redisClient;
let proposalRatelimit;
let resendClient;

function getRedisCredentials() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL ||
    process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN ||
    process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error('PROPOSAL_REDIS_NOT_CONFIGURED');
  }

  return { url, token };
}

export function getProposalRedis() {
  if (!redisClient) {
    redisClient = new Redis(getRedisCredentials());
  }
  return redisClient;
}

export function getProposalRatelimit() {
  if (!proposalRatelimit) {
    proposalRatelimit = new Ratelimit({
      redis: getProposalRedis(),
      limiter: Ratelimit.slidingWindow(3, '24 h'),
      prefix: 'chimie-maison:propositions:rate',
      analytics: false,
    });
  }
  return proposalRatelimit;
}

export function getProposalResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('PROPOSAL_EMAIL_NOT_CONFIGURED');
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export function hashRateLimitIdentifier(clientIp) {
  const pepper = process.env.RATE_LIMIT_SECRET || process.env.RESEND_API_KEY;
  if (!pepper) throw new Error('PROPOSAL_RATE_SECRET_NOT_CONFIGURED');
  return createHmac('sha256', pepper)
    .update(`chimie-maison:proposal:${clientIp}`)
    .digest('hex');
}

export function getClientIp(request) {
  const vercelForwarded = request.headers.get('x-vercel-forwarded-for');
  if (vercelForwarded) {
    const candidate = vercelForwarded.split(',')[0].trim();
    if (isIP(candidate)) return candidate;
  }

  if (process.env.NODE_ENV !== 'production') {
    const localForwarded = request.headers.get('x-forwarded-for');
    if (localForwarded) {
      const candidate = localForwarded.split(',')[0].trim();
      if (isIP(candidate)) return candidate;
    }
    return '127.0.0.1';
  }

  return null;
}

export function getProposalSender() {
  const configuredDomain = process.env.RESEND_EMAIL_DOMAIN?.trim().toLowerCase();
  const domain =
    configuredDomain && /^[a-z0-9.-]+$/.test(configuredDomain)
      ? configuredDomain
      : 'chimiemaison.fr';
  return `Chimie Maison <formulaire@${domain}>`;
}
