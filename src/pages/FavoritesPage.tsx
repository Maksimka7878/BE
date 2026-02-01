import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { getProductById } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function FavoritesPage() {
  const { favorites } = useApp();
  
  const favoriteProducts = favorites
    .map(id => getProductById(id))
    .filter((product): product is NonNullable<typeof product> => product !== undefined);
  
  if (favoriteProducts.length === 0) {
    return (
      <main className="min-h-screen py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8">
            ИЗБРАННОЕ
          </h1>
          
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium mb-3">Здесь пока пусто</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Добавляйте товары в избранное, кликая на иконку сердечка на карточке товара
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/zhenskaya"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
              >
                ЖЕНСКАЯ КОЛЛЕКЦИЯ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/muzhskaya"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-black text-black text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white active:bg-gray-900 transition-colors"
              >
                МУЖСКАЯ КОЛЛЕКЦИЯ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8">
          ИЗБРАННОЕ ({favoriteProducts.length})
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
