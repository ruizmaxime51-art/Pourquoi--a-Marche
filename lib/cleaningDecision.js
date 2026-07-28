export const soilOptions = [
  {
    id: 'limescale',
    label: 'Calcaire ou tartre',
    detail: 'Dépôt blanc, traces minérales, bouilloire ou robinetterie',
  },
  {
    id: 'soap-scum',
    label: 'Voile de savon',
    detail: 'Dépôt terne ou blanchâtre dans la douche',
  },
  {
    id: 'grease',
    label: 'Graisse de cuisine',
    detail: 'Film gras sur plaque, hotte ou crédence',
  },
  {
    id: 'burnt',
    label: 'Graisse cuite',
    detail: 'Résidu brun, collé ou carbonisé',
  },
  {
    id: 'protein',
    label: 'Sang ou protéines',
    detail: 'Tache alimentaire, œuf, lait ou sang sur textile',
  },
  {
    id: 'dust',
    label: 'Poussière ou entretien courant',
    detail: 'Salissure légère, sans dépôt ciblé',
  },
  {
    id: 'rust',
    label: 'Rouille',
    detail: 'Trace orange sur métal, textile ou support minéral',
  },
  {
    id: 'disinfect',
    label: 'Désinfecter',
    detail: 'Réduire les micro-organismes après nettoyage',
  },
  {
    id: 'unknown',
    label: 'Je ne sais pas',
    detail: 'Dépôt ou matériau non identifié',
  },
];

export const surfaceOptions = [
  {
    id: 'glass-ceramic',
    label: 'Verre ou céramique',
    detail: 'Vitre, paroi de douche, carrelage ou émail intact',
  },
  {
    id: 'stainless',
    label: 'Inox',
    detail: 'Évier, casserole ou robinetterie en acier inoxydable',
  },
  {
    id: 'plastic',
    label: 'Plastique',
    detail: 'Bac, mobilier ou appareil en plastique identifié',
  },
  {
    id: 'aluminium',
    label: 'Aluminium',
    detail: 'Plaque, ustensile ou profilé en aluminium',
  },
  {
    id: 'natural-stone',
    label: 'Pierre naturelle',
    detail: 'Marbre, travertin, pierre calcaire ou terrazzo',
  },
  {
    id: 'painted-wood',
    label: 'Bois ou surface peinte',
    detail: 'Bois brut/verni, peinture ou revêtement fragile',
  },
  {
    id: 'textile',
    label: 'Textile',
    detail: 'Vêtement, drap, tapis ou tissu d’ameublement',
  },
  {
    id: 'unknown',
    label: 'Support inconnu',
    detail: 'Matériau ou revêtement non identifié',
  },
];

export const previousProductOptions = [
  { id: 'none', label: 'Aucun', detail: 'La surface n’a pas encore reçu de nettoyant' },
  { id: 'acid', label: 'Acide ou détartrant', detail: 'Vinaigre, acide citrique ou produit anticalcaire' },
  { id: 'alkaline', label: 'Base ou dégraissant', detail: 'Cristaux de soude, décapant ou produit alcalin' },
  { id: 'bleach', label: 'Eau de Javel', detail: 'Hypochlorite ou produit chloré' },
  { id: 'ammonia', label: 'Ammoniaque', detail: 'Ammoniaque ou nettoyant qui en contient' },
  { id: 'unknown', label: 'Produit inconnu', detail: 'Étiquette absente ou composition non vérifiée' },
];

const commonSteps = [
  'Lire la notice du produit et celle de la surface.',
  'Tester sur une petite zone discrète.',
  'Utiliser un seul produit à la fois, puis rincer.',
];

function result({
  family,
  eyebrow,
  title,
  summary,
  product,
  steps = commonSteps,
  avoid,
  articleHref,
  articleLabel,
}) {
  return {
    family,
    eyebrow,
    title,
    summary,
    product,
    steps,
    avoid,
    articleHref,
    articleLabel,
  };
}

