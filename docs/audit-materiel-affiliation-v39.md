# Audit « Matériel utile » et affiliation — version 39

Date : 24 juillet 2026.

## Cause corrigée

Le composant d’en-tête affichait systématiquement un bouton `Matériel utile` vers `#materiel`.
Les articles sans cette ancre produisaient donc un bouton sans destination. Le bouton est désormais :

- relié à `#materiel` lorsque la page contient une vraie section matériel ;
- relié à un guide d’équipement pertinent lorsque le sujet le justifie ;
- masqué lorsqu’aucun achat n’aide réellement le lecteur.

## Contrôle page par page

| Article | Destination du bouton | Affiliation |
| --- | --- | --- |
| pH-mètre ou bandelettes | sélection du comparatif | 4 produits du catalogue |
| Bocal de lacto-fermentation | sélection du comparatif | 6 produits du catalogue |
| Flacons pour produits maison | sélection du comparatif | 6 produits du catalogue |
| Gants et lunettes | configuration recommandée | 7 protections du catalogue |
| Kimchi classique | liste du matériel de la recette | balance, bocal et pH-mètre alimentaire |
| Kimchi végétarien | liste du matériel de la recette | balance, bocal et pH-mètre alimentaire |
| Guide lacto-fermentation | matériel recommandé | bocal, poids et balance |
| Carottes lacto-fermentées | matériel détaillé | bocal, poids et balance |
| Odeur ou moisissure en fermentation | comparatif des bocaux | lien vers le guide équipé |
| Traces blanches sur le linge | bouton masqué | aucun achat forcé |
| Levain naturel | matériel détaillé | kit levain et balance |
| Levain qui ne monte pas | matériel de la recette de levain | lien vers la recette équipée |
| Matériel pour le savon | liste indispensable | balance, soude, mixeur, thermomètre et moule |
| Nettoyants acide et basique | matériel détaillé | acide citrique, cristaux, spray et balance |
| Notion fermentation | comparatif des bocaux | lien vers le guide équipé |
| Notion pH | comparatif de mesure | lien vers pH-mètres et bandelettes |
| Notion saponification | guide du matériel savon | lien vers le guide équipé |
| Notion tensioactifs | bouton masqué | aucun achat forcé |
| Percarbonate pour le linge | produit et guides de protection | percarbonate spécifique ajouté |
| Comparatif des balances | sélection du comparatif | 3 balances du catalogue |
| Savon trop mou | guide du matériel savon | lien vers le guide équipé |
| Recette savon surgras | matériel détaillé | 5 produits du catalogue + guide EPI |

## Centralisation de l’affiliation

Tous les liens Amazon auparavant écrits directement dans les articles ont été remplacés par les
clés de `lib/affiliations.js`. Une correction de produit ou d’URL peut maintenant être faite une
seule fois dans le catalogue central.

Le percarbonate générique a été remplacé par un produit précis :

- Compagnie du Bicarbonate, percarbonate de soude 2 kg ;
- ASIN `B099PVNJ8Q` ;
- fiche annonçant une formule sans additif et 100 % à base de percarbonate ;
- aucun prix ni stock figé dans l’article.

Les recettes de kimchi utilisent maintenant le pH-mètre alimentaire GIDIGI déjà présent au
catalogue. Les bandelettes universelles restent dans le comparatif pour un simple ordre de
grandeur, mais ne sont plus proposées pour décider précisément autour du seuil de pH 4,6.

Le testeur de dureté AGUALEVE de la page `/outils/lessive-eau-dure` est également centralisé sous
la clé `testeur-durete-agualeve` (ASIN `B0CJ9QQ2M2`). Il n’existe plus de lien Amazon codé en dur
dans cette page.

## Produits encore intéressants à sourcer

Ces produits ne sont pas ajoutés tant qu’une fiche suffisamment claire n’est pas sélectionnée :

1. **Pichet dédié à la soude** : polypropylène `PP 5` identifiable ou inox 304/316, capacité
   d’environ 1 à 1,5 L, base stable, parois hautes, poignée solide, sans aluminium. Il doit rester
   réservé au savon.
2. **Gants pour le kimchi** : nitrile non poudré, explicitement déclaré apte au contact
   alimentaire par le fabricant, bonne longueur de manchette. Les gants chimiques du catalogue
   ne doivent pas être présentés automatiquement comme des gants alimentaires.

## Contrôle automatisé ajouté

La commande suivante contrôle les 22 articles :

```bash
node scripts/audit-content-links.mjs
```

Elle échoue si une ancre locale ou inter-article est absente, si un shortcode d’affiliation ne
correspond pas au catalogue, si un lien Amazon est codé en dur ou si `sponsored`/`nofollow`
manque sur un lien commercial.
