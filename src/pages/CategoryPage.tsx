import { useParams, useLocation, Link } from 'react-router-dom';
import { ProductGrid } from '@/components/ProductGrid';
import { getProductsByCategory, womenCategories, menCategories } from '@/data/products';
import { useMemo, useState } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const location = useLocation();
  const [showFilters, setShowFilters] = useState(false);
  
  const isMenPage = location.pathname.includes('/muzhskaya');
  const gender: 'women' | 'men' = isMenPage ? 'men' : 'women';
  
  const categories = isMenPage ? menCategories : womenCategories;
  const category = categories.find(c => c.slug === categorySlug);
  
  const products = useMemo(() => {
    return getProductsByCategory(categorySlug || 'all', gender);
  }, [categorySlug, gender]);
  
  const categoryName = category?.name || 'ВСЕ ТОВАРЫ';
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-gray-500">
            <li>
              <Link to={isMenPage ? '/muzhskaya' : '/zhenskaya'} className="hover:text-black transition-colors">
                {isMenPage ? 'МУЖСКОЕ' : 'ЖЕНСКОЕ'}
              </Link>
            </li>
            <li>/</li>
            <li className="text-black uppercase">{categoryName}</li>
          </ol>
        </nav>
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          {categoryName}
        </h1>
        
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{products.length} товаров</span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Фильтры
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-xs font-medium uppercase hover:border-black transition-colors">
                Размер
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-xs font-medium uppercase hover:border-black transition-colors">
                Цвет
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-xs font-medium uppercase hover:border-black transition-colors">
                Цена
                <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-xs font-medium uppercase hover:border-black transition-colors">
                Сортировка
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 border border-gray-200 text-sm font-medium uppercase bg-white">
                Размер
              </button>
              <button className="px-4 py-3 border border-gray-200 text-sm font-medium uppercase bg-white">
                Цвет
              </button>
              <button className="px-4 py-3 border border-gray-200 text-sm font-medium uppercase bg-white">
                Цена
              </button>
              <button className="px-4 py-3 border border-gray-200 text-sm font-medium uppercase bg-white">
                Сортировка
              </button>
            </div>
          </div>
        )}
        
        {/* Products */}
        {products.length > 0 ? (
          <ProductGrid
            title=""
            products={products}
          />
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">В этой категории пока нет товаров</p>
            <Link 
              to={isMenPage ? '/muzhskaya' : '/zhenskaya'}
              className="inline-block mt-4 text-black underline hover:no-underline"
            >
              Вернуться в каталог
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
