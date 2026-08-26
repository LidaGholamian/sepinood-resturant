import { apiClient } from "@/services/api-client";
import type { Order, PaginatedOrders } from "@/features/orders/types/order.types";

export const createOrder = async (order: Order): Promise<Order> => {
  const { data } = await apiClient.post<Order>("/orders", order);
  return data;
};

export const getUserOrders = async (
  userId: string,
  page: number
): Promise<PaginatedOrders> => {
  const { data } = await apiClient.get<PaginatedOrders>(
    `/orders?userId=${userId}&_page=${page}&_per_page=5`
  );

  return data;
};
