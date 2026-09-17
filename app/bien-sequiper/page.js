import EquipmentFinder from '../_components/EquipmentFinder';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories['bien-sequiper'].title,
  description: categories['bien-sequiper'].tagline,
  path: '/bien-sequiper',
});

export default function Page() {
  return <main>
    <section className="category-hero wrap-wide"><div><span className="section-kicker">Le bon outil pour le bon usage</span><h1>Bien s’équiper, sans achats inutiles</h1><p className="lede">Partez de votre projet et de ce que vous avez déjà. Ces guides expliquent les critères qui comptent, les limites et les options du catalogue.</p></div><div className="category-hero-card"><strong>Comment les produits sont choisis</strong><p>Nos comparatifs sont documentaires. Ils ne constituent pas des essais de laboratoire. Les liens marchands sont signalés comme affiliés.</p><a href="/a-propos#methodologie" className="text-link">Lire la méthode de sélection →</a></div></section>
    <EquipmentFinder />
  </main>;
}
