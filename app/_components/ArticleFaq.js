export default function ArticleFaq({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section className="article-faq" aria-labelledby="article-faq-title">
      <h2 id="article-faq-title">Questions fréquentes</h2>
      <div className="faq-list">
        {items.map((item, index) => (
          <details key={index} className="faq-item" open={index === 0}>
            <summary>{item.question}</summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
