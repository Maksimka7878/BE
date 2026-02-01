import type { Product, Category, City, Store, HeroSlide } from '@/types';

// Hero slides matching befree.ru exactly
export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: '/images/hero-hub-love.webp',
    alt: 'ХАБ ЛЮБВИ',
    link: '/zhenskaya/hub-nii-liubvi',
  },
  {
    id: '2',
    image: '/images/hero-zen-sale.webp',
    alt: 'ZEN SALE',
    link: '/zhenskaya/zen-sale',
  },
  {
    id: '3',
    image: '/images/hero-w-yng.webp',
    alt: 'W YNG',
    link: '/zhenskaya/yng',
  },
  {
    id: '4',
    image: '/images/hero-rock.webp',
    alt: 'ROCK',
    link: '/zhenskaya/rock',
  },
  {
    id: '5',
    image: '/images/hero-zen-home.webp',
    alt: 'ZEN ОДЕЖДА ДЛЯ ДОМА',
    link: '/zhenskaya/domashnyaya-odezhda',
  },
  {
    id: '6',
    image: '/images/hero-layers.webp',
    alt: 'LAYERS',
    link: '/zhenskaya/layers',
  },
];

// Women's categories - exact order from befree.ru
export const womenCategories: Category[] = [
  { id: '1', name: 'Верхняя одежда', slug: 'verkhnaya-odezhda', image: '/images/cat-women-outerwear.webp', gender: 'women' },
  { id: '2', name: 'брюки', slug: 'bryuki', image: '/images/cat-women-pants.webp', gender: 'women' },
  { id: '3', name: 'Вязаный трикотаж', slug: 'vyazanyy-trikotazh', image: '/images/cat-women-knitwear.webp', gender: 'women' },
  { id: '4', name: 'джинсы', slug: 'dzhinsy', image: '/images/cat-women-jeans.webp', gender: 'women' },
  { id: '5', name: 'юбки', slug: 'yubki', image: '/images/cat-women-skirts.webp', gender: 'women' },
  { id: '6', name: 'платья', slug: 'platya', image: '/images/cat-women-dresses.webp', gender: 'women' },
  { id: '7', name: 'YNG', slug: 'yng', image: '/images/cat-women-yng.webp', gender: 'women' },
  { id: '8', name: 'домашняя одежда', slug: 'domashnyaya-odezhda', image: '/images/hero-zen-sale.webp', gender: 'women' },
  { id: '9', name: 'комплекты', slug: 'co-ord-sets', image: '/images/cat-women-coords.webp', gender: 'women' },
  { id: '10', name: 'Аксессуары', slug: 'zen-aksessuary', image: '/images/cat-women-accessories.webp', gender: 'women' },
];

// Men's categories
export const menCategories: Category[] = [
  { id: 'm1', name: 'Верхняя одежда', slug: 'verkhnaya-odezhda', image: '/images/cat-men-outerwear.webp', gender: 'men' },
  { id: 'm2', name: 'брюки', slug: 'bryuki', image: '/images/cat-men-pants.webp', gender: 'men' },
  { id: 'm3', name: 'футболки и лонгсливы', slug: 'futbolki-i-longslivy', image: '/images/cat-men-tshirts.webp', gender: 'men' },
  { id: 'm4', name: 'трикотаж', slug: 'trikotazh', image: '/images/cat-men-knitwear.webp', gender: 'men' },
  { id: 'm5', name: 'джинсы', slug: 'dzhinsy', image: '/images/cat-men-jeans.webp', gender: 'men' },
  { id: 'm6', name: 'рубашки', slug: 'rubashki', image: '/images/cat-men-shirts.webp', gender: 'men' },
];

