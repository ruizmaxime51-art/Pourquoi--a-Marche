'use client';

import { useEffect, useState } from 'react';
import { formatQuantity } from '@/lib/quantities';

const FACTORS = [
  { value: 0.5, label: '½' },
  { value: 1, label: '×1' },
  { value: 2, label: '×2' },
  { value: 3, label: '×3' },
];

function readSaved(key) {
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((n) => Number.isInteger(n)) : [];
  } catch {
    return [];
  }
}

export default function RecipeCard({ fiche, slug, materiel = [] }) {
  const [factor, setFactor] = useState(1);
  const [done, setDone] = useState([]);
  const storageKey = `cm-etapes:${slug}:${fiche.id}`;

  useEffect(() => {
    setDone(readSaved(storageKey));
  }, [storageKey]);

  const toggleStep = (index) => {
    setDone((current) => {
      const next = current.includes(index) ? current.filter((n) => n !== index) : [...current, index];
      try { window.localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* stockage indisponible */ }
      return next;
    });
  };

  const resetSteps = () => {
    setDone([]);
    try { window.localStorage.removeItem(storageKey); } catch { /* stockage indisponible */ }
  };

  const total = fiche.etapes.length;
  const doneCount = done.filter((n) => n < total).length;
  const titleId = `${fiche.id}-titre`;

  return (
    <section className="recipe-card" id={fiche.id} aria-labelledby={titleId}>
      <div className="recipe-card-head">
        <div>
          {fiche.etiquette && <span className="recipe-card-kicker">{fiche.etiquette}</span>}
          <h3 id={titleId}>{fiche.titre}</h3>
          {fiche.resume && <p className="recipe-card-summary">{fiche.resume}</p>}
        </div>
        {fiche.reperes?.length > 0 && (
          <div className="recipe-facts">
            {fiche.reperes.map((item) => (
              <div className="recipe-fact" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.valeur}</span>
              </div>
            ))}
          </div>
        )}
        <div className="recipe-card-tools">
          {fiche.ajustable && (
            <div className="recipe-scaler" role="group" aria-label="Ajuster les quantités">
              <span>Quantités</span>
              {FACTORS.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={factor === item.value}
                  onClick={() => setFactor(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
          <button type="button" className="recipe-print-button" onClick={() => window.print()}>
            Imprimer la fiche
          </button>
        </div>
      </div>

      <h4>Ingrédients</h4>
      {factor !== 1 && (
        <p className="recipe-scale-note" role="status">
          Quantités multipliées par {String(factor).replace('.', ',')}. Les chiffres cités dans les
          étapes restent ceux de la recette de base.
        </p>
      )}
      <div className="recipe-table-scroll" role="region" aria-label={`Ingrédients : ${fiche.titre}`} tabIndex={0}>
        <table className="compare recipe-ingredients">
          <thead>
            <tr>
              <th>{fiche.colonne_nom || 'Ingrédient'}</th>
              <th>Quantité</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            {fiche.ingredients.map((ing, index) => (
              <tr key={`${ing.nom}-${index}`}>
                <td>{ing.nom}</td>
                <td className="recipe-qty">{formatQuantity(ing, factor)}</td>
                <td>{ing.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {materiel.length > 0 && (
        <>
          <h4>Matériel</h4>
          <ul className="recipe-tools">
            {materiel.map((item) => (
              <li key={item.nom}>
                <span>{item.nom}</span>
                {item.product && (
                  <a
                    href={item.product.url}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    data-cm-event="affiliate_click"
                    data-cm-target={item.product.key}
                  >
                    Voir sur Amazon
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="recipe-steps-head">
        <h4>Étapes</h4>
        <span className="recipe-progress" aria-live="polite">
          {doneCount > 0 ? `${doneCount} sur ${total} faite${doneCount > 1 ? 's' : ''}` : 'Cochez au fur et à mesure'}
          {doneCount > 0 && (
            <button type="button" className="tool-text-button" onClick={resetSteps}>Recommencer</button>
          )}
        </span>
      </div>
      <ol className="recipe-steps">
        {fiche.etapes.map((step, index) => {
          const isDone = done.includes(index);
          return (
            <li key={step.titre} className={isDone ? 'is-done' : undefined}>
              <button
                type="button"
                className="recipe-step-check"
                aria-pressed={isDone}
                aria-label={`Étape ${index + 1} faite : ${step.titre}`}
                onClick={() => toggleStep(index)}
              />
              <div className="recipe-step-body">
                <p>
                  <strong>{step.titre}.</strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: step.texte }} />
                </p>
                {step.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={step.image} alt={step.alt || ''} loading="lazy" decoding="async" />
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {fiche.note && (
        <p className="recipe-note">
          <strong>{fiche.note.titre}</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: fiche.note.texte }} />
        </p>
      )}
    </section>
  );
}
