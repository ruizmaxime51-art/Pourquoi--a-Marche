'use client';

export default function PrintRecipeButton({ label = 'Imprimer la fiche recette' }) {
  return (
    <div className="recipe-print-wrap">
      <button type="button" className="recipe-print-button" onClick={() => window.print()}>
        {label}
      </button>
    </div>
  );
}
