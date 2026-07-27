# Version 44 — correction du déploiement Vercel

## Correction

- La configuration Next.js utilise désormais le fichier `next.config.js`.
- Le fichier reste écrit au format ES module avec `export default`, conformément à `"type": "module"` dans `package.json`.
- Lors d'un nouvel envoi des fichiers sur GitHub, `next.config.js` remplace directement l'ancienne version CommonJS qui utilisait `module.exports`.

## Cause de l'erreur précédente

GitHub avait conservé l'ancien fichier `next.config.js` lors de l'ajout de `next.config.mjs`. Vercel chargeait en priorité ce fichier obsolète et arrêtait le build avec l'erreur `module is not defined in ES module scope`.
