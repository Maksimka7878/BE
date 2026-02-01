import { HeroCarousel } from '@/components/HeroCarousel';
import { RunningBanner } from '@/components/RunningBanner';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { Newsletter } from '@/components/Newsletter';
import { menCategories, menProducts } from '@/data/products';

export function MenPage() {
  return (
    <main>
      <HeroCarousel />
      <RunningBanner />
      <CategoryGrid categories={menCategories} basePath="/muzhskaya" />
      <ProductGrid
        title="НОВИНКИ"
        products={menProducts}
        viewAllLink="/muzhskaya/new"
        viewAllText="СМОТРЕТЬ ВСЕ"
      />
      <Newsletter />
    </main>
  );
}