function stopForPreviousProduct(previousProduct) {
  if (previousProduct === 'bleach') {
    return result({
      family: 'stop',
      eyebrow: 'Mélange interdit',
      title: 'Stop : ne rien ajouter sur la Javel',
      summary:
        'Un acide peut libérer du chlore toxique et l’ammoniaque peut former des chloramines irritantes. N’ajoutez ni vinaigre, ni détartrant, ni ammoniaque, ni autre nettoyant.',
      product: 'Aucun autre produit',
      steps: [
        'Quitter la zone et l’aérer si une odeur forte, des vapeurs ou une irritation apparaissent.',
        'Sans symptôme et si la notice du support le permet, rincer abondamment à l’eau avant toute autre étape.',
        'En cas de gêne respiratoire ou oculaire, demander immédiatement un avis médical ou contacter un centre antipoison.',
      ],
      avoid: 'Ne jamais chercher à « neutraliser » la Javel avec un autre produit.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Comprendre le danger Javel + acide',
    });
  }

  if (previousProduct === 'ammonia') {
    return result({
      family: 'stop',
      eyebrow: 'Risque de mélange',
      title: 'Rincez avant de changer de produit',
      summary:
        'Ne mélangez jamais l’ammoniaque avec de la Javel. La composition des autres nettoyants n’étant pas toujours évidente, n’ajoutez rien directement.',
      product: 'Eau de rinçage uniquement',
      steps: [
        'Aérer la pièce.',
        'Rincer la surface à l’eau si son matériau l’autorise.',
        'Attendre que le produit précédent soit complètement éliminé avant de recommencer le diagnostic.',
      ],
      avoid: 'Javel, produit chloré et tout mélange improvisé.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Voir les mélanges ménagers dangereux',
    });
  }

  if (previousProduct === 'acid' || previousProduct === 'alkaline') {
    return result({
      family: 'stop',
      eyebrow: 'Un produit à la fois',
      title: 'Rincez avant de passer à une autre famille',
      summary:
        'Ajouter directement une base sur un acide — ou l’inverse — neutralise les deux produits et peut échauffer le mélange. Le bon réflexe est de rincer, pas de corriger avec le produit opposé.',
      product: 'Eau de rinçage uniquement',
      steps: [
        'Respecter le temps de contact de la notice du premier produit.',
        'Rincer abondamment si le support l’autorise.',
        'Recommencer ensuite le diagnostic sur une surface rincée.',
      ],
      avoid: 'Ne pas superposer acide, base, Javel ou nettoyant du commerce.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Comprendre la neutralisation acide-base',
    });
  }

  return result({
    family: 'stop',
    eyebrow: 'Composition inconnue',
    title: 'N’ajoutez rien sur un produit non identifié',
    summary:
      'Sans étiquette ou composition fiable, il est impossible d’exclure une réaction dangereuse avec un second produit.',
    product: 'Eau de rinçage uniquement',
    steps: [
      'Aérer la pièce.',
      'Retrouver l’emballage ou la fiche du produit si possible.',
      'Rincer à l’eau seulement si la notice du support l’autorise.',
    ],
    avoid: 'Tout second nettoyant tant que le premier n’est pas éliminé.',
    articleHref: '/articles/notion-ph-nettoyants',
    articleLabel: 'Voir les règles de sécurité',
  });
}

function surfaceProtection(surface, soil) {
  if (surface === 'natural-stone') {
    return result({
      family: 'neutral',
      eyebrow: 'Surface calcaire sensible',
      title: 'Ni acide ni base forte : choisissez un nettoyant neutre',
      summary:
        'Le marbre, le travertin et les pierres calcaires peuvent être dissous ou ternis par les acides. Les alcalins forts et les produits mal rincés peuvent aussi altérer le support ou ses joints.',
      product: 'Nettoyant pH neutre explicitement compatible avec la pierre',
      avoid:
        soil === 'limescale' || soil === 'soap-scum'
          ? 'Vinaigre, acide citrique, anticalcaire et décapant alcalin.'
          : 'Acide, base forte et produit dont la compatibilité pierre n’est pas écrite.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Comprendre pourquoi un acide attaque les carbonates',
    });
  }

  if (surface === 'aluminium') {
    return result({
      family: 'neutral',
      eyebrow: 'Métal réactif',
      title: 'Évitez l’alcalin fort : utilisez un produit compatible aluminium',
      summary:
        'Les bases fortes peuvent attaquer l’aluminium et produire de l’hydrogène. Un acide non validé peut également ternir ou corroder la surface.',
      product: 'Nettoyant neutre ou produit portant la mention « compatible aluminium »',
      avoid: 'Soude caustique, cristaux de soude concentrés, acide non validé et long contact.',
      articleHref: '/articles/nettoyant-ph-melanges-dangereux',
      articleLabel: 'Voir les surfaces à éviter',
    });
  }

  if (surface === 'painted-wood') {
    return result({
      family: 'neutral',
      eyebrow: 'Revêtement fragile',
      title: 'Commencez par un nettoyage doux et peu humide',
      summary:
        'Une peinture, un vernis ou un bois brut peut gonfler, blanchir ou se décaper avec un produit trop acide, trop alcalin ou trop humide.',
      product: 'Nettoyant neutre compatible avec la finition',
      avoid: 'Acide, base forte, détrempage et essai sur une grande zone.',
      articleHref: '/articles/notion-tensioactifs',
      articleLabel: 'Comprendre le rôle d’un tensioactif doux',
    });
  }

  if (surface === 'unknown') {
    return result({
      family: 'neutral',
      eyebrow: 'Support non identifié',
      title: 'Identifiez d’abord le matériau',
      summary:
        'Le même dépôt ne se traite pas de la même façon sur du verre, du marbre, de l’aluminium ou une peinture. Sans matériau connu, une recommandation acide ou alcaline serait imprudente.',
      product: 'Eau et nettoyant neutre, après test discret',
      avoid: 'Acide, base, abrasif et temps de contact prolongé.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Lire le guide pH avant de choisir',
    });
  }

  return null;
}

