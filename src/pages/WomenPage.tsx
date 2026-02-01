import { HeroCarousel } from '@/components/HeroCarousel';
import { RunningBanner } from '@/components/RunningBanner';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { womenCategories, womenProducts } from '@/data/products';

export function WomenPage() {
  return (
    <main>
      <HeroCarousel />
      <RunningBanner />
      <CategoryGrid categories={womenCategories} basePath="/zhenskaya" />
      <ProductGrid
        title=""
        products={womenProducts}
      />
    </main>
  );
}
