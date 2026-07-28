'use client';

import { useMemo, useState } from 'react';
import {
  calculateSaponification,
  defaultSoapRecipe,
  oilPresets,
} from '@/lib/saponification';

const grams = new Intl.NumberFormat('fr-FR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const decimals = new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 1,
});

function cloneDefaultRecipe() {
  return defaultSoapRecipe.map((oil) => ({ ...oil }));
}

export default function SuperfatCalculator() {
  const [oils, setOils] = useState(cloneDefaultRecipe);
  const [alkali, setAlkali] = useState('naoh');
  const [superfat, setSuperfat] = useState(8);
  const [purity, setPurity] = useState(100);
  const [nextRow, setNextRow] = useState(4);

  const result = useMemo(
    () => calculateSaponification({ oils, alkali, superfat, purity }),
    [oils, alkali, superfat, purity],
  );

  function updateOil(id, field, value) {
    setOils((current) =>
      current.map((oil) => (oil.id === id ? { ...oil, [field]: value } : oil)),
    );
  }

  function addOil() {
    setOils((current) => [
      ...current,
      { id: `oil-${nextRow}`, oilId: 'sunflower', mass: 0, customSap: '' },
    ]);
    setNextRow((current) => current + 1);
  }

  function removeOil(id) {
    setOils((current) => current.filter((oil) => oil.id !== id));
  }

  function resetRecipe() {
    setOils(cloneDefaultRecipe());
    setAlkali('naoh');
    setSuperfat(8);
    setPurity(100);
    setNextRow(4);
  }

  const alkaliName = alkali === 'naoh' ? 'NaOH' : 'KOH';
  const hasResult = result.breakdown.length > 0;

  return (
    <div className="tool-card soap-calculator">
      <div className="tool-warning" role="note">
        <strong>Calcul chimique, pas validation du savon</strong>
        <p>
          La soude et la potasse sont corrosives. Ce résultat ne détecte ni une mauvaise matière
          première, ni une erreur de pesée, ni une séparation de pâte. Vérifiez la recette une
          seconde fois avant toute manipulation.
        </p>
      </div>

      <div className="tool-section">
        <div className="tool-section-heading">
          <span>1</span>
          <div>
            <h2>Choisissez la base</h2>
            <p>NaOH pour un savon solide ; KOH pour un savon mou ou liquide.</p>
          </div>
        </div>
        <fieldset className="tool-choice-grid">
          <legend className="sr-only">Type de base</legend>
          <label className={alkali === 'naoh' ? 'is-selected' : ''}>
            <input
              type="radio"
              name="alkali"
              value="naoh"
              checked={alkali === 'naoh'}
              onChange={(event) => setAlkali(event.target.value)}
            />
            <strong>Soude — NaOH</strong>
            <span>Savon solide</span>
          </label>
          <label className={alkali === 'koh' ? 'is-selected' : ''}>
            <input
              type="radio"
              name="alkali"
              value="koh"
              checked={alkali === 'koh'}
              onChange={(event) => setAlkali(event.target.value)}
            />
            <strong>Potasse — KOH</strong>
            <span>Savon mou ou liquide</span>
          </label>
        </fieldset>
      </div>

      <div className="tool-section">
        <div className="tool-section-heading">
          <span>2</span>
          <div>
            <h2>Ajoutez les corps gras</h2>
            <p>Les valeurs proposées sont les milieux de plages officielles, pas des analyses de lot.</p>
          </div>
        </div>

        <div className="soap-oil-list">
          {oils.map((oil, index) => {
            const preset = oilPresets.find((item) => item.id === oil.oilId) || oilPresets[0];
            return (
              <div className="soap-oil-row" key={oil.id}>
                <label>
                  <span>Corps gras {index + 1}</span>
                  <select
                    value={oil.oilId}
                    onChange={(event) => updateOil(oil.id, 'oilId', event.target.value)}
                  >
                    {oilPresets.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Masse en grammes</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    step="0.1"
                    inputMode="decimal"
                    value={oil.mass}
                    onChange={(event) => updateOil(oil.id, 'mass', event.target.value)}
                  />
                </label>
                {preset.id === 'custom' ? (
                  <label>
                    <span>Indice SAP KOH (mg/g)</span>
                    <input
                      type="number"
                      min="50"
                      max="350"
                      step="0.1"
                      inputMode="decimal"
                      value={oil.customSap}
                      onChange={(event) => updateOil(oil.id, 'customSap', event.target.value)}
                      placeholder="ex. 190"
                    />
                  </label>
                ) : (
                  <div className="soap-sap-note">
                    <span>SAP KOH utilisé</span>
                    <strong>{decimals.format(preset.sapKoh)} mg/g</strong>
                    <small>
                      plage {preset.sapMin}–{preset.sapMax} · {preset.source}
                    </small>
                  </div>
                )}
                <button
                  type="button"
                  className="tool-remove-button"
                  onClick={() => removeOil(oil.id)}
                  disabled={oils.length === 1}
                  aria-label={`Retirer le corps gras ${index + 1}`}
                >
                  Retirer
                </button>
              </div>
            );
          })}
        </div>

        <div className="tool-row-actions">
          <button type="button" className="tool-secondary-button" onClick={addOil}>
            + Ajouter un corps gras
          </button>
          <button type="button" className="tool-text-button" onClick={resetRecipe}>
            Reprendre l’exemple olive, coco et amande
          </button>
        </div>
      </div>

      <div className="tool-section tool-settings-grid">
        <div>
          <label className="tool-range-label" htmlFor="superfat">
            <span>3 · Surgraissage théorique</span>
            <strong>{superfat} %</strong>
          </label>
          <input
            id="superfat"
            type="range"
            min="0"
            max="20"
            step="1"
            value={superfat}
            onChange={(event) => setSuperfat(Number(event.target.value))}
          />
          <p>
            Le calcul applique une réduction de base de {superfat} %. Cela ne garantit pas que
            précisément {superfat} % d’huile restera intacte dans le savon fini.
          </p>
        </div>
        <div>
          <label htmlFor="alkali-purity">
            <span>4 · Pureté exacte de la base</span>
            <span className="input-with-unit">
              <input
                id="alkali-purity"
                type="number"
                min="85"
                max="100"
                step="0.1"
                inputMode="decimal"
                value={purity}
                onChange={(event) => setPurity(event.target.value)}
              />
              <strong>%</strong>
            </span>
          </label>
          <p>
            Si l’emballage indique seulement « ≥ 99 % » sans certificat d’analyse, laissez 100 % :
            ne compensez pas la pureté à la hausse sans valeur exacte.
          </p>
        </div>
      </div>

      <div className="soap-result" aria-live="polite">
        <div className="soap-result-main">
          <span>Quantité de {alkaliName} solide à peser</span>
          <strong>{hasResult ? `${grams.format(result.weighedAlkali)} g` : '—'}</strong>
          <p>
            pour {decimals.format(result.totalOils)} g de corps gras, avec {result.superfat} % de
            réduction et une pureté saisie de {decimals.format(result.purity)} %.
          </p>
        </div>

        {hasResult && (
          <>
            <div className="soap-result-facts">
              <div>
                <span>Base pure à 0 %</span>
                <strong>{grams.format(result.pureAtZero)} g</strong>
              </div>
              <div>
                <span>Base pure après réduction</span>
                <strong>{grams.format(result.pureAfterDiscount)} g</strong>
              </div>
              <div>
                <span>Fourchette liée aux valeurs SAP</span>
                <strong>
                  {grams.format(result.weighedRangeMin)}–{grams.format(result.weighedRangeMax)} g
                </strong>
              </div>
            </div>

            <div className="soap-breakdown-scroll" role="region" aria-label="Détail du calcul" tabIndex="0">
              <table className="soap-breakdown">
                <thead>
                  <tr>
                    <th>Corps gras</th>
                    <th>Masse</th>
                    <th>SAP KOH</th>
                    <th>{alkaliName} après réduction</th>
                  </tr>
                </thead>
                <tbody>
                  {result.breakdown.map((oil) => (
                    <tr key={oil.id}>
                      <td>{oil.name}</td>
                      <td>{decimals.format(oil.mass)} g</td>
                      <td>{decimals.format(oil.sapKoh)} mg/g</td>
                      <td>{grams.format(oil.alkaliAfterDiscount)} g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {result.warnings.length > 0 && (
          <ul className="tool-alert-list">
            {result.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        )}
      </div>

      <p className="tool-disclaimer">
        La fourchette affichée mesure uniquement la variabilité des plages SAP retenues. Elle ne
        couvre ni les erreurs de balance, ni la carbonatation ou l’humidité de la base, ni les
        additifs, ni la qualité du procédé. Ce calculateur n’accepte pas les lessives de soude ou
        de potasse déjà diluées.
      </p>
    </div>
  );
}

