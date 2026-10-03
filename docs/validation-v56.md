# Validation V56 — 20 septembre 2026

## Contrôles exécutés

| Contrôle | Résultat |
|---|---|
| Installation Node 22.23.2 | `npm ci` réussi |
| Suite complète `npm run check` | Réussie, code de sortie 0 |
| Calculs des outils | Contrôles réussis |
| Formulaire et protections | 10 tests réussis |
| Régressions éditoriales et raccourcis de recette | 7 tests réussis |
| Analyse d’exports Search Console | 5 tests réussis sur fixtures ; aucun trafic réel déduit |
| Détection des médias absents/invalides et refus d’accès | 2 tests d’intégration réussis |
| Contenu et liens | 25 articles, métadonnées, FAQ et 6 parcours cohérents |
| Médias locaux | 86 fichiers référencés décodés, aucune erreur |
| Build de production | Réussi avec Next.js 15.5.25 |
| HTML compilé | 40 pages examinées, aucune erreur du contrôle |
| Audit des dépendances de production | 0 vulnérabilité signalée au moment du contrôle |
| Médias de crufiture servis par Next.js local | 8/8 réponses HTTP 200 et images décodables |
| Héros via l’optimiseur Next.js local | HTTP 200, image décodable de 640 × 427 pixels |
| Structure HTML | Parcours après le contenu du guide, avant celui de la notion ; crédit du héros dans une légende |
| Scénarios Playwright fournis | 18 scénarios reconnus par `--list`, pas exécutés ici |

Le décompte des pages HTML auditées diffère de celui des tâches de génération Next.js,
qui inclut d’autres routes et ressources. Il ne correspond pas à des pages indexées.

## Site public

Les six pages demandées, robots.txt et sitemap.xml répondent 200. Les huit médias de
crufiture répondent 404. Le contrôle du navigateur public confirme le héros non
décodé et l’absence de filtre gris. Les médias sont inchangés par rapport aux octets
du ZIP V55 : les fichiers de la V56 doivent effectivement être importés et déployés
pour corriger le site public.

Sur les liens externes extraits du corps des articles : 60 réponses HTTP acceptées,
21 résultats à revoir (18 refus 403, 2 refus 401, 1 réponse 502), 29 résultats non
vérifiables et 39 liens marchands réservés à un contrôle manuel. Aucun 404/410 n’a
été relevé dans cet échantillon externe. Cela ne valide ni leur contenu, ni les
produits, ni tous les liens du site. Un refus d’accès n’est pas déclaré « lien mort ».

Les résultats détaillés sont dans `docs/audits/` :

- `pages-publiques-v56.json` ;
- `images-publiques-v56-avant.json` ;
- `images-locales-v56.json` ;
- `liens-externes-v56.json`.

## Limites restantes

Le navigateur de la session ouvre le site public, mais refuse le serveur local
(`ERR_BLOCKED_BY_CLIENT`). Les réponses locales ont été vérifiées dans le même
environnement que le serveur, pas via ce navigateur. Aucun rendu visuel ordinateur
ou mobile de V56 n’est annoncé comme validé. Le workflow fourni permet d’exécuter
ces scénarios et d’examiner les captures avant mise en ligne.

Pas d’accès supposé à Search Console, aux commandes Amazon, au dépôt distant ou au
compte Vercel. Les améliorations de parcours sont des hypothèses de qualité d’usage,
pas un gain de clics mesuré. Aucun déploiement ni publication Pinterest effectué.
