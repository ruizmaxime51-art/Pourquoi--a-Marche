# Publication quotidienne : proposition, non activée

Recherche vérifiée le 20 septembre 2026. Aucun compte n8n ou Pinterest n’a été
connecté ; aucun article ni épingle n’a été publié. Les skills ci-dessous sont
retenus pour la suite, pas annoncés comme déjà installés.

## Skills supplémentaires utiles

| Skill | Source | Besoin couvert |
|---|---|---|
| n8n-workflow-lifecycle-official | [n8n officiel](https://github.com/n8n-io/skills/tree/main/skills/n8n-workflow-lifecycle-official) | Concevoir, valider et tester la chaîne de publication |
| n8n-binary-and-data-official | [n8n officiel](https://github.com/n8n-io/skills/tree/main/skills/n8n-binary-and-data-official) | Transporter réellement les fichiers image, sans confondre une URL avec les octets du fichier |
| n8n-data-tables-official | [n8n officiel](https://github.com/n8n-io/skills/tree/main/skills/n8n-data-tables-official) | Conserver la file d’articles, les états et les identifiants d’épingles |
| n8n-error-handling-official | [n8n officiel](https://github.com/n8n-io/skills/tree/main/skills/n8n-error-handling-official) | Gérer les échecs et reprises d’un processus sans surveillance |
| webapp-testing | [Anthropic](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | Assister les contrôles de navigation, d’images et de captures avant livraison |

Privilégier le [paquet officiel n8n](https://github.com/n8n-io/skills), avec son
skill d’entrée `using-n8n-skills-official`. Son utilisation opérationnelle requiert
une instance n8n et une connexion MCP autorisée. Le skill de test complète les
scénarios Playwright déjà présents ; il n’a pas besoin d’un accès de publication.
Les instructions du navigateur disponible dans l’environnement priment sur les
exemples d’exécution génériques du skill.

Pour rédiger, les cinq skills installés et `creer-pages-seo-affiliation` couvrent déjà
la stratégie, le SEO, le parcours, le design, React et les exigences scientifiques.
Il est préférable de renforcer le guide existant sur les licences et la provenance
des photos plutôt que d’ajouter un pack inconnu de prompts « Pinterest viral ».

Un skill donne une méthode de travail ; un connecteur autorisé exécute les actions.
Le code de publication Pinterest doit suivre son
[API officielle et son schéma OpenAPI](https://github.com/pinterest/api-description/tree/main/v5).
Le schéma vérifié expose `POST /pins`, une authentification autorisée et le tableau
de destination. L’accès API et les permissions du compte devront être vérifiés.
La publication est destinée au contenu original du compte ; la republication des
épingles d’autres personnes n’est pas le fonctionnement proposé.

## Chaîne proposée

1. Choisir un besoin concret dans un projet existant, vérifier qu’une page répondant
   au même besoin n’existe pas déjà, puis préparer un brief.
2. Produire un brouillon sourcé, ses liens notion/recette/outil/matériel et ses médias.
   Conserver pour chaque photo l’auteur, l’URL de la source, la licence, les éventuelles
   adaptations et le fichier local. Une image d’illustration n’est pas une preuve
   d’un essai réalisé par Chimie Maison.
3. Vérifier la science, les calculs, les conditions d’emploi, l’originalité utile et
   la cohérence entre le texte et les visuels. Passer le statut à **validé** après
   cette revue. Cette séparation respecte la règle actuelle d’`AGENTS.md` interdisant
   la publication automatique d’un contenu scientifique généré sans validation.
4. Chaque jour, prendre au maximum un article validé, exécuter les contrôles du dépôt
   et publier par la voie GitHub/Vercel autorisée. Si la réserve est vide, attendre ;
   ne pas inventer un article pour remplir le calendrier.
5. Attendre le succès du déploiement, puis vérifier l’article public et toutes ses
   images, dont l’image Pinterest. Une erreur ou un résultat inconclusif suspend la
   diffusion de l’épingle ; la V56 fournit déjà le contrôle des médias.
6. Créer une épingle originale liée à l’article, puis conserver son identifiant et
   l’état de publication. Utiliser une seule exécution de diffusion à la fois, une
   clé `article + version_du_visuel` et un journal des tentatives.
7. En cas de réponse ambiguë après un envoi Pinterest, rechercher si l’épingle a été
   créée avant de réessayer. Une simple relance aveugle peut créer des doublons.
   Les erreurs temporaires et les erreurs d’autorisation n’ont pas le même traitement.

Le rythme de diffusion et celui de préparation peuvent être différents : préparer
et relire une réserve à l’avance permet de publier quotidiennement avec un contrôle
éditorial. Le choix de la fréquence reste subordonné à l’utilité réelle des pages.

## Informations nécessaires à la mise en service

- Dépôt et branche réellement utilisés, commande de build et moyen de constater le
  déploiement réussi. Ne pas supposer qu’une protection de branche est active.
- Instance n8n et mode d’hébergement, ou choix d’un autre ordonnanceur si un outil
  existant suffit. Aucun abonnement supplémentaire n’est nécessaire pour les
  corrections V56.
- Compte Pinterest, tableau cible et connexion API autorisée ; garder les secrets
  dans les connexions sécurisées, jamais dans les articles, les skills ou le ZIP.
- Horaire de diffusion et responsable de la validation éditoriale. Aucun de ces
  paramètres n’a été activé implicitement.

Commencer par un essai complet sur un article déjà validé, puis ouvrir la cadence
quotidienne une fois la livraison des images, la publication et l’absence de doublons
vérifiées. La création de contenu et la diffusion restent deux opérations distinctes.
