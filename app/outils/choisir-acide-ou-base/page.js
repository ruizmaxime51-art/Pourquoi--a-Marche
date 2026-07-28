import AcidBaseChooser from '@/app/_components/AcidBaseChooser';
import { affiliations } from '@/lib/affiliations';
import { buildPageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Acide ou base : quel produit utiliser pour nettoyer ?',
  description:
    'Choisissez un nettoyant acide, alcalin, neutre ou spécifique selon la tache, la surface et les produits déjà présents, sans mélange dangereux.',
  path: '/outils/choisir-acide-ou-base',
});

const faq = [
  {
    question: 'Faut-il un produit acide ou basique pour enlever le calcaire ?',
    answer:
      'Un produit acide est cohérent pour dissoudre le carbonate de calcium, mais uniquement sur une surface compatible. Il faut éviter les acides sur le marbre, le travertin et les autres pierres calcaires.',
  },
  {
    question: 'Quel pH choisir pour enlever la graisse ?',
    answer:
      'Un dégraissant alcalin peut aider à décoller les graisses sur une surface compatible. Sur l’aluminium, le bois, une peinture ou un plastique fragile, il vaut mieux choisir un produit neutre ou explicitement compatible.',
  },
  {
    question: 'Peut-on utiliser un acide après de la Javel ?',
    answer:
      'Non. Un acide au contact de l’hypochlorite peut libérer du chlore gazeux toxique. Il ne faut pas ajouter un autre produit sur de la Javel.',
  },
  {
    question: 'Un produit acide ou basique désinfecte-t-il automatiquement ?',
    answer:
      'Non. Nettoyer et désinfecter sont deux opérations différentes. Il faut d’abord nettoyer puis, si nécessaire, utiliser seul un désinfectant autorisé en respectant sa dilution et son temps de contact.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Choisir un nettoyant acide, basique ou neutre',
      url: `${SITE_URL}/outils/choisir-acide-ou-base`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      inLanguage: 'fr-FR',
      description:
        'Assistant pédagogique pour choisir une famille de nettoyant selon la salissure, le matériau et le risque de mélange.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Outils',
          item: `${SITE_URL}/outils`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Choisir acide ou base',
          item: `${SITE_URL}/outils/choisir-acide-ou-base`,
        },
      ],
    },
  ],
};

function AffiliateCard({ product, label }) {
  return (
    <div className="cta-block">
      <div className="cta-text">
        <strong>{product.nom}</strong>
        <span>{product.descriptif}</span>
      </div>
      <div className="cta-action">
        <a
          className="cta-button"
          href={product.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
        >
          {label} →
        </a>
        <span className="cta-reassurance">{product.reassurance}</span>
      </div>
    </div>
  );
}

export default function AcidBaseChooserPage() {
  const citricAcid = affiliations['acide-citrique'];
  const washingSoda = affiliations['cristaux-soude'];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="tool-hero wrap">
        <span className="formula-eyebrow">tache + surface + produit présent</span>
        <h1>Acide ou base : quel produit utiliser pour nettoyer ?</h1>
        <p className="standfirst">
          Indiquez la tâche à réaliser, le matériau et ce qui a déjà été appliqué. L’assistant
          propose une famille de produit — acide, alcaline, neutre ou spécifique — et bloque les
          mélanges dangereux.
        </p>
      </section>

      <section className="wrap">
        <div className="article-links-block tool-intro-links">
          <h4>Le principe en une phrase</h4>
          <ul>
            <li>Calcaire : acide, seulement sur un support compatible.</li>
            <li>Graisse : alcalin ou tensioactif, selon la surface.</li>
            <li>Javel déjà présente : aucun autre produit.</li>
          </ul>
        </div>
        <AcidBaseChooser />
      </section>

      <section className="wrap tool-editorial">
        <h2>Pourquoi l’outil pose trois questions</h2>
        <p>
          Choisir uniquement d’après le pH serait incomplet. La nature du dépôt indique la chimie
          utile, mais le matériau détermine ce qu’il peut supporter. Enfin, un produit déjà présent
          peut transformer un simple nettoyage en exposition chimique.
        </p>

        <div className="decision-rule-grid">
          <article>
            <span>01</span>
            <h3>La tâche</h3>
            <p>Un acide réagit avec le calcaire ; une base et les tensioactifs aident sur les graisses.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Le support</h3>
            <p>Un acide attaque les pierres calcaires ; un alcalin fort peut attaquer l’aluminium.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Le produit présent</h3>
            <p>Javel + acide peut libérer du chlore ; Javel + ammoniaque forme des chloramines.</p>
          </article>
        </div>

        <h2>Produits correspondant aux deux familles principales</h2>
        <p>
          Ces liens ne sont utiles que si le résultat de l’assistant recommande cette famille et
          si l’étiquette confirme la compatibilité avec votre surface. Il ne faut jamais acheter
          un produit pour le superposer à un autre.
        </p>
        <AffiliateCard product={citricAcid} label="Voir l’acide citrique" />
        <AffiliateCard product={washingSoda} label="Voir les cristaux de soude" />

        <div className="article-links-block">
          <h4>Comprendre et appliquer le résultat</h4>
          <ul>
            <li>
              <a href="/articles/notion-ph-nettoyants">
                pH des nettoyants : acide, base, neutralisation et mélanges dangereux
              </a>
            </li>
            <li>
              <a href="/articles/nettoyant-ph-melanges-dangereux">
                Préparer séparément un détartrant et un dégraissant
              </a>
            </li>
            <li>
              <a href="/articles/flacon-nettoyant-maison">
                Choisir un flacon, séparer les produits et étiqueter
              </a>
            </li>
          </ul>
        </div>

        <h2>Questions fréquentes</h2>
        <div className="faq-list">
          {faq.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <h2>Sources de sécurité et de compatibilité</h2>
        <ol className="tool-source-list">
          <li>
            <a
              href="https://www.inrs.fr/dam/ficheTox/FicheFicheTox/FICHETOX_157-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              INRS FT 157 — eau de Javel : réactions avec les acides et l’ammoniaque
            </a>
          </li>
          <li>
            <a
              href="https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-152.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              INRS ED 152 — risque chimique pendant les travaux de nettoyage
            </a>
          </li>
          <li>
            <a
              href="https://vigilanses.anses.fr/sites/default/files/VigilAnses_N25_DIY.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anses, Vigil’Anses n°25 — recettes DIY à ne pas réaliser
            </a>
          </li>
          <li>
            <a
              href="https://www.usgs.gov/faqs/how-does-acid-precipitation-affect-marble-and-limestone-buildings"
              target="_blank"
              rel="noopener noreferrer"
            >
              USGS — réaction des acides avec la calcite du marbre et du calcaire
            </a>
          </li>
          <li>
            <a
              href="https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=246&toxid=45"
              target="_blank"
              rel="noopener noreferrer"
            >
              CDC/ATSDR — incompatibilités de l’hydroxyde de sodium avec l’aluminium
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
}
