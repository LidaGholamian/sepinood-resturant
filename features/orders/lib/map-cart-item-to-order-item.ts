import type { CartItem } from "@/features/cart/types/cart.types";
import type { OrderItem } from "@/features/orders/types/order.types";

export function mapCartItemToOrderItem(item: CartItem): OrderItem {
  return {
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  };
}
