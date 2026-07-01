import { getAllSlugs, getArticle } from '@/lib/articles';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);

  return (
    <main>
      <article className="post">
        <span className="formula-eyebrow">{article.formula}</span>
        <h1>{article.title}</h1>
        <p style={{ color: 'var(--ink-soft)' }}>{article.excerpt}</p>

        <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />

        <p className="trust-note">
          Rédigé par un ingénieur chimiste (ENSCM) — dosages et mécanismes vérifiés avant publication.
        </p>
      </article>
    </main>
  );
}
