export const PROPOSAL_TYPES = Object.freeze({
  suggestion: 'Proposer un nouveau sujet',
  correction: 'Signaler une erreur ou demander une correction',
});

export const PROPOSAL_CATEGORIES = Object.freeze([
  { value: 'cosmetique', label: 'Cosmétique et savon' },
  { value: 'entretien', label: 'Entretien de la maison' },
  { value: 'fermentation', label: 'Fermentation' },
  { value: 'conservation', label: 'Conservation alimentaire' },
  { value: 'comprendre', label: 'Comprendre la chimie' },
  { value: 'bien-sequiper', label: 'Matériel et équipement' },
  { value: 'outils', label: 'Outils et calculateurs' },
  { value: 'autre', label: 'Autre' },
]);

export const PROPOSAL_LIMITS = Object.freeze({
  nameMin: 2,
  nameMax: 80,
  titleMin: 8,
  titleMax: 150,
  messageMin: 50,
  messageMax: 8000,
  requestBytesMax: 20_000,
  minimumFillTimeMs: 2500,
  maximumFillTimeMs: 2 * 60 * 60 * 1000,
});

export const PROPOSAL_FIELDS = Object.freeze([
  'requestType',
  'name',
  'category',
  'title',
  'message',
  'articleSlug',
  'website',
  'startedAt',
  'submissionId',
]);

const CATEGORY_VALUES = new Set(PROPOSAL_CATEGORIES.map(({ value }) => value));
const TYPE_VALUES = new Set(Object.keys(PROPOSAL_TYPES));
const HEADER_CONTROL_CHARACTERS = /[\u0000-\u001f\u007f-\u009f]/;
const BODY_CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/;
const DANGEROUS_MARKUP =
  /<\s*\/?\s*(?:script|iframe|object|embed|svg|math|style|link|meta)\b|(?:java|vb)script\s*:|data\s*:\s*text\/html|on(?:error|load|click|mouseover|focus)\s*=/i;
const ARTICLE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const UUID_V4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isPlainObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function normalizeSingleLine(value) {
  if (typeof value !== 'string') return null;
  const normalized = value.normalize('NFKC').trim().replace(/\s+/g, ' ');
  if (HEADER_CONTROL_CHARACTERS.test(normalized)) return null;
  return normalized;
}

function normalizeMessage(value) {
  if (typeof value !== 'string') return null;
  const normalized = value
    .normalize('NFKC')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .trim();
  if (BODY_CONTROL_CHARACTERS.test(normalized)) return null;
  return normalized;
}

function hasExpectedFields(payload) {
  const keys = Object.keys(payload);
  return (
    keys.length === PROPOSAL_FIELDS.length &&
    keys.every((key) => PROPOSAL_FIELDS.includes(key))
  );
}

function addError(errors, field, message) {
  if (!errors[field]) errors[field] = message;
}

export function validateProposalPayload(payload, now = Date.now()) {
  if (!isPlainObject(payload) || !hasExpectedFields(payload)) {
    return {
      ok: false,
      errors: { form: 'Le formulaire envoyé est incomplet ou contient des champs non autorisés.' },
    };
  }

  const website = normalizeSingleLine(payload.website);
  if (website === null || website.length > 200) {
    return { ok: false, errors: { form: 'Le formulaire envoyé est invalide.' } };
  }

  // Un robot remplit souvent ce champ invisible. Une fausse réussite ne lui révèle pas le piège.
  if (website !== '') {
    return { ok: true, bot: true, data: null };
  }

  const errors = {};
  const requestType = normalizeSingleLine(payload.requestType);
  const name = normalizeSingleLine(payload.name);
  const category = normalizeSingleLine(payload.category);
  const title = normalizeSingleLine(payload.title);
  const message = normalizeMessage(payload.message);
  const articleSlug = normalizeSingleLine(payload.articleSlug);

  if (!requestType || !TYPE_VALUES.has(requestType)) {
    addError(errors, 'requestType', 'Choisissez le type de demande.');
  }

  if (!name || name.length < PROPOSAL_LIMITS.nameMin || name.length > PROPOSAL_LIMITS.nameMax) {
    addError(
      errors,
      'name',
      `Indiquez un nom ou pseudonyme de ${PROPOSAL_LIMITS.nameMin} à ${PROPOSAL_LIMITS.nameMax} caractères.`,
    );
  }

  if (!category || !CATEGORY_VALUES.has(category)) {
    addError(errors, 'category', 'Choisissez une catégorie dans la liste.');
  }

  if (
    !title ||
    title.length < PROPOSAL_LIMITS.titleMin ||
    title.length > PROPOSAL_LIMITS.titleMax
  ) {
    addError(
      errors,
      'title',
      `Le titre doit contenir entre ${PROPOSAL_LIMITS.titleMin} et ${PROPOSAL_LIMITS.titleMax} caractères.`,
    );
  }

  if (
    !message ||
    message.length < PROPOSAL_LIMITS.messageMin ||
    message.length > PROPOSAL_LIMITS.messageMax
  ) {
    addError(
      errors,
      'message',
      `Le contenu doit contenir entre ${PROPOSAL_LIMITS.messageMin} et ${PROPOSAL_LIMITS.messageMax} caractères.`,
    );
  }

  if (requestType === 'correction') {
    if (!articleSlug || !ARTICLE_SLUG.test(articleSlug)) {
      addError(errors, 'articleSlug', 'Choisissez l’article concerné.');
    }
  } else if (articleSlug !== '') {
    addError(errors, 'articleSlug', 'Aucun article ne doit être joint à une proposition de sujet.');
  }

  if (
    (title && DANGEROUS_MARKUP.test(title)) ||
    (message && DANGEROUS_MARKUP.test(message)) ||
    (name && DANGEROUS_MARKUP.test(name))
  ) {
    addError(errors, 'form', 'Le message contient du code ou une balise qui ne peut pas être accepté.');
  }

  if (typeof payload.startedAt !== 'number' || !Number.isFinite(payload.startedAt)) {
    addError(errors, 'form', 'Le formulaire envoyé est invalide.');
  } else {
    const elapsed = now - payload.startedAt;
    if (
      elapsed < PROPOSAL_LIMITS.minimumFillTimeMs ||
      elapsed > PROPOSAL_LIMITS.maximumFillTimeMs
    ) {
      addError(errors, 'form', 'Rechargez la page puis complétez de nouveau le formulaire.');
    }
  }

  if (typeof payload.submissionId !== 'string' || !UUID_V4.test(payload.submissionId)) {
    addError(errors, 'form', 'Le formulaire envoyé est invalide.');
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    bot: false,
    data: {
      requestType,
      name,
      category,
      title,
      message,
      articleSlug,
      submissionId: payload.submissionId.toLowerCase(),
    },
  };
}

export function getProposalCategoryLabel(value) {
  return PROPOSAL_CATEGORIES.find((category) => category.value === value)?.label || 'Autre';
}
