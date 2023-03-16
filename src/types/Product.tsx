interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail?: string;
}

export interface IProductsState {
  products: IProduct[];
  error: boolean;
  isLoading: boolean;
}
