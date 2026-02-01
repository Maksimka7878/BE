import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<'female' | 'male' | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!birthDate) {
      newErrors.birthDate = 'Укажите дату рождения';
    }
    
    if (!gender) {
      newErrors.gender = 'Выберите пол';
    }
    
    if (!agreed) {
      newErrors.agreed = 'Необходимо согласие';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setBirthDate('');
      setGender(null);
      setAgreed(false);
      setErrors({});
      setIsSubmitted(false);
    }, 3000);
  };
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f8f8f8]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-4">
            ПОДПИШИСЬ И БУДЬ В ТРЕНДЕ
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            В рассылке найдётся скидка 10% на первую покупку, секретные доступы к акциям и промокод ко дню рождения
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Спасибо за подписку!</h3>
            <p className="text-gray-600">Проверьте свою почту для подтверждения.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                EMAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
                placeholder="Введите ваш email"
                className={`w-full px-4 py-3 border rounded text-sm focus:outline-none focus:border-black transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            
            {/* Birth Date */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider mb-2">
                ДАТА РОЖДЕНИЯ <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  if (errors.birthDate) setErrors(prev => ({ ...prev, birthDate: '' }));
                }}
                className={`w-full px-4 py-3 border rounded text-sm focus:outline-none focus:border-black transition-colors ${
                  errors.birthDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.birthDate && <p className="text-red-500 text-xs mt-1">{errors.birthDate}</p>}
            </div>
            
            {/* Gender */}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider mb-3">
                ПОЛ <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => {
                      setGender('female');
                      if (errors.gender) setErrors(prev => ({ ...prev, gender: '' }));
                    }}
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-sm uppercase">Женский</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => {
                      setGender('male');
                      if (errors.gender) setErrors(prev => ({ ...prev, gender: '' }));
                    }}
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-sm uppercase">Мужской</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
            </div>
            
            {/* Agreement */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (errors.agreed) setErrors(prev => ({ ...prev, agreed: '' }));
                  }}
                  className="w-4 h-4 mt-0.5 accent-black"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  Даю <span className="underline cursor-pointer hover:text-black">согласие на обработку персональных данных</span>. 
                  Подробную информацию об условиях обработки моих персональных данных и моих правах можно найти в{' '}
                  <span className="underline cursor-pointer hover:text-black">Политике конфиденциальности</span>
                </span>
              </label>
              {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
            >
              ПОДПИСАТЬСЯ
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
