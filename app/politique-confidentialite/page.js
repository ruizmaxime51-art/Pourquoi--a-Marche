export const metadata = {
  title: 'Politique de confidentialité',
  description: "Politique de confidentialité du site Chimie Maison.",
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <main>
      <article className="post">
        <h1>Politique de confidentialité</h1>

        <p>
          Cette page décrit la manière dont ce site traite les données des personnes qui le
          consultent. Nous appliquons un principe simple&nbsp;: collecter le strict minimum, et
          jamais de données personnelles identifiables sans votre action volontaire.
        </p>

        <h2>Mesure d&apos;audience (sans cookies)</h2>
        <p>
          Ce site utilise Vercel Analytics pour mesurer sa fréquentation (nombre de pages vues,
          pages consultées, provenance du trafic). Cet outil fonctionne <strong>sans cookies</strong>
          {' '}et sans collecter de données permettant de vous identifier personnellement&nbsp;: les
          informations sont agrégées et anonymes. Aucun profil individuel n&apos;est constitué.
          C&apos;est la raison pour laquelle ce site n&apos;affiche pas de bannière de consentement
          aux cookies&nbsp;: il n&apos;en dépose pas à des fins de suivi.
        </p>

        <h2>Liens affiliés</h2>
        <p>
          Ce site contient des liens affiliés, notamment vers Amazon.fr. Lorsque vous cliquez sur
          l&apos;un de ces liens, le marchand concerné (par exemple Amazon) peut déposer ses
          propres cookies sur votre navigateur afin d&apos;attribuer une éventuelle commission sur
          un achat. Ces cookies sont gérés par le marchand, selon sa propre politique de
          confidentialité, et non par ce site. Vous pouvez les refuser ou les supprimer via les
          réglages de votre navigateur.
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc. (États-Unis). Comme tout hébergeur, Vercel traite
          des données techniques de connexion (par exemple l&apos;adresse IP) pour des raisons de
          sécurité et de bon fonctionnement du service.
        </p>

        <h2>Contact</h2>
        <p>
          Si vous nous écrivez à l&apos;adresse de contact, votre message et votre adresse email
          sont utilisés uniquement pour vous répondre, et ne sont ni revendus ni utilisés à des
          fins commerciales.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression concernant vos données. Pour toute demande, écrivez à{' '}
          <a href="mailto:contact.sciencemaison@gmail.com">contact.sciencemaison@gmail.com</a>.
        </p>

        <h2>Évolution de cette page</h2>
        <p>
          Cette politique pourra être mise à jour si de nouveaux outils sont ajoutés au site
          (par exemple un outil de mesure d&apos;audience supplémentaire). Toute modification sera
          reflétée directement sur cette page.
        </p>
      </article>
    </main>
  );
}
