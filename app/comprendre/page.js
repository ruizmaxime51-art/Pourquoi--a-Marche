import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories.comprendre.title,
  description: categories.comprendre.tagline,
  path: '/comprendre',
});

export default function Page() {
  return <CategoryPage slug="comprendre" />;
}