// Women's products - 50 per category
const womenProductTemplates: Record<string, { names: string[]; images: string[]; priceRange: [number, number] }> = {
  'verkhnaya-odezhda': {
    names: ['Пальто шерстяное двубортное', 'Куртка стеганая укороченная', 'Тренч классический', 'Пуховик длинный', 'Бомбер атласный', 'Жилет дутый', 'Парка с капюшоном', 'Дубленка короткая', 'Шуба из искусственного меха', 'Ветровка легкая'],
    images: ['/images/cat-women-outerwear.webp', '/images/hero-layers.webp'],
    priceRange: [5999, 15999],
  },
  'bryuki': {
    names: ['Брюки кожаные прямые', 'Брюки палаццо', 'Брюки классические зауженные', 'Брюки карго', 'Брюки с высокой посадкой', 'Леггинсы спортивные', 'Брюки широкие плиссированные', 'Кюлоты', 'Брюки бананы', 'Брюки капри'],
    images: ['/images/prod-pants-leather.webp', '/images/cat-women-pants.webp'],
    priceRange: [2499, 5999],
  },
  'vyazanyy-trikotazh': {
    names: ['Кардиган вязаный оверсайз', 'Свитер с высоким воротом', 'Джемпер укороченный', 'Пуловер с V-образным вырезом', 'Жилет вязаный', 'Водолазка базовая', 'Свитер с косами', 'Кофта на пуговицах', 'Топ вязаный', 'Кардиган длинный'],
    images: ['/images/cat-women-knitwear.webp'],
    priceRange: [2499, 4999],
  },
  'dzhinsy': {
    names: ['Джинсы прямые с высокой посадкой', 'Джинсы скинни', 'Джинсы мом', 'Джинсы бойфренд', 'Джинсы клеш', 'Джинсы широкие', 'Джинсы с разрезами', 'Джинсы укороченные', 'Джинсы с потертостями', 'Джинсы слим'],
    images: ['/images/cat-women-jeans.webp'],
    priceRange: [2999, 4999],
  },
  'yubki': {
    names: ['Юбка мини плиссированная', 'Юбка миди А-силуэта', 'Юбка макси', 'Юбка-карандаш', 'Юбка джинсовая', 'Юбка с запахом', 'Юбка-шорты', 'Юбка кожаная', 'Юбка в складку', 'Юбка с принтом'],
    images: ['/images/cat-women-skirts.webp', '/images/cat-women-dresses.webp'],
    priceRange: [1999, 3999],
  },
  'platya': {
    names: ['Платье мини атласное асимметричное с кружевом', 'Платье миди с поясом', 'Платье макси в пол', 'Платье-комбинация', 'Платье трикотажное', 'Платье-рубашка', 'Платье с открытой спиной', 'Платье вечернее', 'Платье-футляр', 'Сарафан летний'],
    images: ['/images/prod-dress-atlas.webp', '/images/prod-dress-atlas-2.webp', '/images/prod-dress-atlas-3.webp', '/images/prod-dress-atlas-4.webp', '/images/cat-women-dresses.webp'],
    priceRange: [2499, 5999],
  },
  'yng': {
    names: ['Худи оверсайз с принтом', 'Свитшот укороченный', 'Костюм спортивный', 'Топ укороченный', 'Джоггеры', 'Лонгслив базовый', 'Бомбер молодежный', 'Футболка с графикой', 'Шорты спортивные', 'Олимпийка'],
    images: ['/images/cat-women-yng.webp', '/images/hero-w-yng.webp'],
    priceRange: [1499, 3499],
  },
  'domashnyaya-odezhda': {
    names: ['Пижама шелковая с кружевом', 'Халат махровый', 'Комплект для сна', 'Ночная сорочка', 'Пижама хлопковая', 'Домашние брюки', 'Топ для сна', 'Халат атласный', 'Пижама с принтом', 'Костюм домашний'],
    images: ['/images/hero-zen-sale.webp', '/images/hero-zen-home.webp'],
    priceRange: [1999, 4999],
  },
  'co-ord-sets': {
    names: ['Костюм с юбкой', 'Костюм брючный', 'Комплект топ и брюки', 'Комплект рубашка и шорты', 'Костюм льняной', 'Комплект вязаный', 'Костюм с жилетом', 'Комплект спортивный', 'Костюм деловой', 'Комплект пляжный'],
    images: ['/images/cat-women-coords.webp', '/images/cat-women-pants.webp'],
    priceRange: [3999, 7999],
  },
  'zen-aksessuary': {
    names: ['Пояс для чулок кружевной на завязках', 'Лоферы кожаные на низком каблуке', 'Сумка через плечо', 'Ремень кожаный', 'Шарф шерстяной', 'Перчатки кожаные', 'Шапка вязаная', 'Очки солнцезащитные', 'Колье', 'Браслет'],
    images: ['/images/prod-belt.webp', '/images/prod-loafers.webp', '/images/cat-women-accessories.webp'],
    priceRange: [999, 5999],
  },
};

