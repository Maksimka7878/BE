import { HeroCarousel } from '@/components/HeroCarousel';
import { RunningBanner } from '@/components/RunningBanner';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { Newsletter } from '@/components/Newsletter';
import { womenCategories, womenProducts } from '@/data/products';

export function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <RunningBanner />
      <CategoryGrid categories={womenCategories} basePath="/zhenskaya" />
      <ProductGrid
        title="ГИД ПО ТРЕНДАМ"
        products={womenProducts}
        viewAllLink="/zhenskaya/gid-po-trendam"
        viewAllText="СМОТРЕТЬ ВСЮ ПОДБОРКУ"
      />
      <Newsletter />
    </main>
  );
}
