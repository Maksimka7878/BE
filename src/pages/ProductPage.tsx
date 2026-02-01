import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, ChevronDown, ChevronUp, Check, ShoppingBag } from 'lucide-react';
import { getProductById, womenProducts, menProducts } from '@/data/products';
import { useApp } from '@/contexts/AppContext';
import { ProductGrid } from '@/components/ProductGrid';

export function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');
  const { addToCart, toggleFavorite, isFavorite } = useApp();
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [expandedSection, setExpandedSection] = useState<string | null>('description');
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  
  if (!product) {
    return (
      <main className="min-h-screen py-16">
        <div className="max-w-[1600px] mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link to="/zhenskaya" className="text-black underline hover:no-underline">
            Вернуться в каталог
          </Link>
        </div>
      </main>
    );
  }
  
  const favorite = isFavorite(product.id);
  
  // Get related products from same category
  const allProducts = [...womenProducts, ...menProducts];
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize, 1);
      setShowAddedNotification(true);
      setTimeout(() => setShowAddedNotification(false), 2000);
    }
  };
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
            <li><Link to="/zhenskaya" className="hover:text-black transition-colors">ЖЕНСКОЕ</Link></li>
            <li>/</li>
            <li><Link to={`/zhenskaya/${product.category}`} className="hover:text-black transition-colors uppercase">{product.category}</Link></li>
            <li>/</li>
            <li className="text-black uppercase truncate max-w-[150px] md:max-w-[300px]">{product.name}</li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${
                    product.badge === 'hit' ? 'bg-[#e91e63]' : 'bg-black'
                  }`}
                >
                  {product.badge}
                </span>
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="lg:py-4">
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500">
                Артикул: {product.id} {product.colors ? `• +${product.colors} цветов` : ''}
              </p>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl md:text-3xl font-bold">
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {product.originalPrice.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>
            
            {/* Installment */}
            <div className="mb-6">
              <span className="text-sm text-gray-600">
                или <span className="underline cursor-pointer hover:text-black">{(product.price / 4).toLocaleString('ru-RU')} ₽</span> в месяц
              </span>
            </div>
            
            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium uppercase">выберите размер</span>
                <button className="text-xs text-gray-500 underline hover:text-black transition-colors">
                  Таблица размеров
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-medium border transition-all active:scale-95 ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-gray-500 mt-2">Выберите размер, чтобы добавить в корзину</p>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {showAddedNotification ? (
                  <>
                    <Check className="w-4 h-4" />
                    ДОБАВЛЕНО
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    В КОРЗИНУ
                  </>
                )}
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`w-14 h-14 flex items-center justify-center border transition-colors active:scale-95 ${
                  favorite 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-200 hover:border-black'
                }`}
                aria-label={favorite ? 'Удалить из избранного' : 'Добавить в избранное'}
              >
                <Heart
                  className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : ''}`}
                />
              </button>
            </div>
            
            {/* Accordion Sections */}
            <div className="border-t border-gray-100">
              {/* Description */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2"
                >
                  <span className="text-sm font-medium uppercase">описание товара</span>
                  {expandedSection === 'description' ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {expandedSection === 'description' && (
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                    <p className="mb-4">{product.description || 'Описание товара вскоре появится.'}</p>
                    {product.composition && (
                      <p className="text-gray-500">Состав: {product.composition}</p>
                    )}
                  </div>
                )}
              </div>
              
              {/* Care */}
              {product.care && product.care.length > 0 && (
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => toggleSection('care')}
                    className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2"
                  >
                    <span className="text-sm font-medium uppercase">состав и уход</span>
                    {expandedSection === 'care' ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {expandedSection === 'care' && (
                    <div className="pb-4 text-sm text-gray-600">
                      <ul className="space-y-2">
                        {product.care.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {/* Delivery */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection('delivery')}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-2 -mx-2"
                >
                  <span className="text-sm font-medium uppercase">доставка и оплата</span>
                  {expandedSection === 'delivery' ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {expandedSection === 'delivery' && (
                  <div className="pb-4 text-sm text-gray-600 space-y-4">
                    <div>
                      <p className="font-medium mb-2">Способы доставки:</p>
                      <ul className="space-y-1 text-gray-500">
                        <li>• Самовывоз из магазина — бесплатно</li>
                        <li>• Пункт выдачи — бесплатно от 2000₽</li>
                        <li>• Курьерская доставка — бесплатно от 2000₽</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Способы оплаты:</p>
                      <ul className="space-y-1 text-gray-500">
                        <li>• Банковская карта онлайн</li>
                        <li>• Подели (оплата частями)</li>
                        <li>• Наличными при получении</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <ProductGrid
              title="ПОХОЖИЕ ТОВАРЫ"
              products={relatedProducts}
            />
          </div>
        )}
      </div>
    </main>
  );
}
