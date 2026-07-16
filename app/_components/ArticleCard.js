import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article, variant = 'default' }) {
  return (
    <Link href={`/articles/${article.slug}`} className={`article-card type-${badgeClass(article.type)} ${variant}`}>
      <div className="article-card-media">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes={variant === 'wide' ? '(max-width: 760px) 100vw, 42vw' : '(max-width: 760px) 100vw, 33vw'}
          />
        ) : (
          <div className="article-card-media-fallback" aria-hidden="true" />
        )}
      </div>
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
  if (type === 'repere') return 'repere';
  if (type === 'notion') return 'notion';
  if (type === 'guide') return 'guide';
  if (type === 'comparatif') return 'comparatif';
  return 'recette';
}
function badgeLabel(type) {
  if (type === 'repere') return 'Repère pratique';
  if (type === 'notion') return 'Notion approfondie';
  if (type === 'guide') return 'Guide pratique';
  if (type === 'comparatif') return 'Comparatif';
  return 'Recette';
}
