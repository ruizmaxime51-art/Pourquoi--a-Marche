import Image from 'next/image';

export default function ArticleHero({ article }) {
  return (
    <header className="article-hero">
      <div className="article-hero-copy">
        <div className="article-meta-line">
          <span>{typeLabel(article.type)}</span>
          {article.readingTime && <span>{article.readingTime} min de lecture</span>}
          {article.date && <span>{formatDate(article.date)}</span>}
        </div>
        {article.formula && <span className="formula-eyebrow">{article.formula}</span>}
        <h1>{article.title}</h1>
        <p className="standfirst">{article.excerpt}</p>
        <div className="article-hero-actions">
          <a href="#lecture" className="primary-pill">Lire l'article</a>
          <a href="#materiel" className="secondary-pill">Matériel utile</a>
        </div>
      </div>
      {article.image && (
        <div className="article-hero-visual">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="(max-width: 780px) 100vw, 38vw"
          />
        </div>
      )}
    </header>
  );
}

function typeLabel(type) {
  if (type === 'notion') return 'Notion chimique';
  if (type === 'guide') return 'Guide';
  if (type === 'comparatif') return 'Comparatif';
  if (type === 'recette') return 'Recette expliquée';
  return 'Article';
}

function formatDate(date) {
  try {
    return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(date));
  } catch {
    return date;
  }
}
