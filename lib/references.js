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
    url: 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_%28Morsch_et_al.%29/21%3A_Carboxylic_Acid_Derivatives-_Nucleophilic_Acyl_Substitution_Reactions/21.06%3A_Chemistry_of_Esters',
  },
  'moc-sapo': {
    titre: 'Saponification of Esters',
    editeur: 'Master Organic Chemistry',
    note: 'Valeurs de pKa (acide carboxylique ≈ 4-5, alcool ≈ 16-18) et caractère irréversible.',
    url: 'https://www.masterorganicchemistry.com/2022/10/27/saponification-of-esters/',
  },
  'dunn-superfat': {
    titre: 'Scientific Soapmaking — étude sur le surgraissage',
    editeur: 'Kevin M. Dunn',
    note: 'Étude RMN : le choix de l\'huile de surgras à froid n\'est pas soutenu ; les insaturés saponifient plus lentement.',
    url: 'https://www.scientificsoapmaking.com/',
  },
  'sciencedirect-sap': {
    titre: 'Standard for Named Vegetable Oils — indices de saponification',
    editeur: 'Codex Alimentarius / FAO-OMS',
    note: 'Définition de l\'indice de saponification, lien avec la masse molaire des acides gras.',
    url: 'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf',
  },
  'fnwl-sap': {
    titre: 'Saponification Chart (SAP values)',
    editeur: 'From Nature With Love',
    note: 'Fourchettes d\'indices de saponification, facteurs de conversion KOH/NaOH.',
    url: 'https://www.fromnaturewithlove.com/resources/sapon.asp',
  },
  'soapcalc-oils': {
    titre: 'Oil & Fatty Acid Properties',
    editeur: 'SoapCalc',
    note: 'Composition en acides gras, indices d\'iode, effet sur la dureté du savon.',
    url: 'https://soapcalc.net/calc/SoapCalcWP.asp',
  },
  'pubmed-soap': {
    titre: 'The Effects of Cold Saponification on the Unsaponified Fatty Acid Composition and Sensory Perception of Commercial Natural Herbal Soaps',
    editeur: 'Molecules / PubMed',
    note: 'Étude de savons fabriqués à froid et de leur fraction d’acides gras non saponifiés. DOI : 10.3390/molecules23092356.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6225244/',
  },
  'friedman-soap-chemistry': {
    titre: 'Chemistry of soaps and detergents: Various types of commercial products and their ingredients',
    editeur: 'Clinics in Dermatology',
    note: 'Revue de la chimie générale des savons, de leurs ingrédients et de leurs propriétés d’usage. DOI : 10.1016/0738-081X(95)00102-L.',
    url: 'https://doi.org/10.1016/0738-081X(95)00102-L',
  },
  'jaocs-krafft': {
    titre: 'Solubility and Krafft point of soaps',
    editeur: 'Journal of the American Oil Chemists\' Society',
    note: 'Différence de solubilité et de point de Krafft entre savons de sodium et de potassium.',
    url: 'https://doi.org/10.1007/BF02645899',
  },
  'iupac-surfactants': {
    titre: 'Surfactants and their classification',
    editeur: 'IUPAC / littérature de référence',
    note: 'Structure amphiphile, familles de tensioactifs, tension superficielle.',
    url: 'https://goldbook.iupac.org/terms/view/S06194',
  },
  'cmc-overview': {
    titre: 'Critical micelle concentration',
    editeur: 'IUPAC Gold Book',
    note: 'Définition de la CMC, facteurs de variation (chaîne, charge, sel, température).',
    url: 'https://goldbook.iupac.org/terms/view/C01395',
  },
  'codex-named-oils': {
    titre: 'Standard for Named Vegetable Oils — CXS 210-1999',
    editeur: 'Codex Alimentarius / FAO-OMS',
    note: 'Fourchettes officielles d’indices de saponification des huiles d’amande et de coco.',
    url: 'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf',
  },
  'codex-olive-oil': {
    titre: 'Standard for Olive Oils and Olive Pomace Oils — CXS 33-1981',
    editeur: 'Codex Alimentarius / FAO-OMS',
    note: 'Fourchette officielle d’indice de saponification de l’huile d’olive.',
    url: 'https://www.fao.org/input/download/standards/88/CXS_033e_2015.pdf',
  },
  'nf-almond-oil': {
    titre: 'Almond Oil — National Formulary monograph',
    editeur: 'USP-NF',
    note: 'Monographie indiquant une valeur de saponification de 190 à 200 mg KOH/g pour l’huile d’amande.',
    url: 'https://www.pharmacopeia.cn/v29240/usp29nf24s0_m1510.html',
  },
  'anses-diy-soap': {
    titre: 'Savons « faits maison » : des risques liés à la soude caustique',
    editeur: 'Anses — Vigil’Anses n°25',
    note: 'La soude caustique est hautement corrosive ; l’Anses recommande notamment blouse, gants, lunettes et pièce aérée.',
    url: 'https://vigilanses.anses.fr/sites/default/files/VigilAnses_N25.pdf',
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
    note: 'Rôle des bactéries lactiques dans la biopréservation : acidification, compétition et inhibition de pathogènes. DOI : 10.3390/foods11091283.',
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
    url: 'https://extension.umn.edu/preserve-your-own-food/fermentation',
  },
  'umn-ph-meter': {
    titre: 'Using a pH meter to test cottage foods',
    editeur: 'University of Minnesota Extension',
    note: 'Choix et étalonnage d’un pH-mètre alimentaire ; précision de 0,01 pH, étalonnage pH 4 et 7 et vérification d’un pH final inférieur ou égal à 4,60.',
    url: 'https://extension.umn.edu/cottage-food/using-ph-meter-test-cottage-foods',
  },
  'vegetable-fermentation-review': {
    titre: 'Advancing Insights into Probiotics during Vegetable Fermentation',
    editeur: 'PMC',
    note: 'Microbiologie des légumes fermentés, succession des populations et conditions de fermentation. DOI : 10.3390/foods12203789.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10606808/',
  },
  'kimchi-salt-pathogens': {
    titre: 'Combined effect of various salt concentrations and lactic acid fermentation on pathogens in kimchi',
    editeur: 'PMC',
    note: 'Effets combinés du sel, de la température et de la fermentation lactique sur la survie de pathogènes alimentaires. DOI : 10.1007/s10068-021-00979-9.',
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
    note: 'Écosystème du levain, succession microbienne, entretien du starter et facteurs influençant l’activité. DOI : 10.7717/peerj.11389.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8117929/',
  },
  'sourdough-gluten-celiac': {
    titre: 'Safety for patients with celiac disease of baked goods made of wheat flour hydrolyzed during food processing',
    editeur: 'Clinical Gastroenterology and Hepatology / PMC',
    note: 'Une fermentation au levain ordinaire ne suffit pas à rendre un pain de blé sûr pour une personne atteinte de maladie cœliaque. DOI : 10.1016/j.cgh.2010.09.025.',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4425136/',
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
  'dwk-borosilicate-alkali': {
    titre: 'Glass Types & Properties — Chemical resistance',
    editeur: 'DWK Life Sciences',
    note: 'Le verre borosilicaté résiste bien à de nombreux produits, mais les solutions alcalines attaquent tous les verres ; la résistance dépend notamment de la concentration et de la température.',
    url: 'https://www.dwk.com/technical/glass-types-properties',
  },
  'hunersdorff-937000-specs': {
    titre: 'Hünersdorff Messkanne 937000 — pichet gradué de 2 L',
    editeur: 'Reidl / données fabricant Hünersdorff',
    note: 'La fiche identifie un pichet en polypropylène de 2 L, résistant de -20 à +100 °C et annoncé avec une très bonne résistance chimique aux alcalis, acides, huiles et alcools.',
    url: 'https://www.reidl.de/huenersdorff-messkanne-geschl-griff-2000ml-p885263',
  },
  'thermofisher-pp-compatibility': {
    titre: 'Polypropylene (PP) Labware — Chemical compatibility',
    editeur: 'Thermo Fisher Scientific',
    note: 'Le PP présente une excellente compatibilité générale avec les bases à 20 °C. La température, la durée d’exposition, la concentration et les contraintes mécaniques restent déterminantes.',
    url: 'https://www.thermofisher.com/de/en/home/life-science/lab-plasticware-supplies/plastic-material-selection/polypropylene-pp-labware.html',
  },
  'saraya-nitrile-food': {
    titre: 'SARAYA Nitrile Glove Extend',
    editeur: 'Saraya',
    note: 'Le fabricant décrit ces gants nitrile comme sans poudre, sans latex et conformes à la réglementation japonaise applicable aux ustensiles et emballages alimentaires.',
    url: 'https://saraya.world/professional/professional-products/hand-hygiene-professional/saraya-nitrile-glove-extend',
  },
  'gogglegear-2890-datasheet': {
    titre: '3M GoggleGear 2890 Series Safety Goggles — Technical Datasheet',
    editeur: '3M',
    note: 'Le modèle 2890A possède un oculaire en acétate à résistance chimique accrue, une ventilation indirecte et un marquage de monture EN 166 3 4 FT.',
    url: 'https://multimedia.3m.com/mws/media/1748213O/3m-2890-series-safety-goggles-technical-datasheet-english.pdf',
  },
  'lanon-u100-datasheet': {
    titre: 'U100 PVC Oil Resistant Gloves — chemical protection',
    editeur: 'LANON Protection',
    note: 'La fiche fabricant annonce une certification européenne et cite l’hydroxyde de sodium à 40 % parmi les produits testés ; la durée de contact et la taille restent à vérifier avant usage.',
    url: 'https://www.lanonpro.com/products/u100',
  },
  'inrs-bleach-cleaners': {
    titre: 'Nettoyage et désinfection : risques liés aux produits chimiques',
    editeur: 'INRS',
    note: 'Ne jamais mélanger l’eau de Javel avec un acide ou de l’ammoniaque ; ces mélanges peuvent libérer des gaz toxiques.',
    url: 'https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-152.pdf',
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
  'nist-scale-division': {
    titre: 'What is the true meaning of a scale division (d) versus a verification scale division (e)?',
    editeur: 'National Institute of Standards and Technology',
    note: 'La résolution d’une balance est l’écart entre deux indications numériques consécutives ; elle ne suffit pas, à elle seule, à garantir l’exactitude de la mesure.',
    url: 'https://www.nist.gov/news-events/news/2023/09/what-true-meaning-scale-division-d-versus-verification-scale-division-e',
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
