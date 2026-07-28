import Link from 'next/link';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Outils pratiques',
  description: 'Calculateurs et simulateurs pour adapter les recettes maison avec une logique chimique.',
  path: '/outils',
});

export default function ToolsPage() {
  return (
    <main>
      <section className="category-hero wrap-wide">
        <div>
          <span className="formula-eyebrow">calculer · adapter · vérifier</span>
          <h1>Outils pratiques</h1>
          <p className="lede">Des petits calculateurs pour transformer la théorie chimique en décisions concrètes : dosage, eau dure, pH, sécurité.</p>
        </div>
        <div className="category-hero-card">
          <strong>Calculs transparents</strong>
          <p>Chaque outil explique sa formule, ses limites et les précautions nécessaires avant de passer à la pratique.</p>
        </div>
      </section>
      <section className="category-content wrap-wide">
        <div className="path-grid">
          <Link href="/outils/lessive-eau-dure" className="path-card">
            <span>01</span>
            <h3>Lessive au savon et eau dure</h3>
            <p>Évaluer le risque de dépôt selon la dureté de l'eau, la température et la dose de savon.</p>
          </Link>
          <Link href="/outils/calculateur-surgraissage" className="path-card">
            <span>02</span>
            <h3>Calculateur de surgraissage</h3>
            <p>Calculer la quantité théorique de soude ou de potasse selon les huiles, leur SAP, la pureté et le surgras.</p>
          </Link>
          <Link href="/outils/choisir-acide-ou-base" className="path-card">
            <span>03</span>
            <h3>Choisir acide, base ou neutre</h3>
            <p>Diagnostiquer la tache, la surface et les produits déjà présents avant de nettoyer.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
