import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, ChevronDown } from 'lucide-react';
import { stores } from '@/data/products';

export function StoresPage() {
  const [selectedCity, setSelectedCity] = useState('ВСЕ ГОРОДА');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const filteredStores = selectedCity === 'ВСЕ ГОРОДА'
    ? stores
    : stores.filter(store => store.city === selectedCity);
  
  const availableCities = ['ВСЕ ГОРОДА', ...Array.from(new Set(stores.map(s => s.city)))];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          МАГАЗИНЫ
        </h1>
        
        {/* City Selector */}
        <div className="mb-8" ref={dropdownRef}>
          <label className="block text-xs font-medium uppercase tracking-wider mb-3">
            Выберите город
          </label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full md:w-80 flex items-center justify-between px-4 py-3 border border-gray-200 text-left hover:border-black transition-colors bg-white"
            >
              <span className="text-sm font-medium">{selectedCity}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full md:w-80 mt-1 bg-white border border-gray-200 shadow-lg z-10 max-h-60 overflow-y-auto">
                {availableCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                      city === selectedCity ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="w-full h-[300px] md:h-[400px] bg-gray-100 mb-8 flex items-center justify-center rounded-lg overflow-hidden">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Интерактивная карта магазинов</p>
            <p className="text-gray-400 text-sm mt-1">Выберите город для просмотра магазинов</p>
          </div>
        </div>
        
        {/* Stores List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-6 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all rounded-lg"
            >
              <h3 className="text-lg font-bold uppercase mb-4">{store.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{store.address}</span>
                </div>
                
                {store.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <a
                      href={`tel:${store.phone.replace(/\s/g, '')}`}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                )}
                
                {store.hours && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{store.hours}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">В этом городе пока нет магазинов</p>
            <p className="text-gray-400 text-sm mt-1">Выберите другой город</p>
          </div>
        )}
      </div>
    </main>
  );
}
