import { getAllSlugs, getArticle, getRelatedArticles } from '@/lib/articles';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site';
import { categories } from '@/lib/categories';
import { imageDimensions } from '@/lib/imageDimensions';
import { notFound } from 'next/navigation';
import ArticleHero from '@/app/_components/ArticleHero';
import Breadcrumbs from '@/app/_components/Breadcrumbs';
import RelatedArticles from '@/app/_components/RelatedArticles';
import TakeawayBox from '@/app/_components/TakeawayBox';
import PrintRecipeButton from '@/app/_components/PrintRecipeButton';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
  const image = article.image || DEFAULT_OG_IMAGE;
  const dimensions = imageDimensions[image] || { width: 1200, height: 630 };
  const pinterestDimensions = article.pinterestImage
    ? imageDimensions[article.pinterestImage] || { width: 1000, height: 1500 }
    : null;
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
      images: [
        { url: image, ...dimensions, alt: article.imageAlt || article.title },
        ...(article.pinterestImage
          ? [{
              url: article.pinterestImage,
              ...pinterestDimensions,
              alt: article.pinterestAlt || article.title,
            }]
          : []),
      ],
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
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();
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
      <Breadcrumbs article={article} />
      <ArticleHero article={article} />
      <div className="article-shell" id="lecture">
        <article className="post">
          <TakeawayBox items={article.takeaways} />
          {article.type === 'comparatif' && (
            <aside className="review-method-note" aria-label="Méthode du comparatif">
              <strong>Méthode du comparatif :</strong> sélection documentaire fondée sur les
              caractéristiques annoncées, les normes et les fiches fabricants consultées. Les
              produits n’ont pas été testés en laboratoire par Chimie Maison. Vérifiez la fiche
              et le marquage du modèle exact avant l’achat.
            </aside>
          )}
          {(article.recipe || article.howtos?.length > 0) && (
            <PrintRecipeButton label={article.printLabel} />
          )}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          <p className="trust-note">
            Méthode, limites et nature des illustrations :{' '}
            <a href="/a-propos#methodologie">consulter la méthode éditoriale de Chimie Maison</a>.
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
  const howToIds = howtos.map((_, index) => `${url}#howto-${index + 1}`);
  const recipeId = article.recipe ? `${url}#recipe` : null;
  const category = categories[article.category];

  const articleEntity = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    name: article.title,
    description: article.excerpt,
    image: [
      `${SITE_URL}${image}`,
      ...(article.pinterestImage ? [`${SITE_URL}${article.pinterestImage}`] : []),
    ],
    datePublished: article.date || undefined,
    dateModified: article.updated || article.date || undefined,
    inLanguage: 'fr-FR',
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    mainEntity: [
      ...(recipeId ? [{ '@id': recipeId }] : []),
      ...howToIds.map((id) => ({ '@id': id })),
    ],
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

  const recipeEntity = article.recipe
    ? {
        '@type': 'Recipe',
        '@id': recipeId,
        name: article.recipe.name || article.title,
        description: article.recipe.description || article.excerpt,
        image: [
          `${SITE_URL}${article.recipe.image || image}`,
          ...(article.pinterestImage ? [`${SITE_URL}${article.pinterestImage}`] : []),
        ],
        author: { '@type': 'Organization', name: SITE_NAME },
        datePublished: article.date || undefined,
        dateModified: article.updated || article.date || undefined,
        prepTime: article.recipe.prepTime,
        totalTime: article.recipe.totalTime,
        recipeYield: article.recipe.yield,
        recipeCategory: article.recipe.category,
        recipeCuisine: article.recipe.cuisine,
        suitableForDiet: article.recipe.suitableForDiet,
        keywords: Array.isArray(article.keywords) ? article.keywords.join(', ') : article.keywords,
        recipeIngredient: article.recipe.ingredients || [],
        recipeInstructions: (article.recipe.steps || []).map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
          image: step.image ? `${SITE_URL}${step.image}` : undefined,
        })),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      }
    : null;

  const breadcrumbEntity = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: `${SITE_URL}/`,
      },
      ...(category
        ? [{
            '@type': 'ListItem',
            position: 2,
            name: category.label,
            item: `${SITE_URL}/${category.slug}`,
          }]
        : []),
      {
        '@type': 'ListItem',
        position: category ? 3 : 2,
        name: article.h1 || article.title,
        item: url,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      articleEntity,
      breadcrumbEntity,
      ...(recipeEntity ? [recipeEntity] : []),
      ...howToEntities,
    ],
  };
}

function normalizeItems(items, type) {
  return (items || []).map((item) => ({
    '@type': type,
    name: typeof item === 'string' ? item : item.name,
  }));
}
