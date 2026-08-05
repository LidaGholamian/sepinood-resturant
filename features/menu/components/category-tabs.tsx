"use client";

import { cn } from "@/shared/lib/utils";
import { Pizza, Sandwich, Salad, Wheat } from "lucide-react";
import { CategoryTabsProps } from "../types/category.types";


const iconMap = {
  Burgers: Sandwich,
  Salads: Salad,
  Pizza: Pizza,
  Pasta: Wheat,
};

export function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3">
      {categories.map((category) => {
        const Icon = iconMap[category.name as keyof typeof iconMap];

        const isActive = activeCategory === category.categoryId;

        return (
          <button
            key={category.categoryId}
            onClick={() => onChange(category.categoryId)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2 text-sm transition-all",

              isActive
                ? "border-forest-700 bg-forest-700 text-white"
                : "border-neutral-300 bg-white text-neutral-700 hover:border-forest-700 hover:text-forest-700",
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}

            {category.name}
          </button>
        );
      })}
    </div>
  );
}
