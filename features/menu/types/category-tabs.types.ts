import type { Category } from "@/features/menu/types/category.types";

export type CategoryTabsProps = {
  categories: Category[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
};
