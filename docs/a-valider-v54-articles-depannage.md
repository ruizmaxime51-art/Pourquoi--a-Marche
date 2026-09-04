# v54 — À VALIDER avant publication

Les quatre articles de dépannage ont été réécrits avec des valeurs chiffrées.
**Chaque valeur ci-dessous doit être vérifiée par Maxime avant mise en ligne.**
Elles sont issues de sources convergentes mais n'ont pas été validées par un chimiste.

---

## savon-maison-trop-mou.md

| Valeur affirmée | Où | À vérifier |
|---|---|---|
| Cure de **4 à 6 semaines** | Cause 1, FAQ | Cohérent avec le reste du site ? |
| Saponification résiduelle achevée en **24-48 h** | Cause 1 | OK ? |
| Surgras habituel **3 à 8 %** | Cause 4, FAQ | Déjà utilisé dans la notion saponification |
| Introduire **25 à 30 % de corps gras saturés** | Cause 2 | Fourchette à confirmer |
| Indice d'iode coco **8-12**, olive **80-88**, tournesol **> 125** | Encart | Repris du tableau de la notion |
| Indice d'iode global de recette **< 70** | Encart | Règle empirique — formulation prudente utilisée |
| Tolérance balance domestique **~1 g** | Encart | OK ? |

## levain-ne-monte-pas.md

| Valeur affirmée | Où | À vérifier |
|---|---|---|
| Plage favorable **24 à 27 °C** | Cause 1, FAQ | Sources convergentes |
| Doublement en **4 à 8 h** dans cette plage | Cause 1, FAQ | Pour un levain mature nourri à parts égales |
| **21-24 °C** → 8 à 12 h | Tableau | Extrapolation raisonnable, à confirmer |
| **18-21 °C** → 12 h et plus | Tableau | idem |
| **< 18 °C** → activité très faible | Tableau | idem |
| **10 à 20 %** de farine complète/seigle par rafraîchi | Cause 2, FAQ | Fourchette à confirmer |
| Levain fiable après **10 à 14 jours** | Cause 5, FAQ | OK ? |
| Chlore s'évapore à l'air libre, **pas la chloramine** | FAQ | Point chimique — à valider |

## lessive-maison-traces-blanches.md

| Valeur affirmée | Où | À vérifier |
|---|---|---|
| Équation `2 R–COO⁻Na⁺ + Ca²⁺ → (R–COO)₂Ca ↓ + 2 Na⁺` | Mécanisme | Déjà validée en notion tensioactifs |
| Eau douce **< ~15 °f**, dure **> ~30 °f** | Étape 3, FAQ | Repères indicatifs, formulation prudente |
| Ca²⁺ divalent ponte **deux** carboxylates | Encart | Déjà validé en notion tensioactifs |
| Tartre = CaCO₃ / savon calcaire = carboxylate de Ca | Encart | Déjà validé |
| Cristaux de soude = correctif **partiel** | Étape 5, FAQ | Nuance déjà validée en notion |

## lacto-fermentation-odeur-moisissure.md

| Valeur affirmée | Où | À vérifier |
|---|---|---|
| Voile plat/lisse/blanc = **levures de surface**, non dangereuses | Tout l'article | **Point sécurité — à valider en priorité** |
| Duvet en relief ou coloré = moisissure → **jeter le bocal entier** | Tout l'article | **Point sécurité — à valider en priorité** |
| Ne pas gratter une moisissure sur aliment humide | Section moisissure, FAQ | **Point sécurité** |
| Mycotoxines possibles | Section moisissure | Formulation prudente utilisée ("certaines") |
| Saumure **~2 % en masse** | Causes, FAQ | Cohérent avec la recette carottes ? |
| Odeur soufrée normale pour crucifères | Tableau odeurs | OK ? |

---

## Modifications techniques de cette version

### Correctif FAQ (bénéficie à 10 articles existants + les 4 réécrits)

- **Nouveau composant** `app/_components/ArticleFaq.js` — accordéon accessible (`<details>`)
- **Affichage** : inséré dans `app/articles/[slug]/page.js` après le corps de l'article
- **Schema** : `FAQPage` ajouté au `@graph` des données structurées
- **Styles** : bloc `.article-faq` ajouté à `app/globals.css`

Les 10 articles qui avaient déjà un bloc `faq:` dans leur frontmatter sont automatiquement
concernés — aucune modification de contenu n'a été nécessaire pour eux.

### Articles réécrits

| Article | Avant | Après | FAQ | Affiliation |
|---|---|---|---|---|
| savon-maison-trop-mou | 479 mots | 1 313 mots | 6 Q | balance |
| levain-ne-monte-pas | 321 mots | 1 220 mots | 6 Q | thermomètre, balance |
| lessive-maison-traces-blanches | 384 mots | 1 128 mots | 6 Q | testeur dureté, cristaux de soude |
| lacto-fermentation-odeur-moisissure | 353 mots | 1 025 mots | 6 Q | poids et bocal de fermentation |

Chacun a reçu : `seoTitle`, `seoDescription`, `keywords`, un maillage sortant renforcé
vers les notions, recettes et outils, et un bloc affilié placé au moment où le matériel
devient utile.

---

## Ce qui reste à faire (non couvert par cette version)

1. **Images dans le corps de ces 4 articles** — aucune n'a été ajoutée, faute de visuels
   disponibles. Emplacements suggérés : un visuel par cause principale.
2. **Les 6 comparatifs** (`quelle-balance`, `bocal-lacto`, `flacon-nettoyant`,
   `gants-lunettes`, `bandelettes-ph`, `materiel-savon`) — leur blocage principal est
   l'absence de photo de produit, qui ne peut être résolue sans visuels.
3. **Suffixe de titre** — le template `%s — Chimie Maison` ajoute 16 caractères et tronque
   15 titres sur 25 en SERP. Non modifié dans cette version (décision à prendre).

---

## Correctif v54.1 — échec de build Vercel

**Erreur :** `Objects are not valid as a React child (found: object with keys {...})`
sur `/articles/lacto-fermentation-odeur-moisissure`.

**Cause :** deux `takeaways` contenaient un deux-points suivi d'un espace dans une valeur
de liste non guillemetée. YAML interprète alors la ligne comme une paire clé-valeur, et
renvoie un objet là où React attend une chaîne.

```yaml
# cassait le build
- La température est la première cause : en dessous de 20 °C, l'activité chute fortement

# corrigé
- "La température est la première cause : en dessous de 20 °C, l'activité chute fortement"
```

**Fichiers corrigés :** `levain-ne-monte-pas.md`, `lacto-fermentation-odeur-moisissure.md`.
Le texte affiché est identique — seule l'interprétation YAML change.

**Règle à retenir :** toute valeur de liste du frontmatter contenant ` : ` doit être
entourée de guillemets. Cela concerne `takeaways`, mais aussi tout futur champ en liste.
