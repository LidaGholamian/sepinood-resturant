"use client";

import { Pizza, Salad, Sandwich, Wheat } from "lucide-react";

import type { CategoryTabsProps } from "@/features/menu/types/category-tabs.types";
import { cn } from "@/shared/lib/utils";

const iconMap = {
  Burgers: Sandwich,
  Salads: Salad,
  Pizza: Pizza,
  Pasta: Wheat,
} as const;

const ALL_CATEGORY_ID = "";

export function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 sm:gap-3">
      <button
        type="button"
        onClick={() => onChange(ALL_CATEGORY_ID)}
        className={cn(
          "flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all",
          activeCategory === ALL_CATEGORY_ID
            ? "border-forest-700 bg-forest-700 text-ivory-50"
            : "border-neutral-300 bg-ivory-50 text-neutral-700 hover:border-forest-700 hover:text-forest-700",
        )}
      >
        همه
      </button>

      {categories.map((category) => {
        const Icon = iconMap[category.name as keyof typeof iconMap];
        const isActive = activeCategory === category.categoryId;

        return (
          <button
            type="button"
            key={category.categoryId}
            onClick={() => onChange(category.categoryId)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all",
              isActive
                ? "border-forest-700 bg-forest-700 text-ivory-50"
                : "border-neutral-300 bg-ivory-50 text-neutral-700 hover:border-forest-700 hover:text-forest-700",
            )}
          >
            {Icon ? <Icon className="size-4" /> : null}
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
