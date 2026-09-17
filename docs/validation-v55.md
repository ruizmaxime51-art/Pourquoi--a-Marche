# Vérifications de la V55 — 11 septembre 2026

Les résultats ci-dessous proviennent des commandes effectivement exécutées sur la
version livrée. Le site en production n’a pas été remplacé pendant cette intervention.

| Vérification | Résultat constaté |
|---|---|
| Installation propre depuis package-lock.json | `npm ci` réussi avec Node 22.23.2 |
| Calculateur de surgraissage et assistant acide/base | Vérifications existantes réussies |
| Protection des propositions de lecteurs | 10 tests réussis |
| Régressions éditoriales | 5 tests réussis : YAML, FAQ, échappement et parcours |
| Lecture et analyse des CSV Search Console | 5 tests réussis sur des jeux de test ; aucune statistique réelle inventée |
| Audit des articles | 25 articles : ancres, images, textes alternatifs, liens et produits cohérents |
| Métadonnées, références et parcours | 25 contenus et 6 parcours vérifiés ; validation des identifiants de sources, pas relecture intégrale de toute la bibliographie |
| Build Next.js 15.5.25 | Réussi, 48 entrées statiques générées, y compris ressources techniques |
| Audit du HTML compilé | 40 pages HTML, aucune erreur ni titre dépassant le seuil indicatif du contrôleur |
| Audit npm de production | 0 vulnérabilité signalée au moment du contrôle |
| Configuration navigateur | 16 scénarios découverts correctement, sur ordinateur et mobile |
| Exécution et inspection graphique | Non réalisées : le navigateur disponible refusait l’accès au serveur local |

Le contrôle complet a aussi réussi sous Node 24.19.0, puis a été refait depuis une
installation propre sous Node 22.23.2, la branche prévue pour GitHub et Vercel.

## Liens externes

149 URL uniques examinées, dont 39 liens marchands réservés à une vérification manuelle.
Les résultats sont conservés dans `audits/liens-externes-v55.json`.

- 60 réponses HTTP accessibles (2xx).
- 24 réponses à revoir, principalement refus d’accès 401/403, plus une réponse 502.
- 26 URL non vérifiables dans le délai ou l’environnement du contrôle.
- 39 URL marchandes non testées automatiquement.
- Aucun 404 ou 410 observé.

Un 2xx ne prouve ni la validité scientifique de la source ni la disponibilité d’un
produit. L’absence de 404 ne signifie pas que tous les liens ont été validés. Les
statuts sont conservés pour qu’une prochaine revue sache ce qui reste incertain.

## Vérification avant promotion

Le workflow « Parcours ordinateur et mobile » exécute les 16 scénarios et fournit des
captures. Le lancer dans GitHub, puis ouvrir les captures et la prévisualisation du
déploiement. La vérification du HTML déjà effectuée ne remplace pas cette étape visuelle.

Les événements personnalisés restent désactivés par défaut. Aucun achat, test produit,
envoi de formulaire à un tiers, publication d’article ou modification du site en ligne
n’a été effectué pour produire ces résultats.
