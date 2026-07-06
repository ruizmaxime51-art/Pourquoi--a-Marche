export const metadata = {
  title: 'À propos',
  description: "Qui écrit Chimie Maison, et pourquoi : la chimie réelle derrière le fait maison, expliquée et vérifiée.",
};

export default function APropos() {
  return (
    <main>
      <article className="post">
        <h1>À propos</h1>
        <p>
          Ce site est écrit par un ingénieur chimiste, diplômé d&apos;une école de chimie et
          spécialisé en formulation, avec une expérience en recherche et développement
          industrielle.
        </p>
        <p>
          L&apos;objectif est simple : expliquer la chimie réelle derrière les recettes de
          cosmétique, d&apos;entretien, de conservation et de fermentation maison. La plupart des
          recettes qui circulent donnent des proportions sans jamais expliquer le mécanisme
          derrière, ni les vraies limites de sécurité. Ici, chaque recette est calculée,
          expliquée, et remise dans son contexte chimique.
        </p>
        <p>
          Chaque recette publiée est relue et validée manuellement — dosages, mécanismes et
          points de sécurité — avant mise en ligne. L&apos;auteur écrit sous le seul intitulé de
          sa profession, sans mise en avant personnelle : ce qui compte ici, c&apos;est la
          rigueur du contenu, pas la personne qui l&apos;écrit.
        </p>
        <p>
          Une question, une remarque, une erreur repérée&nbsp;? Vous pouvez écrire à{' '}
          <a href="mailto:contact.sciencemaison@gmail.com">contact.sciencemaison@gmail.com</a>.
        </p>
      </article>
    </main>
  );
}