function textileDecision(soil) {
  if (soil === 'protein') {
    return result({
      family: 'special',
      eyebrow: 'Traitement enzymatique',
      title: 'Ni acide ni base : eau froide et détachant protéines',
      summary:
        'Le sang et les taches protéiques se prétraitent à froid. La chaleur peut fixer la protéine dans la fibre.',
      product: 'Détachant enzymatique compatible avec le textile',
      steps: [
        'Rincer ou tamponner à l’eau froide.',
        'Appliquer le détachant selon son étiquette et vérifier la tenue des couleurs.',
        'Laver selon l’étiquette d’entretien du textile.',
      ],
      avoid: 'Eau chaude, sèche-linge avant disparition et mélange de détachants.',
      articleHref: '/articles/enlever-tache-sang-vetement',
      articleLabel: 'Suivre la méthode complète pour le sang',
    });
  }

  if (soil === 'rust') {
    return result({
      family: 'special',
      eyebrow: 'Tache spécifique',
      title: 'Utilisez un antirouille textile dédié',
      summary:
        'Une tache de rouille demande un produit compatible avec la fibre et la couleur ; une recette acide générique peut décolorer ou fragiliser le textile.',
      product: 'Détachant antirouille textile conforme à l’étiquette',
      avoid: 'Javel chlorée, chaleur et acide improvisé.',
      articleHref: '/articles/flacon-nettoyant-maison',
      articleLabel: 'Éviter les produits non identifiés',
    });
  }

  return result({
    family: 'special',
    eyebrow: 'Le textile n’est pas une surface dure',
    title: 'Suivez l’étiquette d’entretien et choisissez une lessive adaptée',
    summary:
      'Le pH seul ne suffit pas : la fibre, la couleur, le type de tache, la température et le cycle de lavage comptent aussi.',
    product: 'Lessive ou détachant explicitement compatible avec la fibre',
    avoid: 'Acide ou base ménagère appliqué sans protocole textile.',
    articleHref: '/articles/percarbonate-de-soude-linge',
    articleLabel: 'Choisir un traitement selon la tache',
  });
}

