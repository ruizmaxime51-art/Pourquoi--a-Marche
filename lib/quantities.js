// Formatage des quantités d'une fiche recette (utilisable côté navigateur).

export function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

// Arrondi lisible quand la recette est multipliée : on garde la précision
// d'origine, et au moins 1 décimale sous 10 unités.
export function formatQuantity(ingredient, factor = 1) {
  if (typeof ingredient.quantite !== 'number') return ingredient.texte || '';
  const base = ingredient.decimales || 0;
  const value = ingredient.quantite * factor;
  const decimals = factor === 1 ? base : Math.max(base, value < 10 && !Number.isInteger(value) ? 1 : 0);
  const parts = [
    ingredient.environ ? '≈' : null,
    `${formatNumber(value, decimals)} ${ingredient.unite}`,
    ingredient.detail || null,
  ];
  return parts.filter(Boolean).join(' ');
}
