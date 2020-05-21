export interface Product {
  id: number;
  status: boolean;
  productName: string;
  price: number;
  description: string;
  image: {
    image: string;
  };
}
