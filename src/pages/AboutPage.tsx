import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          О КОМПАНИИ
        </h1>
        
        {/* Hero Image */}
        <div className="w-full h-[250px] md:h-[400px] bg-gray-100 mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
            alt="BEFREE Store"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Company Info */}
        <div className="space-y-8 mb-12">
          <div className="prose prose-sm max-w-none text-gray-600">
            <p className="text-lg md:text-xl leading-relaxed">
              BEFREE — это российский fashion-бренд, созданный для молодых и свободных людей, 
              которые ценят стиль, качество и доступность. С момента основания в 2005 году 
              мы стремимся сделать модную одежду доступной для каждого.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-gray-100">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-sm text-gray-600">магазинов по всей России</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">19</div>
              <p className="text-sm text-gray-600">лет на рынке fashion</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10М+</div>
              <p className="text-sm text-gray-600">покупателей ежегодно</p>
            </div>
          </div>
        </div>
        
        {/* Mission */}
        <div className="bg-[#f8f8f8] p-6 md:p-10 mb-12 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">Наша миссия</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Мы создаём одежду, которая помогает людям выражать свою индивидуальность и чувствовать себя уверенно. 
            Наша цель — вдохновлять на смелые решения и поддерживать стремление к свободе самовыражения.
          </p>
        </div>
        
        {/* Values */}
        <div className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
              <h3 className="font-bold uppercase mb-2 text-lg">Свобода</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Мы верим, что каждый человек имеет право быть собой. Наша одежда помогает раскрыть индивидуальность.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
              <h3 className="font-bold uppercase mb-2 text-lg">Качество</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Мы используем только качественные материалы и следим за каждым этапом производства.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
              <h3 className="font-bold uppercase mb-2 text-lg">Доступность</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Мода должна быть доступной. Мы предлагаем стильную одежду по честным ценам.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
              <h3 className="font-bold uppercase mb-2 text-lg">Ответственность</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Мы заботимся об окружающей среде и стремимся к устойчивому развитию.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/zhenskaya"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
          >
            ПЕРЕЙТИ В КАТАЛОГ
          </Link>
        </div>
      </div>
    </main>
  );
}