const generateProducts = (templates: typeof womenProductTemplates, gender: 'women' | 'men', prefix: string): Product[] => {
  const products: Product[] = [];
  const badges: (null | 'hit' | 'new')[] = [null, null, null, 'hit', 'new'];
  const sizes = gender === 'women'
    ? ['XS', 'S', 'M', 'L', 'XL']
    : ['S', 'M', 'L', 'XL', 'XXL'];

  Object.entries(templates).forEach(([category, template]) => {
    for (let i = 0; i < 50; i++) {
      const nameIndex = i % template.names.length;
      const imageIndex = i % template.images.length;
      const priceVariation = Math.floor((template.priceRange[1] - template.priceRange[0]) * (i % 10) / 10);
      const price = template.priceRange[0] + priceVariation;

      products.push({
        id: `${prefix}${category.toUpperCase().slice(0, 3)}${String(i + 1).padStart(3, '0')}`,
        name: template.names[nameIndex],
        price: price,
        image: template.images[imageIndex],
        colors: (i % 5) + 1,
        badge: badges[i % badges.length],
        category: category,
        sizes: sizes,
      });
    }
  });

  return products;
};

export const womenProducts: Product[] = generateProducts(womenProductTemplates, 'women', 'W-');

// Men's products - 50 per category
const menProductTemplates: Record<string, { names: string[]; images: string[]; priceRange: [number, number] }> = {
  'verkhnaya-odezhda': {
    names: ['Куртка кожаная бомбер', 'Пуховик мужской', 'Парка утепленная', 'Ветровка спортивная', 'Куртка джинсовая', 'Пальто мужское', 'Жилет утепленный', 'Бомбер нейлоновый', 'Тренч мужской', 'Куртка стеганая'],
    images: ['/images/cat-men-outerwear.webp'],
    priceRange: [5999, 12999],
  },
  'bryuki': {
    names: ['Брюки чинос классические', 'Брюки карго', 'Брюки спортивные', 'Брюки льняные', 'Брюки зауженные', 'Брюки прямые', 'Брюки укороченные', 'Брюки с защипами', 'Джоггеры', 'Брюки широкие'],
    images: ['/images/cat-men-pants.webp'],
    priceRange: [2499, 4999],
  },
  'futbolki-i-longslivy': {
    names: ['Футболка базовая хлопковая', 'Футболка с принтом', 'Лонгслив базовый', 'Поло классическое', 'Футболка оверсайз', 'Майка спортивная', 'Футболка с воротником', 'Лонгслив с графикой', 'Футболка облегающая', 'Футболка с карманом'],
    images: ['/images/cat-men-tshirts.webp'],
    priceRange: [999, 2499],
  },
  'trikotazh': {
    names: ['Свитер вязаный с горлом', 'Джемпер мужской', 'Кардиган на пуговицах', 'Пуловер с V-вырезом', 'Водолазка мужская', 'Свитер с косами', 'Джемпер укороченный', 'Свитер с узором', 'Жилет вязаный', 'Кофта на молнии'],
    images: ['/images/cat-men-knitwear.webp'],
    priceRange: [2999, 5999],
  },
  'dzhinsy': {
    names: ['Джинсы слим темные', 'Джинсы прямые', 'Джинсы зауженные', 'Джинсы классические', 'Джинсы с потертостями', 'Джинсы широкие', 'Джинсы укороченные', 'Джинсы baggy', 'Джинсы светлые', 'Джинсы черные'],
    images: ['/images/cat-men-jeans.webp'],
    priceRange: [2999, 5499],
  },
  'rubashki': {
    names: ['Рубашка льняная классическая', 'Рубашка хлопковая', 'Рубашка в клетку', 'Рубашка джинсовая', 'Рубашка с принтом', 'Рубашка оверсайз', 'Рубашка приталенная', 'Рубашка с коротким рукавом', 'Рубашка белая', 'Рубашка черная'],
    images: ['/images/cat-men-shirts.webp'],
    priceRange: [1999, 3999],
  },
};

