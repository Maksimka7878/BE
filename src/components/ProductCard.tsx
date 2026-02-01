import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Product } from '@/types';
import { useApp } from '@/contexts/AppContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { toggleFavorite, isFavorite } = useApp();
  const favorite = isFavorite(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div className="group relative">
      {/* Image Container */}
      <Link
        to={`/product/${product.id}`}
        className="block relative aspect-[2/3] overflow-hidden bg-gray-100 mb-3"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-0 left-0 z-10 p-2">
            <span
              className={`inline-block px-1.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${product.badge === 'hit'
                  ? 'bg-black/80'
                  : 'bg-black/80'
                }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label={favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${favorite ? 'fill-black text-black' : 'text-gray-600'
              }`}
          />
        </button>
      </Link>

      {/* Product Info */}
      <div className="space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[11px] font-medium uppercase tracking-wide text-[#303635] hover:text-black transition-colors line-clamp-2 leading-relaxed">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {product.originalPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>

        {product.colors && product.colors > 1 && (
          <p className="text-[10px] text-gray-500 uppercase tracking-wide">
            + {product.colors} цветов
          </p>
        )}
      </div>
    </div>
  );
}
