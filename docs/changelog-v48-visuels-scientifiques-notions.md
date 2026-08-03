# V48 — visuels scientifiques des pages « notions »

## Objectif

Remplacer les visuels théoriques les moins probants par des observations ou mesures issues de publications scientifiques ouvertes, sans modifier les données originales et en conservant une lecture correcte sur mobile.

## Intégrations

- **Fermentation** : mesures du pH, dénombrement des bactéries lactiques et succession des espèces dans dix cuves de choucroute artisanale (Gaudioso et al., 2022, figure 1 B–C).
- **pH des nettoyants** : photographie d’une mesure réelle au pH-mètre (Farah et Al-Haj Ali, 2021) et courbe de spéciation HOCl/OCl⁻ selon le pH (Snell et al., 2022, figure 2A).
- **Saponification** : micrographies électroniques d’un savon formulé à chaud et d’un savon formulé à froid (Stănescu et al., 2025, figure 4a).
- **Tensioactifs** : repérage expérimental de la CMC par tension superficielle et conductivité, puis images TEM/AFM de micelles à 1× et 50× la CMC (Zhang et al., 2019, figures 2 et 4).

## Règles appliquées

- figures sous licence **CC BY 4.0** ;
- DOI, auteurs, numéro de figure et licence indiqués sous chaque image ;
- uniquement des recadrages, changements de disposition et optimisations Web ;
- aucun axe, chiffre, tracé, annotation scientifique ou barre d’échelle redessiné ;
- textes alternatifs descriptifs pour l’accessibilité ;
- limites d’interprétation indiquées dans le texte pour éviter de généraliser une formulation ou une expérience particulière.

## Contrôles

- audit des contenus, ancres, images, liens et textes alternatifs : réussi ;
- build Next.js de production : réussi ;
- rendu local des quatre pages : HTTP 200, figures et crédits présents dans le HTML ;
- six fichiers d’image servis en HTTP 200, avec largeur et hauteur explicites pour éviter les sauts de mise en page ;
- inspection visuelle des six fichiers à leur résolution originale : axes, flèches, textes, micrographies et barres d’échelle intacts ;
- le navigateur automatisé n’étant pas disponible dans l’environnement, aucune capture de page mobile complète n’a été produite lors de ce contrôle.
