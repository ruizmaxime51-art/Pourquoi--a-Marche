// Les deux recettes chimiques commencent par leurs précautions, avant les dosages.
const preparationAnchors = {
  'savon-surgras-saponification': '#securite-ce-qui-nest-pas-negociable',
  'nettoyant-ph-melanges-dangereux': '#regles-de-securite-avant-de-preparer',
};

export function getReadAction(article) {
  const html = article.contentHtml || '';
  const preparation = preparationAnchors[article.slug];
  if (preparation && html.includes(`id="${preparation.slice(1)}"`)) {
    return { href: preparation, label: 'Préparer la recette : les précautions' };
  }
  if (article.type === 'recette') {
    const anchor = html.match(/<a\s+href="(#[^"]+)"\s+class="jump-to-recipe"/)?.[1];
    if (anchor && html.includes(`id="${anchor.slice(1)}"`)) {
      return { href: anchor, label: 'Voir les ingrédients et les étapes' };
    }
  }
  if (article.type === 'comparatif') return { href: '#lecture', label: 'Comparer les options' };
  if (article.type === 'guide') return { href: '#lecture', label: 'Lire le guide pratique' };
  return { href: '#lecture', label: 'Comprendre cette notion' };
}
