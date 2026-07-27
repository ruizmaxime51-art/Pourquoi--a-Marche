import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories.conservation.title,
  description: categories.conservation.tagline,
  path: '/conservation',
});

export default function Page() {
  return <CategoryPage slug="conservation" />;
}
