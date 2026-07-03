import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories.fermentation.title,
  description: categories.fermentation.tagline,
  openGraph: {
    title: categories.fermentation.title + ' — Chimie Maison',
    description: categories.fermentation.tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="fermentation" />;
}
