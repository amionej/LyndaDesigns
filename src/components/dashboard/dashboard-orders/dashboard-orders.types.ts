import { User } from '../../auth/auth.types';

export interface OrderItem {
  quantity: number;
  productName: string;
}

export interface DashboardOrder {
  id: number;
  orderitemSet: OrderItem[];
  status: String;
  total: number;
  created: string;
  user: Partial<User>;
}
