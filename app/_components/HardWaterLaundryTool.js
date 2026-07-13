'use client';

import { useMemo, useState } from 'react';

export default function HardWaterLaundryTool() {
  const [hardness, setHardness] = useState(30);
  const [temperature, setTemperature] = useState(40);
  const [soapDose, setSoapDose] = useState(20);

  const result = useMemo(() => {
    const h = Number(hardness);
    const t = Number(temperature);
    let level = 'low';
    let label = 'Risque faible';
    let message = "Votre eau est plutôt douce : une lessive au savon a plus de chances de rester efficace, à condition de bien rincer.";
    if (h >= 15 && h < 30) {
      level = 'medium';
      label = 'Risque modéré';
      message = "Une partie du savon peut être capturée par Ca²⁺/Mg²⁺. Un adjuvant alcalin ou séquestrant devient utile selon la recette.";
    }
    if (h >= 30) {
      level = 'high';
      label = 'Risque élevé';
      message = "L'eau dure peut consommer une part importante du savon en savon calcaire. La recette doit être adaptée, sinon dépôt et encrassement sont probables.";
    }
    const coldPenalty = t < 30 ? " Le cycle froid accentue le problème : dissolution du savon plus lente et risque de dépôt plus élevé." : '';
    const doseWarning = soapDose > 35 ? " Attention : surdoser le savon peut augmenter les dépôts si la dureté n'est pas maîtrisée." : '';
    return { level, label, message: message + coldPenalty + doseWarning };
  }, [hardness, temperature, soapDose]);

  return (
    <div className="tool-card">
      <div className="tool-grid">
        <label>
          Dureté de l'eau <strong>{hardness} °f</strong>
          <input type="range" min="0" max="50" value={hardness} onChange={(e) => setHardness(e.target.value)} />
        </label>
        <label>
          Température de lavage <strong>{temperature} °C</strong>
          <input type="range" min="20" max="90" step="10" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
        </label>
        <label>
          Savon par litre <strong>{soapDose} g/L</strong>
          <input type="range" min="5" max="50" step="5" value={soapDose} onChange={(e) => setSoapDose(e.target.value)} />
        </label>
      </div>
      <div className={`tool-result ${result.level}`}>
        <div className="tool-result-label">{result.label}</div>
        <p>{result.message}</p>
      </div>
      <p className="tool-disclaimer">Outil pédagogique : il ne remplace pas un essai réel, car la formule, le textile, la machine et le rinçage changent le résultat.</p>
    </div>
  );
}
