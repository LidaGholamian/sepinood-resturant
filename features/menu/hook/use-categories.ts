import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/features/menu/api/menu.api";
import { menuKeys } from "@/features/menu/api/menu.keys";

export function useCategories() {
  return useQuery({
    queryKey: menuKeys.categories(),
    queryFn: getCategories,
  });
}
