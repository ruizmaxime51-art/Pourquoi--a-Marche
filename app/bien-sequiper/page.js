import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories['bien-sequiper'].title,
  description: categories['bien-sequiper'].tagline,
  openGraph: {
    title: categories['bien-sequiper'].title + ' — Chimie Maison',
    description: categories['bien-sequiper'].tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="bien-sequiper" />;
}
