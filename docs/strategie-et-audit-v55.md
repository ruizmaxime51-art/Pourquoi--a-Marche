# Chimie Maison — stratégie et audit V55

Revue du 10–11 septembre 2026, à partir du ZIP V54 fourni. Cette livraison est une
version du projet à importer ; elle ne décrit pas un déploiement déjà effectué.

## Décision de positionnement

**Comprendre un problème domestique, appliquer une méthode, choisir le matériel utile.**

La visibilité des notions est un point d’entrée à exploiter. Supprimer ces pages ou
changer leur URL sacrifierait un contenu utile sans démontrer que les recettes gagneraient
en visibilité. La priorité est de relier cette lecture à une intention concrète : faire
un savon, comprendre un dépôt sur le linge, démarrer une fermentation.

La V54 comptait 25 articles : 6 recettes, 10 guides, 5 comparatifs et 4 pages de notions
ou repères. La rubrique matériel regroupe 6 articles, dont un guide. L’accueil mettait
systématiquement en avant les quatre notions ; la page Recettes mélangeait recettes,
guides et repères. Ce déséquilibre est observable dans le code. Il ne prouve pas à lui
seul la cause des classements Google.

Les anciennes captures Search Console montraient une forte concentration sur la
saponification. Aucun export récent n’a été fourni pour cette revue. Nous ne savons donc
pas si cette répartition est encore celle de septembre, ni quels revenus elle produit.

## Changements livrés

| Problème constaté | Correction V55 | Effet attendu à mesurer |
|---|---|---|
| Accueil centré sur les notions | Présentation par projet, quatre recettes, quatre dépannages et trois parcours | Plus de lecteurs exposés aux usages |
| Recettes et autres contenus mélangés | Sections distinctes Recettes, Méthodes et Dépannage | Trouver plus vite le contenu recherché |
| Suite de lecture peu ciblée | Six parcours thématiques, appliqués à 24 articles ; liens vers recettes, outils et matériel | Passages plus pertinents entre pages |
| Matériel présenté comme une liste générale | Filtre par usage, critères de choix et prise en compte de l’équipement existant | Clics marchands mieux qualifiés |
| Deux rendus de FAQ | Un seul rendu HTML, texte échappé, contrôle des doublons | Lecture claire et régression détectable |
| YAML pouvant produire des objets à la place de textes | Validation explicite des métadonnées avant rendu | Erreur compréhensible avant publication |
| Marque répétée dans certains titres hérités | Titres absolus dans le helper des pages générales | Titres plus propres ; pas de garantie d’affichage identique dans Google |
| Dépendances signalées par npm audit | Correctifs de Next.js et dépendances transitives verrouillés | Réduction des vulnérabilités connues par l’audit |
| Aucun suivi distinguant les types de contenu | Analyse CSV Search Console et événements facultatifs | Mesurer séparément acquisition et progression dans le site |

Le parcours savon est prioritaire : notion → recette → calculateur → matériel. Le lecteur
voit les liens utiles directement dans la notion. Les parcours linge, entretien,
fermentation, levain et conservation complètent le maillage. Les URL existantes restent
disponibles. Aucun lien fictif vers un calculateur de crufiture n’a été ajouté.

## Ce qui doit faire la différence éditoriale

Une recette générique supplémentaire apporte peu si le lecteur trouve déjà des dizaines
de versions équivalentes. Chimie Maison doit apporter des mesures, une explication
compréhensible, les limites de la méthode et les critères qui rendent un outil utile.

Les comparatifs actuels sont documentaires. Ils ne sont pas présentés comme des essais en
laboratoire. Pour les renforcer, la prochaine contribution originale sera un protocole de
test réellement réalisé : répétabilité d’une balance, dimensions d’un bocal avec son poids,
nettoyage, lisibilité et entretien d’un instrument. Publier les conditions, les résultats
et les photographies réelles seulement une fois l’essai effectué.

Les photos réelles de crufiture introduites dans la V53 et présentes dans la V54 sont
conservées : abricots, préparation fruit-sucre, pots, mesure et séchoir. Les légendes
distinguent illustration et procédé exact. Les crédits, licences et modifications figurent
auprès des images. Les schémas scientifiques restent des dessins exacts, pas des images IA.

## Plan éditorial priorisé

