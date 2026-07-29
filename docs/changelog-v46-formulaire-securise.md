# Version 46 — formulaire privé et sécurité

## Fonction ajoutée

La page `/proposer-un-sujet` permet désormais :

- de proposer un nouvel article avec un nom ou pseudonyme, une catégorie, un titre et un contenu
  long ;
- de signaler une erreur depuis chaque article, avec l’article concerné présélectionné ;
- d’envoyer la demande en privé à l’adresse de contact de Chimie Maison ;
- de laisser l’éditeur décider ensuite de toute correction ou publication.

La page n’accepte aucune photo, pièce jointe ou adresse de destinataire fournie par le visiteur.
Elle est accessible depuis la navigation, le pied de page et le bas de chaque article, mais reste
en `noindex` car il s’agit d’un service aux lecteurs et non d’un contenu éditorial.

## Protections serveur

- corps JSON limité à 20 ko et refus de `multipart/form-data` ;
- liste fermée de champs, catégories et types de demande ;
- longueurs contrôlées côté navigateur et côté serveur ;
- refus des caractères de contrôle et des balises exécutables ;
- vérification de l’origine du site et absence de CORS public ;
- champ invisible anti-robot et délai minimal de saisie ;
- vérification du slug d’article depuis le catalogue local ;
- envoi Resend en texte brut avec expéditeur et destinataire fixes ;
- clé d’idempotence pour empêcher les doublons ;
- limite glissante de trois envois sur 24 heures via Upstash Redis ;
- adresse IP certifiée par Vercel, validée puis immédiatement transformée par HMAC avant le
  compteur ;
- réponses non mises en cache et erreurs techniques non exposées au public.

## Socle technique

- Next.js mis à jour en version 15.5.22 ;
- dépendances PostCSS et Sharp forcées vers des versions corrigées ;
- ajout de Resend, Upstash Redis et Upstash Ratelimit ;
- renforcement des en-têtes CSP, anti-iframe et d’isolation d’origine ;
- politique de confidentialité complétée ;
- tests automatiques du formulaire ajoutés à `npm run check`.
