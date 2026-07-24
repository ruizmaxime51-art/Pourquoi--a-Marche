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
  'nchfp-fermentation-containers': {
    titre: 'Suitable Containers, Covers, and Weights for Fermenting Food',
    editeur: 'National Center for Home Food Preservation / University of Georgia',
    note: 'Choix de contenants alimentaires, nettoyage et nécessité de maintenir les légumes sous la saumure avec un poids adapté.',
    url: 'https://nchfp.uga.edu/how/ferment/general-information-on-fermenting/suitable-containers-covers-and-weights-for-fermenting-food',
  },
  'umn-home-fermentation': {
    titre: 'Preserving food at home: Fermentation',
    editeur: 'University of Minnesota Extension',
    note: 'Recommandations pratiques sur les bocaux en verre, l’immersion, l’espace libre et les systèmes à sas pour la fermentation domestique.',
    url: 'https://extension.umn.edu/preserving-and-preparing/fermentation',
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

  'csu-kimchi': {
    titre: 'Understanding and Making Kimchi',
    editeur: 'Colorado State University Extension',
    note: 'Méthode de baechu kimchi, hygiène, salage, remplissage du contenant, fermentation à environ 20 °C et contrôle d’un pH inférieur ou égal à 4,6 avant consommation.',
    url: 'https://extension.colostate.edu/resource/understanding-and-making-kimchi/',
  },
  'osu-kimchi-basics': {
    titre: 'Kimchi basics',
    editeur: 'Oregon State University Extension',
    note: 'Recettes domestiques de kimchi, proportions de chou et de sel, fermentation courte à température ambiante puis conservation réfrigérée.',
    url: 'https://extension.oregonstate.edu/catalog/sp50-1007-kimchi-basics',
  },
  'fda-fermented-ph': {
    titre: 'Guide to Inspections of Low Acid Canned Food — fermented foods',
    editeur: 'U.S. Food and Drug Administration',
    note: 'La limite de pH 4,6 est le repère réglementaire utilisé pour distinguer les aliments fermentés acidifiés des aliments peu acides.',
    url: 'https://www.fda.gov/guide-inspections-low-acid-canned-food-2',
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

  'iso-soap-free-caustic': {
    titre: 'ISO 456:1973 — Surface active agents — Analysis of soaps — Determination of free caustic alkali',
    editeur: 'ISO',
    note: 'La soude caustique libre est déterminée par des méthodes de titrage spécifiques, distinctes d’une simple mesure de pH.',
    url: 'https://www.iso.org/standard/4478.html',
  },
  'soap-curing-hardening-study': {
    titre: 'Comparative studies of the curing and hardening process of soaps produced from different oils',
    editeur: 'International Journal of Engineering and Modern Technology',
    note: 'Étude du séchage des savons : perte d’humidité pendant la cure et augmentation parallèle de la dureté.',
    url: 'https://media.neliti.com/media/publications/360693-comparative-studies-of-the-curing-and-ha-56c431c5.pdf',
  },
  'pubchem-sodium-carbonate': {
    titre: 'Sodium Carbonate — Compound Summary',
    editeur: 'PubChem / NIH',
    note: 'Le carbonate de sodium est notamment classé comme fortement irritant pour les yeux et peut irriter la peau et les voies respiratoires.',
    url: 'https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-Carbonate',
  },

  'libretexts-hard-water': {
    titre: 'Soap and hard water',
    editeur: 'Chemistry LibreTexts',
    note: 'Les ions calcium et magnésium de l’eau dure forment avec les savons des sels insolubles qui se déposent.',
    url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_III_%28Morsch_et_al.%29/27%3A_Lipids/27.02%3A_Soap',
  },
  'inrs-sodium-hydroxide': {
    titre: 'Hydroxyde de sodium et solutions aqueuses — Fiche toxicologique n°20',
    editeur: 'INRS',
    note: 'Risques corrosifs, protection des yeux, choix de gants et règles de manipulation de la soude caustique.',
    url: 'https://www.inrs.fr/dam/ficheTox/FicheFicheTox/FICHETOX_20-1.pdf',
  },

  'anses-deconditionnement-menagers': {
    titre: 'Produits ménagers : les laisser dans leur contenant d’origine !',
    editeur: 'Anses',
    note: 'Les transvasements dans des récipients inadaptés ou mal étiquetés exposent à des confusions et intoxications ; si un transvasement est nécessaire, le contenant doit être chimiquement adapté et clairement identifié.',
    url: 'https://www.anses.fr/fr/content/produits-menagers-les-laisser-dans-leur-contenant-dorigine',
  },
  'thermofisher-hdpe-compatibility': {
    titre: 'High-Density Polyethylene (HDPE) Labware — Chemical compatibility',
    editeur: 'Thermo Fisher Scientific',
    note: 'Compatibilité générale du PEHD avec de nombreux acides dilués, alcools et bases ; la température, la durée de contact et les contraintes mécaniques modifient toutefois la résistance réelle.',
    url: 'https://www.thermofisher.com/fr/en/home/life-science/lab-plasticware-supplies/plastic-material-selection/high-density-polyethylene-hdpe-labware.html',
  },
  'thermofisher-container-selection': {
    titre: 'Nalgene Bottle, Carboy and Vial Selection Guide',
    editeur: 'Thermo Fisher Scientific',
    note: 'Le polymère ne suffit pas à garantir la compatibilité : formulation, concentration, température, durée d’exposition et conception du bouchon ou du pulvérisateur doivent être pris en compte.',
    url: 'https://www.thermofisher.com/us/en/home/life-science/lab-plasticware-supplies/nalgene-bottle-carboy-vial-selection-guide.html',
  },
  'dwk-amber-bottles': {
    titre: 'Laboratory bottles — material and light protection',
    editeur: 'DWK Life Sciences',
    note: 'Le choix du verre ou du plastique dépend de l’application ; les bouteilles ambrées protègent les contenus sensibles à la lumière, sans dispenser de vérifier bouchon et compatibilité chimique.',
    url: 'https://www.dwk.com/laboratory/markets-and-applications/lab-essentials',
  },
  'inrs-etiquetage-transvasement': {
    titre: 'Classification et étiquetage des produits chimiques',
    editeur: 'INRS',
    note: 'Après transvasement ou reconditionnement, l’étiquette doit rester visible, lisible et fournir les informations de danger et de précaution nécessaires.',
    url: 'https://www.inrs.fr/risques/classification-etiquetage-produits-chimiques/explication-reglementation',
  },

  'nist-ph-measurement': {
    titre: 'Standardization of pH measurements',
    editeur: 'NIST',
    note: 'La mesure potentiométrique du pH exige un instrument étalonné et des solutions tampons adaptées.',
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication260-53.pdf',
  },

  // — Percarbonate, blanchiment et entretien du linge —
  'wada-2013-percarbonate': {
    titre: 'Kinetics and Mechanism of the Thermal Decomposition of Sodium Percarbonate: Role of the Surface Product Layer',
    editeur: 'The Journal of Physical Chemistry A / PubMed',
    note: 'Étude cinétique de la décomposition thermique du percarbonate de sodium et du rôle de la couche de produits formée en surface. DOI : 10.1021/jp3123924.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/23402671/',
  },
  'li-wang-2016-spc-cotton': {
    titre: 'Study on Bleaching Technology of Cotton Fabric with Sodium Percarbonate',
    editeur: 'MATEC Web of Conferences',
    note: 'Essais de blanchiment sur maille de coton montrant l’influence du dosage, de la température et du temps ; conditions industrielles non transposables directement à tous les lavages domestiques. DOI : 10.1051/matecconf/20166706048.',
    url: 'https://doi.org/10.1051/matecconf/20166706048',
  },
  'li-2022-activated-spc-cotton': {
    titre: 'Energy-Saving One-Step Pre-Treatment Using an Activated Sodium Percarbonate System and Its Bleaching Mechanism for Cotton Fabric',
    editeur: 'Materials / PubMed',
    note: 'Étude d’un système percarbonate activé au TAED pour le prétraitement du coton ; elle illustre l’effet d’un activateur à basse température, sans valider une recette maison. DOI : 10.3390/ma15175849.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36079230/',
  },
  'bockmuhl-2019-laundry-hygiene': {
    titre: 'Laundry and textile hygiene in healthcare and beyond',
    editeur: 'GMS Hygiene and Infection Control / PMC',
    note: 'Revue sur l’interaction entre temps, température, mécanique et chimie dans le lavage, ainsi que sur les systèmes de blanchiment oxygéné et l’activation au TAED.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6600116/',
  },
  'santak-2025-stain-temperature': {
    titre: 'Cotton Knitwear as a Carrier of Specific Stains for Evaluation of Temperature-Specific Behavior of Detergents',
    editeur: 'Textiles',
    note: 'Comparaison de quinze salissures de référence sur coton : la performance varie selon la tache, la formulation du détergent et la température. DOI : 10.3390/textiles5040050.',
    url: 'https://doi.org/10.3390/textiles5040050',
  },
  'pusic-2025-stain': {
    titre: 'Ozone-Mediated Washing Process of Reference Stain Textile Monitors',
    editeur: 'Polymers / PubMed',
    note: 'Étude sur coton taché de thé, vin rouge et sang avec un détergent contenant du percarbonate ; le procédé comportait aussi de l’ozone et ne constitue donc pas une recette domestique. DOI : 10.3390/polym17141906.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40732785/',
  },
  'oldfield-2017-blood': {
    titre: 'The efficacy of sodium percarbonate on the removal of dried bloodstains from denim and carpet',
    editeur: 'Australian Journal of Forensic Sciences / UCL Discovery',
    note: 'Étude forensique montrant une amélioration possible de l’élimination du sang avec le percarbonate, mais une forte dépendance au support, à la température et aux conditions de vieillissement. DOI : 10.1080/00450618.2016.1264478.',
    url: 'https://discovery.ucl.ac.uk/id/eprint/1535272/',
  },
  'icsc-1744-sodium-percarbonate': {
    titre: 'ICSC 1744 — Sodium Carbonate Peroxyhydrate',
    editeur: 'Organisation internationale du Travail / OMS',
    note: 'Fiche internationale de sécurité : solide comburant, sévère irritation des yeux, irritation respiratoire, précautions de stockage et incompatibilités.',
    url: 'https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_card_id=1744&p_lang=fr&p_version=2',
  },
  'compagnie-bicarbonate-dose': {
    titre: 'Percarbonate de soude — conseils d’emploi et dosage',
    editeur: 'Compagnie du Bicarbonate',
    note: 'Mode d’emploi grand public donnant une équivalence d’environ 15 g par cuillère à soupe et des repères de dosage ; source pratique non scientifique, à subordonner à l’étiquette du produit.',
    url: 'https://www.compagnie-bicarbonate.com/percarbonate-de-sodium-sac-1kg.html',
  },
  'monbicarbonate-dose': {
    titre: 'Percarbonate de soude — utilisations et repères de dosage',
    editeur: 'Mon Bicarbonate',
    note: 'Guide pratique indiquant environ 10 g en machine et 5 g/L en trempage ; repères commerciaux non normalisés, à vérifier sur l’étiquette du produit choisi.',
    url: 'https://www.monbicarbonate.fr/5-choses-a-savoir-sur-le-percarbonate-de-soude-et-10-facons-de-lutiliser/',
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
