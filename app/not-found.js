import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable',
  description: 'Cette page n’existe pas ou a été déplacée.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="not-found-page wrap">
      <span className="formula-eyebrow">Erreur 404</span>
      <h1>Cette page est introuvable.</h1>
      <p>
        L’adresse a peut-être changé. Vous pouvez revenir à l’accueil ou retrouver les recettes
        et explications déjà publiées.
      </p>
      <div className="not-found-actions">
        <Link href="/" className="primary-pill">Revenir à l’accueil</Link>
        <Link href="/recettes" className="secondary-pill">Voir les recettes</Link>
        <Link href="/comprendre" className="secondary-pill">Comprendre la chimie</Link>
      </div>
    </main>
  );
}
