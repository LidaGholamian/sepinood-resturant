export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

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
}
