# Revue croisée des skills — 20 septembre 2026

## Décision

Conserver l’axe **comprendre → faire → choisir le matériel**. Une notion qui attire
des lecteurs peut alimenter un parcours utile vers une recette et un outil. Remplacer
ces notions par des pages marchandes ne découle d’aucune donnée vérifiée ici.

Les skills sont des guides de travail, pas cinq avis indépendants ni des expériences
mesurant la conversion. Leurs recommandations ont été confrontées au code, au site
public et aux exemples ci-dessous.

## Comparaison et arbitrages

| Skill appliqué | Apport utile | Mon arbitrage pour Chimie Maison | Résultat V56 |
|---|---|---|---|
| seo-audit | Examiner l’accès, les liens et la clarté de chaque page avant de multiplier les contenus | Les six pages contrôlées sont accessibles avec une canonical propre et sans noindex. La panne visible concerne les médias de la crufiture ; aucune preuve d’un blocage SEO général | Restaurer les fichiers et contrôler leur livraison. Préserver les URL et le maillage des notions |
| content-strategy | Relier les contenus selon le besoin et l’intention du lecteur | Organiser autour d’un projet domestique. Le mélange recettes/notions/comparatifs ne se décide pas par un ratio universel de publication | Axe V55 conservé ; queue éditoriale proposée pour la prochaine étape |
| cro | Clarifier l’action principale et placer une recommandation au moment utile | Le bloc « Pour votre projet » ajouté en V55 arrivait avant l’introduction du guide. Il pouvait interrompre la réponse attendue. Un clic marchand plus précoce n’est pas toujours un meilleur parcours | Bloc après le contenu des guides, recettes et comparatifs ; boutons de lecture précis ; précautions prioritaires pour les recettes chimiques |
| frontend-design | Hiérarchie visuelle, variété photographique et composition intentionnelle | Les photos réelles existantes conviennent ; une nouvelle génération d’images ne résoudrait pas les 404. Les crédits ne doivent pas masquer la photo | Photos conservées, légende du héros sous l’image. Pas de refonte décorative générale |
| vercel-react-best-practices | Éviter du JavaScript et des traitements client sans utilité | Le parcours est fait de liens ordinaires rendus au serveur ; les images restent optimisées. Aucun composant client nécessaire pour corriger des fichiers absents | Liens serveur conservés et contrôles de médias exécutés hors navigateur |

Les raccourcis alimentaires utilisent des ancres déjà présentes et testées. Pour le
savon et les nettoyants, le premier raccourci conduit aux précautions, avant les
dosages. La crufiture reste un guide scientifique, sans promesse de conservation ni
faux bouton vers un calculateur encore inexistant.

## Exemples observés, sans copier leurs contenus

- [Serious Eats, oignons rouges](https://www.seriouseats.com/pickled-red-onions) :
  accès direct à la recette et crédit photographique explicite. J’en retiens ces
  repères de navigation, sans reprendre ses affirmations de conservation.
- [King Arthur Baking, levain](https://www.kingarthurbaking.com/recipes/sourdough-starter-recipe) :
  ingrédients, étapes illustrées, conseils et liens marchands reliés à leur contexte
  d’emploi. Cela soutient l’idée de recommander un objet lorsqu’une fonction est
  expliquée. Cela ne prouve pas un meilleur taux de clic pour Chimie Maison.

## Constats publics vérifiés

Les pages `/`, `/recettes`, `/bien-sequiper`, `/articles/notion-saponification`,
`/articles/savon-surgras-saponification` et `/articles/confiture-sans-cuisson-crufiture`
ont répondu HTTP 200 lors du contrôle direct. Leur HTML contient une canonical
cohérente et `index, follow`. `robots.txt` et `sitemap.xml` répondent aussi 200.
Ces constats ne renseignent pas sur leur indexation ou leur position réelle.

La notion saponification contient des liens vers la recette, le calculateur de
surgraissage et le guide matériel. La crufiture renvoie notamment à la conservation
et au choix d’une balance. L’accueil réutilise la photo de crufiture : rétablir ce
fichier corrige également ce visuel d’accueil et les cartes concernées.

Les huit médias propres à la crufiture répondent 404 ; le navigateur constate une
image principale non décodée, sans filtre CSS gris. Les fichiers du projet sont
présents et décodables. Le mécanisme exact de leur omission en production reste
inconnu, faute d’historique de déploiement.

## Ce que l’on peut mesurer ensuite

| Question | Mesure | Limite |
|---|---|---|
| Les titres obtiennent-ils davantage de clics Google ? | Clics / impressions dans Search Console, par page et requête | Aucun export récent fourni ; pas d’accès privé supposé |
| Les lecteurs d’une notion vont-ils à la recette, à l’outil ou au matériel ? | Événements `journey_click` rapportés aux vues de la page sur la même période | Événements / vues n’est pas un taux de visiteurs uniques ; plusieurs clics sont possibles |
| Les guides matériel amènent-ils vers le marchand ? | Événements `affiliate_click`, puis rapports d’affiliation séparés | Un clic ne prouve pas une commande ni une commission |
| Le déplacement du bloc améliore-t-il son usage ? | À terme, clics / expositions du bloc, ou test contrôlé si le volume le permet | Les expositions ne sont pas suivies actuellement. Les vues de page restent un indicateur approximatif |

Conserver une base de comparaison avant mise en ligne puis observer une période de
même durée avec les mêmes filtres. Sur un petit trafic, des variations sont peu
concluantes. Aucun gain chiffré n’est annoncé. Le suivi de clics existant reste
désactivé : [les événements personnalisés Vercel](https://vercel.com/docs/analytics/custom-events)
dépendent du plan disponible, qui n’a pas été vérifié sur le compte.

## Priorités

1. Rétablir les huit médias et vérifier leurs URL après déploiement.
2. Valider les parcours V56 sur ordinateur et mobile, puis recueillir les premiers
   clics mesurables avec une configuration de suivi adaptée.
3. Constituer une réserve d’articles utiles, sourcés et relus, avant d’activer la
   diffusion quotidienne sur le site et Pinterest.

Références techniques : [Next.js 15, images](https://nextjs.org/docs/15/app/api-reference/components/image),
[Google, contenu généré avec l’IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).
Google demande une valeur utile et de l’exactitude ; publier davantage de pages
générées sans valeur ajoutée peut enfreindre ses règles. La fréquence seule n’est
donc pas une justification éditoriale.
