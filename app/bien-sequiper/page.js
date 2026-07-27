import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories['bien-sequiper'].title,
  description: categories['bien-sequiper'].tagline,
  path: '/bien-sequiper',
});

export default function Page() {
  return <CategoryPage slug="bien-sequiper" />;
}
