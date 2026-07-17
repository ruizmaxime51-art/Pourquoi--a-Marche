# v30 — Correctif mobile et migration SEO

## Mobile
- Ajout explicite du viewport `device-width`.
- Remplacement du menu desktop par un menu mobile compact sous 760 px.
- Suppression des débordements horizontaux sur les héros, encarts, listes et tableaux.
- Titres mobiles redimensionnés et autorisés à revenir à la ligne.
- Corps des articles ramené à 18 px sur mobile avec une largeur réellement fluide.
- Tableaux confinés à un défilement horizontal interne.
- Images de héros affichées en 4:3 sous le texte sur mobile.
- Distinction entre la mention d’affiliation globale du footer et les encarts d’affiliation dans les articles.

## SEO / migration
- Domaine canonique central : `https://www.chimiemaison.fr`.
- Redirection 308 de l’ancien hôte `pourquoi-a-marche.vercel.app` vers le nouveau domaine via middleware.
- Page Mentions légales explicitement en `noindex, follow` avec canonical interne.
- Viewport déclaré dans les métadonnées Next.js.
