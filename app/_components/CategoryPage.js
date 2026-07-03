import Link from 'next/link';
import { categories } from '@/lib/categories';
import { getArticlesByCategory } from '@/lib/articles';

export default function CategoryPage({ slug }) {
  const cat = categories[slug];
  const articles = getArticlesByCategory(slug);

  return (
    <main>
      <section className="category-head">
        <span className="formula-eyebrow">{cat.formula}</span>
        <h1>{cat.title}</h1>
        <p className="lede">{cat.tagline}</p>
      </section>

      <div className="article-list">
        {articles.length === 0 && (
          <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Premiers articles à venir.</p>
        )}
        {articles.map((a) => (
          <Link key={a.slug} href={`/articles/${a.slug}`} className="article-row">
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
