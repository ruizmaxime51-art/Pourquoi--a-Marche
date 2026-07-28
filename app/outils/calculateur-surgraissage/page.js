import SuperfatCalculator from '@/app/_components/SuperfatCalculator';
import { affiliations } from '@/lib/affiliations';
import { buildPageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const metadata = buildPageMetadata({
  title: 'Calculateur de surgraissage et de soude pour savon',
  description:
    'Calculez la quantité théorique de NaOH ou KOH selon vos huiles, leur indice SAP, le surgraissage et la pureté de la base.',
  path: '/outils/calculateur-surgraissage',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Calculateur de surgraissage et de soude',
      url: `${SITE_URL}/outils/calculateur-surgraissage`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      inLanguage: 'fr-FR',
      description:
        'Calcul pédagogique de la quantité de NaOH ou KOH à partir des huiles, des indices de saponification, du surgraissage et de la pureté.',
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
          name: 'Calculateur de surgraissage',
          item: `${SITE_URL}/outils/calculateur-surgraissage`,
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

export default function SuperfatCalculatorPage() {
  const balance = affiliations['balance-bomata-01g'];
  const causticSoda = affiliations.soude;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="tool-hero wrap">
        <span className="formula-eyebrow">huiles × SAP × réduction ÷ pureté</span>
        <h1>Calculateur de surgraissage pour savon : quelle quantité de soude ?</h1>
        <p className="standfirst">
          Sélectionnez vos huiles, leur masse et le surgraissage souhaité. L’outil calcule la
          quantité théorique de soude NaOH ou de potasse KOH et montre aussi l’incertitude liée
          aux plages d’indices de saponification.
        </p>
      </section>

      <section className="wrap">
        <div className="article-links-block tool-intro-links">
          <h4>Avant de calculer</h4>
          <ul>
            <li>
              <a href="/articles/notion-saponification">
                Comprendre l’indice SAP, la réduction de base et la différence NaOH/KOH
              </a>
            </li>
            <li>
              <a href="/articles/savon-surgras-saponification">
                Voir l’exemple complet olive, coco et amande douce
              </a>
            </li>
            <li>
              <a href="/articles/gants-lunettes-risque-chimique">
                Choisir des protections réellement adaptées à une base corrosive
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="wrap" aria-label="Calculateur de saponification">
        <SuperfatCalculator />
      </section>

      <section className="wrap tool-editorial">
        <h2>Comment le calculateur détermine-t-il la quantité de soude ?</h2>
        <p>
          L’indice de saponification est conventionnellement exprimé en milligrammes de KOH
          nécessaires pour saponifier un gramme de corps gras. Pour chaque huile, l’outil multiplie
          sa masse par cet indice. Il convertit ensuite le besoin vers le NaOH lorsque vous avez
          choisi un savon solide, applique la réduction correspondant au surgraissage théorique,
          puis corrige uniquement si vous saisissez une pureté analytique précise.
        </p>

        <div className="tool-formula-box">
          <strong>Pour une huile et du NaOH</strong>
          <code>
            masse d’huile × (SAP KOH ÷ 1000) × (39,997 ÷ 56,1056) ×
            (1 − surgraissage ÷ 100)
          </code>
        </div>

        <p>
          Les valeurs proposées correspondent au milieu des plages publiées par le Codex pour les
          huiles nommées. C’est pourquoi le résultat principal est accompagné d’une fourchette :
          une huile naturelle n’a pas une composition moléculaire parfaitement constante. Lorsque
          votre fournisseur donne un indice mesuré pour le lot, choisissez « autre corps gras » et
          saisissez cette valeur.
        </p>

        <h2>Pourquoi le résultat reste-t-il théorique ?</h2>
        <p>
          La valeur SAP reflète la quantité d’acides gras libres et estérifiés et dépend de la
          composition moyenne du corps gras. La norme ISO 3657 décrit sa détermination
          expérimentale ; des travaux par RMN montrent également que cette valeur est reliée à la
          masse moléculaire moyenne des triacylglycérols. Le calcul traduit donc une analyse
          chimique en quantité de base, mais il ne remplace pas l’analyse de votre lot.
        </p>

        <div className="notice-box">
          <h4>Pureté : ne corrigez pas une simple mention « ≥ 99 % »</h4>
          <p>
            Une compensation de pureté augmente la masse pesée. Si l’étiquette fournit seulement
            une valeur minimale et que la pureté réelle est supérieure, cette correction peut
            ajouter trop de base. Laissez 100 % par défaut, ou saisissez uniquement une teneur
            exacte issue d’un certificat d’analyse.
          </p>
        </div>

        <h2>Sécurité avant toute fabrication</h2>
        <p>
          Le NaOH comme le KOH sont corrosifs et peuvent provoquer de graves brûlures de la peau et
          des lésions oculaires. Le calculateur n’autorise pas une lessive de soude déjà diluée :
          sa concentration, ses impuretés et ses additifs demanderaient un calcul distinct.
          Travaillez avec une balance à 0,1 g, un récipient compatible, des lunettes-masque et des
          gants chimiques, en versant toujours la base dans l’eau — jamais l’inverse.
        </p>

        <AffiliateCard product={balance} label="Voir la balance" />
        <AffiliateCard product={causticSoda} label="Voir la soude" />

        <div className="article-links-block">
          <h4>Continuer avec la méthode complète</h4>
          <ul>
            <li>
              <a href="/articles/materiel-savon-maison">
                Le matériel réellement nécessaire pour fabriquer du savon
              </a>
            </li>
            <li>
              <a href="/articles/quelle-balance-recettes-maison">
                Pourquoi une balance à 1 g ne suffit pas pour peser la soude
              </a>
            </li>
            <li>
              <a href="/articles/savon-maison-trop-mou">
                Diagnostiquer un savon qui reste mou après le démoulage
              </a>
            </li>
          </ul>
        </div>

        <h2>Sources utilisées</h2>
        <ol className="tool-source-list">
          <li>
            <a href="https://www.iso.org/standard/85171.html" target="_blank" rel="noopener noreferrer">
              ISO 3657:2023 — détermination de l’indice de saponification
            </a>
          </li>
          <li>
            <a
              href="https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex CXS 210-1999 — plages SAP des huiles végétales nommées
            </a>
          </li>
          <li>
            <a
              href="https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B33-1981%252FCXS_033e.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex CXS 33-1981 — huiles d’olive et huiles de grignons d’olive
            </a>
          </li>
          <li>
            <a
              href="https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex CXS 86-1981 — beurre de cacao
            </a>
          </li>
          <li>
            <a
              href="https://www.fao.org/fao-who-codexalimentarius/sh-proxy/hu/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex CXS 211-1999 — saindoux et suif
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.3390/foods11101466"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ivanova et al., 2022 — détermination de la valeur SAP par RMN, Foods 11, 1466
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.3390/app15073821"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stănescu et al., 2025 — formulation de savons à partir d’huiles végétales
            </a>
          </li>
          <li>
            <a
              href="https://www.inrs.fr/publications/bdd/fichetox/fiche.html?refINRS=FICHETOX_20"
              target="_blank"
              rel="noopener noreferrer"
            >
              INRS FT 20 — hydroxyde de sodium et solutions aqueuses
            </a>
          </li>
        </ol>
      </section>
    </main>
  );
}
