
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  rating: number;
  seller: {
    name: string;
    id: string;
    rating: number;
  };
  tags: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface FilterOption {
  id: string;
  name: string;
  count: number;
}

export interface FilterGroup {
  name: string;
  options: FilterOption[];
}
