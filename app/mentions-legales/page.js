export const metadata = {
  title: 'Mentions légales',
  description: "Mentions légales du site Chimie Maison.",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <main>
      <article className="post">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Maxime Ruiz, entrepreneur individuel (auto-entrepreneur), immatriculé au RCS de Nîmes
          sous le numéro SIREN 934&nbsp;281&nbsp;221. Activité&nbsp;: vente à distance.
        </p>

        <h2>Directeur de la publication</h2>
        <p>Maxime Ruiz.</p>

        <h2>Contact</h2>
        <p>
          <a href="mailto:contact.sciencemaison@gmail.com">contact.sciencemaison@gmail.com</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>

        <h2>Liens affiliés</h2>
        <p>
          Ce site contient des liens affiliés, notamment vers Amazon.fr dans le cadre du programme
          Amazon Partenaires. En tant que Partenaire Amazon, l&apos;éditeur réalise un bénéfice sur
          les achats remplissant les conditions requises. Les achats effectués via ces liens
          peuvent générer une commission pour l&apos;éditeur du site, sans aucun coût
          supplémentaire pour l&apos;acheteur et sans influence sur les recommandations.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, schémas, photographies) est la propriété
          de l&apos;éditeur, sauf mention contraire. Toute reproduction sans autorisation est
          interdite.
        </p>
      </article>
    </main>
  );
}
