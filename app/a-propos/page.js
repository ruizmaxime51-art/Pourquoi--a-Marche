import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'À propos',
  description: "Qui écrit Chimie Maison, et pourquoi : la chimie réelle derrière le fait maison, expliquée et vérifiée.",
  path: '/a-propos',
});

export default function APropos() {
  return (
    <main>
      <article className="post">
        <h1>À propos</h1>
        <p>
          Ce site est écrit sous un nom éditorial anonyme par une personne de formation
          ingénieur chimiste, spécialisée en formulation et passée par la recherche et
          développement industrielle.
        </p>
        <p>
          L&apos;objectif est simple : expliquer la chimie réelle derrière les recettes de
          cosmétique, d&apos;entretien, de conservation et de fermentation maison. La plupart des
          recettes qui circulent donnent des proportions sans jamais expliquer le mécanisme
          derrière, ni les vraies limites de sécurité. Ici, chaque recette est calculée,
          expliquée, et remise dans son contexte chimique.
        </p>
        <section id="methodologie">
          <h2>Méthode éditoriale</h2>
          <p>
            Les calculs et consignes sensibles sont comparés à des normes, publications
            scientifiques ou recommandations universitaires identifiables. Les sources sont
            affichées au pied de l&apos;article ; une source commerciale sert uniquement à
            documenter les caractéristiques annoncées d&apos;un produit.
          </p>
          <p>
            Un comparatif fondé sur des fiches techniques est signalé comme tel et ne prétend pas
            remplacer un essai réel. Les images générées servent d&apos;illustrations éditoriales :
            elles ne prouvent ni un test produit, ni un résultat expérimental. Les dates de mise à
            jour sont affichées lorsque le contenu change matériellement.
          </p>
          <p>
            L&apos;auteur écrit sous le seul intitulé de sa profession, sans mise en avant
            personnelle. Une erreur signalée est vérifiée, corrigée dans toutes les versions de la
            recette et inscrite dans le journal de correction livré avec le site.
          </p>
        </section>
        <p>
          Une question, une remarque, une erreur repérée&nbsp;? Vous pouvez écrire à{' '}
          <a href="mailto:contact.sciencemaison@gmail.com">contact.sciencemaison@gmail.com</a>.
        </p>
      </article>
    </main>
  );
}
