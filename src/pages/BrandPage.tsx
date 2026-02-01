import { Link } from 'react-router-dom';

export function BrandPage() {
  return (
    <main className="min-h-screen py-8 md:py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
          О БРЕНДЕ
        </h1>
        
        {/* Brand Story */}
        <div className="space-y-8 mb-12">
          <div className="prose prose-sm max-w-none text-gray-600">
            <p className="text-lg md:text-xl leading-relaxed">
              BEFREE — это не просто одежда. Это образ мышления, стиль жизни, состояние души. 
              Наш бренд родился из желания создать что-то особенное для тех, кто не боится быть собой.
            </p>
          </div>
        </div>
        
        {/* Brand Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 h-[300px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
              alt="BEFREE Style"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">Наш стиль</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              BEFREE — это сочетание городской эстетики и комфорта. Мы создаём одежду для тех, 
              кто живёт в ритме большого города, ценит свободу движения и хочет выглядеть стильно каждый день.
            </p>
          </div>
        </div>
        
        {/* Collections */}
        <div className="space-y-8 mb-12">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide">Наши коллекции</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/zhenskaya" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                  alt="Womens Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold uppercase text-lg">ЖЕНСКАЯ</h3>
              <p className="text-sm text-gray-600 mt-1">Смелые образы для уверенных в себе женщин</p>
            </Link>
            
            <Link to="/muzhskaya" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80"
                  alt="Mens Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold uppercase text-lg">МУЖСКАЯ</h3>
              <p className="text-sm text-gray-600 mt-1">Стильная база для современных мужчин</p>
            </Link>
            
            <Link to="/zhenskaya/yng" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80"
                  alt="YNG Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold uppercase text-lg">YNG</h3>
              <p className="text-sm text-gray-600 mt-1">Молодёжная линейка для дерзких и свободных</p>
            </Link>
          </div>
        </div>
        
        {/* Brand Philosophy */}
        <div className="bg-black text-white p-8 md:p-12 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">Философия бренда</h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-base">
            BE FREE — будь свободен. Это наш главный посыл. Мы верим, что одежда — это способ самовыражения, 
            инструмент для создания настроения и отражение внутреннего мира человека.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            Каждая наша коллекция — это история о свободе, смелости и искренности. 
            Мы создаём не просто вещи, а возможности для самовыражения.
          </p>
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/zhenskaya"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider hover:bg-gray-800 active:bg-gray-900 transition-colors"
          >
            СМОТРЕТЬ КОЛЛЕКЦИИ
          </Link>
        </div>
      </div>
    </main>
  );
}
