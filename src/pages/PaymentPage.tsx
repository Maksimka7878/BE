import { CreditCard, QrCode, Wallet, Banknote, Shield } from 'lucide-react';

export function PaymentPage() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Банковская карта',
      description: 'Visa, Mastercard, МИР',
      details: 'Оплата онлайн через защищённый шлюз. Комиссия не взимается.',
    },
    {
      icon: QrCode,
      title: 'По QR-коду',
      description: 'Быстрая оплата через мобильное приложение банка',
      details: 'Отсканируйте QR-код и подтвердите оплату в приложении вашего банка.',
    },
    {
      icon: Wallet,
      title: 'Подели',
      description: 'Оплата в рассрочку',
      details: 'Разделите сумму покупки на 4 равных платежа без переплат и процентов.',
    },
    {
      icon: Banknote,
      title: 'Наличные',
      description: 'При получении заказа',
      details: 'Оплата наличными курьеру или в пункте выдачи при получении.',
    },
  ];
  
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          ОПЛАТА
        </h1>
        
        {/* Payment Methods */}
        <div className="space-y-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Способы оплаты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => (
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
        
        {/* Security Info */}
        <div className="bg-[#f8f8f8] p-6 md:p-10 mb-12 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-green-600" />
            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">Безопасность платежей</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Все платежи проходят через защищённое соединение с использованием протокола SSL. 
            Мы не храним данные ваших банковских карт — вся информация передаётся в зашифрованном виде 
            непосредственно в платёжную систему.
          </p>
        </div>
        
        {/* FAQ */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Частые вопросы</h2>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">Можно ли оплатить заказ частями?</h3>
              <p className="text-sm text-gray-600">
                Да, вы можете воспользоваться сервисом &quot;Подели&quot; и разделить сумму покупки на 4 равных платежа без переплат.
              </p>
            </div>
            
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">Когда списываются деньги?</h3>
              <p className="text-sm text-gray-600">
                При оплате картой онлайн деньги списываются сразу после подтверждения заказа. 
                При оплате наличными — в момент получения товара.
              </p>
            </div>
            
            <div className="p-4 border border-gray-100 rounded-lg">
              <h3 className="font-medium mb-2">Что делать, если оплата не прошла?</h3>
              <p className="text-sm text-gray-600">
                Проверьте баланс карты и лимиты на операции. Если проблема сохраняется, 
                попробуйте другой способ оплаты или обратитесь в службу поддержки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
