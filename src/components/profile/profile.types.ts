export interface OrderItem {
  quantity: number;
  productName: string;
}

export interface Order {
  id: number;
  orderitemSet: OrderItem[];
  status: boolean;
  total: number;
  created: string;
}
