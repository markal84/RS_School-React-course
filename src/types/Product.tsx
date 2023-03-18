export interface IProductProps {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  rating?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
}

export interface IProductsState {
  products: IProductProps[];
  error: boolean;
  isLoading: boolean;
}
