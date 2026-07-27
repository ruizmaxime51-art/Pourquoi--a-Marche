# Version 41 — fiches recettes unifiées

Date : 27 juillet 2026.

## Affichage des recettes

- Les six articles déclarés comme recettes utilisent le même bloc blanc que les deux kimchis.
- Chaque fiche commence par quatre repères visibles : préparation, attente ou fermentation,
  contrôle utile et rendement.
- Les ingrédients, quantités, rôles et étapes restent regroupés dans la fiche afin de distinguer
  immédiatement le protocole du reste de l’article scientifique.
- Les tableaux sont placés dans un conteneur défilable sur petit écran.
- Les étapes illustrées conservent les images en vue subjective déjà validées.
- La page des nettoyants contient deux fiches séparées : détartrant acide et dégraissant alcalin.
- Le bouton d’impression apparaît désormais pour les recettes structurées en `Recipe` comme pour
  celles structurées en `HowTo`.

## Données structurées

- `Recipe` : kimchi classique, kimchi végétarien, levain naturel et carottes
  lacto-fermentées.
- `HowTo` : savon surgras, détartrant à l’acide citrique et dégraissant au carbonate de sodium.
- Les données visibles et les données structurées utilisent les mêmes quantités, durées,
  rendements et étapes.

## Images du kimchi

- Les images principales de mise en bocal des deux kimchis ont été remplacées.
- Une main maintient désormais le bocal uniquement par l’extérieur.
- Le tassement est effectué avec un pilon alimentaire introduit normalement par l’ouverture.
- Les mêmes fichiers étant utilisés comme image principale et comme étape, les six emplacements
  concernés ont été corrigés sans créer de doublons.

## Contrôles

- Build Next.js : 41 pages statiques générées.
- Audit interne : 22 articles, aucune ancre ou image cassée, aucun produit inconnu et aucun lien
  Amazon codé en dur.
- Rendu serveur : un H1 et une canonique sur chaque recette, une fiche par article et deux fiches
  sur la page des nettoyants.
- Affiliation : les ancres `Matériel` et le catalogue existant restent cohérents.
