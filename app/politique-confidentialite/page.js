export default function Confidentialite() {
  return (
    <main>
      <article className="post">
        <h1>Politique de confidentialité</h1>
        <p style={{ color: 'var(--accent-dark)', background: 'var(--accent-light)', padding: '12px 16px', borderRadius: 6 }}>
          Base à adapter selon les outils réellement utilisés (Google Analytics, cookies des
          réseaux d&apos;affiliation Awin/Amazon, formulaire de contact éventuel).
        </p>
        <h2>Données collectées</h2>
        <p>
          Ce site peut utiliser des cookies de mesure d&apos;audience et des cookies de suivi
          d&apos;affiliation (Amazon Partenaires, Awin) permettant d&apos;attribuer une commission
          lorsque vous achetez un produit recommandé.
        </p>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression de vos données. Contact : [adresse email à compléter].
        </p>
      </article>
    </main>
  );
}
