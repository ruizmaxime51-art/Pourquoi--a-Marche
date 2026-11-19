// ─────────────────────────────────────────────────────────────
// FICHES RECETTE STRUCTURÉES
//
// Une recette est décrite une seule fois, dans le frontmatter :
//   materiel:  ce qu'il faut avant de commencer (avec liens produits)
//   fiches:    la ou les fiches recette (ingrédients chiffrés, étapes)
//
// Dans le texte de l'article, on place :
//   {{materiel}}        → l'encadré « Ce qu'il vous faut »
//   {{fiche:<id>}}      → la fiche recette correspondante
//
// La même donnée sert à l'affichage, à l'impression et aux données
// structurées Google (Recipe ou HowTo) : plus de doublons à tenir à jour.
// ─────────────────────────────────────────────────────────────

import { affiliations } from './affiliations.js';

export const FICHE_SLOT = (id) => `<div class="recipe-card" id="${id}" data-slot="fiche"></div>`;
export const MATERIEL_SLOT = '<div id="materiel" data-slot="materiel"></div>';
export const SLOT_PATTERN = /<div class="recipe-card" id="([^"]+)" data-slot="fiche"><\/div>|<div id="materiel" data-slot="materiel"><\/div>/g;

const UNITS = new Set(['g', 'kg', 'mg', 'ml', 'mL', 'cl', 'L', 'l']);

export { formatNumber, formatQuantity } from './quantities.js';
import { formatQuantity } from './quantities.js';

export function plainText(html = '') {
  return String(html).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export function resolveProduct(key) {
  const product = key ? affiliations[key] : null;
  if (!product) return null;
  return { key, nom: product.nom, url: product.url, reassurance: product.reassurance };
}

export function validateFiches(data, slug) {
  const errors = [];
  const fiches = data.fiches;
  if (fiches === undefined) return;
  if (!Array.isArray(fiches) || fiches.length === 0) errors.push('fiches doit être une liste non vide');
  (fiches || []).forEach((fiche, index) => {
    const where = `fiches[${index}]`;
    if (!fiche.id || !/^[a-z0-9-]+$/.test(fiche.id)) errors.push(`${where}.id manquant ou invalide`);
    if (!fiche.titre) errors.push(`${where}.titre manquant`);
    if (!Array.isArray(fiche.ingredients) || fiche.ingredients.length === 0) errors.push(`${where}.ingredients vide`);
    (fiche.ingredients || []).forEach((ing, i) => {
      if (!ing.nom) errors.push(`${where}.ingredients[${i}].nom manquant`);
      const hasQty = typeof ing.quantite === 'number';
      if (hasQty && !UNITS.has(ing.unite)) errors.push(`${where}.ingredients[${i}].unite inconnue : ${ing.unite}`);
      if (!hasQty && !ing.texte) errors.push(`${where}.ingredients[${i}] : quantite+unite ou texte requis`);
    });
    if (!Array.isArray(fiche.etapes) || fiche.etapes.length === 0) errors.push(`${where}.etapes vide`);
    (fiche.etapes || []).forEach((step, i) => {
      if (!step.titre || !step.texte) errors.push(`${where}.etapes[${i}] : titre et texte requis`);
      if (step.image && !step.alt) errors.push(`${where}.etapes[${i}] : texte alternatif de l'image manquant`);
    });
    const names = new Set((data.materiel?.elements || []).map((item) => item.nom));
    (Array.isArray(fiche.materiel) ? fiche.materiel : []).forEach((nom) => {
      if (!names.has(nom)) errors.push(`${where}.materiel : « ${nom} » absent de materiel.elements`);
    });
    if (!['Recipe', 'HowTo'].includes(fiche.schema?.type)) errors.push(`${where}.schema.type doit valoir Recipe ou HowTo`);
  });
  (data.materiel?.elements || []).forEach((item, i) => {
    if (!item.nom) errors.push(`materiel.elements[${i}].nom manquant`);
    if (item.produit && !affiliations[item.produit]) errors.push(`materiel.elements[${i}].produit inconnu : ${item.produit}`);
  });
  if (errors.length) throw new Error(`Fiche recette invalide dans ${slug} :\n- ${errors.join('\n- ')}`);
}

function ingredientLine(ing) {
  const qty = formatQuantity(ing);
  return qty ? `${ing.nom} : ${qty}` : ing.nom;
}

// Convertit les fiches en objets `recipe` / `howtos` déjà compris par
// la page article pour produire le JSON-LD.
export function fichesToStructuredData(data) {
  const fiches = Array.isArray(data.fiches) ? data.fiches : [];
  const tools = (data.materiel?.elements || []).map((item) => item.nom);
  const steps = (fiche) =>
    fiche.etapes.map((step) => ({ name: step.titre, text: plainText(step.texte), image: step.image }));
  const recipeFiche = fiches.find((fiche) => fiche.schema?.type === 'Recipe');
  const recipe = recipeFiche
    ? {
        name: recipeFiche.schema.nom || recipeFiche.titre,
        description: recipeFiche.schema.description || recipeFiche.resume,
        prepTime: recipeFiche.schema.prepTime,
        totalTime: recipeFiche.schema.totalTime,
        yield: recipeFiche.schema.rendement,
        category: recipeFiche.schema.categorie,
        cuisine: recipeFiche.schema.cuisine,
        suitableForDiet: recipeFiche.schema.regime,
        ingredients: recipeFiche.ingredients.map(ingredientLine),
        steps: steps(recipeFiche),
      }
    : undefined;
  const howtos = fiches
    .filter((fiche) => fiche.schema?.type === 'HowTo')
    .map((fiche) => ({
      name: fiche.schema.nom || fiche.titre,
      description: fiche.schema.description || fiche.resume,
      totalTime: fiche.schema.totalTime,
      yield: fiche.schema.rendement,
      supplies: fiche.ingredients.map(ingredientLine),
      tools,
      steps: steps(fiche),
    }));
  return { recipe, howtos };
}
