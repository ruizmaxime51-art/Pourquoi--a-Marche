export default function MentionsLegales() {
  return (
    <main>
      <article className="post">
        <h1>Mentions légales</h1>
        <p style={{ color: 'var(--accent-dark)', background: 'var(--accent-light)', padding: '12px 16px', borderRadius: 6 }}>
          À compléter avant mise en ligne : identité de l&apos;éditeur (nom, statut auto-entrepreneur,
          n° SIREN), adresse, hébergeur (nom + adresse de Vercel Inc. ou autre), directeur de
          publication, contact.
        </p>
        <h2>Éditeur du site</h2>
        <p>[Nom / statut auto-entrepreneur / SIREN à compléter]</p>
        <h2>Hébergement</h2>
        <p>[Nom et adresse de l&apos;hébergeur à compléter]</p>
        <h2>Liens affiliés</h2>
        <p>
          Ce site contient des liens affiliés (notamment vers Amazon.fr dans le cadre du
          programme Amazon Partenaires, et d&apos;autres marchands via le réseau Awin). Les achats
          effectués via ces liens peuvent générer une commission pour l&apos;éditeur du site, sans
          coût supplémentaire pour l&apos;acheteur.
        </p>
      </article>
    </main>
  );
}
