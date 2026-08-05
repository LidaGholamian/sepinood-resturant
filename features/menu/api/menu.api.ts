import { apiClient } from "@/services/api-client";
import type { MenuItem } from "@/features/menu/types/menu.types";

export const getMenuItems = async (): Promise<MenuItem[]> => {
  const { data } = await apiClient.get<MenuItem[]>("/menuItems");

  return data;
};
