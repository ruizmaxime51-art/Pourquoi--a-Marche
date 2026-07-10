import Link from 'next/link';
import { categories } from '@/lib/categories';
import { getArticlesByCategory, getArticlesGrouped } from '@/lib/articles';

export default function CategoryPage({ slug }) {
  const cat = categories[slug];
  const { guides, others } = getArticlesGrouped(slug);
  const isNotionCat = cat.kind === 'notion';

  return (
    <main>
      <section className="category-head">
        <span className="formula-eyebrow">{cat.formula}</span>
        <h1>{cat.title}</h1>
        <p className="lede">{cat.tagline}</p>
      </section>

      <div className="article-list">
        {/* Guides / notions mis en avant (pour les catégories d'usage) */}
        {!isNotionCat && guides.length > 0 && (
          <>
            <div className="cat-section-label">Le guide</div>
            {guides.map((a) => (
              <Link key={a.slug} href={`/articles/${a.slug}`} className="guide-card">
                <div className="gc-eyebrow">{a.formula}</div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </Link>
            ))}
          </>
        )}

        {/* Liste principale */}
        {!isNotionCat && others.length > 0 && (
          <div className="cat-section-label">Les recettes</div>
        )}
        {isNotionCat && (guides.length > 0 || others.length > 0) && (
          <div className="cat-section-label">Les notions</div>
        )}

        {/* Pour une catégorie notion, on liste TOUT (guides + autres) comme notions */}
        {(isNotionCat ? [...guides, ...others] : others).map((a) => (
          <Link key={a.slug} href={`/articles/${a.slug}`} className="article-row">
            {a.type && (
              <span className={`type-badge ${badgeClass(a.type)}`}>{badgeLabel(a.type)}</span>
            )}
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </Link>
        ))}

        {guides.length === 0 && others.length === 0 && (
          <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic', paddingTop: 24 }}>
            Premiers articles à venir.
          </p>
        )}
      </div>
    </main>
  );
}

function badgeClass(type) {
  if (type === 'notion' || type === 'guide') return 'notion';
  if (type === 'comparatif') return 'comparatif';
  return 'recette';
}
function badgeLabel(type) {
  if (type === 'notion' || type === 'guide') return 'Notion';
  if (type === 'comparatif') return 'Comparatif';
  return 'Recette';
}
