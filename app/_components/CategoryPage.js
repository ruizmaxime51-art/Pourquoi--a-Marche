import Link from 'next/link';
import { categories } from '@/lib/categories';
import { getArticlesGrouped } from '@/lib/articles';
import ArticleCard from './ArticleCard';

export default function CategoryPage({ slug }) {
  const cat = categories[slug];
  const { guides, others } = getArticlesGrouped(slug);
  const isNotionCat = cat.kind === 'notion';
  const isEquipmentCat = cat.kind === 'equipement';
  const reperes = guides.filter((article) => article.type === 'repere');
  const deepNotions = guides.filter((article) => article.type === 'notion');
  const practicalGuides = guides.filter((article) => article.type === 'guide');

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
            {isNotionCat
              ? "Choisir le bon niveau : un repère rapide pour décider ou une notion approfondie pour comprendre le mécanisme."
              : isEquipmentCat
                ? "Choisir le matériel selon des critères techniques, sans multiplier les achats inutiles."
                : "Partir d’un problème concret, appliquer une méthode et comprendre ce qui peut faire échouer la recette."}
          </p>
        </div>
      </section>

      <section className="category-content wrap-wide">
        {isNotionCat ? (
          <>
            {reperes.length > 0 && (
              <ContentSection kicker="Repères pratiques" title="Comprendre vite un point clé" articles={reperes} />
            )}
            {deepNotions.length > 0 && (
              <ContentSection kicker="Notions approfondies" title="Aller jusqu’au mécanisme" articles={deepNotions} />
            )}
          </>
        ) : isEquipmentCat ? (
          <ContentSection kicker="Guides d’achat" title="Choisir du matériel réellement utile" articles={practicalGuides} />
        ) : (
          <>
            {practicalGuides.length > 0 && (
              <ContentSection kicker="Résoudre un problème" title="Guides pratiques" articles={practicalGuides} />
            )}
            {others.length > 0 ? (
              <ContentSection kicker="Les recettes" title="Fabriquer avec méthode" articles={others} />
            ) : practicalGuides.length === 0 ? (
              <div className="empty-state">
                <h3>Premiers articles à venir.</h3>
                <p>Cette rubrique est prête dans l’architecture, mais les contenus ne sont pas encore publiés.</p>
                <Link href="/comprendre" className="secondary-pill">Voir les notions déjà publiées</Link>
              </div>
            ) : null}
          </>
        )}
      </section>
    </main>
  );
}

function ContentSection({ kicker, title, articles }) {
  return (
    <>
      <div className="section-headline compact">
        <div>
          <div className="section-kicker">{kicker}</div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="featured-grid listing-grid">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </>
  );
}
