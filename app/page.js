import Link from 'next/link';
import { usageCategories, transversalCategories } from '@/lib/categories';
import { getFeaturedArticles } from '@/lib/articles';
import ArticleCard from './_components/ArticleCard';

export default function Home() {
  const featured = getFeaturedArticles(4);
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="kicker">Chimie appliquée au fait maison</div>
          <h1>Des recettes maison fiables, expliquées par la chimie.</h1>
          <p className="lede">
            Savon, lessive, nettoyants, fermentation : chaque formule est expliquée,
            dosée et sécurisée pour comprendre ce que vous faites — pas seulement suivre
            une recette copiée ailleurs.
          </p>
          <div className="hero-actions">
            <Link href="/entretien" className="primary-pill">Voir les recettes</Link>
            <Link href="/comprendre" className="secondary-pill">Comprendre la chimie</Link>
          </div>
        </div>
        <div className="home-hero-panel" aria-label="Promesse éditoriale">
          <div className="panel-formula">pH · CMC · NaOH · Ca²⁺</div>
          <h2>Recette + mécanisme + sécurité</h2>
          <p>Le site relie chaque geste pratique à une explication scientifique lisible.</p>
          <ul>
            <li>Dosages argumentés</li>
            <li>Erreurs fréquentes corrigées</li>
            <li>Matériel utile, pas gadget</li>
          </ul>
        </div>
      </section>

      <section className="start-here wrap-wide">
        <div className="section-kicker">Commencer ici</div>
        <div className="path-grid">
          <Link href="/entretien" className="path-card">
            <span>01</span>
            <h3>Je veux fabriquer un produit</h3>
            <p>Lessive, nettoyant, savon, fermentation : aller directement aux recettes expliquées.</p>
          </Link>
          <Link href="/comprendre" className="path-card">
            <span>02</span>
            <h3>Je veux comprendre la chimie</h3>
            <p>Saponification, tensioactifs, pH, fermentation : les notions qui rendent les recettes fiables.</p>
          </Link>
          <Link href="/bien-sequiper" className="path-card">
            <span>03</span>
            <h3>Je veux bien m'équiper</h3>
            <p>Balances, bocaux, flacons, pH, sécurité : choisir le matériel selon l'usage réel.</p>
          </Link>
        </div>
      </section>

      <section className="featured-section wrap-wide">
        <div className="section-headline">
          <div>
            <div className="section-kicker">Guides essentiels</div>
            <h2>À lire pour ne pas bricoler à l'aveugle</h2>
          </div>
          <Link href="/comprendre" className="text-link">Toutes les notions →</Link>
        </div>
        <div className="featured-grid">
          {featured.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="home-categories wrap-wide">
        <div className="section-kicker">Explorer par usage</div>
        <div className="category-grid upgraded">
          {usageCategories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className="category-card">
              <span className="formula-eyebrow">{cat.formula}</span>
              <h3>{cat.title} <span className="arr">→</span></h3>
              <p>{cat.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="science-method wrap-wide">
        <div className="method-copy">
          <div className="section-kicker">Méthode Chimie Maison</div>
          <h2>Chaque article doit répondre à trois questions.</h2>
        </div>
        <div className="method-grid">
          <div><strong>Pourquoi ça marche ?</strong><p>Réaction, pH, solubilité, interface ou fermentation : le mécanisme est explicité.</p></div>
          <div><strong>Où sont les limites ?</strong><p>Eau dure, température, dosage, sécurité, conservation : les cas d'échec sont traités.</p></div>
          <div><strong>Quoi acheter utilement ?</strong><p>Le matériel est relié à une fonction réelle : peser, mesurer, protéger, conserver.</p></div>
        </div>
      </section>

      <div className="transversal-band">
        <div className="tb-label">Deux entrées transversales</div>
        <div className="transversal-grid">
          {transversalCategories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className="transversal-card">
              <h3>{cat.title} <span className="arr">→</span></h3>
              <p>{cat.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
