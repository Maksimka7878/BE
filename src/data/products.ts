import type { Product, Category, City, Store, HeroSlide } from '@/types';

// Hero slides matching befree.ru exactly
export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: 'https://befree.ru/upload/iblock/2b7/hub_nii_liubvi_desk.jpg',
    alt: 'ХАБ ЛЮБВИ',
    link: '/zhenskaya/hub-nii-liubvi',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80',
    alt: 'ZEN SALE',
    link: '/zhenskaya/zen-sale',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80',
    alt: 'W YNG',
    link: '/zhenskaya/yng',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1920&q=80',
    alt: 'ROCK',
    link: '/zhenskaya/rock',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
    alt: 'ZEN ОДЕЖДА ДЛЯ ДОМА',
    link: '/zhenskaya/domashnyaya-odezhda',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80',
    alt: 'LAYERS',
    link: '/zhenskaya/layers',
  },
];

// Women's categories - exact order from befree.ru
export const womenCategories: Category[] = [
  { id: '1', name: 'Верхняя одежда', slug: 'verkhnaya-odezhda', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80', gender: 'women' },
  { id: '2', name: 'брюки', slug: 'bryuki', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80', gender: 'women' },
  { id: '3', name: 'Вязаный трикотаж', slug: 'vyazanyy-trikotazh', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80', gender: 'women' },
  { id: '4', name: 'джинсы', slug: 'dzhinsy', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', gender: 'women' },
  { id: '5', name: 'юбки', slug: 'yubki', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj13?w=600&q=80', gender: 'women' },
  { id: '6', name: 'платья', slug: 'platya', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', gender: 'women' },
  { id: '7', name: 'YNG', slug: 'yng', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80', gender: 'women' },
  { id: '8', name: 'домашняя одежда', slug: 'domashnyaya-odezhda', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', gender: 'women' },
  { id: '9', name: 'комплекты', slug: 'co-ord-sets', image: 'https://images.unsplash.com/photo-1550614000-4b9519e02a48?w=600&q=80', gender: 'women' },
  { id: '10', name: 'Аксессуары', slug: 'zen-aksessuary', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80', gender: 'women' },
];

// Men's categories
export const menCategories: Category[] = [
  { id: 'm1', name: 'Верхняя одежда', slug: 'verkhnaya-odezhda', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80', gender: 'men' },
  { id: 'm2', name: 'брюки', slug: 'bryuki', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80', gender: 'men' },
  { id: 'm3', name: 'футболки и лонгсливы', slug: 'futbolki-i-longslivy', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', gender: 'men' },
  { id: 'm4', name: 'трикотаж', slug: 'trikotazh', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80', gender: 'men' },
  { id: 'm5', name: 'джинсы', slug: 'dzhinsy', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', gender: 'men' },
  { id: 'm6', name: 'рубашки', slug: 'rubashki', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80', gender: 'men' },
];

// Women's products - exact from befree.ru
export const womenProducts: Product[] = [
  {
    id: 'BF2611414030-60',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: 'https://befree.ru/upload/resize_cache/iblock/3b5/900_1200_1/3b5c8a9f6d2e1c4a5b7d8e9f0a1b2c3d.jpg',
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
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414030-77',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414030-20',
    name: 'Платье мини атласное асимметричное с кружевом',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
    colors: 5,
    badge: 'hit',
    category: 'platya',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611308006',
    name: 'Пояс для чулок кружевной на завязках',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    colors: 2,
    badge: 'new',
    category: 'zen-aksessuary',
    sizes: ['ONE SIZE'],
  },
  {
    id: 'BF2611209012',
    name: 'Джинсы прямые с высокой посадкой',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80',
    colors: 3,
    badge: 'hit',
    category: 'dzhinsy',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2616686001',
    name: 'Лоферы кожаные на низком каблуке',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    colors: 2,
    badge: null,
    category: 'zen-aksessuary',
    sizes: ['36', '37', '38', '39', '40'],
  },
  {
    id: 'BF2611308015',
    name: 'Брюки кожаные прямые',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?w=600&q=80',
    colors: 2,
    badge: 'new',
    category: 'bryuki',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414100',
    name: 'Юбка мини плиссированная',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0uj13?w=600&q=80',
    colors: 4,
    badge: 'hit',
    category: 'yubki',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'BF2611414200',
    name: 'Кардиган вязаный оверсайз',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    colors: 3,
    badge: null,
    category: 'vyazanyy-trikotazh',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414300',
    name: 'Пальто шерстяное двубортное',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
    colors: 2,
    badge: 'new',
    category: 'verkhnaya-odezhda',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'BF2611414400',
    name: 'Пижама шелковая с кружевом',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80',
    colors: 2,
    badge: 'hit',
    category: 'verkhnaya-odezhda',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411002',
    name: 'Брюки чинос классические',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    colors: 4,
    badge: null,
    category: 'bryuki',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411003',
    name: 'Футболка базовая хлопковая',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    colors: 6,
    badge: 'hit',
    category: 'futbolki-i-longslivy',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411004',
    name: 'Свитер вязаный с горлом',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    colors: 3,
    badge: 'new',
    category: 'trikotazh',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'M-BF2611411005',
    name: 'Джинсы слим темные',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    colors: 2,
    badge: 'hit',
    category: 'dzhinsy',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'M-BF2611411006',
    name: 'Рубашка льняная классическая',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
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
