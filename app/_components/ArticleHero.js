import Image from 'next/image';
import Link from 'next/link';

export default function ArticleHero({ article }) {
  const visualMode = article.heroFit || (article.type === 'notion' || article.type === 'repere' ? 'contain' : 'cover');
  const materialHref =
    article.materialHref ||
    (article.contentHtml?.includes('id="materiel"') ? '#materiel' : null);
  const materialLabel = article.materialLabel || 'Matériel utile';
  return (
    <header className="article-hero">
      <div className="article-hero-copy">
        <div className="article-meta-line">
          <span className={`article-type-label ${typeClass(article.type)}`}>{typeLabel(article.type)}</span>
          {article.readingTime && <span>{article.readingTime} min de lecture</span>}
          {article.updated ? (
            <span>Mis à jour le {formatDate(article.updated)}</span>
          ) : article.date ? (
            <span>Publié le {formatDate(article.date)}</span>
          ) : null}
        </div>
        {article.formula && <span className="formula-eyebrow">{article.formula}</span>}
        <h1>{article.h1 || article.title}</h1>
        <p className="standfirst">{article.excerpt}</p>
        <p className="article-byline">
          Rédaction et vérification : <Link href="/a-propos">Chimie Maison</Link>
        </p>
        <div className="article-hero-actions">
          <a href="#lecture" className="primary-pill">Lire l'article</a>
          {materialHref && (
            <a href={materialHref} className="secondary-pill">{materialLabel}</a>
          )}
        </div>
      </div>
      {article.image && (
        <div className={`article-hero-visual ${visualMode === 'contain' ? 'is-contain' : 'is-cover'}`}>
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            priority
            sizes="(max-width: 780px) 100vw, 38vw"
          />
          {article.imageCredit && (
            <p className="article-hero-credit">
              Photo :{' '}
              <a href={article.imageCredit.authorUrl} target="_blank" rel="noopener noreferrer">
                {article.imageCredit.author}
              </a>
              {' / '}
              <a href={article.imageCredit.sourceUrl} target="_blank" rel="noopener noreferrer">
                {article.imageCredit.source}
              </a>
              {article.imageCredit.license && (
                <>
                  {' · '}
                  <a href={article.imageCredit.licenseUrl} target="_blank" rel="noopener noreferrer">
                    {article.imageCredit.license}
                  </a>
                </>
              )}
              {article.imageCredit.changes ? ` · ${article.imageCredit.changes}` : ''}
            </p>
          )}
        </div>
      )}
    </header>
  );
}

function typeClass(type) {
  if (type === 'repere') return 'repere';
  if (type === 'notion') return 'notion';
  if (type === 'guide') return 'guide';
  if (type === 'comparatif') return 'comparatif';
  return 'recette';
}

function typeLabel(type) {
  if (type === 'repere') return 'Repère pratique';
  if (type === 'notion') return 'Notion approfondie';
  if (type === 'guide') return 'Guide pratique';
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
