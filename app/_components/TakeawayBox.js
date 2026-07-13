export default function TakeawayBox({ items }) {
  if (!items?.length) return null;
  return (
    <aside className="takeaway-box" aria-label="Ce que vous allez comprendre">
      <div className="takeaway-title">Ce que vous allez comprendre</div>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </aside>
  );
}
