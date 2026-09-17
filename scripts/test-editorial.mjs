import test from 'node:test';
import assert from 'node:assert/strict';
import matter from 'gray-matter';
import { validateArticleData, escapeHtml } from '../lib/contentValidation.js';
import { getArticle } from '../lib/articles.js';
import { getNextSteps } from '../lib/journeys.js';

const valid = { title: 'Exemple', excerpt: 'Description', type: 'guide', category: 'entretien', date: '2026-09-10', takeaways: ['Une phrase'] };
test('une liste YAML avec un deux-points ne peut plus casser React sans diagnostic', () => {
  const { data } = matter('---\ntakeaways:\n- Cause : explication\n---\n');
  assert.throws(() => validateArticleData({ ...valid, ...data }, 'exemple'), /takeaways/);
});
test('les FAQ exigent des réponses textuelles uniques', () => {
  assert.throws(() => validateArticleData({ ...valid, faq: [{ question: 'Question ?', answer: { valeur: 'objet' } }] }, 'exemple'), /faq/);
  const item = { question: 'Question ?', answer: 'Réponse.' };
  assert.throws(() => validateArticleData({ ...valid, faq: [item, item] }, 'exemple'), /répétée/);
});
test('le texte des FAQ est échappé avant insertion HTML', () => {
  assert.equal(escapeHtml('<script>"&</script>'), '&lt;script&gt;&quot;&amp;&lt;/script&gt;');
});
test('le guide de dépannage affiche sa FAQ une seule fois', async () => {
  const article = await getArticle('levain-ne-monte-pas');
  assert.equal((article.contentHtml.match(/class="faq-section"/g) || []).length, 1);
  assert.equal((article.contentHtml.match(/class="faq-item"/g) || []).length, article.faq.length);
});
test('la saponification mène à la recette, au calcul et au matériel', () => {
  assert.deepEqual(getNextSteps('notion-saponification').map((item) => item.role), ['pratique', 'outil', 'materiel']);
  assert.ok(getNextSteps('savon-surgras-saponification').every((item) => !item.href.endsWith('/savon-surgras-saponification')));
});
