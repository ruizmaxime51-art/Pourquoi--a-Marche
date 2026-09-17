// Erreurs explicites au build, plutôt qu'un objet YAML envoyé à React.
export function validateArticleData(data, slug) {
  const fail = (field) => { throw new Error(`content/${slug}.md : champ ${field} invalide`); };
  for (const key of ['title', 'excerpt', 'type', 'category', 'date']) {
    if (typeof data[key] !== 'string' || !data[key].trim()) fail(key);
  }
  if (!['recette', 'guide', 'notion', 'repere', 'comparatif'].includes(data.type)) fail('type');
  for (const key of ['takeaways', 'related', 'secondaryCategories']) {
    if (data[key] != null && (!Array.isArray(data[key]) || data[key].some((item) => typeof item !== 'string'))) fail(key);
  }
  for (const key of ['seoTitle', 'seoDescription', 'h1', 'image', 'imageAlt', 'materialHref']) {
    if (data[key] != null && typeof data[key] !== 'string') fail(key);
  }
  for (const key of ['date', 'updated']) {
    if (data[key] != null && (!/^\d{4}-\d{2}-\d{2}$/.test(data[key]) || !Number.isFinite(Date.parse(data[key])))) fail(key);
  }
  if (data.updated && data.updated < data.date) fail('updated antérieur à date');
  if (data.faq != null) {
    if (!Array.isArray(data.faq)) fail('faq');
    const questions = new Set();
    for (const item of data.faq) {
      if (!item || typeof item.question !== 'string' || typeof item.answer !== 'string' || !item.question.trim() || !item.answer.trim()) fail('faq.question/answer');
      if (questions.has(item.question.trim())) fail('faq : question répétée');
      questions.add(item.question.trim());
    }
  }
  return data;
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
