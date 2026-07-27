import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories.cosmetique.title,
  description: categories.cosmetique.tagline,
  path: '/cosmetique',
});

export default function Page() {
  return <CategoryPage slug="cosmetique" />;
}
