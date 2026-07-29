import { getArticleMeta } from '@/lib/articles';
import {
  getProposalCategoryLabel,
  PROPOSAL_TYPES,
  validateProposalPayload,
} from '@/lib/proposalSchema';
import {
  getClientIp,
  getProposalRatelimit,
  getProposalRedis,
  getProposalResend,
  getProposalSender,
  hashRateLimitIdentifier,
} from '@/lib/server/proposalServices';
import {
  isAllowedProposalOrigin,
  readLimitedJson,
} from '@/lib/server/proposalRequest';
import { SITE_URL } from '@/lib/site';

export const runtime = 'nodejs';

const RECIPIENT = 'contact.sciencemaison@gmail.com';
const RESPONSE_HEADERS = {
  'Cache-Control': 'no-store, max-age=0',
  Pragma: 'no-cache',
  'X-Content-Type-Options': 'nosniff',
};

function json(data, status = 200, headers = {}) {
  return Response.json(data, {
    status,
    headers: { ...RESPONSE_HEADERS, ...headers },
  });
}

function safeSubjectPart(value, maxLength = 150) {
  return value.replace(/[\r\n\u0000-\u001f\u007f-\u009f]/g, ' ').trim().slice(0, maxLength);
}

function buildEmail({ data, article }) {
  const kind = data.requestType === 'correction' ? 'Correction' : 'Proposition';
  const articleUrl = article ? `${SITE_URL}/articles/${article.slug}` : null;
  const subjectContext = article ? `${safeSubjectPart(article.title, 80)} — ` : '';
  const subject = `[Chimie Maison] ${kind} — ${subjectContext}${safeSubjectPart(data.title)}`.slice(
    0,
    220,
  );

  const lines = [
    `Type : ${PROPOSAL_TYPES[data.requestType]}`,
    `Nom ou pseudonyme : ${data.name}`,
    `Catégorie : ${getProposalCategoryLabel(data.category)}`,
    `Titre : ${data.title}`,
  ];

  if (article) {
    lines.push(`Article : ${article.title}`, `Adresse : ${articleUrl}`);
  }

  lines.push('', 'Contenu :', data.message, '', `Identifiant : ${data.submissionId}`);

  return { subject, text: lines.join('\n') };
}

export async function POST(request) {
  const contentType =
    request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() || '';
  if (contentType !== 'application/json') {
    return json(
      { ok: false, message: 'Seul le formulaire sans pièce jointe est accepté.' },
      415,
    );
  }

  if (!isAllowedProposalOrigin(request)) {
    return json({ ok: false, message: 'Cette demande ne peut pas être acceptée.' }, 403);
  }

  let payload;
  try {
    payload = await readLimitedJson(request);
  } catch {
    return json({ ok: false, message: 'Le formulaire envoyé est invalide.' }, 400);
  }

  const validation = validateProposalPayload(payload);
  if (!validation.ok) {
    return json(
      {
        ok: false,
        message: 'Vérifiez les champs signalés.',
        errors: validation.errors,
      },
      400,
    );
  }

  if (validation.bot) {
    return json({ ok: true, message: 'Votre message a bien été transmis.' });
  }

  const data = validation.data;
  const article = data.requestType === 'correction' ? getArticleMeta(data.articleSlug) : null;

  if (data.requestType === 'correction' && !article) {
    return json(
      {
        ok: false,
        message: 'L’article choisi n’existe pas.',
        errors: { articleSlug: 'Choisissez un article existant.' },
      },
      400,
    );
  }

  const clientIp = getClientIp(request);
  if (!clientIp) {
    return json({ ok: false, message: 'Cette demande ne peut pas être traitée.' }, 400);
  }

  let redis;
  let idempotencyKey;

  try {
    redis = getProposalRedis();
    idempotencyKey = `chimie-maison:propositions:id:${data.submissionId}`;

    if (await redis.get(idempotencyKey)) {
      return json({ ok: true, message: 'Votre message a bien été transmis.' });
    }

    const rateIdentifier = hashRateLimitIdentifier(clientIp);
    const rate = await getProposalRatelimit().limit(rateIdentifier);
    if (!rate.success) {
      const retryAfter = Math.max(1, Math.ceil((rate.reset - Date.now()) / 1000));
      return json(
        {
          ok: false,
          message:
            'La limite de trois envois sur 24 heures est atteinte. Vous pourrez réessayer plus tard.',
        },
        429,
        { 'Retry-After': String(retryAfter) },
      );
    }

    const reserved = await redis.set(idempotencyKey, 'reserved', { nx: true, ex: 86_400 });
    if (!reserved) {
      return json({ ok: true, message: 'Votre message a bien été transmis.' });
    }

    const email = buildEmail({ data, article });
    const { error } = await getProposalResend().emails.send(
      {
        from: getProposalSender(),
        to: RECIPIENT,
        subject: email.subject,
        text: email.text,
      },
      { idempotencyKey: `chimie-maison-proposal-${data.submissionId}` },
    );

    if (error) throw new Error('PROPOSAL_EMAIL_SEND_FAILED');

    await redis.set(idempotencyKey, 'sent', { ex: 86_400 });
    return json({ ok: true, message: 'Votre message a bien été transmis.' });
  } catch (error) {
    if (redis && idempotencyKey) {
      try {
        await redis.del(idempotencyKey);
      } catch {
        // La réponse reste fermée même si le nettoyage du verrou échoue.
      }
    }
    console.error(
      'Échec du formulaire de propositions :',
      error instanceof Error ? error.message : 'UNKNOWN_ERROR',
    );
    return json(
      {
        ok: false,
        message:
          'Le service d’envoi est momentanément indisponible. Réessayez dans quelques minutes.',
      },
      503,
    );
  }
}
