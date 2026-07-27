import HardWaterLaundryTool from '@/app/_components/HardWaterLaundryTool';
import { affiliations } from '@/lib/affiliations';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: 'Lessive au savon et eau dure : calculateur',
  description:
    'Estimez le risque de traces et de dépôts d’une lessive au savon selon la dureté de l’eau, la température et le dosage.',
  path: '/outils/lessive-eau-dure',
});

export default function HardWaterToolPage() {
  const tester = affiliations['testeur-durete-agualeve'];

  return (
    <main>
      <section className="tool-hero wrap">
        <span className="formula-eyebrow">Ca²⁺ + savon → dépôt insoluble</span>
        <h1>Lessive au savon : votre eau risque-t-elle de faire déposer ?</h1>
        <p className="standfirst">
          Un outil pédagogique pour visualiser l'impact de la dureté de l'eau, de la température
          et du dosage sur une recette de lessive au savon.
        </p>
      </section>

      <section className="wrap">
        <HardWaterLaundryTool />
      </section>


      <section className="wrap">
        <div className="article-links-block">
          <h4>Comprendre le résultat et corriger le problème</h4>
          <ul>
            <li><a href="/articles/lessive-maison-traces-blanches">Pourquoi la lessive maison laisse des traces blanches</a></li>
            <li><a href="/articles/notion-tensioactifs">Pourquoi le savon précipite dans l’eau dure</a></li>
            <li><a href="/articles/quelle-balance-recettes-maison">Choisir une balance pour doser correctement</a></li>
          </ul>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-block" id="mat-testeur-durete">
          <div className="cta-text">
            <strong>{tester.nom}</strong>
            <span>{tester.descriptif}</span>
          </div>
          <div className="cta-action">
            <a
              className="cta-button"
              href={tester.url}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              Voir le testeur →
            </a>
            <span className="cta-reassurance">{tester.reassurance}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
