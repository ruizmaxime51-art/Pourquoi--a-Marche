import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display-loaded' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body-loaded' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono-loaded' });

export const metadata = {
  title: 'Chimie Maison — fabriquer soi-même, comprendre pourquoi ça marche',
  description: "Cosmétique, entretien, conservation, fermentation : la théorie chimique derrière le fait maison, par un ingénieur chimiste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="logo">chimie<span>maison</span></Link>
            <nav className="main-nav">
              <Link href="/cosmetique">Cosmétique</Link>
              <Link href="/entretien">Entretien</Link>
              <Link href="/conservation">Conservation</Link>
              <Link href="/fermentation">Fermentation</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="wrap">
            <div>
              <Link href="/a-propos">À propos</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">Confidentialité</Link>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>© {new Date().getFullYear()} Chimie Maison</span>
          </div>
        </footer>
        <p className="affiliate-disclosure">
          Cet article contient des liens affiliés. En achetant via ces liens, vous ne payez pas plus cher et vous soutenez le site — sans influence sur nos recommandations.
        </p>
      </body>
    </html>
  );
}
