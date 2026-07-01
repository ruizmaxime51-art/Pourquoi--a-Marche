import Link from 'next/link';
import { categoryList } from '@/lib/categories';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <span className="formula-eyebrow">ingénieur chimiste · fait maison</span>
        <h1>Fabriquer soi-même, et comprendre pourquoi ça marche.</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-soft)', maxWidth: 620 }}>
          Cosmétiques, produits d&apos;entretien, conserves, fermentations : chaque recette est
          expliquée avec la chimie derrière — dosages, réactions, sécurité — pas juste une liste
          d&apos;ingrédients recopiée.
        </p>
      </section>

      <div className="category-grid">
        {categoryList.map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="category-card">
            <span className="formula-eyebrow">{cat.formula}</span>
            <h3>{cat.title}</h3>
            <p>{cat.tagline}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
