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
        className="block relative aspect-[3/4] overflow-hidden bg-gray-100 mb-3"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10">
            <span
              className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${
                product.badge === 'hit'
                  ? 'bg-[#e91e63]'
                  : 'bg-black'
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
            className={`w-4 h-4 transition-colors ${
              favorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </Link>
      
      {/* Product Info */}
      <div className="space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs md:text-sm font-normal text-gray-900 hover:text-gray-600 transition-colors line-clamp-2 lowercase">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base font-medium">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
        
        {product.colors && product.colors > 1 && (
          <p className="text-xs text-gray-500">
            + {product.colors} цветов
          </p>
        )}
      </div>
    </div>
  );
}
