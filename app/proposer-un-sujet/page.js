import ProposalForm from '@/app/_components/ProposalForm';
import { getAllArticlesMeta, getArticleMeta } from '@/lib/articles';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Proposer un sujet ou signaler une erreur',
  description:
    'Envoyer en privé une idée d’article ou signaler une correction à apporter sur Chimie Maison.',
  path: '/proposer-un-sujet',
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
});

export default async function ProposalPage({ searchParams }) {
  const query = await searchParams;
  const requestedSlug = typeof query?.article === 'string' ? query.article : '';
  const requestedType = query?.type === 'correction' ? 'correction' : 'suggestion';
  const initialArticle = requestedSlug ? getArticleMeta(requestedSlug) : null;
  const initialType = requestedType === 'correction' && initialArticle ? 'correction' : 'suggestion';
  const articles = getAllArticlesMeta().map(({ slug, title, category }) => ({
    slug,
    title,
    category,
  }));

  return (
    <main>
      <section className="proposal-hero">
        <span className="formula-eyebrow">participer · corriger · proposer</span>
        <h1>Proposer un sujet ou signaler une erreur</h1>
        <p>
          Une question mérite un nouvel article&nbsp;? Un dosage, une explication ou une source
          vous semble incorrecte&nbsp;? Décrivez-le ici. Chaque message est lu avant toute
          modification ou publication.
        </p>
      </section>

      <section className="proposal-shell" aria-label="Formulaire de proposition">
        <ProposalForm
          articles={articles}
          initialArticle={
            initialArticle
              ? {
                  slug: initialArticle.slug,
                  title: initialArticle.title,
                  category: initialArticle.category,
                }
              : null
          }
          initialType={initialType}
        />
      </section>
    </main>
  );
}
