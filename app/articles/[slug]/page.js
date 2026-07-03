import { getAllSlugs, getArticle } from '@/lib/articles';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = await getArticle(params.slug);
  const image = article.image || DEFAULT_OG_IMAGE;
  const url = `${SITE_URL}/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.excerpt,
      images: [{ url: image, width: 1000, height: 750, alt: article.title }],
      publishedTime: article.date || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);
  const image = article.image || DEFAULT_OG_IMAGE;
  const url = `${SITE_URL}/articles/${article.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}${image}`],
    datePublished: article.date || undefined,
    dateModified: article.date || undefined,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
