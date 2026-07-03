import CategoryPage from '../_components/CategoryPage';
import { categories } from '@/lib/categories';

export const metadata = {
  title: categories.cosmetique.title,
  description: categories.cosmetique.tagline,
  openGraph: {
    title: categories.cosmetique.title + ' — Chimie Maison',
    description: categories.cosmetique.tagline,
  },
};

export default function Page() {
  return <CategoryPage slug="cosmetique" />;
}
