import assert from 'node:assert/strict';
import {
  calculateSaponification,
  defaultSoapRecipe,
  oilPresets,
} from '../lib/saponification.js';
import { decideCleaner } from '../lib/cleaningDecision.js';

function closeTo(actual, expected, tolerance = 0.02) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `Expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

const defaultNaoh = calculateSaponification({
  oils: defaultSoapRecipe,
  alkali: 'naoh',
  superfat: 8,
  purity: 100,
});

assert.equal(defaultNaoh.totalOils, 500);
assert.equal(defaultNaoh.breakdown.length, 3);
closeTo(defaultNaoh.pureAtZero, 75.02);
closeTo(defaultNaoh.weighedAlkali, 69.02);
assert.ok(defaultNaoh.weighedRangeMin < defaultNaoh.weighedAlkali);
assert.ok(defaultNaoh.weighedRangeMax > defaultNaoh.weighedAlkali);

const expectedOilIds = [
  'olive',
  'coconut',
  'palm-kernel',
  'babassu',
  'almond',
  'sunflower',
  'sunflower-high-oleic',
  'rapeseed-low-erucic',
  'grapeseed',
  'avocado',
  'palm',
  'sesame',
  'soybean',
  'castor',
  'hemp',
  'jojoba',
  'cocoa-butter',
  'shea',
  'mango-butter',
  'lard',
  'beef-tallow',
  'custom',
];

assert.deepEqual(
  oilPresets.map((oil) => oil.id),
  expectedOilIds,
  'Le catalogue du calculateur doit contenir tous les corps gras documentés',
);

const defaultKoh = calculateSaponification({
  oils: defaultSoapRecipe,
  alkali: 'koh',
  superfat: 8,
  purity: 100,
});
closeTo(defaultKoh.weighedAlkali, 96.81);

const adjustedPurity = calculateSaponification({
  oils: defaultSoapRecipe,
  alkali: 'naoh',
  superfat: 8,
  purity: 99,
});
closeTo(adjustedPurity.weighedAlkali, defaultNaoh.weighedAlkali / 0.99);

const customOil = calculateSaponification({
  oils: [{ id: 'custom-1', oilId: 'custom', mass: 100, customSap: 200 }],
  alkali: 'koh',
  superfat: 10,
  purity: 100,
});
closeTo(customOil.weighedAlkali, 18);
closeTo(customOil.weighedRangeMin, 18);
closeTo(customOil.weighedRangeMax, 18);

const empty = calculateSaponification({
  oils: [{ id: 'empty', oilId: 'custom', mass: 100, customSap: '' }],
});
assert.equal(empty.breakdown.length, 0);
assert.ok(empty.warnings.length > 0);

assert.equal(
  decideCleaner({
    soil: 'limescale',
    surface: 'glass-ceramic',
    previousProduct: 'none',
  }).family,
  'acid',
);
assert.equal(
  decideCleaner({
    soil: 'grease',
    surface: 'stainless',
    previousProduct: 'none',
  }).family,
  'alkaline',
);
assert.equal(
  decideCleaner({
    soil: 'limescale',
    surface: 'natural-stone',
    previousProduct: 'none',
  }).family,
  'neutral',
);
assert.equal(
  decideCleaner({
    soil: 'grease',
    surface: 'aluminium',
    previousProduct: 'none',
  }).family,
  'neutral',
);
assert.equal(
  decideCleaner({
    soil: 'protein',
    surface: 'textile',
    previousProduct: 'none',
  }).family,
  'special',
);
assert.equal(
  decideCleaner({
    soil: 'limescale',
    surface: 'glass-ceramic',
    previousProduct: 'bleach',
  }).family,
  'stop',
);

console.log('PASS — calculateur de surgraissage et assistant acide/base vérifiés.');
