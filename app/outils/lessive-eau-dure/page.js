import HardWaterLaundryTool from '@/app/_components/HardWaterLaundryTool';

export const metadata = {
  title: 'Calculateur lessive au savon et eau dure',
  description: "Évaluez le risque de dépôt d'une lessive au savon selon la dureté de votre eau.",
};

export default function HardWaterToolPage() {
  return (
    <main>
      <section className="tool-hero wrap">
        <span className="formula-eyebrow">Ca²⁺ + savon → dépôt insoluble</span>
        <h1>Lessive au savon : votre eau risque-t-elle de faire déposer ?</h1>
        <p className="standfirst">Un outil pédagogique pour visualiser l'impact de la dureté de l'eau, de la température et du dosage sur une recette de lessive au savon.</p>
      </section>
      <section className="wrap">
        <HardWaterLaundryTool />
      </section>
    </main>
  );
}
