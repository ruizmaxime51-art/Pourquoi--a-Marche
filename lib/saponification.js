export const NAOH_KOH_MASS_RATIO = 39.997 / 56.1056;

export const oilPresets = [
  {
    id: 'olive',
    name: 'Huile d’olive',
    sapKoh: 190,
    sapMin: 184,
    sapMax: 196,
    source: 'Codex CXS 33-1981',
  },
  {
    id: 'coconut',
    name: 'Huile de coco',
    sapKoh: 256.5,
    sapMin: 248,
    sapMax: 265,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'palm-kernel',
    name: 'Huile de palmiste',
    sapKoh: 242,
    sapMin: 230,
    sapMax: 254,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'babassu',
    name: 'Huile de babassu',
    sapKoh: 250.5,
    sapMin: 245,
    sapMax: 256,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'almond',
    name: 'Huile d’amande douce',
    sapKoh: 195,
    sapMin: 183,
    sapMax: 207,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'sunflower',
    name: 'Huile de tournesol',
    sapKoh: 190.5,
    sapMin: 187,
    sapMax: 194,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'sunflower-high-oleic',
    name: 'Huile de tournesol oléique',
    sapKoh: 188,
    sapMin: 182,
    sapMax: 194,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'rapeseed-low-erucic',
    name: 'Huile de colza faible en acide érucique',
    sapKoh: 187.5,
    sapMin: 182,
    sapMax: 193,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'grapeseed',
    name: 'Huile de pépins de raisin',
    sapKoh: 191,
    sapMin: 188,
    sapMax: 194,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'avocado',
    name: 'Huile d’avocat',
    sapKoh: 186,
    sapMin: 170,
    sapMax: 202,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'palm',
    name: 'Huile de palme',
    sapKoh: 199.5,
    sapMin: 190,
    sapMax: 209,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'sesame',
    name: 'Huile de sésame',
    sapKoh: 190.5,
    sapMin: 186,
    sapMax: 195,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'soybean',
    name: 'Huile de soja',
    sapKoh: 192,
    sapMin: 189,
    sapMax: 195,
    source: 'Codex CXS 210-1999',
  },
  {
    id: 'castor',
    name: 'Huile de ricin',
    sapKoh: 180.5,
    sapMin: 176,
    sapMax: 185,
    source: 'FAO/JECFA',
  },
  {
    id: 'hemp',
    name: 'Huile de chanvre',
    sapKoh: 191,
    sapMin: 188,
    sapMax: 194,
    source: 'SoapCalc / FNWL',
  },
  {
    id: 'jojoba',
    name: 'Huile de jojoba (cire liquide)',
    sapKoh: 95,
    sapMin: 92,
    sapMax: 98,
    source: 'SoapCalc / FNWL',
  },
  {
    id: 'cocoa-butter',
    name: 'Beurre de cacao',
    sapKoh: 193,
    sapMin: 188,
    sapMax: 198,
    source: 'Codex CXS 86-1981',
  },
  {
    id: 'shea',
    name: 'Beurre de karité non raffiné',
    sapKoh: 177.5,
    sapMin: 160,
    sapMax: 195,
    source: 'Codex CXS 325R-2017',
  },
  {
    id: 'mango-butter',
    name: 'Beurre de mangue',
    sapKoh: 192.5,
    sapMin: 185,
    sapMax: 200,
    source: 'SoapCalc / FNWL',
  },
  {
    id: 'lard',
    name: 'Saindoux',
    sapKoh: 197.5,
    sapMin: 192,
    sapMax: 203,
    source: 'Codex CXS 211-1999',
  },
  {
    id: 'beef-tallow',
    name: 'Suif de bœuf',
    sapKoh: 196,
    sapMin: 190,
    sapMax: 202,
    source: 'Codex CXS 211-1999',
  },
  {
    id: 'custom',
    name: 'Autre corps gras — valeur fournisseur',
    sapKoh: null,
    sapMin: null,
    sapMax: null,
    source: 'Valeur saisie',
  },
];

