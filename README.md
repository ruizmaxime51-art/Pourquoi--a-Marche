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
