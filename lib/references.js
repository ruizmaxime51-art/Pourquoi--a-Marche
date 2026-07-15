// ─────────────────────────────────────────────────────────────
// SYSTÈME CENTRALISÉ DES SOURCES SCIENTIFIQUES
//
// Toutes les références sont regroupées ici, une seule fois.
// Une même source peut être citée dans plusieurs notions.
//
// Dans un article markdown :
//   {{ref:libretexts-sapo}}   → insère un renvoi numéroté [n]
//   {{references}}            → insère la bibliographie complète
//                               (uniquement les sources citées dans l'article)
//
// Vérification : tester les URL périodiquement (elles peuvent changer).
// ─────────────────────────────────────────────────────────────

export const references = {
  'libretexts-sapo': {
    titre: 'Base-promoted ester hydrolysis (saponification)',
    editeur: 'LibreTexts Chemistry',
    note: 'Mécanisme d\'addition-élimination, intermédiaire tétraédrique, consommation d\'un équivalent d\'hydroxyde.',
    url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry',
  },
  'moc-sapo': {
    titre: 'Saponification of Esters',
    editeur: 'Master Organic Chemistry',
    note: 'Valeurs de pKa (acide carboxylique ≈ 4-5, alcool ≈ 16-18) et caractère irréversible.',
    url: 'https://www.masterorganicchemistry.com/',
  },
  'dunn-superfat': {
    titre: 'Scientific Soapmaking — étude sur le surgraissage',
    editeur: 'Kevin M. Dunn',
    note: 'Étude RMN : le choix de l\'huile de surgras à froid n\'est pas soutenu ; les insaturés saponifient plus lentement.',
    url: 'https://www.scientificsoapmaking.com/',
  },
  'sciencedirect-sap': {
    titre: 'Saponification Value — an overview',
    editeur: 'ScienceDirect Topics',
    note: 'Définition de l\'indice de saponification, lien avec la masse molaire des acides gras.',
    url: 'https://www.sciencedirect.com/topics/',
  },
  'fnwl-sap': {
    titre: 'Saponification Chart (SAP values)',
    editeur: 'From Nature With Love',
    note: 'Fourchettes d\'indices de saponification, facteurs de conversion KOH/NaOH.',
    url: 'https://www.fromnaturewithlove.com/',
  },
  'soapcalc-oils': {
    titre: 'Oil & Fatty Acid Properties',
    editeur: 'SoapCalc',
    note: 'Composition en acides gras, indices d\'iode, effet sur la dureté du savon.',
    url: 'https://soapcalc.net/',
  },
  'pubmed-soap': {
    titre: 'Cold Saponification and soap properties',
    editeur: 'NCBI / PMC',
    note: 'NaOH → savon dur, KOH → savon mou ; propriétés des savons.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/',
  },
  'jaocs-krafft': {
    titre: 'Solubility and Krafft point of soaps',
    editeur: 'Journal of the American Oil Chemists\' Society',
    note: 'Différence de solubilité et de point de Krafft entre savons de sodium et de potassium.',
    url: 'https://aocs.onlinelibrary.wiley.com/',
  },
  'iupac-surfactants': {
    titre: 'Surfactants and their classification',
    editeur: 'IUPAC / littérature de référence',
    note: 'Structure amphiphile, familles de tensioactifs, tension superficielle.',
    url: 'https://iupac.org/',
  },
  'cmc-overview': {
    titre: 'Critical Micelle Concentration — an overview',
    editeur: 'ScienceDirect Topics',
    note: 'Définition de la CMC, facteurs de variation (chaîne, charge, sel, température).',
    url: 'https://www.sciencedirect.com/topics/',
  },

  'cdc-bleach-acid': {
    titre: 'Chlorine gas toxicity from mixing bleach and acidic cleaning agents',
    editeur: 'CDC / MMWR',
    note: 'Mélange hypochlorite + acide : libération de chlore gazeux et risques respiratoires.',
    url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/00015111.htm',
  },
  'wa-doh-bleach-mixing': {
    titre: 'Dangers of mixing bleach with cleaners',
    editeur: 'Washington State Department of Health',
    note: 'Consignes pratiques : ne pas mélanger l’eau de javel avec des acides, de l’ammoniaque ou d’autres nettoyants.',
    url: 'https://doh.wa.gov/community-and-environment/contaminants/bleach-mixing-dangers',
  },
  'calcium-carbonate-acid': {
    titre: 'Removing calcium carbonate scale with citric acid',
    editeur: 'TeachEngineering / Rice University',
    note: 'Dissolution du carbonate de calcium par un acide avec libération de CO₂.',
    url: 'https://www.teachengineering.org/activities/view/rice2-2535-removing-scaling-sources-citric-acid',
  },
  'usda-botulism-ph': {
    titre: 'Clostridium botulinum & Botulism',
    editeur: 'USDA Food Safety and Inspection Service',
    note: 'C. botulinum ne se développe pas sous pH 4,6 ; importance du pH pour les aliments acidifiés.',
    url: 'https://www.fsis.usda.gov/food-safety/foodborne-illness-and-disease/illnesses-and-pathogens/botulism',
  },
  'lab-preservation-review': {
    titre: 'Role of Lactic Acid Bacteria in Food Preservation and Safety',
    editeur: 'Foods / PMC',
    note: 'Rôle des bactéries lactiques dans la biopréservation : acidification, compétition et inhibition de pathogènes.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9099756/',
  },
  'vegetable-fermentation-review': {
    titre: 'Advancing Insights into Probiotics during Vegetable Fermentation',
    editeur: 'PMC',
    note: 'Microbiologie des légumes fermentés, succession des populations et conditions de fermentation.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10606808/',
  },
  'kimchi-salt-pathogens': {
    titre: 'Combined effect of various salt concentrations and lactic acid fermentation on pathogens in kimchi',
    editeur: 'PMC',
    note: 'Effets combinés du sel, de la température et de la fermentation lactique sur la survie de pathogènes alimentaires.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8595448/',
  },

  'sourdough-starters-review': {
    titre: 'A review of sourdough starters: ecology, practices, and sensory quality',
    editeur: 'PeerJ / PMC',
    note: 'Écosystème du levain, succession microbienne, entretien du starter et facteurs influençant l’activité.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8117929/',
  },
  'sauerkraut-lab-fingerprint': {
    titre: 'DNA Fingerprinting of Lactic Acid Bacteria in Sauerkraut Fermentations',
    editeur: 'Applied and Environmental Microbiology / PMC',
    note: 'Identification des bactéries lactiques majeures dans la choucroute : Leuconostoc, Lactobacillus, Pediococcus.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2168044/',
  },
};

// Rendu de la bibliographie (uniquement les clés fournies, dans l'ordre d'apparition)
export function renderReferences(orderedKeys) {
  if (!orderedKeys || orderedKeys.length === 0) return '';
  const items = orderedKeys
    .map((key, i) => {
      const r = references[key];
      if (!r) return '';
      const link = r.url
        ? ` <a href="${r.url}" target="_blank" rel="noopener">${r.editeur}</a>`
        : ` ${r.editeur}`;
      return `<li id="ref-${key}"><strong>${r.titre}</strong> —${link}. ${r.note}</li>`;
    })
    .filter(Boolean)
    .join('\n');
  return `<div class="references">
<h2>Sources &amp; références</h2>
<ol>
${items}
</ol>
</div>`;
}
