import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

export function Footer() {
  const { selectedCity, setIsCityModalOpen } = useApp();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-3">
            ПОДПИШИСЬ И БУДЬ В ТРЕНДЕ
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            В рассылке найдётся скидка 10% на первую покупку, секретные доступы к акциям и промокод ко дню рождения
          </p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Подписка оформлена!'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="EMAIL *"
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm uppercase placeholder:text-gray-400 focus:outline-none focus:border-black"
              />
              <input
                type="date"
                placeholder="ДАТА РОЖДЕНИЯ *"
                required
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-black"
              />
            </div>
            
            <div className="flex justify-center gap-6 py-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="female" className="w-4 h-4" />
                <span className="text-sm uppercase">женский</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="male" className="w-4 h-4" />
                <span className="text-sm uppercase">мужской</span>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              подписаться
            </button>
            
            <p className="text-xs text-gray-500">
              Даю <span className="underline cursor-pointer">согласие на обработку персональных данных</span>. 
              Подробную информацию об условиях обработки моих персональных данных и моих правах можно найти в{' '}
              <span className="underline cursor-pointer">Политике конфиденциальности</span>
            </p>
          </form>
        </div>
      </div>
      
      {/* Main Footer Links */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Customers */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">
                покупателям:
              </h3>
              <ul className="space-y-2">
                <li><Link to="/gift-certificate" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">сертификаты и купоны</Link></li>
                <li><Link to="/mobile-apps" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">мобильные приложения</Link></li>
                <li><Link to="/delivery" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">доставка</Link></li>
                <li><Link to="/payment" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">оплата</Link></li>
                <li><Link to="/refund" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">возврат и обмен</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">служба поддержки</Link></li>
                <li><Link to="/stores" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">магазины</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">
                компания:
              </h3>
              <ul className="space-y-2">
                <li><Link to="/about-the-company" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">о компании</Link></li>
                <li><Link to="/about-the-brand" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">о бренде</Link></li>
                <li><Link to="/job" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">вакансии</Link></li>
                <li><Link to="/franchise" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">франшиза</Link></li>
                <li><Link to="/wholesale" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">опт</Link></li>
                <li><Link to="/contacts" className="text-sm text-gray-700 hover:text-black transition-colors lowercase">контакты</Link></li>
              </ul>
            </div>
            
            {/* App */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">
                наше приложение:
              </h3>
              <div className="space-y-2">
                <a 
                  href="https://apps.apple.com/ru/app/befree/id1040073468" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-700 hover:text-black transition-colors"
                >
                  App Store
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ddgcorp.befree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-700 hover:text-black transition-colors"
                >
                  Google Play
                </a>
                <a 
                  href="https://www.rustore.ru/catalog/app/com.ddgcorp.befree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-700 hover:text-black transition-colors"
                >
                  RuStore
                </a>
              </div>
            </div>
            
            {/* Social */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">
                мы в сети:
              </h3>
              <div className="space-y-2">
                <a 
                  href="https://befree.ru/instashop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-700 hover:text-black transition-colors uppercase"
                >
                  BEFREE COMMUNITY
                </a>
                <div className="flex gap-3 pt-2">
                  <a href="https://t.me/befree_community" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.192-.054-.3-.297-.108l-5.965 3.759-2.568-.802c-.56-.176-.57-.56.117-.828l10.037-3.869c.466-.174.875.108.713.827z"/></svg>
                  </a>
                  <a href="https://vk.com/befree_fashion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645l-2.1 9.95c-.158.7-.574.87-1.166.543l-3.225-2.38-1.558 1.5c-.173.173-.316.316-.647.316l.23-3.25 5.98-5.4c.26-.23-.057-.36-.402-.13L8.38 14.09l-3.18-.995c-.693-.215-.71-.693.145-1.025l12.42-4.78c.578-.215 1.083.13.9 1.355z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@befree.fashion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/user/befreenewsite" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsCityModalOpen(true)}
                className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {selectedCity}
              </button>
              <a href="tel:88002500102" className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors">
                <Phone className="w-4 h-4" />
                8 (800) 250-01-02
              </a>
            </div>
            
            <p className="text-xs text-gray-400">
              © 2026 befree все права защищены
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
            <Link to="#" className="text-xs text-gray-400 hover:text-black transition-colors lowercase">карта сайта</Link>
            <Link to="#" className="text-xs text-gray-400 hover:text-black transition-colors lowercase">условия обслуживания</Link>
            <Link to="#" className="text-xs text-gray-400 hover:text-black transition-colors lowercase">пользовательское соглашение</Link>
            <Link to="#" className="text-xs text-gray-400 hover:text-black transition-colors lowercase">политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
