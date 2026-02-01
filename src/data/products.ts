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

// Women's products - exact from befree.ru
export const womenProducts: Product[] = [
  {
    id: 'BF2611414030-60',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: '/images/prod-dress-atlas.webp',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Женское платье мини приталенного кроя из тонкой гладкой атласной ткани. Глубокий V-образный вырез декольте, низкая линия спинки, кружевная отделка.',
    composition: 'полиэстер 100%',
    care: ['Бережная стирка при максимальной температуре 30ºС', 'Не отбеливать', 'Машинная сушка запрещена', 'Глажение при 110ºС'],
  },
  {
    id: 'BF2611414030-50',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: '/images/prod-dress-atlas-2.webp',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414030-77',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: '/images/prod-dress-atlas-3.webp',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414030-20',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: '/images/prod-dress-atlas-4.webp',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611308006',
    name: 'Пояс для чулок кружевной на завязках',
    price: 2299,
    image: '/images/prod-belt.webp',
    colors: 2,
    badge: 'new',
    category: 'zen-aksessuary',
    sizes: ['ONE SIZE'],
  },
  {
    id: 'BF2611209012',
    name: 'Джинсы прямые с высокой посадкой',
    price: 3999,
    image: '/images/cat-women-jeans.webp',
    colors: 3,
    badge: 'hit',
    category: 'dzhinsy',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2616686001',
    name: 'Лоферы кожаные на низком каблуке',
    price: 5999,
    image: '/images/prod-loafers.webp',
    colors: 2,
    badge: null,
    category: 'zen-aksessuary',
    sizes: ['36', '37', '38', '39', '40'],
  },
  {
    id: 'BF2611308015',
    name: 'Брюки кожаные прямые',
    price: 4999,
    image: '/images/prod-pants-leather.webp',
    colors: 2,
    badge: 'new',
    category: 'bryuki',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414100',
    name: 'Юбка мини плиссированная',
    price: 2499,
    image: '/images/cat-women-skirts.webp',
    colors: 4,
    badge: 'hit',
    category: 'yubki',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'BF2611414200',
    name: 'Кардиган вязаный оверсайз',
    price: 3499,
    image: '/images/cat-women-knitwear.webp',
    colors: 3,
    badge: null,
    category: 'vyazanyy-trikotazh',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414300',
    name: 'Пальто шерстяное двубортное',
    price: 12999,
    image: '/images/cat-women-outerwear.webp',
    colors: 2,
    badge: 'new',
    category: 'verkhnaya-odezhda',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414400',
    name: 'Пижама шелковая с кружевом',
    price: 4499,
    image: '/images/hero-zen-sale.webp',
    colors: 3,
    badge: null,
    category: 'domashnyaya-odezhda',
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

// Men's products
export const menProducts: Product[] = [
  {
    id: 'M-BF2611411001',
    name: 'Куртка кожаная бомбер',
    price: 8999,
    image: '/images/cat-men-outerwear.webp',
    colors: 2,
    badge: 'hit',
    category: 'verkhnaya-odezhda',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411002',
    name: 'Брюки чинос классические',
    price: 3499,
    image: '/images/cat-men-pants.webp',
    colors: 4,
    badge: null,
    category: 'bryuki',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411003',
    name: 'Футболка базовая хлопковая',
    price: 1499,
    image: '/images/cat-men-tshirts.webp',
    colors: 6,
    badge: 'hit',
    category: 'futbolki-i-longslivy',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411004',
    name: 'Свитер вязаный с горлом',
    price: 3999,
    image: '/images/cat-men-knitwear.webp',
    colors: 3,
    badge: 'new',
    category: 'trikotazh',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'M-BF2611411005',
    name: 'Джинсы слим темные',
    price: 4499,
    image: '/images/cat-men-jeans.webp',
    colors: 2,
    badge: 'hit',
    category: 'dzhinsy',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411006',
    name: 'Рубашка льняная классическая',
    price: 2999,
    image: '/images/cat-men-shirts.webp',
    colors: 5,
    badge: null,
    category: 'rubashki',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
];

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
