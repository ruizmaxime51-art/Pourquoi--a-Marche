import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedArticles, getArticleMeta } from '@/lib/articles';
import { journeys, problemSlugs } from '@/lib/journeys';
import { buildPageMetadata } from '@/lib/metadata';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
import ArticleCard from './_components/ArticleCard';

export const metadata = buildPageMetadata({ title: 'Recettes, méthodes et matériel pour le fait maison', description: SITE_DESCRIPTION, path: '/' });

export default function Home() {
  const featured = getFeaturedArticles(4);
  const problems = problemSlugs.map(getArticleMeta);
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/`, logo: `${SITE_URL}/icon.svg` },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/`, description: SITE_DESCRIPTION, inLanguage: 'fr-FR', publisher: { '@id': `${SITE_URL}/#organization` } },
  ] };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="home-intro wrap-wide">
        <div className="home-intro-copy">
          <p className="section-kicker">Le fait maison, avec méthode</p>
          <h1>Comprendre.<br />Faire.<br /><em>Mieux choisir.</em></h1>
          <p className="lede">Un savon à formuler, une tache à enlever, un bocal à préparer ? La chimie vous aide à choisir le bon geste et le matériel qui sert vraiment.</p>
          <div className="hero-actions"><Link href="/recettes" className="primary-pill">Trouver une recette ou une méthode</Link><Link href="#depannage" className="secondary-pill">Résoudre un problème</Link></div>
          <p className="home-proof">Explications sourcées · Limites explicites · Matériel choisi selon l’usage</p>
        </div>
        <div className="home-story">
          <Link href="/articles/confiture-sans-cuisson-crufiture" className="home-story-link">
            <div className="home-story-image"><Image src="/images/crufiture-hero-photo.webp" alt="Pots de confiture d’abricots et fruits frais, photographie d’illustration" fill priority sizes="(max-width: 760px) 100vw, 42vw" /></div>
            <div className="home-story-caption"><span className="section-kicker">Une idée à examiner</span><h2>Une confiture sans cuisson qui se conserve ?</h2><p>Comprendre ce que le sucre change — et ce que le Brix ne prouve pas.</p><span className="text-link">Lire l’enquête →</span></div>
          </Link>
          <p className="photo-source">Photo : <a href="https://unsplash.com/photos/two-jars-of-apricot-jam-with-fresh-apricots-halxQItaUrE">Elena Leya / Unsplash</a> · illustration de confiture</p>
        </div>
      </section>
      <section className="featured-section wrap-wide" aria-labelledby="home-recipes">
        <div className="section-headline"><div><div className="section-kicker">Passer à la pratique</div><h2 id="home-recipes">Un projet à faire chez vous</h2></div><Link href="/recettes" className="text-link">Toutes les recettes et méthodes →</Link></div>
        <div className="featured-grid">{featured.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
      <section id="depannage" className="problem-section wrap-wide" aria-labelledby="home-problems">
        <div className="section-headline"><div><div className="section-kicker">Avant de recommencer</div><h2 id="home-problems">Qu’est-ce qui ne marche pas ?</h2></div></div>
        <div className="problem-grid">{problems.map((article, index) => <Link className="problem-card" href={`/articles/${article.slug}`} key={article.slug}><span className="problem-number">0{index + 1}</span><h3>{article.title}</h3><span className="text-link">Comprendre le problème →</span></Link>)}</div>
      </section>
      <section className="project-section wrap-wide" aria-labelledby="home-projects">
        <div className="section-headline"><div><div className="section-kicker">Du mécanisme au bon outil</div><h2 id="home-projects">Choisissez votre point de départ</h2></div><Link href="/bien-sequiper" className="text-link">Tous les guides de matériel →</Link></div>
        <div className="project-grid">{['savon', 'entretien', 'fermentation'].map((id) => <div className="project-card" key={id}><h3>{journeys[id].title}</h3><p>{journeys[id].description}</p><ul>{journeys[id].steps.filter((step) => step.role !== 'depannage').slice(0, 3).map((step) => <li key={step.href}><Link href={step.href} data-cm-event="journey_click" data-cm-target={step.role}>{step.label} <span aria-hidden="true">→</span></Link></li>)}</ul></div>)}</div>
      </section>
      <section className="science-method wrap-wide">
        <div className="method-copy"><div className="section-kicker">La différence Chimie Maison</div><h2>Le « pourquoi » aide à faire le bon choix.</h2></div>
        <div className="method-grid"><div><strong>Comprendre le mécanisme</strong><p>pH, saponification ou fermentation : des notions pour expliquer ce que vous observez.</p><Link href="/comprendre" className="text-link">Explorer les notions →</Link></div><div><strong>Vérifier les limites</strong><p>Les conditions d’emploi et les incertitudes font partie de chaque méthode.</p><Link href="/a-propos#methodologie" className="text-link">Notre méthode éditoriale →</Link></div><div><strong>Acheter avec une raison</strong><p>Des critères techniques et des alternatives pour éviter les accessoires superflus.</p><Link href="/bien-sequiper" className="text-link">Choisir le matériel →</Link></div></div>
      </section>
    </main>
  );
}
