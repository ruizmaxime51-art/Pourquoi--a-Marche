# v20 — points 1, 3, 4, 5 et 6

## Point 1 — corrections scientifiques

- Une bandelette de pH n’est plus présentée comme une preuve d’absence de soude libre.
- Ajout d’une référence à la méthode ISO de détermination de l’alcali caustique libre.
- La cure est décrite comme une phase de perte d’eau, de durcissement et de stabilisation.
- Les gants sont demandés pour la manipulation des cristaux de soude.
- Ajout des sources ISO, étude de cure et PubChem.

## Point 3 — performance des images

- Conversion des 33 visuels en WebP.
- Poids cumulé des visuels : environ 22,33 Mo → 3.32 Mo.
- Réduction estimée : 85.1 %.
- Utilisation de `next/image` dans les cartes et les héros.
- Dimensions, lazy loading et décodage asynchrone pour les images des articles.
- Suppression des anciens PNG, JPG et SVG inutilisés.

## Point 4 — navigation

Menu principal :

- Recettes, avec menu déroulant ;
- Comprendre ;
- Outils ;
- Bien s’équiper ;
- À propos.

Les quatre univers de recettes restent accessibles dans le menu déroulant.

## Point 5 — affiliation

- Suppression des blocs finaux « Tout le matériel de cet article ».
- Conservation des encadrés affiliés placés au moment où le matériel devient utile.
- Suppression du CTA bandelettes pH dans la recette savon.

## Point 6 — données structurées

- Article + HowTo complet pour le savon.
- Deux HowTo distincts pour les deux nettoyants.
- HowTo complet pour le levain.
- HowTo complet pour les carottes lacto-fermentées.
- Ajout de `step`, `supply`, `tool`, `totalTime` et `yield`.
- Dates du sitemap désormais issues du frontmatter.
