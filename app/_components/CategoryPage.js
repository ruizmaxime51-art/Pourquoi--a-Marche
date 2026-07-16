import Link from 'next/link';
import { categories } from '@/lib/categories';
import { getArticlesGrouped } from '@/lib/articles';
import ArticleCard from './ArticleCard';

export default function CategoryPage({ slug }) {
  const cat = categories[slug];
  const { guides, others } = getArticlesGrouped(slug);
  const isNotionCat = cat.kind === 'notion';
  const isEquipmentCat = cat.kind === 'equipement';
  const listed = isNotionCat ? [...guides, ...others] : others;

  return (
    <main>
      <section className="category-hero wrap-wide">
        <div>
          <span className="formula-eyebrow">{cat.formula}</span>
          <h1>{cat.title}</h1>
          <p className="lede">{cat.tagline}</p>
        </div>
        <div className="category-hero-card">
          <strong>Objectif</strong>
          <p>
            {isEquipmentCat
              ? "Choisir le matériel selon des critères techniques, sans multiplier les achats inutiles."
              : "Passer d'une recette suivie à une recette comprise : mécanisme, limites, sécurité et matériel utile."}
          </p>
        </div>
      </section>

      <section className="category-content wrap-wide">
        {!isNotionCat && guides.length > 0 && (
          <>
            <div className="section-headline compact">
              <div>
                <div className="section-kicker">{isEquipmentCat ? 'Guides d’achat' : 'Le guide pour comprendre'}</div>
                <h2>{isEquipmentCat ? 'Choisir du matériel réellement utile' : 'Avant de passer à la pratique'}</h2>
              </div>
            </div>
            <div className="featured-grid guide-first">
              {guides.map((a) => <ArticleCard key={a.slug} article={a} variant="wide" />)}
            </div>
          </>
        )}

        {(!isEquipmentCat || listed.length > 0) && (
          <>
            <div className="section-headline compact">
              <div>
                <div className="section-kicker">
                  {isNotionCat ? 'Les notions' : isEquipmentCat ? 'Comparatifs' : 'Les recettes'}
                </div>
                <h2>
                  {isNotionCat ? 'Comprendre les mécanismes' : isEquipmentCat ? 'Comparer avant d’acheter' : 'Fabriquer avec méthode'}
                </h2>
              </div>
            </div>

            {listed.length > 0 ? (
              <div className="featured-grid listing-grid">
                {listed.map((a) => <ArticleCard key={a.slug} article={a} />)}
              </div>
            ) : (
              <div className="empty-state">
                <h3>Premiers articles à venir.</h3>
                <p>Cette rubrique est prête dans l'architecture, mais les contenus ne sont pas encore publiés.</p>
                <Link href="/comprendre" className="secondary-pill">Voir les notions déjà publiées</Link>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
