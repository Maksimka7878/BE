import { Truck, Package, MapPin, Check } from 'lucide-react';

export function DeliveryPage() {
  const deliveryMethods = [
    {
      icon: MapPin,
      title: 'Самовывоз',
      description: 'Заберите заказ в ближайшем магазине BEFREE',
      details: 'Бесплатно. Срок доставки 1-3 рабочих дня.',
    },
    {
      icon: Package,
      title: 'Пункт выдачи',
      description: 'Получите заказ в удобном пункте выдачи',
      details: 'Бесплатно при заказе от 2000₽. До 2000₽ — 159₽. Срок доставки 2-5 рабочих дней.',
    },
    {
      icon: Truck,
      title: 'Доставка курьером',
      description: 'Курьер доставит заказ прямо к вашей двери',
      details: 'Бесплатно при заказе от 2000₽. До 2000₽ — 159₽. Срок доставки 2-5 рабочих дней.',
    },
  ];
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          ДОСТАВКА
        </h1>
        
        {/* Delivery Banner */}
        <div className="bg-[#f8f8f8] p-6 md:p-10 mb-12 rounded-lg text-center">
          <p className="text-xl md:text-2xl font-medium">
            Бесплатная доставка от <span className="font-bold">2000₽</span>
          </p>
          <p className="text-gray-600 mt-2">
            До 2000₽ — всего 159₽
          </p>
        </div>
        
        {/* Delivery Methods */}
        <div className="space-y-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Способы доставки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryMethods.map((method) => (
              <div
                key={method.title}
                className="p-6 border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all rounded-lg"
              >
                <method.icon className="w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold uppercase mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                <p className="text-xs text-gray-500">{method.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Delivery Info */}
        <div className="space-y-8">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Информация о доставке</h2>
          
          <div className="space-y-6 text-gray-600">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-black mb-1">Отслеживание заказа</h3>
                <p className="text-sm">
                  После отправки заказа вы получите SMS и email с номером отслеживания. 
                  Вы можете отслеживать статус доставки в личном кабинете.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-black mb-1">Время доставки</h3>
                <p className="text-sm">
                  Курьерская доставка осуществляется с понедельника по субботу с 10:00 до 20:00. 
                  Доставка в воскресенье возможна по согласованию.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-black mb-1">Хранение заказа</h3>
                <p className="text-sm">
                  Заказы в пунктах выдачи хранятся бесплатно в течение 5 дней. 
                  После этого заказ возвращается на склад.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
