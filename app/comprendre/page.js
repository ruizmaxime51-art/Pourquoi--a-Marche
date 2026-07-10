import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories.comprendre.title,
  description: categories.comprendre.tagline,
  openGraph: {
    title: categories.comprendre.title + ' — Chimie Maison',
    description: categories.comprendre.tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="comprendre" />;
}
