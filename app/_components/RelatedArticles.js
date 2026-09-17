import ArticleCard from './ArticleCard';

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null;
  return (
    <section className="related-section">
      <div className="section-kicker">La suite de votre projet</div>
      <h2>Méthodes et guides utiles</h2>
      <div className="related-grid">
        {articles.map((article) => <ArticleCard key={article.slug} article={article} variant="compact" />)}
      </div>
    </section>
  );
}