Ces priorités sont des hypothèses éditoriales fondées sur les contenus et les usages du
site, sans volume de recherche inventé. Les exports Pages puis Requêtes serviront à les
confirmer avant une nouvelle série d’articles.

1. **Consolider le parcours savon existant.** Observer les requêtes de saponification,
   vérifier le passage vers la recette et les objections avant l’achat du matériel.
   Enrichir les pages existantes avant de créer des pages concurrentes entre elles.
2. **Renforcer les deux choix de matériel transversaux : balance et bocal.** Collecter
   mesures et photos personnelles, distinguer résolution et précision, vérifier les
   dimensions exactes des accessoires. Ne pas déduire une performance du prix.
3. **Faire vivre les dépannages existants.** Les quatre guides répondent à un problème
   précis. Ajouter des observations documentées et des cas réels, pas des délais
   universels ou des diagnostics à partir d’une seule photo.
4. **Créer ensuite l’outil crufiture dans Outils.** Il reste un chantier distinct :
   bilan de masse, unités, valeurs saisies réellement mesurées, limites Brix/activité de
   l’eau, cas impossibles et lien vers le guide. Aucun résultat ne devra déclarer une
   durée de conservation ambiante à partir du Brix seul.
5. **Évaluer les nouvelles pages à partir des requêtes.** Candidats à confirmer : peser
   de petites quantités de soude, choisir un poids adapté au bocal, entretenir et étalonner
   un pH-mètre. Une section de page peut suffire ; ne pas créer trois articles minces.

## Comment mesurer le résultat

Conserver un export Pages des 28 jours précédant la mise en ligne, puis un export des
28 jours suivants avec les mêmes filtres. Le script fourni regroupe les données par
type de contenu. Une évolution sur un jeune domaine ne permet pas d’attribuer un gain
à cette seule refonte ; elle donne une direction à examiner.

| Question | Donnée utile | Limite |
|---|---|---|
| Quelles pages Google expose-t-il ? | Impressions et clics par URL dans Search Console | Pas une mesure du parcours interne |
| Les notions amènent-elles à agir ? | Événements de clic vers recette, outil ou matériel | Ce sont des événements, pas des visiteurs uniques ni un tunnel complet |
| Les comparatifs envoient-ils chez le marchand ? | Événements affiliate_click | Un clic ne prouve pas un achat |
| Le site génère-t-il des commissions ? | Rapports du programme d’affiliation | Aucun accès ou rapprochement automatique configuré ici |

Le suivi personnalisé utilise Vercel Web Analytics et reste désactivé par défaut :
la documentation réserve les événements personnalisés aux plans Pro et Enterprise.
L’analyse CSV fonctionne sans abonnement ni connexion API.

## Automatisation et limites

- GitHub contrôle les modifications, les calculs, les entrées de formulaire, les
  métadonnées, le maillage et le HTML compilé.
- Des tests de navigation ordinateur/mobile sont fournis avec leur workflow GitHub.
- Dependabot propose des mises à jour ; aucune fusion automatique n’est configurée.
- Une maintenance hebdomadaire contrôle les dépendances et l’accessibilité des liens.
- Une revue du site public est programmée dans ChatGPT le lundi matin, heure de Paris.
- `AGENTS.md` et `docs/agents/` cadrent les futures interventions. Aucun agent externe
  disposant de clés du site n’a été installé.

Les workflows ne s’exécutent qu’une fois les fichiers importés dans un dépôt où GitHub
Actions est autorisé. Un contrôle GitHub en échec ne bloque pas automatiquement un
déploiement Vercel déjà configuré : la protection de branche reste à régler dans le dépôt.

Le navigateur de cette session ne peut pas atteindre le serveur local. Le contrôle du
HTML compilé est effectué ; la vérification graphique et les 16 scénarios navigateur
restent à exécuter via le workflow fourni avant promotion de cette version.

## Sources de la décision

- [Google — contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google — liens commerciaux](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links).
- [Google — changements de documentation](https://developers.google.com/search/updates) : fin des résultats enrichis FAQ en mai 2026 ; la FAQ visible reste utile au lecteur.
- [Next.js — correctifs d’août 2026](https://nextjs.org/blog/august-2026-security-release).
- [Vercel — événements personnalisés](https://vercel.com/docs/analytics/custom-events).
- Dépôts et guides retenus : `agents/ressources-verifiees.md`.
