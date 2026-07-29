'use client';

import { useEffect, useState } from 'react';
import {
  PROPOSAL_CATEGORIES,
  PROPOSAL_LIMITS,
  PROPOSAL_TYPES,
} from '@/lib/proposalSchema';

function createSecurityFields() {
  if (!globalThis.crypto?.randomUUID) return null;
  return {
    startedAt: Date.now(),
    submissionId: globalThis.crypto.randomUUID(),
  };
}

function categoryForArticle(articles, slug) {
  const article = articles.find((item) => item.slug === slug);
  const allowed = PROPOSAL_CATEGORIES.some((category) => category.value === article?.category);
  return allowed ? article.category : '';
}

export default function ProposalForm({ articles, initialArticle, initialType }) {
  const initialArticleSlug = initialArticle?.slug || '';
  const initialCategory = categoryForArticle(articles, initialArticleSlug);
  const [form, setForm] = useState({
    requestType: initialType,
    name: '',
    category: initialCategory,
    title: '',
    message: '',
    articleSlug: initialType === 'correction' ? initialArticleSlug : '',
    website: '',
  });
  const [security, setSecurity] = useState({ startedAt: 0, submissionId: '' });
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fields = createSecurityFields();
    if (fields) setSecurity(fields);
  }, []);

  const selectedArticle =
    articles.find((article) => article.slug === form.articleSlug) || null;

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field] && !current.form) return current;
      const next = { ...current };
      delete next[field];
      delete next.form;
      return next;
    });
    if (status !== 'idle') {
      setStatus('idle');
      setNotice('');
    }
  };

  const changeType = (requestType) => {
    setForm((current) => ({
      ...current,
      requestType,
      articleSlug:
        requestType === 'correction' ? current.articleSlug || initialArticleSlug : '',
      category:
        requestType === 'correction'
          ? current.category || categoryForArticle(articles, current.articleSlug || initialArticleSlug)
          : current.category,
    }));
    setErrors({});
    setStatus('idle');
    setNotice('');
  };

  const changeArticle = (articleSlug) => {
    setForm((current) => ({
      ...current,
      articleSlug,
      category: categoryForArticle(articles, articleSlug) || current.category,
    }));
    setErrors((current) => {
      const next = { ...current };
      delete next.articleSlug;
      return next;
    });
  };

  const resetAfterSuccess = () => {
    setForm((current) => ({
      ...current,
      name: '',
      title: '',
      message: '',
      website: '',
    }));
    const fields = createSecurityFields();
    if (fields) setSecurity(fields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    const currentSecurity =
      security.submissionId && security.startedAt ? security : createSecurityFields();
    if (!currentSecurity) {
      setStatus('error');
      setNotice('Votre navigateur ne permet pas de sécuriser cet envoi.');
      return;
    }

    setSecurity(currentSecurity);
    setStatus('submitting');
    setNotice('Envoi en cours…');

    try {
      const response = await fetch('/api/propositions', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...form, ...currentSecurity }),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || {});
        setStatus(response.status === 429 ? 'limited' : 'error');
        setNotice(result.message || 'Le message n’a pas pu être envoyé.');
        return;
      }

      setStatus('success');
      setNotice(result.message || 'Votre message a bien été transmis.');
      resetAfterSuccess();
    } catch {
      setStatus('error');
      setNotice('La connexion a été interrompue. Réessayez dans quelques minutes.');
    }
  };

  const requestTypeLabel =
    form.requestType === 'correction' ? 'Titre de la correction' : 'Titre du sujet proposé';
  const contentLabel =
    form.requestType === 'correction'
      ? 'Erreur constatée et correction proposée'
      : 'Décrivez votre idée d’article';

  return (
    <form className="proposal-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="proposal-type">
        <legend>Que souhaitez-vous envoyer&nbsp;?</legend>
        {Object.entries(PROPOSAL_TYPES).map(([value, label]) => (
          <label
            key={value}
            className={form.requestType === value ? 'is-selected' : undefined}
          >
            <input
              type="radio"
              name="requestType"
              value={value}
              checked={form.requestType === value}
              onChange={() => changeType(value)}
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>
      {errors.requestType && <p className="field-error">{errors.requestType}</p>}

      {form.requestType === 'correction' && (
        <label className="proposal-field">
          <span>Article concerné</span>
          <select
            value={form.articleSlug}
            onChange={(event) => changeArticle(event.target.value)}
            required
            aria-invalid={Boolean(errors.articleSlug)}
            aria-describedby={errors.articleSlug ? 'article-error' : undefined}
          >
            <option value="">Choisir un article</option>
            {articles.map((article) => (
              <option key={article.slug} value={article.slug}>
                {article.title}
              </option>
            ))}
          </select>
          {selectedArticle && (
            <small>L’article sera identifié automatiquement dans l’e-mail.</small>
          )}
          {errors.articleSlug && (
            <small className="field-error" id="article-error">
              {errors.articleSlug}
            </small>
          )}
        </label>
      )}

      <div className="proposal-grid">
        <label className="proposal-field">
          <span>Nom ou pseudonyme</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            autoComplete="name"
            minLength={PROPOSAL_LIMITS.nameMin}
            maxLength={PROPOSAL_LIMITS.nameMax}
            required
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small className="field-error">{errors.name}</small>}
        </label>

        <label className="proposal-field">
          <span>Catégorie</span>
          <select
            value={form.category}
            onChange={(event) => update('category', event.target.value)}
            required
            aria-invalid={Boolean(errors.category)}
          >
            <option value="">Choisir une catégorie</option>
            {PROPOSAL_CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          {errors.category && <small className="field-error">{errors.category}</small>}
        </label>
      </div>

      <label className="proposal-field">
        <span>{requestTypeLabel}</span>
        <input
          type="text"
          value={form.title}
          onChange={(event) => update('title', event.target.value)}
          minLength={PROPOSAL_LIMITS.titleMin}
          maxLength={PROPOSAL_LIMITS.titleMax}
          required
          aria-invalid={Boolean(errors.title)}
        />
        <small>
          {form.title.length}/{PROPOSAL_LIMITS.titleMax} caractères
        </small>
        {errors.title && <small className="field-error">{errors.title}</small>}
      </label>

      <label className="proposal-field">
        <span>{contentLabel}</span>
        <textarea
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          minLength={PROPOSAL_LIMITS.messageMin}
          maxLength={PROPOSAL_LIMITS.messageMax}
          rows={12}
          required
          aria-invalid={Boolean(errors.message)}
          placeholder={
            form.requestType === 'correction'
              ? 'Indiquez précisément le passage concerné, ce qui semble incorrect et, si possible, la correction ou la source proposée.'
              : 'Expliquez le sujet, les questions auxquelles l’article devrait répondre et ce qui vous serait utile.'
          }
        />
        <small>
          Minimum {PROPOSAL_LIMITS.messageMin} caractères · {form.message.length}/
          {PROPOSAL_LIMITS.messageMax}
        </small>
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>

      <label className="proposal-honeypot" aria-hidden="true">
        <span>Site internet</span>
        <input
          type="text"
          value={form.website}
          onChange={(event) => update('website', event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </label>

      <div className="proposal-privacy">
        <strong>Envoi privé, sans publication automatique</strong>
        <p>
          Aucun fichier ni aucune photo ne peut être joint. Votre message est envoyé à Chimie
          Maison pour examen et n’apparaît jamais automatiquement sur le site. La limite est de
          trois envois sur 24&nbsp;heures.
        </p>
      </div>

      {(errors.form || notice) && (
        <div
          className={`proposal-notice is-${status}`}
          role={status === 'error' || status === 'limited' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {errors.form || notice}
        </div>
      )}

      <button
        type="submit"
        className="proposal-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer à Chimie Maison'}
      </button>
    </form>
  );
}
