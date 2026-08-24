import type { CartItem } from "@/features/cart/types/cart.types";
import type { Order } from "@/features/orders/types/order.types";

export type CreateOrderPayloadInput = Pick<
  Order,
  "name" | "email" | "phone" | "address" | "paymentMethod" | "totalPrice" | "userId"
> & {
  items: CartItem[];
};
