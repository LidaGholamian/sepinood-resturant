import type { MenuItem } from "@/features/menu/types/menu.types";

export type MenuCardProps = {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
  className?: string;
};
