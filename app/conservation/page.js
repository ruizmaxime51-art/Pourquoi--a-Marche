import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories.conservation.title,
  description: categories.conservation.tagline,
  openGraph: {
    title: categories.conservation.title + ' — Chimie Maison',
    description: categories.conservation.tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="conservation" />;
}
