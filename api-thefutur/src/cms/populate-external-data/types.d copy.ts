export interface Product {
  id: number;
  name: string;
  price: number;
  "short-description": string;
  category: Category;
  "thumbnail-16x9": ImageField;
  rating: Rating;
}

export interface ImageField {
  fileId: string;
  url: string;
  alt: string;
}

const enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

interface Rating {
  rate: number;
  count: number;
}
