import { apiClient } from "@/services/api-client";

export const getMenuItems = async () => {
  const { data } = await apiClient.get("/menuItems");

  return data;
};
