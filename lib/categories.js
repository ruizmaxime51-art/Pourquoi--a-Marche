// ─────────────────────────────────────────────────────────────
// Catégories du site.
// 4 catégories d'USAGE (recettes) + 2 catégories TRANSVERSALES :
//   - "comprendre"    : les notions scientifiques de fond
//   - "bien-sequiper" : les comparatifs d'achat de matériel
// ─────────────────────────────────────────────────────────────

export const categories = {
  cosmetique: {
    slug: 'cosmetique',
    label: 'Cosmétique',
    title: 'Cosmétique maison',
    tagline: 'Savons, soins et produits corporels : la chimie qui les rend efficaces et sûrs.',
    formula: 'R-COONa — tensioactif lavant',
    kind: 'usage',
  },
  entretien: {
    slug: 'entretien',
    label: 'Entretien',
    title: 'Entretien maison',
    tagline: 'Nettoyants et lessives : ce qui décrasse vraiment, et ce qu\'il ne faut jamais mélanger.',
    formula: 'NaClO + acide → Cl₂ ↑ (à éviter)',
    kind: 'usage',
  },
  conservation: {
    slug: 'conservation',
    label: 'Conservation',
    title: 'Conservation alimentaire',
    tagline: 'pH, sel, stérilisation : conserver ses aliments sans prendre de risque.',
    formula: 'pH < 4,6 → botulisme inhibé',
    kind: 'usage',
  },
  fermentation: {
    slug: 'fermentation',
    label: 'Fermentation',
    title: 'Fermentation maison',
    tagline: 'Levain, légumes lacto-fermentés : maîtriser les micro-organismes utiles.',
    formula: 'C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂',
    kind: 'usage',
  },
  comprendre: {
    slug: 'comprendre',
    label: 'Comprendre',
    title: 'Comprendre — les notions de fond',
    tagline: 'La science derrière les recettes : saponification, tensioactifs, fermentation… expliquée en profondeur.',
    formula: 'les mécanismes, pas à pas',
    kind: 'notion',
  },
  'bien-sequiper': {
    slug: 'bien-sequiper',
    label: 'Bien s\'équiper',
    title: 'Bien s\'équiper',
    tagline: 'Comparatifs et guides d\'achat du matériel, expliqués par un ingénieur chimiste.',
    formula: 'le bon outil pour chaque usage',
    kind: 'equipement',
  },
};

export const categoryList = Object.values(categories);

// Les 4 catégories d'usage (pour l'accueil et la navigation principale)
export const usageCategories = categoryList.filter((c) => c.kind === 'usage');

// Les 2 catégories transversales
export const transversalCategories = categoryList.filter(
  (c) => c.kind === 'notion' || c.kind === 'equipement'
);
