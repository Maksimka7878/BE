import { RefreshCw, Clock, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ReturnsPage() {
  const returnSteps = [
    {
      icon: Clock,
      title: '14 дней',
      description: 'На возврат товара надлежащего качества',
    },
    {
      icon: Package,
      title: 'Сохраните товар',
      description: 'Товар не должен быть в употреблении',
    },
    {
      icon: CheckCircle,
      title: 'Чек и ярлыки',
      description: 'Сохраните все ярлыки и документы',
    },
  ];
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          ВОЗВРАТ И ОБМЕН
        </h1>
        
        {/* Return Banner */}
        <div className="bg-[#f8f8f8] p-6 md:p-10 mb-12 rounded-lg text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <RefreshCw className="w-8 h-8" />
            <span className="text-xl md:text-2xl font-bold uppercase">Лёгкий возврат</span>
          </div>
          <p className="text-gray-600">
            Верните товар в течение 14 дней с момента покупки
          </p>
        </div>
        
        {/* Return Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {returnSteps.map((step) => (
            <div
              key={step.title}
              className="text-center p-6 border border-gray-100 rounded-lg"
            >
              <step.icon className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-lg font-bold uppercase mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Return Conditions */}
        <div className="space-y-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Условия возврата</h2>
          
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="font-medium text-black mb-2">Товар надлежащего качества</h3>
              <p className="text-sm leading-relaxed">
                Вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения заказа, 
                если товар не был в употреблении, сохранены его товарный вид, потребительские свойства, 
                пломбы, фабричные ярлыки и есть документ, подтверждающий покупку.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-black mb-2">Товар ненадлежащего качества</h3>
              <p className="text-sm leading-relaxed">
                Если вы обнаружили дефект товара, сообщите нам в течение 14 дней. 
                Мы организуем возврат или обмен товара за наш счёт.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-black mb-2">Товары, не подлежащие возврату</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Нижнее бельё и купальники</li>
                <li>Чулочно-носочные изделия</li>
                <li>Ювелирные изделия</li>
                <li>Парфюмерия и косметика</li>
                <li>Товары со следами эксплуатации</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* How to Return */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Как оформить возврат</h2>
          
          <div className="space-y-4">
            {[
              { num: '1', title: 'Заполните заявление', desc: 'Скачайте и заполните заявление на возврат. Укажите причину возврата и реквизиты для возврата денег.' },
              { num: '2', title: 'Упакуйте товар', desc: 'Упакуйте товар в оригинальную упаковку вместе с заявлением и чеком.' },
              { num: '3', title: 'Отправьте заказ', desc: 'Отправьте посылку через любую удобную транспортную компанию или принесите в магазин BEFREE.' },
              { num: '4', title: 'Получите возврат', desc: 'После получения и проверки товара мы вернём деньги на указанные реквизиты в течение 10 рабочих дней.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0 rounded-full">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/stores"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
          >
            НАЙТИ БЛИЖАЙШИЙ МАГАЗИН
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