export const defaultSoapRecipe = [
  { id: 'oil-1', oilId: 'olive', mass: 300, customSap: '' },
  { id: 'oil-2', oilId: 'coconut', mass: 150, customSap: '' },
  { id: 'oil-3', oilId: 'almond', mass: 50, customSap: '' },
];

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function getPreset(oilId) {
  return oilPresets.find((oil) => oil.id === oilId) || oilPresets[0];
}

export function calculateSaponification({
  oils,
  alkali = 'naoh',
  superfat = 8,
  purity = 100,
}) {
  const baseFactor = alkali === 'koh' ? 1 : NAOH_KOH_MASS_RATIO;
  const safeSuperfat = Math.min(30, Math.max(0, finiteNumber(superfat)));
  const safePurity = Math.min(100, Math.max(1, finiteNumber(purity)));

  const breakdown = oils
    .map((row) => {
      const preset = getPreset(row.oilId);
      const mass = Math.max(0, finiteNumber(row.mass));
      const customSap = finiteNumber(row.customSap);
      const sapKoh = preset.id === 'custom' ? customSap : preset.sapKoh;

      if (!mass || !sapKoh || sapKoh < 50 || sapKoh > 350) return null;

      const sapMin = preset.id === 'custom' ? sapKoh : preset.sapMin;
      const sapMax = preset.id === 'custom' ? sapKoh : preset.sapMax;
      const atZero = mass * (sapKoh / 1000) * baseFactor;
      const atZeroMin = mass * (sapMin / 1000) * baseFactor;
      const atZeroMax = mass * (sapMax / 1000) * baseFactor;

      return {
        id: row.id,
        name: preset.name,
        mass,
        sapKoh,
        sapMin,
        sapMax,
        source: preset.source,
        alkaliAtZero: atZero,
        alkaliAfterDiscount: atZero * (1 - safeSuperfat / 100),
        rangeSpread: (sapMax - sapMin) / sapKoh,
      };
    })
    .filter(Boolean);

  const totalOils = breakdown.reduce((sum, oil) => sum + oil.mass, 0);
  const pureAtZero = breakdown.reduce((sum, oil) => sum + oil.alkaliAtZero, 0);
  const pureAtZeroMin = breakdown.reduce(
    (sum, oil) => sum + oil.mass * (oil.sapMin / 1000) * baseFactor,
    0,
  );
  const pureAtZeroMax = breakdown.reduce(
    (sum, oil) => sum + oil.mass * (oil.sapMax / 1000) * baseFactor,
    0,
  );
  const discountFactor = 1 - safeSuperfat / 100;
  const pureAfterDiscount = pureAtZero * discountFactor;
  const weighedAlkali = pureAfterDiscount / (safePurity / 100);
  const weighedRangeMin = (pureAtZeroMin * discountFactor) / (safePurity / 100);
  const weighedRangeMax = (pureAtZeroMax * discountFactor) / (safePurity / 100);

  const warnings = [];
  if (!breakdown.length) {
    warnings.push('Ajoutez au moins un corps gras avec une masse et un indice SAP valides.');
  }
  if (safeSuperfat < 3) {
    warnings.push(
      'Une réduction de base inférieure à 3 % laisse très peu de marge face aux variations des huiles et aux erreurs de pesée.',
    );
  }
  if (safePurity < 85) {
    warnings.push(
      'Cette pureté est inhabituelle pour une base solide. Vérifiez qu’il ne s’agit pas d’une solution aqueuse ou d’un produit contenant des additifs.',
    );
  }
  if (breakdown.some((oil) => oil.rangeSpread >= 0.15)) {
    warnings.push(
      'Au moins un corps gras possède une plage SAP officielle très large : utilisez de préférence la valeur du certificat d’analyse de votre lot.',
    );
  }

  return {
    alkali,
    superfat: safeSuperfat,
    purity: safePurity,
    totalOils,
    pureAtZero,
    pureAfterDiscount,
    weighedAlkali,
    weighedRangeMin,
    weighedRangeMax,
    breakdown,
    warnings,
  };
}
