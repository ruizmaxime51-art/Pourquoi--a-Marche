export default function MaterielBox({ materiel, ficheId }) {
  const elements = materiel?.elements || [];
  if (elements.length === 0) return null;
  const hasProducts = elements.some((item) => item.product);
  return (
    <aside className="materiel-box" id="materiel" aria-labelledby="materiel-titre">
      <h4 id="materiel-titre">{materiel.titre || 'Ce qu’il vous faut'}</h4>
      <ul>
        {elements.map((item) => (
          <li key={item.nom}>
            <div>
              <strong>{item.nom}</strong>
              {item.usage && <span>{item.usage}</span>}
            </div>
            {item.product && (
              <a
                className="materiel-link"
                href={item.product.url}
                target="_blank"
                rel="nofollow sponsored noopener"
                data-cm-event="affiliate_click"
                data-cm-target={item.product.key}
              >
                Voir sur Amazon
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className="materiel-foot">
        {ficheId && <a href={`#${ficheId}`}>Aller à la fiche recette</a>}
        {hasProducts && <span>Liens affiliés : le prix ne change pas pour vous.</span>}
      </p>
    </aside>
  );
}
