export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type OrderStatus =
  | "pending"
  | "preparing"
  | "delivering"
  | "completed"
  | "cancelled";

export interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "online" | "cash";
  items: OrderItem[];
  totalPrice: number;
  userId: string;
  status: OrderStatus;
}

export type OrderCardProps = {
  order: Order;
};
