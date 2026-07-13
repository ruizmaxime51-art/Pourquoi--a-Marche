import Link from 'next/link';
import { usageCategories } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '../_components/ArticleCard';

export const metadata = {
  title: 'Recettes maison',
  description: 'Toutes les recettes maison classées par usage : cosmétique, entretien, conservation et fermentation.',
};

export default function RecettesPage() {
  const recipes = usageCategories
    .flatMap((cat) => getArticlesByCategory(cat.slug))
    .filter((article) => article.type !== 'notion');

  return (
    <main>
      <section className="category-hero wrap-wide">
        <div>
          <span className="formula-eyebrow">recettes expliquées</span>
          <h1>Fabriquer un produit maison</h1>
          <p className="lede">
            Choisissez d'abord l'usage : cosmétique, entretien, conservation ou fermentation.
            Chaque recette renvoie vers les notions scientifiques utiles pour comprendre le
            mécanisme, les limites et les précautions.
          </p>
        </div>
        <div className="category-hero-card">
          <strong>Parcours conseillé</strong>
          <p>
            Recette pour agir vite, notion pour comprendre, matériel pour s'équiper sans acheter
            d'accessoires inutiles.
          </p>
        </div>
      </section>

      <section className="home-categories wrap-wide">
        <div className="section-kicker">Les 4 familles de recettes</div>
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

      <section className="featured-section wrap-wide">
        <div className="section-headline compact">
          <div>
            <div className="section-kicker">Toutes les recettes publiées</div>
            <h2>Passer à la pratique</h2>
          </div>
          <Link href="/comprendre" className="text-link">Voir les notions →</Link>
        </div>

        {recipes.length > 0 ? (
          <div className="featured-grid listing-grid">
            {recipes.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Les recettes arrivent.</h3>
            <p>Les catégories sont prêtes ; les premiers contenus pratiques seront ajoutés ici.</p>
            <Link href="/comprendre" className="secondary-pill">Comprendre les bases</Link>
          </div>
        )}
      </section>
    </main>
  );
}
