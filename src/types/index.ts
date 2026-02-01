export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: number;
  badge?: 'hit' | 'new' | null;
  category: string;
  sizes?: string[];
  description?: string;
  composition?: string;
  care?: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  gender: 'women' | 'men' | 'both';
};

export type CartItem = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor?: string;
};

export type City = {
  id: string;
  name: string;
};

export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone?: string;
  hours?: string;
};

export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  link: string;
};
