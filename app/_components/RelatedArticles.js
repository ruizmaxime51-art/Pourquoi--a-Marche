import ArticleCard from './ArticleCard';

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null;
  return (
    <section className="related-section">
      <div className="section-kicker">Continuer à comprendre</div>
      <h2>Articles liés</h2>
      <div className="related-grid">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} variant="compact" />)}
      </div>
    </section>
  );
}
