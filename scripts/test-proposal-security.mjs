import assert from 'node:assert/strict';
import test from 'node:test';
import {
  PROPOSAL_LIMITS,
  validateProposalPayload,
} from '../lib/proposalSchema.js';
import {
  getClientIp,
  hashRateLimitIdentifier,
} from '../lib/server/proposalServices.js';

const NOW = 1_785_300_000_000;

function validPayload(overrides = {}) {
  return {
    requestType: 'suggestion',
    name: 'Lecteur prudent',
    category: 'entretien',
    title: 'Comprendre les traces sur le linge',
    message:
      'Je voudrais comprendre pourquoi certaines lessives laissent des traces blanches et comment adapter le dosage selon la dureté de l’eau.',
    articleSlug: '',
    website: '',
    startedAt: NOW - 12_000,
    submissionId: 'b7161557-47aa-4a6d-9e30-654b4a84bffd',
    ...overrides,
  };
}

test('accepte une proposition complète et normalise les espaces', () => {
  const result = validateProposalPayload(
    validPayload({ name: '  Lecteur   prudent  ' }),
    NOW,
  );
  assert.equal(result.ok, true);
  assert.equal(result.bot, false);
  assert.equal(result.data.name, 'Lecteur prudent');
});

test('accepte une correction liée à un slug syntaxiquement valide', () => {
  const result = validateProposalPayload(
    validPayload({
      requestType: 'correction',
      articleSlug: 'kimchi-classique-maison',
    }),
    NOW,
  );
  assert.equal(result.ok, true);
  assert.equal(result.data.articleSlug, 'kimchi-classique-maison');
});

test('rejette les champs supplémentaires et la pollution de prototype', () => {
  const result = validateProposalPayload(
    validPayload({ role: 'admin', __protoPollution: 'yes' }),
    NOW,
  );
  assert.equal(result.ok, false);
  assert.match(result.errors.form, /champs non autorisés/);
});

test('rejette les balises et protocoles exécutables', () => {
  const script = validateProposalPayload(
    validPayload({
      message:
        'Voici un message suffisamment long qui tente ensuite une injection <script>alert(1)</script> dans la page.',
    }),
    NOW,
  );
  const eventHandler = validateProposalPayload(
    validPayload({
      message:
        'Voici un message suffisamment long avec une fausse image et un gestionnaire onerror=alert(1) qui ne doit jamais passer.',
    }),
    NOW,
  );
  assert.equal(script.ok, false);
  assert.equal(eventHandler.ok, false);
});

test('rejette un envoi trop rapide et un identifiant non conforme', () => {
  const tooFast = validateProposalPayload(
    validPayload({ startedAt: NOW - PROPOSAL_LIMITS.minimumFillTimeMs + 50 }),
    NOW,
  );
  const invalidId = validateProposalPayload(
    validPayload({ submissionId: '../../duplicate' }),
    NOW,
  );
  assert.equal(tooFast.ok, false);
  assert.equal(invalidId.ok, false);
});

test('traite le champ invisible comme un robot sans transmettre de données', () => {
  const result = validateProposalPayload(validPayload({ website: 'https://spam.invalid' }), NOW);
  assert.deepEqual(result, { ok: true, bot: true, data: null });
});

test('refuse les messages trop longs', () => {
  const result = validateProposalPayload(
    validPayload({ message: 'a'.repeat(PROPOSAL_LIMITS.messageMax + 1) }),
    NOW,
  );
  assert.equal(result.ok, false);
  assert.ok(result.errors.message);
});

test('pseudonymise l’adresse IP avec un HMAC déterministe', () => {
  const previous = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = 'cle-factice-reservee-au-test';
  const first = hashRateLimitIdentifier('203.0.113.42');
  const second = hashRateLimitIdentifier('203.0.113.42');
  const other = hashRateLimitIdentifier('203.0.113.43');
  if (previous === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = previous;

  assert.equal(first, second);
  assert.notEqual(first, other);
  assert.equal(first.includes('203.0.113.42'), false);
  assert.match(first, /^[a-f0-9]{64}$/);
});

test('préfère l’adresse IP certifiée par Vercel et valide son format', () => {
  const trusted = getClientIp(
    new Request('https://www.chimiemaison.fr/api/propositions', {
      headers: {
        'x-vercel-forwarded-for': '203.0.113.42',
        'x-forwarded-for': '198.51.100.99',
      },
    }),
  );
  const invalid = getClientIp(
    new Request('https://www.chimiemaison.fr/api/propositions', {
      headers: {
        'x-vercel-forwarded-for': '<script>adresse-fausse</script>',
        'x-forwarded-for': '198.51.100.99',
      },
    }),
  );

  assert.equal(trusted, '203.0.113.42');
  assert.equal(invalid, '198.51.100.99');
});

test('refuse en production une adresse absente ou non certifiée par Vercel', () => {
  const previous = process.env.NODE_ENV;
  process.env.NODE_ENV = 'production';
  const result = getClientIp(
    new Request('https://www.chimiemaison.fr/api/propositions', {
      headers: {
        'x-vercel-forwarded-for': 'adresse-fausse',
        'x-forwarded-for': '198.51.100.99',
      },
    }),
  );
  if (previous === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = previous;

  assert.equal(result, null);
});
