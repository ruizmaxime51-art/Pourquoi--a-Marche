import Link from 'next/link';

export default function ArticleCard({ article, variant = 'default' }) {
  return (
    <Link href={`/articles/${article.slug}`} className={`article-card ${variant}`}>
      <div className="article-card-media" style={{ backgroundImage: article.image ? `url(${article.image})` : undefined }} />
      <div className="article-card-body">
        <div className="card-meta">
          {article.type && <span className={`type-badge ${badgeClass(article.type)}`}>{badgeLabel(article.type)}</span>}
          {article.readingTime && <span>{article.readingTime} min</span>}
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        {article.formula && <span className="card-formula">{article.formula}</span>}
      </div>
    </Link>
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
