import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata = buildPageMetadata({
  title: categories.fermentation.title,
  description: categories.fermentation.tagline,
  path: '/fermentation',
});

export default function Page() {
  return <CategoryPage slug="fermentation" />;
}
