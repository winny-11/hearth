export type ProductCategory = "Popular" | "On sale" | "Best Rated";



export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: ProductCategory;
  image: string;
  description: string;
  materials: string;
};

export type Collection = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
};

export type JournalEntry = {
  id: string;
  category: string;
  readTime: string;
  title: string;
  image: string;
};
