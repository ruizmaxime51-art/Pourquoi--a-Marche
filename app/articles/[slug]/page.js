import { getAllSlugs, getArticle, getRelatedArticles } from '@/lib/articles';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site';
import ArticleHero from '@/app/_components/ArticleHero';
import RelatedArticles from '@/app/_components/RelatedArticles';
import TakeawayBox from '@/app/_components/TakeawayBox';

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
      images: [{ url: image, width: 1200, height: 800, alt: article.title }],
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
  const related = getRelatedArticles(article);
  const image = article.image || DEFAULT_OG_IMAGE;
  const url = `${SITE_URL}/articles/${article.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': article.type === 'recette' ? 'HowTo' : 'Article',
    headline: article.title,
    name: article.title,
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
      <ArticleHero article={article} />
      <div className="article-shell" id="lecture">
        <article className="post">
          <TakeawayBox items={article.takeaways} />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          <p className="trust-note">
            Chaque recette et notion publiée sur ce site est relue manuellement : dosages,
            mécanismes, limites et points de sécurité sont vérifiés avant mise en ligne.
          </p>
        </article>
      </div>
      <div className="wrap-wide">
        <RelatedArticles articles={related} />
      </div>
    </main>
  );
}
