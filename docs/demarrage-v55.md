# Démarrage V55

## Importer le projet

Le ZIP contient le projet complet à sa racine, sans node_modules, build, données privées
ou variables secrètes. Remplacer les fichiers du projet par ceux du ZIP, en conservant
les variables déjà configurées dans Vercel. Importer également le dossier `.github`, qui
contient les automatismes.

Un import qui écrase seulement les fichiers ne supprime pas les anciens. Retirer
`app/_components/ArticleFaq.js`, dont le rendu doublonnait la FAQ existante. La liste
exacte des différences est fournie dans `manifest-release.json`.

Cette livraison n’a ni poussé de commit ni déployé le site. Pour une mise en ligne,
vérifier d’abord le résultat GitHub et la prévisualisation du déploiement.

Un script prépare les prochaines archives sans caches ni données privées, vérifie
leur intégrité et liste les fichiers retirés. Donner un nouveau nom de fichier :

```bash
python3 scripts/package-release.py --output ../chimiemaison-prochaine-version.zip --base ../version-precedente.zip
```

L’option `--base` est facultative ; elle permet de comparer les fichiers aux versions
précédentes. Le ZIP produit ne supprime ni ne remplace automatiquement aucun déploiement.

## Lancer les contrôles

Prérequis : Node.js 22, npm et Python 3. Les environnements GitHub fournis les proposent.

```bash
npm ci
npm run check
npm audit --omit=dev --audit-level=high
```

Le contrôle principal inclut les calculs, les protections du formulaire, les régressions
FAQ/YAML, l’analyse CSV, les liens, les parcours, le build et l’audit du HTML final.

Pour vérifier la navigation et produire des captures sur ordinateur et mobile :

```bash
npx playwright install --with-deps chromium
npm run build
npm run test:browser
```

Les captures se trouvent dans `test-results/` et le rapport dans `playwright-report/`.
Ouvrir les captures : un scénario qui passe ne garantit pas à lui seul une composition
visuelle satisfaisante. Dans cette session, seuls la découverte des 16 scénarios et
les contrôles hors navigateur ont été exécutés ; l’accès graphique au serveur local
était refusé.

## Automatismes GitHub

| Nom dans Actions | Déclenchement | Résultat |
|---|---|---|
| Contrôles qualité | Push, PR ou lancement manuel | Tests et audit des fichiers compilés ; échec si erreur |
| Parcours ordinateur et mobile | Push, PR ou lancement manuel | 16 scénarios, rapport et captures |
| Maintenance hebdomadaire | Lundi 06:23 UTC ou lancement manuel | Audit des dépendances et rapport des liens externes |
| Dependabot | Hebdomadaire | Propositions de mise à jour à relire, sans fusion automatique |

Les rapports sont accessibles dans les artefacts de chaque exécution. Les horaires
planifiés GitHub peuvent être retardés. Sur un dépôt où Actions est désactivé, activer
Actions pour exécuter les workflows fournis. Configurer une protection de branche si
les contrôles doivent être obligatoires avant fusion.

Un code 403, 429 ou un délai dépassé reste « à revoir » ou « non vérifiable ». Un produit
Amazon est à vérifier manuellement : un refus anti-robot ne signifie pas qu’il a disparu.
Le script ne remplace jamais un lien automatiquement.

```bash
npm run audit:external
```

## Analyser Search Console

1. Ouvrir Performances, choisir la période et les filtres à comparer.
2. Sélectionner la dimension **Pages**, puis exporter en CSV.
3. Si Google fournit plusieurs fichiers, prendre celui des Pages, pas des Requêtes.
4. Placer le CSV dans `private-data/`, dossier exclu de Git et des livraisons.

```bash
npm run report:gsc -- private-data/pages-apres.csv
npm run report:gsc -- private-data/pages-apres.csv --previous private-data/pages-avant.csv
```

Le rapport apparaît dans `reports/search-console.md`. Les en-têtes français et anglais,
les séparateurs CSV courants et les virgules décimales sont pris en charge. Utiliser
des périodes de même durée et des filtres identiques. Les recettes, notions, méthodes
et pages de matériel sont distinguées ; le script ne calcule pas de revenu d’affiliation.

Pour approfondir une URL, exporter ensuite ses Requêtes depuis Search Console pour une
relecture éditoriale. Ce second export n’est pas l’entrée du script Pages.

## Suivre les clics internes et marchands

L’analyse existante des pages reste en place. Les nouveaux événements sont facultatifs,
désactivés par défaut. Vercel réserve cette fonction aux plans Pro/Enterprise.

Si le projet dispose de cette fonction, définir `NEXT_PUBLIC_CONVERSION_EVENTS=true`
dans Vercel puis reconstruire le projet. Les événements sont `journey_click`,
`equipment_guide_click` et `affiliate_click`. Ils contiennent uniquement le chemin
de page et un identifiant de cible prévu par le code. Aucun formulaire ou paramètre
d’URL n’est envoyé. L’information de confidentialité correspond à l’option activée.

Sans cette option, l’analyse Search Console fournie reste utilisable. Aucun abonnement
n’a été souscrit dans cette livraison.

## Revue programmée et agents

Une revue du site public est activée dans ChatGPT le lundi matin, heure de Paris, à
partir du 14 septembre 2026. Elle présente des constats vérifiables et jusqu’à trois
priorités. Elle n’a pas d’accès à vos statistiques privées et ne publie rien.

Pour les futures interventions, fournir `AGENTS.md` et la mission pertinente dans
`docs/agents/missions.md`. Les ressources GitHub et officielles retenues sont dans
`docs/agents/ressources-verifiees.md`.

Prochaine donnée à recueillir : un export récent **Pages** de Search Console. Il
permettra d’ajuster les priorités sur des données actuelles, sans retarder la livraison
des améliorations déjà réalisées.
