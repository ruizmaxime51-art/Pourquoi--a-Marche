import { Fraunces, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '560', '600', '700'],
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
  title: 'Chimie Maison — fabriquer soi-même, comprendre pourquoi ça marche',
  description:
    "Cosmétique, entretien, conservation, fermentation : la chimie réelle derrière le fait maison, expliquée et vérifiée par un ingénieur chimiste.",
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
      </body>
    </html>
  );
}
