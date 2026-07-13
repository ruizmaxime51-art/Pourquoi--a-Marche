import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — recettes maison fiables, expliquées par la chimie`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — la chimie derrière le fait maison`,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 800, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — la chimie derrière le fait maison`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'ktcaoGuLSaER-TOfkR87QVFP_KIazSL2Cnt0CG_O9ok',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="reading-progress" aria-hidden="true" />
        <header className="site-header">
          <div className="wrap-inner">
            <Link href="/" className="logo" aria-label="Chimie Maison — accueil">
              chimie <em>maison</em>
            </Link>
            <nav className="main-nav" aria-label="Navigation principale">
              <Link href="/recettes">Recettes</Link>
              <Link href="/cosmetique">Cosmétique</Link>
              <Link href="/entretien">Entretien</Link>
              <Link href="/conservation">Conservation</Link>
              <Link href="/fermentation">Fermentation</Link>
              <Link href="/comprendre" className="nav-accent">Comprendre</Link>
              <Link href="/bien-sequiper" className="nav-accent">Bien s'équiper</Link>
              <Link href="/outils" className="nav-accent">Outils</Link>
            </nav>
          </div>
        </header>

        {children}

        <section className="trust-footer">
          <div className="wrap-wide trust-footer-grid">
            <div>
              <div className="label">Pourquoi faire confiance ?</div>
              <h3>Des recettes maison expliquées comme des formulations.</h3>
              <p>
                Ingénieur chimiste, je relie les recettes aux mécanismes réels : pH,
                solubilité, émulsion, fermentation, sécurité et limites d'usage. Les liens
                affiliés servent à recommander le bon matériel, pas à masquer une recette fragile.
              </p>
            </div>
            <div className="trust-mini-grid">
              <span>Dosages vérifiés</span>
              <span>Sécurité explicitée</span>
              <span>Sources citées</span>
              <span>Affiliation signalée</span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="wrap-inner">
            <nav aria-label="Navigation secondaire">
              <Link href="/a-propos">À propos</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Confidentialité</Link>
            </nav>
            <span className="colophon">© {new Date().getFullYear()} Chimie Maison</span>
          </div>
        </footer>

        <p className="affiliate-disclosure">
          Certains liens sont affiliés. En achetant via ces liens, vous ne payez pas plus cher
          et vous soutenez le site — sans influence sur les recommandations scientifiques.
        </p>

        <Analytics />
      </body>
    </html>
  );
}
