import { apiClient } from "@/services/api-client";
import type { Order } from "@/features/orders/types/order.types";

/**
 * TODO: Add an "orders" collection to db.json and confirm the endpoint path
 * before wiring this up from CheckoutForm.
 * Expected json-server convention: POST /orders
 */
export const createOrder = async (order: Order): Promise<Order> => {
  const { data } = await apiClient.post<Order>("/orders", order);
  return data;
};