export const menProducts: Product[] = generateProducts(menProductTemplates, 'men', 'M-');

// Cities list
export const cities: City[] = [
  { id: '1', name: 'Москва' },
  { id: '2', name: 'Санкт-Петербург' },
  { id: '3', name: 'Волгоград' },
  { id: '4', name: 'Воронеж' },
  { id: '5', name: 'Екатеринбург' },
  { id: '6', name: 'Ижевск' },
  { id: '7', name: 'Казань' },
  { id: '8', name: 'Краснодар' },
  { id: '9', name: 'Красноярск' },
  { id: '10', name: 'Нижний Новгород' },
  { id: '11', name: 'Новосибирск' },
  { id: '12', name: 'Омск' },
  { id: '13', name: 'Пермь' },
  { id: '14', name: 'Ростов-на-Дону' },
  { id: '15', name: 'Самара' },
  { id: '16', name: 'Саратов' },
  { id: '17', name: 'Томск' },
  { id: '18', name: 'Тюмень' },
  { id: '19', name: 'Уфа' },
  { id: '20', name: 'Челябинск' },
];

// Stores
export const stores: Store[] = [
  { id: '1', name: 'BEFREE ТЦ МЕГА Белая Дача', address: '1-й Покровский пр-д, 1', city: 'Москва', phone: '8 (800) 250-01-02', hours: '10:00 - 22:00' },
  { id: '2', name: 'BEFREE ТЦ МЕГА Теплый Стан', address: 'Калужское ш., 14 км', city: 'Москва', phone: '8 (800) 250-01-02', hours: '10:00 - 22:00' },
  { id: '3', name: 'BEFREE ТЦ Европейский', address: 'пл. Киевского вокзала, 2', city: 'Москва', phone: '8 (800) 250-01-02', hours: '10:00 - 22:00' },
  { id: '4', name: 'BEFREE ТРК Галерея', address: 'Лиговский пр-т, 30А', city: 'Санкт-Петербург', phone: '8 (800) 250-01-02', hours: '10:00 - 22:00' },
  { id: '5', name: 'BEFREE ТЦ МЕГА Дыбенко', address: 'пр-т Мега Дыбенко, 1', city: 'Санкт-Петербург', phone: '8 (800) 250-01-02', hours: '10:00 - 22:00' },
];

// Helper functions
export const getProductsByCategory = (categorySlug: string, gender: 'women' | 'men' = 'women'): Product[] => {
  const products = gender === 'women' ? womenProducts : menProducts;
  if (categorySlug === 'all') return products;
  return products.filter(p => p.category === categorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return [...womenProducts, ...menProducts].find(p => p.id === id);
};

export const getStoresByCity = (cityName: string): Store[] => {
  if (cityName === 'ВСЕ ГОРОДА') return stores;
  return stores.filter(s => s.city === cityName);
};
