# Chimie Maison — Next.js

Site d'affiliation éditorial autour des recettes maison expliquées par la chimie.

## Stack

- Next.js 14 / App Router
- Articles en Markdown dans `content/`
- Affiliations centralisées dans `lib/affiliations.js`
- Sources scientifiques centralisées dans `lib/references.js`
- Déploiement prévu sur Vercel

## Refonte appliquée

Cette version ajoute :

- page d'accueil plus attractive et orientée parcours utilisateur ;
- `ArticleHero` avec image, temps de lecture, type de contenu et CTA ;
- `TakeawayBox` alimenté par le frontmatter `takeaways` ;
- articles liés via le frontmatter `related` ;
- cartes d'articles plus visuelles ;
- page `/outils` et premier simulateur `/outils/lessive-eau-dure` ;
- styles de lecture longue plus rythmés ;
- premiers schémas critiques codés en SVG dans `public/images/diagrams/` ;
- suppression de la dépendance `next/font/google` dans le layout pour éviter les builds bloqués par récupération externe des polices.

## Développement

```bash
npm install
npm run dev
```

## Domaine public

Domaine canonique : `https://www.chimiemaison.fr`

Le domaine racine `https://chimiemaison.fr` redirige de manière permanente vers la version `www`.
Toutes les URL absolues sont centralisées dans `lib/site.js`.

## Déploiement Vercel

1. Pousser le dossier sur GitHub.
2. Importer le dépôt dans Vercel.
3. Framework : Next.js.
4. Build command : `npm run build`.
5. Output : automatique.

## Ajouter un article

Créer un fichier Markdown dans `content/` avec un frontmatter :

```yaml
title: "Titre"
category: "comprendre"
type: "notion"
excerpt: "Résumé SEO"
formula: "formule ou idée clé"
image: "/images/..."
date: "2026-07-12"
sommaire: true
takeaways:
  - "Ce que le lecteur va comprendre"
related:
  - "slug-article-lie"
```

## Shortcodes disponibles

- `{{sommaire}}` : sommaire automatique depuis les titres `##`
- `{{affil:cle-produit}}` : bloc d'affiliation
- `{{affil-inline:cle-produit}}` : lien d'affiliation inline
- `{{ref:cle-source}}` : référence scientifique numérotée
- `{{references}}` : emplacement manuel de la bibliographie

## Note déploiement Vercel

Le fichier `package-lock.json` pointe vers le registre public npm (`https://registry.npmjs.org/`).
Le fichier `.npmrc` force également ce registre afin d’éviter les erreurs de build si un lockfile a été généré dans un environnement avec registre npm privé.

## Version 32 — comparatif bocaux de fermentation

La page `/articles/bocal-lacto-fermentation` est devenue un comparatif complet : bocal mécanique,
valve, sas, poids et formats de 0,75 à 2 L. Les liens produits restent centralisés dans
`lib/affiliations.js`.


## Version 33 — comparatif flacons et étiquettes

La page `/articles/flacon-nettoyant-maison` compare désormais cinq formats : spray PEHD, spray PET,
flacon pompe, grand récipient de lessive et verre ambré. Le contenu distingue clairement les
matériaux annoncés, les usages adaptés et les limites de compatibilité chimique.


## Version 34 — deux recettes de kimchi

Deux pages distinctes ont été ajoutées :

- `/articles/kimchi-classique-maison` : chou chinois, gochugaru et sauce de poisson ;
- `/articles/kimchi-vegetarien-maison` : version vegan au miso, tamari et kombu.

Les deux pages comprennent une fiche imprimable, un balisage structuré `Recipe`, une FAQ,
le suivi du pH, les signes d'altération et un maillage vers les guides de fermentation et de matériel.

## Version 38 — guide percarbonate et SEO par tache

La page `/articles/percarbonate-de-soude-linge` répond aux recherches par type de tache
(linge jauni, café, vin, sang, graisse, rouille, calcaire) et distingue les usages pertinents,
conditionnels ou déconseillés. Elle comprend les dosages en grammes, les limites scientifiques,
les précautions ICSC, un schéma pédagogique, une photo éditoriale et une épingle Pinterest.

Le dossier `docs/pack-seo-percarbonate-v38.md` regroupe la cible SEO, les requêtes observées,
le maillage, les textes Pinterest, les prompts visuels et les prochaines pages à produire.

## Version 40 — audit scientifique, SEO et recettes

Cette version corrige les canonicales, les métadonnées sociales, les titres longs, la taxonomie
Fermentation/Conservation et la méthode des comparatifs. Elle harmonise les recettes de kimchi et
de carottes autour du salage, de l’immersion et du contrôle du pH.

La recette de savon utilise désormais une formule unique à l’huile d’amande douce :
300 g d’huile d’olive, 150 g d’huile de coco, 50 g d’huile d’amande, 69,0 g de NaOH et 174 g
d’eau. Des séries d’images en vue subjective et quatre nouveaux visuels Pinterest sont intégrés.

Les détails se trouvent dans :

- `docs/audit-global-contenu-seo-v40.md` ;
- `docs/cartographie-requetes-seo-v40.md` ;
- `docs/journal-corrections-v40.md` ;
- `docs/pack-pinterest-recettes-v40.md`.

## Version 41 — fiches recettes unifiées

Les six pages de type recette utilisent désormais la même fiche blanche et imprimable :
informations essentielles au début, ingrédients, étapes illustrées et remarque critique. La page
des nettoyants contient deux fiches distinctes afin de ne jamais confondre le détartrant acide et
le dégraissant alcalin.

Le levain et les carottes utilisent maintenant le balisage structuré `Recipe`, réservé aux
préparations alimentaires. Le savon et les nettoyants conservent `HowTo`. Les deux visuels de mise
en bocal du kimchi ont aussi été remplacés par des gestes anatomiquement cohérents avec un pilon
alimentaire.

Le détail se trouve dans `docs/changelog-v41-recettes.md`.
