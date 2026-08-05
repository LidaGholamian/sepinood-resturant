export interface Category {
 categoryId: string;
  name: string;
}

export interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onChange: (categoryId: string) => void;
}
