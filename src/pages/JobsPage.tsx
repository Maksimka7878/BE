import { MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useState } from 'react';

export function JobsPage() {
  const [showForm, setShowForm] = useState(false);
  
  const vacancies = [
    {
      title: 'Продавец-консультант',
      location: 'Москва',
      type: 'Полная занятость',
      description: 'Консультация клиентов, работа с кассой, поддержание порядка в зале.',
    },
    {
      title: 'Старший продавец',
      location: 'Санкт-Петербург',
      type: 'Полная занятость',
      description: 'Управление командой, контроль кассовой дисциплины, работа с поставками.',
    },
    {
      title: 'Управляющий магазином',
      location: 'Екатеринбург',
      type: 'Полная занятость',
      description: 'Полное управление магазином, достижение KPI, работа с персоналом.',
    },
    {
      title: 'Визуальный мерчандайзер',
      location: 'Москва',
      type: 'Полная занятость',
      description: 'Создание витрин, поддержание стандартов визуального мерчандайзинга.',
    },
  ];
  
  const benefits = [
    {
      icon: Briefcase,
      title: 'Карьерный рост',
      description: 'Возможности для развития и продвижения внутри компании',
    },
    {
      icon: GraduationCap,
      title: 'Обучение',
      description: 'Бесплатное обучение и тренинги для сотрудников',
    },
    {
      icon: Heart,
      title: 'Скидки на одежду',
      description: 'Специальные скидки на продукцию BEFREE для сотрудников',
    },
    {
      icon: MapPin,
      title: 'Удобное расположение',
      description: 'Магазины по всей России — выбирайте ближайший',
    },
  ];
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          ВАКАНСИИ
        </h1>
        
        {/* Hero */}
        <div className="bg-[#f8f8f8] p-6 md:p-10 mb-12 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            СТАНЬ ЧАСТЬЮ КОМАНДЫ BEFREE
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Мы всегда в поиске талантливых и амбициозных людей, которые разделяют нашу любовь к моде 
            и стремление делать клиентов счастливыми. Присоединяйтесь к команде лидера fashion-ритейла!
          </p>
        </div>
        
        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">Почему BEFREE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 p-5 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                <benefit.icon className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold uppercase mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Vacancies */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6">Открытые вакансии</h2>
          
          <div className="space-y-4">
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                className="p-6 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold uppercase mb-2">{vacancy.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {vacancy.location}
                      </span>
                      <span>{vacancy.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{vacancy.description}</p>
                  </div>
                  <button 
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors whitespace-nowrap"
                  >
                    ОТКЛИКНУТЬСЯ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center p-8 md:p-10 bg-black text-white rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
            НЕ НАШЛИ ПОДХОДЯЩУЮ ВАКАНСИЮ?
          </h2>
          <p className="text-gray-300 mb-6">
            Отправьте нам своё резюме, и мы рассмотрим вашу кандидатуру
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-white text-black text-sm font-medium uppercase tracking-wider hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            ОТПРАВИТЬ РЕЗЮМЕ
          </button>
        </div>
        
        {/* Application Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowForm(false)} />
            <div className="relative bg-white w-full max-w-lg p-6 md:p-8 rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
              <h3 className="text-xl font-bold uppercase mb-6">Отклик на вакансию</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); setShowForm(false); }}>
                <div>
                  <label className="block text-xs font-medium uppercase mb-2">ФИО *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase mb-2">Телефон *</label>
                  <input type="tel" required className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase mb-2">Город *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-black" />
                </div>
                <button type="submit" className="w-full py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors">
                  ОТПРАВИТЬ
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
