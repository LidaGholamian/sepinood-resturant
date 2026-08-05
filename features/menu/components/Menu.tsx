"use client";

import { MenuCard } from "@/features/menu/components/MenuCard";
import { useMenu } from "@/features/menu/hook/use-menu";
import { MenuProps } from "../types/menu.types";

export function Menu({ activeCategory }: MenuProps) {
  const { data: items = [], isPending, isError, error } = useMenu();

  const filteredItems = activeCategory
    ? items.filter((item) => item.categoryId === activeCategory)
    : items;

  if (isPending) {
    return (
      <div
        className="flex min-h-48 items-center justify-center text-sm text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        در حال بارگذاری منو...
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="flex min-h-48 items-center justify-center text-center text-sm text-destructive"
        role="alert"
      >
        {error instanceof Error
          ? error.message
          : "خطا در دریافت منو. لطفاً دوباره تلاش کنید."}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-48 items-center justify-center text-sm text-muted-foreground">
        آیتمی در منو یافت نشد.
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 gap-5 px-4 py-8 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-7">
      {filteredItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
