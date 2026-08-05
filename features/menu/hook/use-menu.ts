import { useQuery } from "@tanstack/react-query";

import { getMenuItems } from "@/features/menu/api/menu.api";
import { menuKeys } from "@/features/menu/api/menu.keys";

export function useMenu() {
  console.log("calling menu api");
  return useQuery({
    queryKey: menuKeys.items(),
    queryFn: getMenuItems,
  });
}
