import { useState, useMemo, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cities } from '@/data/products';

export function CityModal() {
  const { selectedCity, setSelectedCity, isCityModalOpen, setIsCityModalOpen } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCities = useMemo(() => {
    if (!searchQuery) return cities;
    return cities.filter(city =>
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);
  
  const handleCitySelect = useCallback((cityName: string) => {
    setSelectedCity(cityName);
    setIsCityModalOpen(false);
    setSearchQuery('');
  }, [setSelectedCity, setIsCityModalOpen]);
  
  const handleClose = useCallback(() => {
    setIsCityModalOpen(false);
    setSearchQuery('');
  }, [setIsCityModalOpen]);
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCityModalOpen) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCityModalOpen, handleClose]);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isCityModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCityModalOpen]);
  
  if (!isCityModalOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className="relative bg-white w-full max-w-md max-h-[80vh] flex flex-col rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-medium tracking-wide uppercase flex-1 text-center">
              ВЫБЕРИТЕ ГОРОД
            </h2>
            <button
              onClick={handleClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Search */}
          <div className="px-6 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="НАЙТИ ГОРОД"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded text-sm uppercase placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                autoFocus
              />
            </div>
          </div>
          
          {/* City List */}
          <div className="flex-1 overflow-y-auto px-2 pb-4">
            {/* Selected City */}
            {!searchQuery && (
              <div className="px-4 py-2 mb-2">
                <p className="text-xs text-gray-400 uppercase mb-2">Выбранный город</p>
                <button
                  onClick={() => handleCitySelect(selectedCity)}
                  className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 px-2 -mx-2 rounded transition-colors"
                >
                  <span className="text-sm font-medium">г {selectedCity.charAt(0) + selectedCity.slice(1).toLowerCase()}</span>
                  <span className="w-2 h-2 bg-black rounded-full" />
                </button>
              </div>
            )}
            
            {/* All Cities */}
            <div className="px-4">
              {!searchQuery && <p className="text-xs text-gray-400 uppercase mb-2">Все города</p>}
              <div className="space-y-1">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city.name)}
                    className="flex items-center justify-between w-full py-3 text-left hover:bg-gray-50 px-2 -mx-2 rounded transition-colors"
                  >
                    <span className={`text-sm ${city.name === selectedCity ? 'font-medium' : ''}`}>
                      {city.name}
                    </span>
                    {city.name === selectedCity && !searchQuery && (
                      <span className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </button>
                ))}
              </div>
              
              {filteredCities.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  Город не найден
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
