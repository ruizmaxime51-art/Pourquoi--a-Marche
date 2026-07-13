import Link from 'next/link';

export const metadata = {
  title: 'Outils pratiques',
  description: 'Calculateurs et simulateurs pour adapter les recettes maison avec une logique chimique.',
};

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
          <strong>À venir</strong>
          <p>Cette rubrique peut devenir un vrai différenciateur SEO et affiliation : l'utilisateur ne lit pas seulement, il teste son cas.</p>
        </div>
      </section>
      <section className="category-content wrap-wide">
        <div className="path-grid">
          <Link href="/outils/lessive-eau-dure" className="path-card">
            <span>01</span>
            <h3>Lessive au savon et eau dure</h3>
            <p>Évaluer le risque de dépôt selon la dureté de l'eau, la température et la dose de savon.</p>
          </Link>
          <div className="path-card ghost">
            <span>02</span>
            <h3>Calculateur de surgraissage</h3>
            <p>Prochain outil : quantité de soude/potasse selon les huiles et le surgras souhaité.</p>
          </div>
          <div className="path-card ghost">
            <span>03</span>
            <h3>Choisir acide ou basique</h3>
            <p>Prochain outil : détartrer, dégraisser, désinfecter sans mélanges dangereux.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
