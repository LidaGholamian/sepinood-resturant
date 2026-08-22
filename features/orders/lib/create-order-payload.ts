import type { CreateOrderPayloadInput } from "@/features/orders/types/create-order-payload.types";
import type { Order } from "@/features/orders/types/order.types";
import { mapCartItemToOrderItem } from "@/features/orders/lib/map-cart-item-to-order-item";

export function createOrderPayload(input: CreateOrderPayloadInput): Order {
  const { items, ...customerDetails } = input;

  return {
    id: crypto.randomUUID(),
    ...customerDetails,
    items: items.map(mapCartItemToOrderItem),
  };
}
