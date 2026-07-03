import { getAllSlugs, getArticle } from '@/lib/articles';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  return { title: `${article.title} — Chimie Maison`, description: article.excerpt };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);

  return (
    <main>
      <article className="post">
        <span className="formula-eyebrow">{article.formula}</span>
        <h1>{article.title}</h1>
        <p className="standfirst">{article.excerpt}</p>
        <p className="byline">Rédigé par un ingénieur chimiste (ENSCM) — dosages vérifiés avant publication</p>

        <div className="post-body" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />

        <p className="trust-note">
          Chaque recette publiée sur ce site est relue et validée manuellement — dosages,
          mécanismes et points de sécurité — avant mise en ligne.
        </p>
      </article>
    </main>
  );
}
