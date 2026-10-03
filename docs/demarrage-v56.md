# V56 — images et parcours de lecture

Livraison du 20 septembre 2026, fondée sur le ZIP V55. Cette archive est un projet
complet à importer ; elle n’a pas été publiée sur GitHub, Vercel ou Pinterest.

## Ce qui a réellement changé

- Les huit médias de la crufiture sont inclus, avec les photos réelles et leurs
  crédits existants. Leurs pixels n’ont pas été modifiés.
- La compilation via `npm run build` commence maintenant par un contrôle de présence
  et de décodage des images référencées. Une image manquante, vide, illisible ou un
  pointeur Git LFS fait échouer ce contrôle.
- Un contrôle distinct vérifie les images effectivement accessibles après déploiement.
- Dans les recettes, guides et comparatifs, « Pour votre projet » passe après le
  contenu. Les notions conservent leurs applications pratiques en début de lecture.
- Les boutons du héros conduisent aux étapes des recettes alimentaires et aux
  précautions des recettes chimiques. La crufiture garde un bouton de guide.
- Les crédits du héros passent sous la photo, dans une légende lisible.
- Les contrôles navigateur comprennent désormais le chargement des images de la
  crufiture. Le rapport de comparaison des skills et le plan de publication sont inclus.

Les textes scientifiques, les liens affiliés et les URL des articles ne changent pas.
Aucun nouveau suivi, abonnement ou système de publication quotidienne n’est activé.

## Corriger les images grises

Le 20 septembre, les huit URL ci-dessous répondaient **404**, alors que leurs fichiers
étaient bien présents dans le ZIP V55. L’image de savon et l’image générale de partage
répondaient 200 : le problème n’affectait donc pas tous les médias du site.
Le navigateur public affichait le héros de la crufiture sans image décodée et sans
filtre gris. Un import incomplet des fichiers est une hypothèse ; l’historique du
déploiement n’a pas été consulté.

Vérifier ces chemins exacts **à la racine du dépôt**, puis dans le déploiement :

```text
public/images/crufiture-hero-photo.webp
public/images/crufiture-abricots-frais-photo.webp
public/images/crufiture-refractometre-photo.webp
public/images/crufiture-sechage-solaire-photo.webp
public/images/crufiture-sucre-abricots-photo.webp
public/images/diagrams/crufiture-bilan-masse.svg
public/images/diagrams/crufiture-brix-aw.svg
public/images/pinterest/crufiture-science-pinterest.png
```

Importer le contenu décompressé du ZIP, notamment `public`, et non le fichier ZIP
lui-même. Le dossier `public` doit être au même niveau que `package.json` et `app`.
Conserver les variables déjà configurées chez l’hébergeur. Ne pas créer un dossier
intermédiaire contenant tout le projet dans le dépôt existant.

Pour la V56 complète, importer aussi les scripts et `.github`. Le manifeste de
l’archive décrit les différences avec V55. Aucun fichier V55 n’est supprimé.
Si la base réellement importée est antérieure à V55, consulter aussi les suppressions
de `docs/demarrage-v55.md`.

Après le déploiement, ouvrir l’URL du héros directement :
[photo crufiture](https://www.chimiemaison.fr/images/crufiture-hero-photo.webp).
Elle doit afficher la photo, pas une page introuvable. Ce n’est pas une raison de
désactiver l’optimisation Next.js ni de changer les autorisations d’images distantes.

## Contrôles

Avec Node 22 et Python 3 :

```bash
npm ci
npm run check
npm audit --omit=dev --audit-level=high
```

Le contrôle local passe aussi à chaque `npm run build`. Il faut conserver cette
commande de compilation chez l’hébergeur : une commande personnalisée `next build`
appelée directement contournerait le hook npm `prebuild`.

Après mise en ligne :

```bash
npm run audit:media:public -- --article confiture-sans-cuisson-crufiture
```

Cette vérification est aussi disponible dans GitHub Actions sous **Images du site
publié → Run workflow**, après import du workflow sur la branche par défaut.
Elle lit le site ; elle ne publie rien. Le résultat attendu est 8/8 images accessibles
et décodables. Les 403, 429 et problèmes réseau restent « inconclusifs » : ils ne sont
pas assimilés à des images supprimées, mais empêchent une validation de diffusion.

Sans `--article`, le script vérifie toutes les références locales recensées dans le
contenu et les composants. Il ne mesure ni indexation, ni affichage mobile, ni droits
d’auteur. Un build réussi ne prouve pas que le bon dossier a été déployé.

Pour contrôler visuellement ordinateur et mobile, exécuter le workflow **Parcours
ordinateur et mobile** et regarder ses captures. Il comporte 18 scénarios après
l’ajout du test des images. La limite du contrôle graphique dans cette session est
documentée dans `validation-v56.md`.

L’ordre recommandé est : importer la V56, vérifier les médias du site publié, puis
préparer la publication quotidienne décrite dans `automatisation-proposee-v56.md`.
