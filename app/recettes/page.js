import Link from 'next/link';
import { getAllArticlesMeta } from '@/lib/articles';
import { problemSlugs } from '@/lib/journeys';
import { buildPageMetadata } from '@/lib/metadata';
import ArticleCard from '../_components/ArticleCard';

export const metadata = buildPageMetadata({ title: 'Recettes et méthodes maison', description: 'Savon, kimchi, levain, entretien : choisissez une recette, une méthode pratique ou un guide pour comprendre un problème.', path: '/recettes' });

export default function RecettesPage() {
  const all = getAllArticlesMeta();
  const recipes = all.filter((article) => article.type === 'recette');
  const problems = problemSlugs.map((slug) => all.find((article) => article.slug === slug));
  const guides = all.filter((article) => article.type === 'guide' && article.category !== 'bien-sequiper' && !problemSlugs.includes(article.slug));
  return <main>
    <section className="category-hero wrap-wide"><div><span className="section-kicker">Choisir une action</span><h1>Recettes et méthodes maison</h1><p className="lede">Commencez par ce que vous voulez faire. Les recettes détaillent les étapes ; les guides aident à choisir une méthode ou à comprendre un résultat inattendu.</p></div><div className="category-hero-card"><strong>Avant de commencer</strong><p>Lisez les conditions d’emploi et les précautions, puis vérifiez le matériel déjà disponible chez vous.</p><Link href="/bien-sequiper" className="text-link">Choisir le matériel utile →</Link></div></section>
    <nav className="section-tabs wrap-wide" aria-label="Contenus pratiques"><a href="#recettes">Recettes pas à pas</a><a href="#methodes">Méthodes et conservation</a><a href="#depannage">Dépannage</a></nav>
    <Listing id="recettes" title="Les recettes pas à pas" intro="Des préparations avec des ingrédients et un déroulé. Consultez les précautions propres à chaque recette." articles={recipes} />
    <Listing id="methodes" title="Choisir et appliquer une méthode" intro="Enquêtes, entretien du linge et conservation : des réponses pratiques dont les limites sont expliquées." articles={guides} />
    <Listing id="depannage" title="Comprendre ce qui ne fonctionne pas" intro="Observez le problème avant de modifier une formule ou d’acheter un produit." articles={problems} />
  </main>;
}
function Listing({ id, title, intro, articles }) {
  return <section id={id} className="featured-section wrap-wide"><div className="section-headline"><div><h2>{title}</h2><p>{intro}</p></div></div><div className="featured-grid listing-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section>;
}
