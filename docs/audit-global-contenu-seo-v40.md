# Audit global contenu et SEO — version 40

Date de contrôle final : 27 juillet 2026.

Périmètre : l’ensemble du site généré, les 22 articles, les pages catégories, les outils, les
images, les données structurées, les références et le catalogue d’affiliation.

## Résultat

Les erreurs bloquantes relevées en version 39 ont été corrigées. Le site peut être publié après
installation des dépendances et compilation. Les images générées sont déclarées comme des
illustrations éditoriales : elles ne constituent ni une preuve de test produit ni une preuve
d’expérience personnelle.

## Corrections vérifiées

| Point contrôlé | Correction |
| --- | --- |
| Canonicales des pages statiques | Chaque page indexable possède désormais sa propre URL canonique absolue. |
| Outil eau dure | Titre, description, Open Graph et canonicale propres. |
| Sitemap et pages `noindex` | Mentions légales et confidentialité ne sont plus proposées dans le sitemap. |
| Recette de savon | Une seule formule : 300 g olive, 150 g coco, 50 g amande douce, 69,0 g NaOH et 174 g eau. Le texte et les données structurées sont synchronisés. |
| Calcul de la soude | Calcul documenté à partir de plages SAP publiées, avec avertissement sur la variabilité des huiles et la pureté réelle de NaOH. |
| Protection contre la soude | Lunette-masque 3M 2890A marquée pour les liquides et gants LANON U100 ; la visière reste un complément. |
| Carottes lacto-fermentées | Repère de salage à sec corrigé, saumure explicitée, pH-mètre étalonné et seuil maximal de 4,60 avant dégustation. |
| Cohérence avec le kimchi | Même socle d’hygiène, immersion, suivi du pH et réfrigération ; différence de méthode de salage explicitée. |
| Levain et gluten | Distinction maladie cœliaque, allergie et sensibilité ; aucune promesse de rendre le blé, le seigle ou l’épeautre sans gluten. |
| Cristaux de soude | Hydratation précisée et équivalences de masse indiquées ; le produit St Marc n’est pas présenté comme interchangeable sans lecture de l’étiquette. |
| Comparatifs | Présentés comme des sélections documentaires sur fiches techniques, sans prétendre à un test réel. |
| Réassurances affiliées | Les mentions variables de stock, expédition ou retour ont été remplacées par « Lien affilié Amazon ». |
| Balance des recettes | La BOMATA 0,1 g / 5 kg devient la référence transversale du catalogue. |
| Images de recettes | Séries cohérentes en vue subjective ajoutées pour le kimchi, le levain, les carottes et l’étape critique du savon. |
| Open Graph | Dimensions réelles des images, titres et URLs propres à chaque page. |
| Données structurées | Suppression du balisage `FAQPage` obsolète ; conservation des FAQ visibles. |
| Confiance | Auteur éditorial, dates de publication/mise à jour et méthode de rédaction visibles. |
| Taxonomie | Une URL canonique par article, avec affichage secondaire croisé entre Conservation et Fermentation. |
| Titres SEO | Les formulations longues sont raccourcies et le sujet principal est placé avant la marque. |

## Contrôles automatisés

Commandes à lancer avant chaque publication :

```bash
npm run build
node scripts/audit-content-links.mjs
```

Le second contrôle échoue si une ancre d’article est absente, si un shortcode affilié est inconnu,
si un lien Amazon est écrit directement dans un article ou si les attributs commerciaux attendus
manquent.

Résultat du contrôle final :

- build Next.js réussi : **41 pages statiques générées** ;
- **22 articles** contrôlés sans ancre, image ou produit affilié inconnu ;
- **35 pages indexables** avec title, description et canonicale uniques ;
- aucun titre généré de plus de 65 caractères et aucune description de plus de 165 caractères ;
- aucune référence interne inconnue, aucune image vide et aucun balisage `FAQPage` restant ;
- contrôle renforcé du skill réussi pour les deux kimchis, les carottes, le levain et le savon :
  au moins deux publications ou DOI identifiables, deux questions intégrées, maillage interne,
  Open Graph, canonicale et indexabilité.

## Limites et suite recommandée

- Les volumes de recherche ne sont pas inventés. La cartographie de requêtes jointe est une base
  éditoriale à confirmer dans Google Search Console après publication.
- Quatre nouveaux packs Pinterest prioritaires ont été produits en plus du percarbonate. Les autres
  articles pourront recevoir leur visuel vertical au rythme du calendrier éditorial.
- Les comparatifs restent documentaires tant que les produits n’ont pas été achetés et testés avec
  un protocole, des mesures et des photos originales.
- Deux références commerciales restent à sélectionner : un pichet dédié à la soude et des gants
  nitrile avec déclaration fabricant explicite pour le contact alimentaire.
