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

export type PaginatedOrders = {
  data: Order[];
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
};

export interface OrderItemsProps {
  items: OrderItem[];
}

export interface OrderDetailsSummaryProps {
  order: Order;
}

export interface orderDetailsPageProps {
  params: Promise<{ id: string }>;
}
