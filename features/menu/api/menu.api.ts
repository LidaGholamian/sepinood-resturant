import { apiClient } from "@/services/api-client";
import type { Category } from "@/features/menu/types/category.types";
import type { MenuItem } from "@/features/menu/types/menu.types";

export const getMenuItems = async (): Promise<MenuItem[]> => {
  const { data } = await apiClient.get<MenuItem[]>("/menuItems");
  return Array.isArray(data) ? data : [];
};

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await apiClient.get<Category[]>("/categories");
  return Array.isArray(data) ? data : [];
};
