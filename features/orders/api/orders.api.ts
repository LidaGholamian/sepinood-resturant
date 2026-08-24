import { apiClient } from "@/services/api-client";
import type { Order } from "@/features/orders/types/order.types";

export const createOrder = async (order: Order): Promise<Order> => {
  const { data } = await apiClient.post<Order>("/orders", order);
  return data;
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  const {data} = await apiClient.get<Order[]>(
    `/orders?userId=${userId}`
  );
  return data;
}
