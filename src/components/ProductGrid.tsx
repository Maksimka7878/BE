import type { Product } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  title?: string;
  products: Product[];
  viewAllLink?: string;
  viewAllText?: string;
}

export function ProductGrid({ title, products, viewAllLink, viewAllText = 'СМОТРЕТЬ ВСЕ' }: ProductGridProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">
              {title}
            </h2>
            {viewAllLink && (
              <a
                href={viewAllLink}
                className="text-xs md:text-sm font-medium text-gray-600 hover:text-black underline underline-offset-4 transition-colors"
              >
                {viewAllText}
              </a>
            )}
          </div>
        )}
        
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
