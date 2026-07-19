'use client';

export default function PrintRecipeButton() {
  return (
    <div className="recipe-print-wrap">
      <button type="button" className="recipe-print-button" onClick={() => window.print()}>
        Imprimer la fiche recette
      </button>
    </div>
  );
}
