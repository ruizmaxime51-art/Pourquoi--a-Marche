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
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    keywords: article.keywords || undefined,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [{ url: image, width: 1200, height: 800, alt: article.title }],
      publishedTime: article.date || undefined,
      modifiedTime: article.updated || article.date || undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }) {
  const article = await getArticle(params.slug);
  const related = getRelatedArticles(article);
  const image = article.image || DEFAULT_OG_IMAGE;
  const url = `${SITE_URL}/articles/${article.slug}`;
  const jsonLd = buildStructuredData(article, url, image);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
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

function buildStructuredData(article, url, image) {
  const howtos = Array.isArray(article.howtos) ? article.howtos : [];
  const faqs = Array.isArray(article.faq) ? article.faq : [];
  const howToIds = howtos.map((_, index) => `${url}#howto-${index + 1}`);
  const faqId = faqs.length ? `${url}#faq` : null;

  const articleEntity = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    name: article.title,
    description: article.excerpt,
    image: [`${SITE_URL}${image}`],
    datePublished: article.date || undefined,
    dateModified: article.updated || article.date || undefined,
    inLanguage: 'fr-FR',
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    mainEntity: [...howToIds.map((id) => ({ '@id': id })), ...(faqId ? [{ '@id': faqId }] : [])],
  };

  const howToEntities = howtos.map((howto, index) => ({
    '@type': 'HowTo',
    '@id': howToIds[index],
    name: howto.name,
    description: howto.description || article.excerpt,
    image: [`${SITE_URL}${howto.image || image}`],
    totalTime: howto.totalTime,
    yield: howto.yield,
    inLanguage: 'fr-FR',
    supply: normalizeItems(howto.supplies, 'HowToSupply'),
    tool: normalizeItems(howto.tools, 'HowToTool'),
    step: (howto.steps || []).map((step, stepIndex) => ({
      '@type': 'HowToStep',
      position: stepIndex + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `${SITE_URL}${step.image}` : undefined,
    })),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }));

  const faqEntity = faqs.length
    ? {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [articleEntity, ...howToEntities, ...(faqEntity ? [faqEntity] : [])],
  };
}

function normalizeItems(items, type) {
  return (items || []).map((item) => ({
    '@type': type,
    name: typeof item === 'string' ? item : item.name,
  }));
}
