import { useQuery } from "@tanstack/react-query";

import { getMenuItems } from "@/features/menu/api/menu.api";

export function useMenu() {
  return useQuery({
    queryKey: ["menu"],
    queryFn: getMenuItems,
  });
}