export function decideCleaner({ soil = 'unknown', surface = 'unknown', previousProduct = 'none' }) {
  if (previousProduct !== 'none') return stopForPreviousProduct(previousProduct);

  const protectedSurface = surfaceProtection(surface, soil);
  if (protectedSurface) return protectedSurface;

  if (surface === 'textile') return textileDecision(soil);

  if (soil === 'limescale' || soil === 'soap-scum') {
    return result({
      family: 'acid',
      eyebrow: 'Famille recommandée : acide',
      title: soil === 'limescale' ? 'Un détartrant acide est cohérent' : 'Un acide doux peut dissoudre le voile minéral',
      summary:
        'Les acides réagissent avec le carbonate de calcium. Sur un support compatible, un acide citrique dilué est plus logique qu’un produit alcalin.',
      product: 'Acide citrique dilué ou détartrant adapté à la surface',
      avoid:
        surface === 'stainless' || surface === 'plastic'
          ? 'Contact prolongé : vérifier la notice du matériau, rincer puis sécher.'
          : 'Pierre naturelle, joints sensibles et mélange avec la Javel.',
      articleHref: '/articles/nettoyant-ph-melanges-dangereux',
      articleLabel: 'Voir la recette du détartrant',
    });
  }

  if (soil === 'grease' || soil === 'burnt') {
    if (surface === 'plastic') {
      return result({
        family: 'neutral',
        eyebrow: 'Plastique : prudence',
        title: 'Commencez par un tensioactif neutre',
        summary:
          'La résistance d’un plastique dépend de sa matière et de son revêtement. Un produit alcalin non validé peut le ternir ou le fragiliser.',
        product: 'Liquide vaisselle ou dégraissant explicitement compatible avec le plastique',
        avoid: 'Base forte, solvant ou contact prolongé sans validation du fabricant.',
        articleHref: '/articles/notion-tensioactifs',
        articleLabel: 'Comprendre comment un tensioactif enlève la graisse',
      });
    }

    return result({
      family: 'alkaline',
      eyebrow: 'Famille recommandée : alcaline',
      title: soil === 'grease' ? 'Un dégraissant alcalin est cohérent' : 'Un alcalin compatible aide sur les graisses cuites',
      summary:
        'Une base aide à décoller les salissures grasses et améliore l’action des tensioactifs. L’action mécanique et le rinçage restent nécessaires.',
      product: 'Dégraissant alcalin ou cristaux de soude correctement dilués',
      steps:
        soil === 'burnt'
          ? [
              'Ramollir d’abord le dépôt selon la notice du support.',
              'Appliquer un produit alcalin compatible avec des gants.',
              'Frotter sans abrasif agressif, puis rincer soigneusement.',
            ]
          : commonSteps,
      avoid: 'Aluminium, bois brut, peinture sensible et mélange avec un autre nettoyant.',
      articleHref: '/articles/nettoyant-ph-melanges-dangereux',
      articleLabel: 'Voir la recette du dégraissant',
    });
  }

  if (soil === 'protein') {
    return result({
      family: 'special',
      eyebrow: 'Tache protéique',
      title: 'Ni acide ni base forte : utilisez un nettoyant enzymatique',
      summary:
        'Pour une tache de sang ou de protéine, le traitement dépend surtout du support. Sur textile, l’eau froide et un détachant enzymatique sont prioritaires.',
      product: 'Nettoyant enzymatique compatible avec la surface',
      avoid: 'Chaleur sur le textile et mélange de détachants.',
      articleHref: '/articles/enlever-tache-sang-vetement',
      articleLabel: 'Voir le protocole sang et protéines',
    });
  }

  if (soil === 'rust') {
    return result({
      family: 'special',
      eyebrow: 'Dépôt métallique',
      title: 'Choisissez un antirouille adapté au support',
      summary:
        'Certains antirouilles sont acides, mais leur formulation et leurs inhibiteurs comptent. Un acide maison générique peut attaquer le métal, la pierre ou le textile.',
      product: 'Antirouille dont l’étiquette cite le matériau concerné',
      avoid: 'Acide improvisé, Javel et produit sans compatibilité de surface.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Comprendre les limites du seul critère pH',
    });
  }

  if (soil === 'disinfect') {
    return result({
      family: 'special',
      eyebrow: 'Nettoyer puis désinfecter',
      title: 'Acide ou base ne signifie pas désinfectant',
      summary:
        'Commencez par nettoyer la salissure. Si une désinfection est réellement nécessaire, utilisez ensuite un produit autorisé pour cet usage et suivez exactement sa dilution et son temps de contact.',
      product: 'Désinfectant étiqueté pour la surface et l’usage visés',
      steps: [
        'Nettoyer d’abord avec un produit compatible.',
        'Rincer si la notice l’exige.',
        'Appliquer le désinfectant seul au dosage et au temps de contact indiqués.',
      ],
      avoid: 'Mélanger le désinfectant avec un nettoyant, un acide, une base ou de la Javel.',
      articleHref: '/articles/notion-ph-nettoyants',
      articleLabel: 'Distinguer nettoyage et désinfection',
    });
  }

  return result({
    family: 'neutral',
    eyebrow: soil === 'dust' ? 'Entretien courant' : 'Diagnostic insuffisant',
    title: soil === 'dust' ? 'Un nettoyant neutre suffit généralement' : 'Identifiez le dépôt avant de traiter',
    summary:
      soil === 'dust'
        ? 'Pour une salissure légère, le mouillage, un tensioactif doux et l’action mécanique sont souvent plus utiles qu’un pH extrême.'
        : 'Sans savoir s’il s’agit de calcaire, de graisse, de rouille ou d’une tache organique, choisir un acide ou une base au hasard peut être inefficace ou abîmer le support.',
    product: 'Eau et nettoyant neutre compatible avec la surface',
    avoid: 'Produit concentré, mélange ou temps de contact prolongé sans diagnostic.',
    articleHref: '/articles/notion-tensioactifs',
    articleLabel: 'Comprendre le nettoyage doux',
  });
}
