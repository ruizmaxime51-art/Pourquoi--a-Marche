import HardWaterLaundryTool from '@/app/_components/HardWaterLaundryTool';

export default function HardWaterToolPage() {
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
            <strong>Testeur de dureté de l’eau en degrés français</strong>
            <span>AGUALEVE — pour mesurer l’eau du robinet avant d’adapter une lessive au savon</span>
          </div>
          <div className="cta-action">
            <a
              className="cta-button"
              href="https://www.amazon.fr/AGUALEVE%C2%AE-Fran%C3%A7ais-Nouveau-pr%C3%A9cise-Qualit%C3%A9/dp/B0CJ9QQ2M2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2XXHY24JQ0OPO&dib=eyJ2IjoiMSJ9.If30TSvZ37_2UFwtz2JdRuGnMrU5ZlrupTLSWKQrO_yJO2SRzA1Wl1djniZkPZCaVvAomst8xBmKifT2F2mPyGT_v6vD5rBrKU7geHcbovzSmzO9ukZa4G3E24LrO5JQ1ABVi94TQtdv2VEjpcB0-PeuSgq8YGEVAWVp8WQ5GdB3F9uJxnkiuXPpzzDGiHCpxivWBAR_BQTibrn8Il7dN08LQ23BAz8b2OBIvchGcVWFiGCosce-gFtmyg_5lfMrXspDdgh5ao.LYInu6n8x5eYI3db6157JrypmXbqyz0j-eqp-6_0wek&dib_tag=se&keywords=calculateur+duret%C3%A9+eau&qid=1784101513&sprefix=calculateur+duret%C3%A9+eau+%2Caps%2C197&sr=8-1&linkCode=ll2&tag=maxscience06-21&linkId=a0d462012506dc9ce3bd7e0335a8e753&ref_=as_li_ss_tl"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
            >
              Voir le testeur →
            </a>
            <span className="cta-reassurance">Lien affilié</span>
          </div>
        </div>
      </section>
    </main>
  );
}
