export const categories = {
  cosmetique: {
    slug: 'cosmetique',
    label: 'Cosmétique',
    title: 'Cosmétique maison',
    tagline: 'Émulsions, tensioactifs, conservation : la chimie derrière vos soins.',
    formula: 'R-COOH + NaOH → R-COONa + H₂O',
  },
  entretien: {
    slug: 'entretien',
    label: 'Entretien',
    title: 'Entretien maison',
    tagline: 'Nettoyants naturels : pH, saponification, et ce qu\'il ne faut jamais mélanger.',
    formula: 'NaClO + acide → Cl₂ ↑',
  },
  conservation: {
    slug: 'conservation',
    label: 'Conservation',
    title: 'Conservation alimentaire',
    tagline: 'Activité de l\'eau, pH, stérilisation : conserver sans risque.',
    formula: 'aW < 0,85 → croissance microbienne inhibée',
  },
  fermentation: {
    slug: 'fermentation',
    label: 'Fermentation',
    title: 'Fermentation & fabrication',
    tagline: 'Levain, bière, vin, distillation : les mécanismes, et le cadre légal.',
    formula: 'C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂',
  },
};

export const categoryList = Object.values(categories);
