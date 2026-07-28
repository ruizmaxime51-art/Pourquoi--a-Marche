'use client';

import { useMemo, useState } from 'react';
import {
  decideCleaner,
  previousProductOptions,
  soilOptions,
  surfaceOptions,
} from '@/lib/cleaningDecision';

function ChoiceGrid({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="decision-choice-grid">
      <legend className="sr-only">{legend}</legend>
      {options.map((option) => (
        <label key={option.id} className={value === option.id ? 'is-selected' : ''}>
          <input
            type="radio"
            name={name}
            value={option.id}
            checked={value === option.id}
            onChange={(event) => onChange(event.target.value)}
          />
          <strong>{option.label}</strong>
          <span>{option.detail}</span>
        </label>
      ))}
    </fieldset>
  );
}

export default function AcidBaseChooser() {
  const [soil, setSoil] = useState('limescale');
  const [surface, setSurface] = useState('glass-ceramic');
  const [previousProduct, setPreviousProduct] = useState('none');

  const recommendation = useMemo(
    () => decideCleaner({ soil, surface, previousProduct }),
    [soil, surface, previousProduct],
  );

  function reset() {
    setSoil('limescale');
    setSurface('glass-ceramic');
    setPreviousProduct('none');
  }

  return (
    <div className="tool-card soap-calculator decision-tool">
      <div className="tool-warning" role="note">
        <strong>La surface compte autant que la tache</strong>
        <p>
          Cet assistant choisit une famille de produit, pas une concentration universelle.
          L’étiquette du nettoyant et la notice du matériau restent prioritaires.
        </p>
      </div>

      <div className="tool-section">
        <div className="tool-section-heading">
          <span>1</span>
          <div>
            <h2>Qu’essayez-vous d’enlever ?</h2>
            <p>Le calcaire, la graisse et les protéines ne réagissent pas de la même façon.</p>
          </div>
        </div>
        <ChoiceGrid
          legend="Type de salissure"
          name="soil"
          options={soilOptions}
          value={soil}
          onChange={setSoil}
        />
      </div>

      <div className="tool-section">
        <div className="tool-section-heading">
          <span>2</span>
          <div>
            <h2>Sur quelle surface ?</h2>
            <p>Une bonne chimie sur le mauvais matériau peut tout de même causer des dégâts.</p>
          </div>
        </div>
        <ChoiceGrid
          legend="Type de surface"
          name="surface"
          options={surfaceOptions}
          value={surface}
          onChange={setSurface}
        />
      </div>

      <div className="tool-section">
        <div className="tool-section-heading">
          <span>3</span>
          <div>
            <h2>Un produit est-il déjà présent ?</h2>
            <p>Cette question bloque les mélanges dangereux avant toute recommandation.</p>
          </div>
        </div>
        <ChoiceGrid
          legend="Produit déjà présent"
          name="previous-product"
          options={previousProductOptions}
          value={previousProduct}
          onChange={setPreviousProduct}
        />
      </div>

      <section
        className={`decision-result is-${recommendation.family}`}
        aria-live="polite"
        aria-labelledby="decision-result-title"
      >
        <div className="decision-result-head">
          <span>{recommendation.eyebrow}</span>
          <h2 id="decision-result-title">{recommendation.title}</h2>
          <p>{recommendation.summary}</p>
        </div>
        <div className="decision-result-body">
          <div>
            <span>Produit ou famille à chercher</span>
            <strong>{recommendation.product}</strong>
          </div>
          <div>
            <span>À éviter</span>
            <strong>{recommendation.avoid}</strong>
          </div>
          <ol>
            {recommendation.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a href={recommendation.articleHref}>{recommendation.articleLabel} →</a>
        </div>
      </section>

      <button type="button" className="tool-text-button decision-reset" onClick={reset}>
        Reprendre le diagnostic
      </button>

      <p className="tool-disclaimer">
        Cet outil ne remplace pas la fiche de données de sécurité, l’étiquette du produit, la
        notice du fabricant de la surface ni un avis professionnel en cas d’exposition. Si un
        mélange provoque des vapeurs, une irritation ou une gêne respiratoire, quittez la zone,
        aérez sans vous exposer et demandez une aide médicale.
      </p>
    </div>
  );
}
