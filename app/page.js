import Link from 'next/link';
import { categoryList } from '@/lib/categories';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="kicker">Chimie appliquée au fait maison</div>
        <h1>Fabriquer soi-même, et comprendre la chimie qui fait que ça marche.</h1>
        <p className="lede">
          Cosmétiques, produits d'entretien, conserves, fermentations : chaque recette est
          calculée, expliquée et vérifiée — dosages, réactions, sécurité. Pas une liste
          d'ingrédients recopiée ailleurs.
        </p>
      </section>

      <div className="hero-rule"><hr /></div>

      <div className="category-grid">
        {categoryList.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="category-card">
            <span className="formula-eyebrow">{cat.formula}</span>
            <h3>{cat.title} <span className="arr">→</span></h3>
            <p>{cat.tagline}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
