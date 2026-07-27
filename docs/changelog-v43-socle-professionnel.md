# Version 43 — socle professionnel, SEO et sécurité

Date : 27 juillet 2026.

## Mise à jour technique

- Next.js passe de `14.2.35` à `15.5.21`, branche de maintenance recommandée par l’éditeur dans
  sa publication de sécurité de juillet 2026.
- React et React DOM passent à `19.2.8`.
- Les paramètres de la route dynamique des articles sont adaptés au fonctionnement asynchrone de
  Next.js 15.
- La police Roboto est fournie par `@fontsource/roboto` et servie directement par le site.
- L’autorisation générale de charger des images depuis n’importe quel domaine externe est
  supprimée, puisque le site utilise des images locales.

Source : <https://nextjs.org/blog/july-2026-security-release>

## Domaine et sécurité

- `chimiemaison.fr` et `pourquoi-a-marche.vercel.app` redirigent en `308` vers
  `www.chimiemaison.fr`, en conservant le chemin et les paramètres.
- Les réponses déclarent des politiques de protection contre l’intégration dans un cadre externe,
  la détection erronée du type de fichier et l’accès aux fonctions caméra, micro ou géolocalisation.
- HTTPS est mémorisé par le navigateur pendant un an.
- L’en-tête public signalant Next.js est désactivé.

## SEO et accessibilité

- Une page 404 utile remplace la réponse technique sur une adresse inconnue.
- Les slugs d’articles non publiés ne sont plus générés à la demande.
- Chaque article affiche un fil d’Ariane et contient un `BreadcrumbList` cohérent avec sa catégorie.
- Les 22 images principales possèdent maintenant un texte alternatif explicite.
- Les images décoratives placées dans les cartes d’articles ont un texte alternatif vide, car le
  lien contient déjà le titre de l’article.

## Pichet Hünersdorff

Le catalogue ajoute le pichet Hünersdorff 937000 :

- polypropylène ;
- capacité 2 L ;
- plage annoncée de -20 à +100 °C ;
- très bonne résistance annoncée aux alcalis ;
- ASIN `B09R4RZYTM` avec le lien Amazon Partenaires fourni.

Le site ne transforme pas ces caractéristiques générales en garantie absolue pour toute solution
de soude. Le mode d’emploi demande un récipient dédié, un bac de rétention stable, une eau à
température ambiante, un ajout lent de la soude dans l’eau, aucune fermeture pendant le
refroidissement et le remplacement du pichet s’il blanchit, se fissure, se raye profondément ou
se déforme.

Sources :

- <https://www.reidl.de/huenersdorff-messkanne-geschl-griff-2000ml-p885263>
- <https://www.thermofisher.com/de/en/home/life-science/lab-plasticware-supplies/plastic-material-selection/polypropylene-pp-labware.html>

## Contrôles automatiques

Le workflow `.github/workflows/quality.yml` exécute à chaque envoi ou demande de fusion :

1. `npm ci` ;
2. un rapport des alertes de dépendances ;
3. un blocage si une vulnérabilité critique est détectée ;
4. l’audit des liens, ancres, images, textes alternatifs, produits et identifiants affiliés ;
5. le build de production.

Au moment de cette version, `npm audit` ne signale aucune vulnérabilité critique. Il remonte encore
des alertes hautes dans `postcss` et `sharp`, dépendances imposées par les versions officielles
actuelles de Next.js. Aucun correctif compatible n’est proposé sans forcer une combinaison de
versions non prise en charge ; le workflow les rend donc visibles et bloque les futures alertes
critiques.

## Vérifications locales

- audit éditorial et technique : 22 articles validés ;
- liens, ancres, images et produits : validés ;
- identifiant Amazon `maxscience06-21` : validé ;
- build Next.js : 41 pages statiques générées avec succès.
