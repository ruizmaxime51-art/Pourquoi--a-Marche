# Version 35 — correction du déploiement Vercel

- Remplacement des URL internes OpenAI présentes par erreur dans `package-lock.json` par les URL publiques de `registry.npmjs.org`.
- Ajout d’un fichier `.npmrc` imposant le registre npm public lors des installations Vercel.
- Version de Node.js fixée à `22.x` pour éviter une mise à niveau automatique vers une future version majeure incompatible.
- Aucun changement de contenu par rapport à la v34 : les deux recettes de kimchi sont conservées.
