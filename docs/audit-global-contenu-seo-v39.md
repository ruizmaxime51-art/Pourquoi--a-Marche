# Audit global contenu et SEO — version 39

Date de contrôle : 24 juillet 2026.

Périmètre : 35 routes générées, dont 22 articles, les pages catégories, les outils et les pages
institutionnelles. Le contrôle porte sur le HTML réellement généré, les contenus Markdown, les
métadonnées, les données structurées, les sources, le maillage, les images, Pinterest et les liens
affiliés.

## Conclusion

Le site possède une bonne base éditoriale et un maillage sans page orpheline. Il ne faut toutefois
pas publier la prochaine version comme si tout était validé : quatre groupes d’erreurs doivent être
corrigés en priorité.

1. Les pages statiques indexables déclarent presque toutes la page d’accueil comme URL canonique.
2. La recette de savon contient deux formules différentes entre le texte visible et les données
   structurées.
3. La recette de carottes lacto-fermentées contient un repère de salage à sec trop faible et ne
   donne pas un critère de fin de fermentation aussi rigoureux que les recettes de kimchi.
4. Plusieurs conseils de protection, de levain et de compatibilité chimique demandent une
   correction ou une source plus précise.

## Priorité 0 — erreurs à corriger avant publication

### 1. Canonicalisation incorrecte sur 10 pages indexables

Le layout racine fixe `https://www.chimiemaison.fr` comme canonical. Les pages qui ne remplacent
pas cette valeur héritent donc de la canonical de l’accueil.

Pages concernées :

- `/recettes`
- `/cosmetique`
- `/entretien`
- `/conservation`
- `/fermentation`
- `/comprendre`
- `/bien-sequiper`
- `/outils`
- `/outils/lessive-eau-dure`
- `/a-propos`

Cette configuration dit aux moteurs que ces dix pages sont des variantes de l’accueil alors que le
sitemap les présente comme des URL distinctes. Chaque page indexable doit avoir une canonical
auto-référente et absolue.

