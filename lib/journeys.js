// Parcours éditoriaux explicites : une notion conduit à un usage précis.
// Les destinations sont contrôlées par npm run audit:site.
const article = (slug, label, detail, role = 'pratique') => ({ href: `/articles/${slug}`, label, detail, role });
const tool = (slug, label, detail) => ({ href: `/outils/${slug}`, label, detail, role: 'outil' });

export const journeys = {
  savon: {
    title: 'Fabriquer un savon',
    description: 'Comprendre la formule, calculer la soude et préparer le matériel.',
    members: ['notion-saponification', 'savon-surgras-saponification', 'savon-maison-trop-mou', 'materiel-savon-maison', 'gants-lunettes-risque-chimique'],
    steps: [
      article('savon-surgras-saponification', 'Suivre la recette de savon', 'Dosages, étapes et précautions avant de commencer.'),
      tool('calculateur-surgraissage', 'Calculer la dose de soude', 'Selon les huiles, la base et le surgras théorique.'),
      article('materiel-savon-maison', 'Préparer le matériel', 'Récipients, balance et protections : les critères utiles.', 'materiel'),
      article('savon-maison-trop-mou', 'Comprendre un savon trop mou', 'Revoir la formule avant de tenter une correction.', 'depannage'),
    ],
  },
  linge: {
    title: 'Laver avec une eau calcaire',
    description: 'Identifier les dépôts avant de modifier le dosage.',
    members: ['notion-tensioactifs', 'lessive-maison-traces-blanches'],
    steps: [
      article('lessive-maison-traces-blanches', 'Identifier les traces blanches', 'Distinguer résidus, savon calcaire et autres dépôts.', 'depannage'),
      tool('lessive-eau-dure', 'Évaluer l’effet de l’eau dure', 'Un repère pour décider si une lessive au savon est adaptée.'),
      article('percarbonate-de-soude-linge', 'Choisir un usage du percarbonate', 'Taches oxydables, textiles compatibles et limites.'),
    ],
  },
  entretien: {
    title: 'Choisir le bon nettoyant',
    description: 'Partir de la salissure et de la surface, puis choisir une méthode.',
    members: ['notion-ph-nettoyants', 'nettoyant-ph-melanges-dangereux', 'flacon-nettoyant-maison', 'percarbonate-de-soude-linge', 'enlever-tache-sang-vetement'],
    steps: [
      tool('choisir-acide-ou-base', 'Choisir selon la surface', 'Acide, base ou autre méthode : éviter les incompatibilités.'),
      article('nettoyant-ph-melanges-dangereux', 'Consulter les méthodes de nettoyage', 'Détartrer ou dégraisser avec les précautions adaptées.'),
      article('flacon-nettoyant-maison', 'Choisir le récipient', 'Matière, étiquette et fermeture selon le produit.', 'materiel'),
      article('enlever-tache-sang-vetement', 'Traiter une tache de sang', 'Adapter le geste au textile et à l’ancienneté de la tache.', 'depannage'),
    ],
  },
  fermentation: {
    title: 'Démarrer des légumes fermentés',
    description: 'Choisir une recette documentée, comprendre ses limites et préparer le bocal.',
    members: ['notion-fermentation-maison', 'lacto-fermentation-guide-legumes', 'lacto-fermentation-legumes-securite', 'lacto-fermentation-odeur-moisissure', 'kimchi-classique-maison', 'kimchi-vegetarien-maison', 'bocal-lacto-fermentation', 'bandelettes-ph-ou-phmetre'],
    steps: [
      article('kimchi-classique-maison', 'Préparer un kimchi', 'Le déroulé, les ingrédients et le contrôle de la fermentation.'),
      article('lacto-fermentation-odeur-moisissure', 'Examiner un bocal douteux', 'Les signes d’altération et les limites d’un examen visuel.', 'depannage'),
      article('bocal-lacto-fermentation', 'Choisir un bocal de fermentation', 'Immersion, fermeture et facilité de nettoyage.', 'materiel'),
      article('bandelettes-ph-ou-phmetre', 'Choisir comment mesurer le pH', 'Comprendre ce que la mesure peut et ne peut pas prouver.', 'materiel'),
    ],
  },
  levain: {
    title: 'Entretenir un levain',
    description: 'Peser les rafraîchis et observer une évolution reproductible.',
    members: ['levain-naturel-fermentation', 'levain-ne-monte-pas'],
    steps: [
      article('levain-naturel-fermentation', 'Créer et nourrir un levain', 'Le protocole complet et les observations à noter.'),
      article('levain-ne-monte-pas', 'Comprendre pourquoi il ne monte pas', 'Température, farine et rythme des rafraîchis.', 'depannage'),
      article('quelle-balance-recettes-maison', 'Choisir une balance adaptée', 'Distinguer capacité, résolution et précision.', 'materiel'),
    ],
  },
  conservation: {
    title: 'Comprendre la conservation',
    description: 'Choisir les conditions de stockage à partir des mécanismes réels.',
    members: ['confiture-sans-cuisson-crufiture', 'aliments-conserver-hors-frigo'],
    steps: [
      article('confiture-sans-cuisson-crufiture', 'Explorer la confiture sans cuisson', 'Brix, activité de l’eau et limites de la conservation.'),
      article('aliments-conserver-hors-frigo', 'Choisir où ranger les aliments', 'Froid, humidité et protection naturelle des produits.'),
      article('quelle-balance-recettes-maison', 'Peser de façon reproductible', 'Les critères d’une balance pour vos préparations.', 'materiel'),
    ],
  },
};

export function getJourney(slug) {
  const match = Object.entries(journeys).find(([, journey]) => journey.members.includes(slug));
  return match ? { id: match[0], ...match[1] } : null;
}

export function getNextSteps(slug, limit = 3) {
  return (getJourney(slug)?.steps || []).filter((step) => step.href !== `/articles/${slug}`).slice(0, limit);
}

export const problemSlugs = ['savon-maison-trop-mou', 'levain-ne-monte-pas', 'lessive-maison-traces-blanches', 'lacto-fermentation-odeur-moisissure'];
