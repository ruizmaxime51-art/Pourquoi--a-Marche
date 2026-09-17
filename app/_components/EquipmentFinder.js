'use client';

import { useState } from 'react';
import Link from 'next/link';

const uses = [['tous', 'Tout le matériel'], ['savon', 'Faire un savon'], ['fermentation', 'Fermenter'], ['entretien', 'Nettoyer']];
const guides = [
  { slug: 'quelle-balance-recettes-maison', title: 'Peser les ingrédients', uses: ['savon', 'fermentation', 'entretien'], criterion: 'Capacité, résolution et répétabilité selon les masses à peser.', existing: 'Votre balance peut suffire si elle convient aux quantités et si les pesées sont reproductibles.' },
  { slug: 'bocal-lacto-fermentation', title: 'Maintenir les légumes immergés', uses: ['fermentation'], criterion: 'Un contenant alimentaire, un poids adapté et une gestion du gaz.', existing: 'Vérifiez d’abord la fermeture, l’état et les dimensions du bocal que vous possédez.' },
  { slug: 'bandelettes-ph-ou-phmetre', title: 'Mesurer le pH', uses: ['fermentation', 'entretien'], criterion: 'Plage, étalonnage, entretien et nature de l’échantillon.', existing: 'Un appareil ne valide pas à lui seul une recette ou la sécurité d’un aliment.' },
  { slug: 'flacon-nettoyant-maison', title: 'Stocker un nettoyant', uses: ['entretien'], criterion: 'Compatibilité du matériau, fermeture et étiquetage.', existing: 'Écartez les bouteilles alimentaires et vérifiez la compatibilité du récipient avec la préparation.' },
  { slug: 'gants-lunettes-risque-chimique', title: 'Protéger les mains et les yeux', uses: ['savon', 'entretien'], criterion: 'Protection adaptée au produit, à sa concentration et à la durée du contact.', existing: 'Le marquage et l’état des protections comptent davantage que l’apparence.' },
  { slug: 'materiel-savon-maison', title: 'Préparer son atelier savon', uses: ['savon'], criterion: 'Matériel dédié, récipients compatibles et pesées maîtrisées.', existing: 'Une liste par fonction pour identifier ce qui manque réellement.' },
];

export default function EquipmentFinder() {
  const [use, setUse] = useState('tous');
  const selected = guides.filter((guide) => use === 'tous' || guide.uses.includes(use));
  return <section className="equipment-finder wrap-wide" aria-labelledby="equipment-title">
    <h2 id="equipment-title">De quel matériel avez-vous besoin ?</h2>
    <div className="filter-buttons" role="group" aria-label="Filtrer les guides par usage">{uses.map(([value, label]) => <button type="button" key={value} aria-pressed={use === value} aria-controls="equipment-results" onClick={() => setUse(value)}>{label}</button>)}</div>
    <p className="result-count" role="status">{selected.length} guides pour choisir selon votre usage</p>
    <div id="equipment-results" className="equipment-grid">{selected.map((guide) => <article className="equipment-card" key={guide.slug}><h3>{guide.title}</h3><p>{guide.criterion}</p><p className="equipment-existing">{guide.existing}</p><Link className="text-link" href={`/articles/${guide.slug}`} data-cm-event="equipment_guide_click" data-cm-target={guide.slug}>Comparer les critères et les options →</Link></article>)}</div>
  </section>;
}