Référence : [Google — canonicalisation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### 2. Deux recettes de savon différentes sur la même URL

Page : `/articles/savon-surgras-saponification`.

| Emplacement | Corps gras à 10 % | Eau | NaOH | Surgras annoncé |
| --- | --- | ---: | ---: | ---: |
| Données structurées `HowTo` | 50 g d’huile de colza | 165 g | 69,5 g | non explicité |
| Recette visible | 50 g d’huile d’amande douce | 174 g | 69,5 g | 8 % |

La masse de NaOH dépend du corps gras réellement choisi et de son indice de saponification. Il faut
d’abord choisir une seule formule, recalculer la soude avec les valeurs SAP documentées et la pureté
réelle du produit, puis synchroniser le texte, le tableau, le résumé, les images et le JSON-LD.

Autres incohérences sur la même page :

- l’étape visible demande des « gants nitrile », alors que le comparatif du site dit que les gants
  jetables ne doivent pas être la protection principale pendant la dissolution de soude ;
- le texte présente la concentration d’un déboucheur liquide comme « jamais garantie », formulation
  trop absolue : le vrai problème est l’absence éventuelle de concentration exploitable, les
  additifs et l’inadéquation du produit à la recette ;
- la légende « vapeur visible » peut faire croire que NaOH est volatil ; il faut parler de chaleur,
  de vapeur d’eau éventuelle et surtout de brouillard/aérosols irritants.

### 3. Recette de carottes : salage et fin de fermentation

Page : `/articles/lacto-fermentation-legumes-securite`.

- Le texte général propose environ `10 g de sel par kg` pour un salage à sec, soit 1 %. La
  recommandation domestique de l’University of Minnesota correspond plutôt à environ 2,4 % pour
  les légumes finement découpés. Un repère universel à 1 % ne doit pas rester en ligne sans protocole
  validé pour le légume concerné.
- La recette demande de goûter à partir du cinquième jour et de réfrigérer selon le goût, sans
  intégrer le suivi du pH ou un protocole testé. C’est moins rigoureux que les deux recettes de
  kimchi du même site.
- Le JSON-LD annonce `P7D`, tandis que le texte visible annonce 5 à 10 jours.
- La page ne cite actuellement aucune source.

Référence : [University of Minnesota Extension — fermentation domestique](https://extension.umn.edu/preserve-your-own-food/fermentation).

### 4. Protection oculaire insuffisamment cadrée pour la soude

Page : `/articles/gants-lunettes-risque-chimique`.

Le comparatif distingue correctement lunettes, surlunettes et visière, mais il présente des lunettes
EN 166 non fermées comme une base possible pour dissoudre de la soude. La seule mention `EN 166`
ne prouve pas la protection contre les projections de liquide corrosif. Il faut privilégier une
lunette-masque portant un marquage d’usage liquide adapté, correctement ajustée, puis une visière en
complément si le risque de projection le justifie.

La page ne cite qu’une source pour l’ensemble des affirmations de normes et de compatibilité produit.
Les marquages exacts doivent être vérifiés sur la documentation fabricant, pas seulement sur la
fiche Amazon.

## Priorité 1 — problèmes SEO et éditoriaux importants

### Métadonnées et indexation

- La page `/outils/lessive-eau-dure` n’a pas de métadonnées propres. Son titre et sa description
  sont ceux de l’accueil, en plus de sa mauvaise canonical.
- Les pages `mentions-legales` et `politique-confidentialite` sont en `noindex`, mais restent
  présentes dans le sitemap. Un sitemap devrait contenir les URL canoniques que le site souhaite
  voir indexées.
- Neuf titres générés dépassent 80 caractères après ajout de « — Chimie Maison ». Google n’impose
  pas une limite fixe, mais recommande des titres descriptifs et concis. Les plus longs vont de
  83 à 96 caractères.
- Deux descriptions sont particulièrement longues : kimchi végétarien (162 caractères) et
  tensioactifs (188 caractères).

Références :

- [Google — titres dans les résultats](https://developers.google.com/search/docs/appearance/title-link)
- [Google — descriptions et extraits](https://developers.google.com/search/docs/appearance/snippet)

### Images et données sociales

- Les deux recettes de kimchi n’ont aucune image d’article. Leur balisage `Recipe` utilise donc le
  visuel générique du site au lieu d’une photo du plat fini.
- Le code annonce systématiquement une image Open Graph de `1200 × 800`, alors que 21 articles sur
  22 utilisent une image d’une autre dimension. Seul le visuel du percarbonate correspond.
- Le visuel principal des articles a `alt=""`. S’il est éditorial et non purement décoratif, il doit
  recevoir un texte alternatif descriptif.
- Les pages catégories remplacent partiellement l’Open Graph du layout et perdent `og:url`,
  `og:image` et `og:type`. D’autres pages partagent encore le titre et l’URL Open Graph de l’accueil.
- Le site n’a pas de favicon déclaré, ni de données structurées `Organization` sur l’accueil.

Référence : [Google — bonnes pratiques SEO pour les images](https://developers.google.com/search/docs/appearance/google-images).

### Pinterest

Le pack Pinterest complet existe uniquement pour le percarbonate :

- 1 image verticale 1000 × 1500 ;
- 1 titre ;
- 1 description ;
- 1 texte alternatif ;
- des prompts visuels documentés.

Il manque donc un pack Pinterest à 21 articles sur 22. Les recettes de kimchi sont la première
priorité, car elles n’ont même pas encore de photo principale. Pinterest recommande un ratio 2:3
et utilise la description pour comprendre la pertinence du Pin.

Références :

- [Pinterest — spécifications des Pins](https://help.pinterest.com/en/business/article/pinterest-product-specs)
- [Pinterest — Rich Pins](https://help.pinterest.com/en/business/article/rich-pins)

### Sources scientifiques

Quatre pages ne citent aucune source :

- carottes lacto-fermentées ;
- levain naturel ;
- matériel pour fabriquer du savon ;
- comparatif des balances.

Quatre autres n’en citent qu’une :

- protection contre la soude ;
- traces blanches sur le linge ;
- levain qui ne monte pas ;
- nettoyants acide et basique.

Le registre contient aussi dix liens trop génériques pour permettre au lecteur de retrouver la
preuve annoncée : pages d’accueil LibreTexts, Master Organic Chemistry, Scientific Soapmaking,
ScienceDirect Topics, From Nature With Love, SoapCalc, PMC, Wiley/AOCS et IUPAC. Certains sont des
ressources pédagogiques ou commerciales, pas des publications scientifiques. Le titre, les auteurs,
l’année, le DOI ou l’URL exacte de l’article doivent remplacer ces liens génériques.

Le dossier percarbonate est actuellement le meilleur modèle du site : publications identifiables,
DOI ou PubMed, portée et limites de chaque étude précisées.

### Levain : affirmations à revoir

Page : `/articles/levain-naturel-fermentation`.

- La farine T65 est décrite comme « semi-complète » ; cette qualification correspond plutôt à une
  farine bise de type T80.
- « Gluten plus digeste que le blé moderne » pour le grand épeautre est une allégation trop large
  et non sourcée.
- La section « intolérants au gluten » ne distingue pas clairement maladie cœliaque, allergie au
  blé et sensibilité déclarée. Elle doit dire sans ambiguïté qu’un levain de blé, seigle ou épeautre
  n’est pas sans gluten.
- Les affirmations sur la fréquence des moisissures, la supériorité du mélange riz-sarrasin et
  l’ajout de miel reposent sur des retours d’expérience non cités.
- La page entière ne contient aucune référence scientifique ou universitaire.

### Nettoyants : forme chimique et conservation

Page : `/articles/nettoyant-ph-melanges-dangereux`.

- `15 g de cristaux de soude` n’est pas une spécification suffisante : carbonate anhydre,
  monohydrate et décahydrate ne sont pas interchangeables masse pour masse.
- La conservation « plusieurs mois à température ambiante » du spray à l’acide citrique est
  annoncée sans étude de stabilité microbiologique ni conditionnement précis.
- Le tableau « sûr sur » est trop catégorique. La compatibilité dépend aussi du revêtement, des
  joints, de la concentration et du temps de contact.
- La page n’a qu’une source, utilisée uniquement pour le danger du carbonate de sodium.

### Comparatifs affiliés

Les cinq comparatifs d’équipement ajoutent une vraie valeur technique, mais utilisent des
expressions comme « meilleur » ou « notre recommandation » sans montrer :

- test personnel ;
- photos originales des produits ;
- protocole de mesure ;
- résultats quantitatifs ;
- date de contrôle de chaque fiche produit.

Si les produits n’ont pas été testés, les pages doivent être présentées comme des comparatifs sur
fiches techniques, avec une méthode explicite. Google recommande des preuves d’expérience,
des mesures, des avantages/inconvénients et des alternatives pour les contenus de recommandation.

Référence : [Google — rédiger des avis de qualité](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews).

Douze produits utilisent encore une réassurance dynamique (`Expédié par Amazon` ou
`Retours gratuits`). Ces mentions peuvent devenir fausses sans modification de l’ASIN. Une mention
stable comme `Lien affilié Amazon` est préférable.

Le catalogue contient aussi deux choix de balance 0,1 g / 5 kg :

- la clé historique `balance`, utilisée dans plusieurs recettes ;
- `balance-bomata-01g`, présentée comme recommandation principale dans le comparatif.

Il faut décider lequel est la recommandation transversale, ou expliquer clairement pourquoi les deux
restent proposés.

## Priorité 2 — architecture et améliorations

### Taxonomie

Les contenus de lacto-fermentation sont répartis entre `/conservation` et `/fermentation`. Pour un
lecteur comme pour un moteur, le silo thématique manque de cohérence :

- carottes, guide général et diagnostic moisissure sont dans Conservation ;
- kimchi et levain sont dans Fermentation.

Deux solutions cohérentes sont possibles :

1. regrouper toutes les fermentations dans `/fermentation` et réserver `/conservation` aux autres
   méthodes de conservation ;
2. permettre l’affichage multi-catégorie tout en gardant une seule URL canonique par article.

### Questions réellement recherchées

Le percarbonate est le meilleur exemple d’intégration des recherches par tâche ou problème :
tache de sang, vin, café, graisse, rouille, linge jauni, température, couleur et mélange avec le
vinaigre.

Pour les 16 articles les plus anciens, il n’existe pas de fiche de recherche documentant :

- requête principale ;
- variantes par tâche, support, symptôme ou niveau ;
- questions associées ;
- intention informationnelle ou d’achat ;
- URL cible et risque de cannibalisation.

L’absence de champ `keywords` n’est pas en elle-même un problème de classement — Google n’utilise
pas la balise meta keywords comme levier — mais elle révèle ici l’absence d’un dossier de recherche
équivalent au pack percarbonate. Les données Search Console devront ensuite confirmer les vraies
impressions et formulations.

### Données structurées devenues inutiles

Sept articles émettent encore un objet `FAQPage`. Google a retiré le résultat enrichi FAQ en mai
2026. Les FAQ visibles restent utiles aux lecteurs et aux requêtes longues, mais le balisage n’apporte
plus ce résultat enrichi.

Référence : [Google Search Central — retrait des FAQ rich results](https://developers.google.com/search/updates#removing-faq-rich-result).

### Confiance et auteur

- Les articles n’affichent pas de byline, de relecteur ou de lien direct vers la méthode éditoriale.
- Le JSON-LD indique `Chimie Maison` comme organisation auteur, sans URL de profil.
- Les dates de mise à jour existent dans certaines métadonnées, mais l’interface n’affiche que la
  date de publication.
- La phrase « chaque recette est relue manuellement » est trop générale face aux incohérences
  relevées. Un encadré méthodologique et un journal de correction renforceraient la preuve.

## Contrôles qui passent

- 35 routes statiques générées.
- 22 articles présents.
- aucune route interne cassée ;
- aucune ancre locale ou inter-article cassée après correction des boutons `Matériel utile` ;
- aucun article orphelin ;
- chaque article reçoit au moins deux liens internes depuis d’autres pages du site ;
- tous les shortcodes d’affiliation correspondent à une entrée du catalogue ;
- ASIN et URL concordent pour les produits du catalogue ;
- identifiant Amazon Partenaires présent ;
- `nofollow` et `sponsored` présents sur les liens affiliés générés ;
- aucun prix ni stock figé dans les articles ;
- canonicals des 22 articles correctes ;
- sitemap et robots générés ;
- les images référencées existent toutes localement.

## Ordre de correction recommandé

1. Corriger les canonicals et les métadonnées de l’outil.
2. Suspendre ou corriger la recette de savon après choix et recalcul d’une formule unique.
3. Corriger la recette de carottes et harmoniser le protocole de sécurité alimentaire.
4. Revoir la protection oculaire et les gants dans la recette de savon.
5. Corriger la section levain/gluten et les cristaux de soude.
6. Remplacer les références génériques par des publications exactes.
7. Corriger Open Graph, les dimensions et les images de recette.
8. Produire les packs Pinterest, d’abord kimchi, savon et levain.
9. Raccourcir les titres les plus longs et documenter les requêtes des anciens articles.
10. Clarifier la taxonomie Conservation/Fermentation et la méthode des comparatifs.
