import Link from 'next/link';
import { categories } from '@/lib/categories';

export default function Breadcrumbs({ article }) {
  const category = categories[article.category];
  const items = [
    { label: 'Accueil', href: '/' },
    ...(category ? [{ label: category.label, href: `/${category.slug}` }] : []),
    { label: article.h1 || article.title },
  ];

  return (
    <nav className="breadcrumbs wrap-wide" aria-label="Fil d’Ariane">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
