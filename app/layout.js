import { Fraunces, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/lib/site';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
});
const body = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body-loaded',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — fabriquer soi-même, comprendre pourquoi ça marche`,
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
    images: [{ url: DEFAULT_OG_IMAGE, width: 1000, height: 750, alt: SITE_NAME }],
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
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <header className="site-header">
          <div className="wrap-inner">
            <Link href="/" className="logo">chimie <em>maison</em></Link>
            <nav className="main-nav">
              <Link href="/cosmetique">Cosmétique</Link>
              <Link href="/entretien">Entretien</Link>
              <Link href="/conservation">Conservation</Link>
              <Link href="/fermentation">Fermentation</Link>
            </nav>
          </div>
        </header>

        {children}

        <section className="trust-footer">
          <div className="wrap">
            <div className="label">L'auteur</div>
            <h3>Ingénieur chimiste, passionné de fabrication maison.</h3>
            <p>
              Diplômé d'une école de chimie, je travaille en R&amp;D sur la formulation de
              produits. Ce site est né d'un constat simple : la plupart des recettes DIY qui
              circulent donnent des proportions sans jamais expliquer le mécanisme derrière — ni
              les limites de sécurité. Ici, chaque recette est calculée, vérifiée, et expliquée
              avec la chimie réelle qui la rend fiable.
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <div className="wrap-inner">
            <nav>
              <Link href="/a-propos">À propos</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Confidentialité</Link>
            </nav>
            <span className="colophon">© {new Date().getFullYear()} Chimie Maison</span>
          </div>
        </footer>

        <p className="affiliate-disclosure">
          Cet article contient des liens affiliés. En achetant via ces liens, vous ne payez pas
          plus cher et vous soutenez le site — sans aucune influence sur nos recommandations.
        </p>

        <Analytics />
      </body>
    </html>
  );
}
