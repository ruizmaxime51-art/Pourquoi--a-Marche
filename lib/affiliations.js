// ─────────────────────────────────────────────────────────────
// SYSTÈME CENTRALISÉ DES LIENS D'AFFILIATION
//
// Tous les liens d'affiliation sont regroupés ici, une seule fois.
// Pour modifier un lien : changer la valeur "url" ci-dessous —
// le changement se répercute AUTOMATIQUEMENT dans tous les articles
// qui utilisent ce produit.
//
// Pour insérer un produit dans un article markdown, écrire :
//   {{affil:balance}}              → une fiche produit (bloc CTA)
//   {{affil-inline:balance}}       → un lien simple dans le texte
//
// Vérification : parcourir cette liste tous les 3 mois et tester
// les liens (Amazon ne permet pas de détection automatique fiable).
// ─────────────────────────────────────────────────────────────

export const affiliations = {
  // — Cosmétique / savon —
  soude: {
    nom: 'Soude caustique SOLUP (NaOH)',
    descriptif: 'Le réactif de la saponification, en pureté contrôlée',
    reassurance: 'Expédié par Amazon',
    asin: 'B0DM1YZ1K6',
    url: 'https://www.amazon.fr/-/en/SOLUP-Caustic-Hydroxide-Cleaning-Degreasing/dp/B0DM1YZ1K6?linkCode=ll2&tag=maxscience06-21&linkId=d4123ea4095081d557b94ed82468cbd1&ref_=as_li_ss_tl',
  },
  balance: {
    nom: 'Balance de précision 0,1 g / 5 kg',
    descriptif: 'Le dosage qui ne pardonne pas',
    reassurance: 'Retours gratuits',
    asin: 'B0CMH96FTJ',
    url: 'https://www.amazon.fr/-/en/Waterproof-Precision-Washable-Stainless-Rechargeable/dp/B0CMH96FTJ?linkCode=ll2&tag=maxscience06-21&linkId=9d90d060797e8abe82176de2c7369a67&ref_=as_li_ss_tl',
  },
  thermometre: {
    nom: 'Thermomètre digital ThermoPro',
    descriptif: 'Pour suivre la température des huiles et de la soude',
    reassurance: 'Expédié par Amazon',
    asin: 'B01LXI5HYH',
    url: 'https://www.amazon.fr/-/en/ThermoPro-Instant-Digital-Thermometer-Beverages/dp/B01LXI5HYH?linkCode=ll2&tag=maxscience06-21&linkId=3e12615d5c9fd288808ae727c12bef03&ref_=as_li_ss_tl',
  },
  mixeur: {
    nom: 'Mixeur plongeant Amazon Basics',
    descriptif: 'Pour atteindre la trace en quelques minutes',
    reassurance: 'Expédié par Amazon',
    asin: 'B0DBTCKLKX',
    url: 'https://www.amazon.fr/Amazon-Basics-Multispeed-Blender-Included/dp/B0DBTCKLKX?linkCode=ll2&tag=maxscience06-21&linkId=7c8f8dedac636e88a2cf75591bbea113&ref_=as_li_ss_tl',
  },
  moule: {
    nom: 'Moule à savon en silicone',
    descriptif: 'Démoulage facile, format pain',
    reassurance: 'Expédié par Amazon',
    asin: 'B08S3G5RVH',
    url: 'https://www.amazon.fr/dp/B08S3G5RVH?linkCode=ll2&tag=maxscience06-21&linkId=50f426f5b45cec57dc827514741579d1&ref_=as_li_ss_tl',
  },

  // — Entretien —
  'bandelettes-ph': {
    nom: 'Bandelettes de pH universelles',
    descriptif: 'Pour vérifier l\'acidité de vos préparations',
    reassurance: 'Expédié par Amazon',
    asin: 'B079K71HJM',
    url: 'https://www.amazon.fr/Universal-pH-Test-Strips-Roll/dp/B079K71HJM?linkCode=ll2&tag=maxscience06-21&linkId=9e985d19e995714722739527a0691d9b&ref_=as_li_ss_tl',
  },
  'acide-citrique': {
    nom: 'Acide citrique Jacques Briochin',
    descriptif: 'Détartrant naturel et économique',
    reassurance: 'Expédié par Amazon',
    asin: 'B0D3HQKPXS',
    url: 'https://www.amazon.fr/JACQUES-BRIOCHIN-Citrique-Naturelle-Economique/dp/B0D3HQKPXS?linkCode=ll2&tag=maxscience06-21&linkId=244d0237491b3651901e13f868c2c0ed&ref_=as_li_ss_tl',
  },
  'cristaux-soude': {
    nom: 'Cristaux de soude St Marc',
    descriptif: 'Carbonate de sodium — dégraissant et adoucisseur d\'eau',
    reassurance: 'Expédié par Amazon',
    asin: 'B0D3DXLC2X',
    url: 'https://www.amazon.fr/St-Marc-Nettoyant-Multi-Usage-Naturelle/dp/B0D3DXLC2X?linkCode=ll2&tag=maxscience06-21&linkId=cd6411ddc7c8e31f5041af1f2c449bc4&ref_=as_li_ss_tl',
  },
  'flacon-spray': {
    nom: 'Flacon spray Delta Clean',
    descriptif: 'Rechargeable, pour vos nettoyants maison',
    reassurance: 'Expédié par Amazon',
    asin: 'B08DHYZW93',
    url: 'https://www.amazon.fr/Delta-Clean-Pulv%C3%A9risateur-Vaporisateur-Rechargeable/dp/B08DHYZW93?linkCode=ll2&tag=maxscience06-21&linkId=911b1dc17c018b0fc9f6dd04c7d1f83d&ref_=as_li_ss_tl',
  },

  // — Fermentation / Conservation —
  'kit-levain': {
    nom: 'Kit de démarrage levain Praknu',
    descriptif: 'Tout le nécessaire pour lancer son levain',
    reassurance: 'Expédié par Amazon',
    asin: 'B0FBX1C13Z',
    url: 'https://www.amazon.fr/Praknu-Kit-d%C3%A9marrage-Complet-d%C3%A9butants/dp/B0FBX1C13Z?linkCode=ll2&tag=maxscience06-21&linkId=0617d432b0592b417f012fe54efd8eeb&ref_=as_li_ss_tl',
  },
  'bocal-fermentation': {
    nom: 'Bocal de fermentation Diesisa 1 L',
    descriptif: 'Verre borosilicaté avec valve d\'aération',
    reassurance: 'Expédié par Amazon',
    asin: 'B0H158V3C4',
    url: 'https://www.amazon.fr/Diesisa-Borosilicat%C3%A9-Bocal-Fermentation-A%C3%A9rations/dp/B0H158V3C4?linkCode=ll2&tag=maxscience06-21&linkId=1e8f018d1187e889a0ce712844a8104c&ref_=as_li_ss_tl',
  },
  'poids-fermentation': {
    nom: 'Poids de fermentation Okllen (verre)',
    descriptif: 'Pour maintenir les légumes sous la saumure',
    reassurance: 'Expédié par Amazon',
    asin: 'B0BLTKGTPH',
    url: 'https://www.amazon.fr/Okllen-fermentation-ouverture-ramassage-lave-vaisselle/dp/B0BLTKGTPH?linkCode=ll2&tag=maxscience06-21&linkId=00ed55f78e9da4cb3823fc9f6d9e08d7&ref_=as_li_ss_tl',
  },
};

// Rendu d'une fiche produit complète (bloc CTA)
export function renderAffiliationBlock(key) {
  const a = affiliations[key];
  if (!a) return `<!-- affiliation inconnue: ${key} -->`;
  return `<div class="cta-block">
  <div class="cta-text"><strong>${a.nom}</strong><span>${a.descriptif}</span></div>
  <div class="cta-action">
    <a class="cta-button" href="${a.url}" target="_blank" rel="nofollow sponsored noopener">Voir le prix →</a>
    <span class="cta-reassurance">${a.reassurance}</span>
  </div>
</div>`;
}

// Rendu d'un lien inline simple
export function renderAffiliationInline(key) {
  const a = affiliations[key];
  if (!a) return `<!-- affiliation inconnue: ${key} -->`;
  return `<a href="${a.url}" target="_blank" rel="nofollow sponsored noopener">${a.nom}</a>`;
}
