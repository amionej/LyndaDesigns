import { Product } from '../catalog/catalog.types';

export interface CartObject {
  product: Product;
  quantity: number;
}

export interface cartPropertyAccess {
  number: number;
  index: number;
  identifier: string;
}

export interface CartState {
  cartObjects: CartObject[];
}
