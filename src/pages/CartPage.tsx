import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { useState } from 'react';

export function CartPage() {
  const { cartItems, updateCartQuantity, removeFromCart, cartTotal, clearCart } = useApp();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setPromoApplied(true);
    }
  };
  
  const discount = promoApplied ? Math.round(cartTotal * 0.1) : 0;
  const finalTotal = cartTotal - discount;
  
  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-8">
            КОРЗИНА
          </h1>
          
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium mb-3">Здесь пока пусто</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Начните покупки или добавьте товары в корзину из каталога
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            КОРЗИНА
          </h1>
          <button
            onClick={clearCart}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Очистить
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}`}
                  className="flex gap-4 md:gap-6 pb-6 border-b border-gray-100"
                >
                  {/* Image */}
                  <Link 
                    to={`/product/${item.id}`}
                    className="w-24 h-32 md:w-32 md:h-40 bg-gray-100 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </Link>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-sm font-medium uppercase hover:text-gray-600 transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          Размер: {item.selectedSize}
                        </p>
                        {item.colors && (
                          <p className="text-xs text-gray-500">
                            + {item.colors} цветов
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Удалить"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-end justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors active:bg-gray-200"
                          aria-label="Уменьшить количество"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors active:bg-gray-200"
                          aria-label="Увеличить количество"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.price.toLocaleString('ru-RU')} ₽ / шт
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-8">
              <Link
                to="/zhenskaya"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Продолжить покупки
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 sticky top-24">
              <h2 className="text-lg font-bold uppercase tracking-wide mb-6">
                ВАШ ЗАКАЗ
              </h2>
              
              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-xs font-medium uppercase mb-2">
                  Промокод
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Введите промокод"
                    className="flex-1 px-3 py-2 border border-gray-200 text-sm focus:outline-none focus:border-black uppercase"
                  />
                  <button 
                    onClick={handleApplyPromo}
                    disabled={!promoCode.trim() || promoApplied}
                    className="px-4 py-2 bg-black text-white text-xs font-medium uppercase hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {promoApplied ? '✓' : 'Применить'}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-green-600 mt-1">Промокод применен! Скидка 10%</p>
                )}
              </div>
              
              {/* Summary */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>{cartTotal.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Доставка</span>
                  <span className="text-green-600">
                    {cartTotal >= 2000 ? 'Бесплатно' : '159 ₽'}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Скидка</span>
                    <span className="text-green-600">-{discount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold uppercase">Итого</span>
                <span className="text-2xl font-bold">{finalTotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              
              {/* Checkout Button */}
              <button 
                onClick={() => alert('Оформление заказа в разработке')}
                className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
              >
                ОФОРМИТЬ ЗАКАЗ
              </button>
              
              {/* Installment */}
              <p className="text-center text-xs text-gray-500 mt-4">
                или <span className="underline cursor-pointer hover:text-black">{(finalTotal / 4).toLocaleString('ru-RU')} ₽</span> в месяц
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
