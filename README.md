# Chimie Maison — guide de mise en ligne

Ce projet est un site Next.js 14 (App Router). Les articles sont des fichiers Markdown dans
`/content`, lus automatiquement au moment de la génération du site — pour ajouter un article, il
suffit d'ajouter un fichier `.md`, pas besoin de toucher au code.

## 1. Tester le site en local

Prérequis : installer [Node.js](https://nodejs.org) (version 18 ou plus), gratuit.

```bash
cd site
npm install
npm run dev
```

Ouvrir http://localhost:3000 dans le navigateur. Toute modification d'un fichier est visible
immédiatement.

## 2. Mettre le code sur GitHub (nécessaire pour l'hébergement)

1. Créer un compte gratuit sur https://github.com si vous n'en avez pas
2. Créer un nouveau dépôt (bouton "New repository"), nom libre par exemple `chimie-maison`, en
   privé ou public
3. Dans le dossier du projet :

```bash
git init
git add .
git commit -m "Premier commit"
git branch -M main
git remote add origin https://github.com/VOTRE-PSEUDO/chimie-maison.git
git push -u origin main
```

## 3. Déployer sur Vercel (hébergement)

Vercel est créé par les développeurs de Next.js — c'est la solution la plus simple pour ce type
de site, gratuite pour ce niveau de trafic.

1. Aller sur https://vercel.com et créer un compte avec votre compte GitHub (un clic)
2. Cliquer "Add New" → "Project"
3. Sélectionner le dépôt `chimie-maison` que vous venez de pousser sur GitHub
4. Vercel détecte automatiquement Next.js — ne rien changer aux réglages, cliquer "Deploy"
5. Après 1 à 2 minutes, le site est en ligne sur une URL du type `chimie-maison.vercel.app`

C'est cette URL `.vercel.app` que vous pouvez utiliser immédiatement pour vous inscrire aux
programmes d'affiliation (Amazon Partenaires, Awin) en attendant d'avoir votre propre nom de
domaine.

## 4. Relier votre nom de domaine

1. Acheter le domaine chez un registrar (OVH, Namecheap, Gandi...) — environ 10€/an pour un .fr
   ou .com
2. Dans le tableau de bord Vercel du projet : Settings → Domains → ajouter votre domaine
3. Vercel indique les enregistrements DNS à configurer (généralement un enregistrement de type A
   ou CNAME)
4. Aller chez votre registrar, section "Zone DNS", et ajouter les enregistrements indiqués par
   Vercel
5. La propagation DNS prend entre quelques minutes et 24h — Vercel gère automatiquement le
   certificat HTTPS une fois le domaine validé

## 5. Mettre à jour le site après le lancement

Chaque fois que vous voulez publier un nouvel article ou modifier une page :

```bash
git add .
git commit -m "Ajout article : nom de l'article"
git push
```

Vercel redéploie automatiquement le site à chaque `push` sur la branche `main` — aucune autre
action nécessaire. C'est le mode de fonctionnement recommandé pour démarrer : je rédige
l'article, je vous le fournis en Markdown, vous (ou moi via Claude Code) l'ajoutez dans
`/content` et poussez sur GitHub.

## 6. Avant l'inscription aux programmes d'affiliation

- Compléter `/app/mentions-legales/page.js` avec votre SIREN et statut réel
- Compléter `/app/politique-confidentialite/page.js` avec un contact réel
- Remplacer les liens `href="#"` des blocs CTA par vos vrais liens affiliés une fois les comptes
  Amazon Partenaires et Awin validés

## Structure du projet

```
site/
  app/                  pages du site (routing par dossier, Next.js App Router)
    cosmetique/         page catégorie
    entretien/
    conservation/
    fermentation/
    articles/[slug]/    page article générée depuis le Markdown
    mentions-legales/
    politique-confidentialite/
    a-propos/
    globals.css         tous les styles et tokens de design
    layout.js           structure commune (header, footer, polices)
  content/              un fichier .md par article — c'est ici qu'on ajoute du contenu
  lib/
    categories.js       définition des 4 catégories
    articles.js         lecture des fichiers Markdown
```
