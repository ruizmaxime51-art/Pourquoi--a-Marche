import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories.entretien.title,
  description: categories.entretien.tagline,
  openGraph: {
    title: categories.entretien.title + ' — Chimie Maison',
    description: categories.entretien.tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="entretien" />;
}
