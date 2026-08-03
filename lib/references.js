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
  'surfactant-micelles-tem-2019': {
    titre: 'Substrate-Assisted Visualization of Surfactant Micelles via Transmission Electron Microscopy',
    editeur: 'Frontiers in Chemistry',
    note: 'Mesure de la CMC par tension superficielle et conductivité, puis observation TEM et AFM de l’évolution morphologique de micelles. DOI : 10.3389/fchem.2019.00242.',
    url: 'https://doi.org/10.3389/fchem.2019.00242',
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
  'codex-cocoa-butter': {
    titre: 'Standard for Cocoa Butter — CXS 86-1981',
    editeur: 'Codex Alimentarius / FAO-OMS',
    note: 'Fourchette officielle d’indice de saponification du beurre de cacao.',
    url: 'https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/',
  },
  'codex-animal-fats': {
    titre: 'Standard for Named Animal Fats — CXS 211-1999',
    editeur: 'Codex Alimentarius / FAO-OMS',
    note: 'Fourchettes officielles d’indice de saponification du saindoux et du suif.',
    url: 'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/hu/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf',
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
  'hypochlorous-speciation-2022': {
    titre: 'Hypochlorous Acid: From Innate Immune Factor and Environmental Toxicant to Chemopreventive Agent Targeting Solar UV-Induced Skin Cancer',
    editeur: 'Frontiers in Oncology',
    note: 'Spéciation de l’acide hypochloreux HOCl et de l’ion hypochlorite OCl⁻ selon le pH, et formation possible de dichlore à bas pH en présence de chlorures. DOI : 10.3389/fonc.2022.887220.',
    url: 'https://doi.org/10.3389/fonc.2022.887220',
  },
  'ph-meter-electrolyzed-water-2021': {
    titre: 'Electrolyzed Water Generated On-Site as a Promising Disinfectant in the Dental Office During the COVID-19 Pandemic',
    editeur: 'Frontiers in Public Health',
    note: 'Exemple photographique d’une mesure de solution légèrement acide avec un pH-mètre numérique. DOI : 10.3389/fpubh.2021.629142.',
    url: 'https://doi.org/10.3389/fpubh.2021.629142',
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
  'sauerkraut-dynamics-2022': {
    titre: 'Microbial and metabolic characterization of organic artisanal sauerkraut fermentation and study of gut health-promoting properties of sauerkraut brine',
    editeur: 'Frontiers in Microbiology',
    note: 'Évolution expérimentale du pH, des bactéries lactiques et des espèces isolées pendant 35 jours dans dix cuves de choucroute artisanale. DOI : 10.3389/fmicb.2022.929738.',
    url: 'https://doi.org/10.3389/fmicb.2022.929738',
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
  'soap-sem-hot-cold-2025': {
    titre: 'Cleaner Processes for Making Laundry Soap from Vegetable Oils and an Essential Oil',
    editeur: 'Applied Sciences / MDPI',
    note: 'Comparaison par microscopie électronique de savons formulés par saponification à chaud et à froid. DOI : 10.3390/app15073821.',
    url: 'https://doi.org/10.3390/app15073821',
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

  // — Taches de sang, enzymes et entretien textile —
  'medlineplus-hemoglobin': {
    titre: 'Hemoglobin Test',
    editeur: 'MedlinePlus / U.S. National Library of Medicine',
    note: 'L’hémoglobine est une protéine riche en fer présente dans les globules rouges.',
    url: 'https://medlineplus.gov/lab-tests/hemoglobin-test/',
  },
  'maurer-2004-proteases': {
    titre: 'Detergent proteases',
    editeur: 'Current Opinion in Biotechnology / PubMed',
    note: 'Revue sur les protéases employées dans les détergents et sur les contraintes de stabilité et de compatibilité des formulations. DOI : 10.1016/j.copbio.2004.06.005.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/15296930/',
  },
  'niyonzima-2015-proteases': {
    titre: 'Detergent-Compatible Proteases: Microbial Production, Properties, and Stain Removal Analysis',
    editeur: 'Preparative Biochemistry & Biotechnology / PubMed',
    note: 'Revue des protéases compatibles avec les détergents, de leur stabilité et de l’évaluation de l’élimination des taches protéiques. DOI : 10.1080/10826068.2014.907183.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24678620/',
  },
  'aci-blood-stain-guide': {
    titre: 'Stain Removal Guide — Blood',
    editeur: 'American Cleaning Institute',
    note: 'Guide pratique : eau froide pour une tache de sang fraîche ; prétraitement ou trempage avec un produit enzymatique pour une tache sèche ; contrôle avant le sèche-linge.',
    url: 'https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide',
  },
  'dr-beckmann-blood-protein': {
    titre: 'Diable Détacheur Sang & Protéines',
    editeur: 'Dr. Beckmann',
    note: 'Fiche fabricant : formule active à base d’enzymes, temps d’action annoncé de 10 à 15 minutes et exclusions comprenant tapis, cuir et cachemire.',
    url: 'https://www.dr-beckmann.com/fr-fr/entretien-du-linge/detachant-linge/diable-detacheurs/diable-detacheur-sang-proteines-32797-fr/',
  },
  'cdc-soiled-laundry': {
    titre: 'Appendix D — Linen and laundry management',
    editeur: 'Centers for Disease Control and Prevention',
    note: 'Recommandations destinées aux établissements de soins : porter des gants pour le linge souillé, ne pas le secouer et pratiquer l’hygiène des mains.',
    url: 'https://www.cdc.gov/healthcare-associated-infections/hcp/cleaning-global/appendix-d.html',
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
  'foods-predictive-microbiology': {
    titre: 'Predictive Modeling of Microbial Behavior in Food',
    editeur: 'Foods',
    note: 'Revue des facteurs intrinsèques et extrinsèques qui modulent la croissance microbienne, notamment température, pH et activité de l’eau. DOI : 10.3390/foods8120654.',
    url: 'https://doi.org/10.3390/foods8120654',
  },
  'ucdavis-produce-storage': {
    titre: 'Storing Fresh Fruits and Vegetables for Better Taste',
    editeur: 'University of California, Davis — Postharvest Technology Center',
    note: 'Classement pratique des végétaux entre température ambiante et réfrigérateur, effets du froid et consigne de réfrigérer rapidement tout produit coupé.',
    url: 'https://postharvest.ucdavis.edu/sites/g/files/dgvnsk12711/files/inline-files/230110.pdf',
  },
  'postharvest-physiology-2024': {
    titre: 'Postharvest physiology of fruits and vegetables and their management technology: a review',
    editeur: 'The Journal of Animal and Plant Sciences',
    note: 'Revue des mécanismes qui dégradent les végétaux après récolte : respiration, transpiration, production d’éthylène, température et développement des maladies. DOI : 10.36899/JAPS.2024.2.0717.',
    url: 'https://doi.org/10.36899/JAPS.2024.2.0717',
  },
  'ethylene-postharvest-review': {
    titre: 'Biological and postharvest interventions to manage the ethylene in fruit: a review',
    editeur: 'Sustainable Food Technology — Royal Society of Chemistry',
    note: 'Revue expliquant le rôle de l’éthylène dans le mûrissement des fruits climactériques, puis l’accélération du ramollissement et de la sénescence. DOI : 10.1039/D3FB00037K.',
    url: 'https://doi.org/10.1039/D3FB00037K',
  },
  'fruit-cuticle-2024': {
    titre: 'Ripening and rot: How ripening processes influence disease susceptibility in fleshy fruits',
    editeur: 'Journal of Integrative Plant Biology',
    note: 'Revue sur le rôle de l’épiderme, de la cuticule, des cires et des défenses actives du fruit contre la perte d’eau et l’entrée des microorganismes. DOI : 10.1111/jipb.13739.',
    url: 'https://doi.org/10.1111/jipb.13739',
  },
  'fruit-cuticle-lara-2019': {
    titre: 'Shelf Life Potential and the Fruit Cuticle: The Unexpected Player',
    editeur: 'Frontiers in Plant Science',
    note: 'Revue illustrée du rôle de la cuticule dans les échanges d’eau, les propriétés mécaniques de la peau et la conservation des fruits après récolte. DOI : 10.3389/fpls.2019.00770.',
    url: 'https://doi.org/10.3389/fpls.2019.00770',
  },
  'fruit-respiratory-climacteric-2020': {
    titre: 'Beyond Ethylene: New Insights Regarding the Role of Alternative Oxidase in the Respiratory Climacteric',
    editeur: 'Frontiers in Plant Science',
    note: 'Revue comparant les profils de respiration et d’éthylène des fruits climactériques et non climactériques après récolte. DOI : 10.3389/fpls.2020.543958.',
    url: 'https://doi.org/10.3389/fpls.2020.543958',
  },
  'strawberry-microcracking-2023': {
    titre: 'Microcracking of strawberry fruit cuticles: mechanism and factors',
    editeur: 'Scientific Reports',
    note: 'Étude par microscopie et fluorescence des microfissures de la cuticule de fraise et de la perte locale de sa fonction de barrière. DOI : 10.1038/s41598-023-46366-8.',
    url: 'https://doi.org/10.1038/s41598-023-46366-8',
  },
  'potato-periderm-suberin': {
    titre: 'CYP86A33-Targeted Gene Silencing in Potato Tuber Alters Suberin Composition, Distorts Suberin Lamellae, and Impairs the Periderm’s Water Barrier Function',
    editeur: 'Plant Physiology',
    note: 'Étude fonctionnelle du périderme de pomme de terre : la diminution de la subérine désorganise ses lamelles et multiplie la perméabilité à l’eau, confirmant son rôle de barrière. DOI : 10.1104/pp.108.127183.',
    url: 'https://doi.org/10.1104/pp.108.127183',
  },
  'onion-dry-scales-water': {
    titre: 'Water vapour sorption and transmission by onion scale under different temperature and humidity conditions',
    editeur: 'Scientia Horticulturae',
    note: 'Étude des tuniques sèches de l’oignon et de leurs échanges de vapeur d’eau selon la température et l’humidité. DOI : 10.1016/0304-4238(91)90041-V.',
    url: 'https://doi.org/10.1016/0304-4238(91)90041-V',
  },
  'vitamin-c-fruit-storage-2024': {
    titre: 'Variation of vitamin C content and antioxidant capacities during the post-harvest storage of fresh fruits under different temperatures',
    editeur: 'Journal of Stored Products Research',
    note: 'Étude de 31 espèces de fruits à trois températures : le froid limite souvent la dégradation de l’acide ascorbique et la sénescence, mais la réponse dépend de l’espèce et du stade de maturité. DOI : 10.1016/j.jspr.2024.102426.',
    url: 'https://doi.org/10.1016/j.jspr.2024.102426',
  },
  'tomato-flavor-storage': {
    titre: 'Tomato Flavor and Aroma Quality as Affected by Storage Temperature',
    editeur: 'Journal of Food Science',
    note: 'Étude sensorielle et analytique montrant une perte d’arôme mûr et de composés volatils chez des tomates stockées au froid, particulièrement à 5 °C. DOI : 10.1111/j.1365-2621.2000.tb10270.x.',
    url: 'https://doi.org/10.1111/j.1365-2621.2000.tb10270.x',
  },
  'cherry-bruising-ucdavis': {
    titre: 'Cherry: Surface Pitting & Bruising',
    editeur: 'University of California, Davis — Postharvest Research and Extension Center',
    note: 'Synthèse physiologique : un choc endommage les cellules proches ou sous l’épiderme, augmente respiration et éthylène, accélère la perte d’acidité et rend le fruit plus sensible à la pourriture.',
    url: 'https://postharvest.ucdavis.edu/disorders/cherry-surface-pitting-bruising',
  },
  'onion-garlic-home-storage': {
    titre: 'How to store onions and garlic to keep them fresh longer and minimise sprouting',
    editeur: 'European Food Information Council',
    note: 'Recommandations domestiques : bulbes entiers au sec, dans l’obscurité et avec de l’air ; l’humidité piégée et les sacs fermés favorisent moisissures et germination.',
    url: 'https://www.eufic.org/en/food-safety/article/how-to-store-onions-and-garlic-to-keep-them-fresh-longer-and-minimise-sprouting',
  },
  'potato-home-storage-2021': {
    titre: 'The impact of home storage conditions on the accumulation of acrylamide precursors in potato tubers',
    editeur: 'Annals of Applied Biology',
    note: 'Étude en conditions domestiques comparant 5 et 18 °C : sur quinze jours, la variété et la provenance expliquaient davantage les sucres réducteurs que la température ; le froid retardait aussi la germination. DOI : 10.1111/aab.12634.',
    url: 'https://doi.org/10.1111/aab.12634',
  },
  'france-chaine-froid': {
    titre: 'Sécurité sanitaire des aliments : tout sur la chaîne du froid',
    editeur: 'Ministère français de l’Agriculture',
    note: 'Principes de continuité de la chaîne du froid et températures réglementaires des principales catégories d’aliments périssables.',
    url: 'https://agriculture.gouv.fr/securite-sanitaire-des-aliments-tout-sur-la-chaine-du-froid',
  },
  'nchfp-safe-canning': {
    titre: 'Ensuring Safe Canned Foods',
    editeur: 'National Center for Home Food Preservation / University of Georgia',
    note: 'Distinction entre aliments acides à pH inférieur ou égal à 4,6 et aliments peu acides, et nécessité d’un procédé thermique validé adapté.',
    url: 'https://nchfp.uga.edu/how/can/general-information/ensuring-safe-canned-foods/',
  },
  'apple-potato-2024': {
    titre: 'Apple fruit as a biological suppressant for potato tuber sprouting during ambient storage',
    editeur: 'Heliyon',
    note: 'Étude à température ambiante montrant une réduction de la germination avec des pommes, mais aussi des modifications des sucres, de la matière sèche et de la pourriture selon les lots. DOI : 10.1016/j.heliyon.2024.e38055.',
    url: 'https://doi.org/10.1016/j.heliyon.2024.e38055',
  },
  'psu-root-storage': {
    titre: 'Preserving Late-Season Fall Vegetables',
    editeur: 'Penn State Extension',
    note: 'Conditions de stockage des légumes-racines en sable humide : local très frais, sombre, hors gel et contrôle régulier.',
    url: 'https://extension.psu.edu/preserving-late-season-fall-vegetables/',
  },
  'france-egg-home': {
    titre: 'Guide de bonnes pratiques d’hygiène du consommateur',
    editeur: 'Ministère français de l’Agriculture',
    note: 'Les œufs sont commercialisés à température ambiante, tandis que l’emballage recommande généralement la conservation au réfrigérateur à domicile afin de ralentir leur vieillissement.',
    url: 'https://agriculture.gouv.fr/sites/default/files/gbph-conso-26082014_1_0.pdf',
  },
  'efsa-egg-storage': {
    titre: 'Scientific Opinion on the public health risks of table eggs due to deterioration and development of pathogens',
    editeur: 'EFSA Journal',
    note: 'Évaluation du risque Salmonella selon la durée et la température ; la réfrigération au détail ou au domicile limite l’augmentation du risque lors d’un stockage prolongé. DOI : 10.2903/j.efsa.2014.3782.',
    url: 'https://doi.org/10.2903/j.efsa.2014.3782',
  },
  'egg-quality-storage-2024': {
    titre: 'Effects of storage temperature and egg washing on egg quality and physicochemical properties',
    editeur: 'Discover Applied Sciences',
    note: 'Étude comparant température ambiante et réfrigération pendant quatre semaines : le froid conserve mieux la hauteur de l’albumen et l’unité de Haugh, indicateurs de qualité interne. DOI : 10.1007/s42452-024-05760-1.',
    url: 'https://doi.org/10.1007/s42452-024-05760-1',
  },
  'umaine-butter-storage': {
    titre: 'Ask Spoonful: How Long Can I Leave Butter Out of the Fridge?',
    editeur: 'University of Maine Cooperative Extension',
    note: 'Recommandation pratique prudente : petite quantité de beurre salé couverte pendant un à deux jours sous environ 21 °C ; beurre doux et beurre cultivé au réfrigérateur.',
    url: 'https://extension.umaine.edu/food-health/2026/05/21/butter/',
  },
  'cheese-pathogens-25c': {
    titre: 'Growth of Listeria monocytogenes, Salmonella spp., Escherichia coli O157:H7, and Staphylococcus aureus on Cheese during Extended Storage at 25°C',
    editeur: 'Journal of Food Protection',
    note: 'La croissance des pathogènes à 25 °C varie fortement selon le fromage, son pH et sa teneur en sel dans l’humidité. DOI : 10.4315/0362-028X.JFP-14-047.',
    url: 'https://doi.org/10.4315/0362-028X.JFP-14-047',
  },
  'evaporative-cooling-review': {
    titre: 'Evaporative cooling system for storage of fruits and vegetables — a review',
    editeur: 'Journal of Food Science and Technology',
    note: 'Revue des dispositifs de refroidissement évaporatif pour végétaux, efficaces surtout en climat sec et incapables de garantir une température de réfrigération. DOI : 10.1007/s13197-011-0311-6.',
    url: 'https://doi.org/10.1007/s13197-011-0311-6',
  },
  'eu-fridge-energy': {
    titre: 'Fridges and Freezers — Ecodesign and Energy Labelling',
    editeur: 'Commission européenne',
    note: 'Consommation moyenne des appareils vendus en 2020 et projection à 2030 dans le cadre des exigences d’écoconception et d’étiquetage énergétique.',
    url: 'https://energy-efficient-products.ec.europa.eu/product-list/fridges-and-freezers_en',
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
