# Ressources vérifiées — 10 septembre 2026

Les ressources ci-dessous ont été consultées sur leurs dépôts ou documentations officiels. Aucune collection générique de prompts SEO n’a été installée en bloc. Les dépôts évoluent : vérifier le fichier demandé et la version avant toute installation ultérieure.

| Ressource | Rôle pour Chimie Maison | Mise en œuvre dans v55 |
|---|---|---|
| [Vercel agent-skills](https://github.com/vercel-labs/agent-skills) — react-best-practices et web-design-guidelines | Relecture React, accessibilité, performances et navigation | Guide référencé ; principes appliqués aux composants, missions dans ce dossier. Pas d’agent distant disposant de clés. |
| [Microsoft Playwright](https://github.com/microsoft/playwright) | Vérifier le parcours réel, les filtres et le mobile | Tests dédiés et workflow navigateur ; dépendance verrouillée dans package-lock.json. |
| [Google Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | Mesures de laboratoire des performances, accessibilité et SEO | Ressource retenue pour une deuxième étape, après un premier niveau de mesures ; pas d’abonnement ni d’envoi de rapports publics. |
| [axe-core](https://github.com/dequelabs/axe-core) | Détecter une partie des défauts d’accessibilité | Ressource complémentaire ; ne remplace pas la navigation clavier ni une inspection visuelle. |
| [Lychee](https://github.com/lycheeverse/lychee) | Contrôle de liens sur de grands corpus | Comparé ; le vérificateur Node intégré suffit ici et distingue marchands, erreurs et refus d’accès. Aucun binaire supplémentaire nécessaire. |
| [GitHub Dependabot](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference) | Proposer les mises à jour par PR | Configuration hebdomadaire npm et GitHub Actions. Pas de fusion automatique. |
| [Google : contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | Rigueur, valeur originale, expérience réelle | Base du positionnement : méthode concrète, sources et limites. |
| [Google : liens commerciaux](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links) | Signalement de l’affiliation | Catalogue central et attribut sponsored conservés. |
| [Google : changements de documentation](https://developers.google.com/search/updates) | Éviter les recommandations SEO périmées | FAQPage retiré ; les FAQ visibles sont conservées une seule fois. Google indique que les résultats enrichis FAQ ne sont plus affichés depuis mai 2026. |
| [Search Console API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) | Analyse des données de recherche | CSV local opérationnel ; API non connectée, aucune métrique privée supposée disponible. |

Les scores Lighthouse ne prédisent pas un classement. Les agents assistent la relecture et les contrôles ; ils ne garantissent pas la validité scientifique ou un revenu d’affiliation.
