import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { womenCategories, menCategories } from '@/data/products';
import { CityModal } from './CityModal';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCity, setIsCityModalOpen, cartCount, favorites, setCurrentGender } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isWomenPage = location.pathname.includes('/zhenskaya') || location.pathname === '/';
  const isMenPage = location.pathname.includes('/muzhskaya');

  const categories = isMenPage ? menCategories : womenCategories;

  const handleGenderClick = (gender: 'women' | 'men') => {
    setCurrentGender(gender);
    setIsMobileMenuOpen(false);
    navigate(gender === 'women' ? '/zhenskaya' : '/muzhskaya');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        {/* Top Header */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Left - Gender Switcher */}
              <div className="flex items-center gap-4 md:gap-6">
                <button
                  onClick={() => handleGenderClick('women')}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${isWomenPage ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
                >
                  женское
                </button>
                <button
                  onClick={() => handleGenderClick('men')}
                  className={`text-[13px] font-bold uppercase tracking-wider transition-colors ${isMenPage ? 'text-black' : 'text-gray-400 hover:text-black'
                    }`}
                >
                  мужское
                </button>
              </div>

              {/* Center - Logo */}
              <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
                <span className="text-2xl md:text-3xl font-bold tracking-[0.2em]">BEFREE</span>
              </Link>

              {/* Right - Actions */}
              <div className="flex items-center gap-3 md:gap-6">
                {/* City Selector - Desktop */}
                <button
                  onClick={() => setIsCityModalOpen(true)}
                  className="hidden md:flex items-center gap-1 text-[13px] uppercase tracking-wide hover:opacity-70 transition-opacity font-medium"
                >
                  <span>{selectedCity}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {/* Favorites */}
                <Link
                  to="/favorites"
                  className="relative p-1 hover:opacity-70 transition-opacity"
                  aria-label="Избранное"
                >
                  <Heart className="w-5 h-5 md:w-6 md:h-6" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                      {favorites.length}
                    </span>
                  )}
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="relative p-1 hover:opacity-70 transition-opacity"
                  aria-label="Корзина"
                >
                  <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-1"
                  aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation - Desktop */}
        <nav className="hidden md:block border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-6 lg:gap-10 py-3 overflow-x-auto hide-scrollbar">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/${isMenPage ? 'muzhskaya' : 'zhenskaya'}/${category.slug}`}
                  className="text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-black whitespace-nowrap transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div
              ref={mobileMenuRef}
              className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-lg max-h-[80vh] overflow-y-auto"
            >
              <div className="px-4 py-4">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <span className="text-lg font-bold tracking-[0.2em]">BEFREE</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2"
                    aria-label="Закрыть меню"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Gender Switcher */}
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => handleGenderClick('women')}
                    className={`flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${isWomenPage ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    ЖЕНСКОЕ
                  </button>
                  <button
                    onClick={() => handleGenderClick('men')}
                    className={`flex-1 py-3 text-sm font-medium uppercase tracking-wider transition-colors ${isMenPage ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    МУЖСКОЕ
                  </button>
                </div>

                {/* Mobile City Selector */}
                <button
                  onClick={() => {
                    setIsCityModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm font-medium w-full py-3 border-b border-gray-100"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{selectedCity}</span>
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </button>

                {/* Mobile Navigation Links */}
                <div className="space-y-1 py-4 border-b border-gray-100">
                  <Link
                    to="/favorites"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-sm font-medium"
                  >
                    <Heart className="w-4 h-4" />
                    Избранное
                    {favorites.length > 0 && (
                      <span className="ml-auto w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                        {favorites.length}
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/cart"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 text-sm font-medium"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Корзина
                    {cartCount > 0 && (
                      <span className="ml-auto w-5 h-5 bg-black text-white text-xs flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Mobile Categories */}
                <div className="py-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Категории</p>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/${isMenPage ? 'muzhskaya' : 'zhenskaya'}/${category.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-sm font-medium lowercase hover:text-gray-600 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Info Links */}
                <div className="py-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Информация</p>
                  <div className="space-y-1">
                    <Link to="/stores" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-black transition-colors lowercase">магазины</Link>
                    <Link to="/delivery" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-black transition-colors lowercase">доставка</Link>
                    <Link to="/payment" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-black transition-colors lowercase">оплата</Link>
                    <Link to="/refund" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-black transition-colors lowercase">возврат</Link>
                    <Link to="/about-the-company" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-black transition-colors lowercase">о компании</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <CityModal />
    </>
  );
}
