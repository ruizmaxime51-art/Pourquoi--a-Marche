# Format standard d'une recette Chimie Maison

Toutes les recettes suivent le même squelette. La fiche (ingrédients, étapes,
matériel) est écrite **une seule fois** dans le frontmatter : elle alimente
l'affichage, l'impression et les données structurées Google.

## 1. Squelette de la page (dans cet ordre)

| # | Bloc | Source | Obligatoire |
|---|------|--------|-------------|
| 1 | En-tête : titre, chapeau, formule, boutons | frontmatter (`title`, `excerpt`, `formula`) | oui |
| 2 | « Ce que vous allez comprendre » | `takeaways` (3 points) | oui |
| 3 | Introduction courte + lien `jump-to-recipe` | texte | oui |
| 4 | Encadré « Ce qu'il vous faut » | `{{materiel}}` | oui |
| 5 | `## Sécurité` | texte + `notice-box` | si produit corrosif, allergène ou risque sanitaire |
| 6 | `## Pourquoi ça marche` | texte + lien vers la notion | oui |
| 7 | `## La recette …` | `{{fiche:fiche}}` | oui |
| 8 | `## Comment savoir si c'est réussi ?` | texte | oui |
| 9 | `## Problèmes fréquents` | `###` par symptôme → cause → solution, liens vers les guides de dépannage | oui |
| 10 | `## Conservation` / utilisation | texte | oui |
| 11 | `## Le matériel, en détail` | `{{affil:clé}}` + pourquoi ce choix | oui |
| 12 | FAQ | `faq:` + `{{faq}}` | recommandé |
| 13 | Sources | `{{references}}` | oui |

Le kimchi classique est la page modèle : c'est la plus complète et la plus visitée.

## 2. Frontmatter

```yaml
type: recette
materiel:
  titre: Ce qu'il vous faut
  elements:
  - nom: Balance de précision 0,1 g
    usage: pour un dosage fiable           # facultatif
    produit: balance-bomata-01g            # clé de lib/affiliations.js, facultatif
fiches:
- id: fiche                                # fiche, ou fiche-1 / fiche-2 si plusieurs
  titre: Kimchi classique au chou chinois
  etiquette: Fiche recette imprimable
  resume: Version en morceaux, moyennement pimentée, pour un bocal de 2 litres.
  ajustable: true                          # false pour savon, soude, nettoyants
  reperes:                                 # 3 ou 4 cases
  - { label: Préparation, valeur: 50 min }
  - { label: Rendement, valeur: ≈ 1,3 kg }
  colonne_nom: Ingrédient
  ingredients:
  - nom: Sel non iodé
    quantite: 120                          # nombre
    unite: g                               # g, kg, mg, ml, mL, cl, L
    decimales: 1                           # facultatif : 69,0 g
    detail: (60 %)                         # facultatif, affiché après la quantité
    role: Saumure à 6 % avant rinçage
  - nom: Aromates facultatifs
    texte: 1 gousse d'ail, poivre, aneth   # si la quantité ne se pèse pas
    role: Goût
  etapes:
  - titre: Saler
    texte: Dissoudre 120 g de sel dans 2 L d'eau…
    image: /images/kimchi-etape2-salage-pov.webp   # facultatif
    alt: Chou chinois immergé dans une saumure      # obligatoire si image
  note:
    titre: Ne remplissez pas le bocal jusqu'au bord.
    texte: Le chou relâche du jus…
  materiel: [Balance de précision 0,1 g]   # facultatif : limite le matériel affiché dans cette fiche
  schema:
    type: Recipe                           # Recipe (alimentaire) ou HowTo (savon, entretien)
    nom: Kimchi classique maison au chou chinois
    description: …
    prepTime: PT50M                        # durées ISO 8601
    totalTime: P2D
    rendement: 1 bocal de 2 litres
    categorie: Accompagnement fermenté     # Recipe seulement
    cuisine: Coréenne                      # Recipe seulement
```

Le build refuse une fiche incomplète (ingrédient sans unité, image sans texte
alternatif, clé produit inconnue…).

## 3. Règles

- Les quantités viennent de Maxime ou d'une source citée. Rien n'est inventé.
- `ajustable: false` pour toute formule chimique non interchangeable (savon, soude, nettoyants).
- Les quantités citées dans le texte des étapes ne sont pas recalculées : le site l'indique quand on multiplie.
- Un produit affilié n'est ajouté que s'il existe dans `lib/affiliations.js` avec le lien de Maxime.
- Chaque image a une provenance (banque libre avec crédit, ou génération signalée).
