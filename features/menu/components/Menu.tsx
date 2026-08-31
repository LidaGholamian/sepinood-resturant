"use client";

import { useMemo } from "react";

import { MenuCard } from "@/features/menu/components/menu-card";
import { useMenu } from "@/features/menu/hook/use-menu";
import type { MenuProps } from "@/features/menu/types/menu-props.types";

export function Menu({ activeCategory }: MenuProps) {
  const { data, isPending, isError, error } = useMenu();
  const items = Array.isArray(data) ? data : [];

  const filteredItems = useMemo(
    () =>
      activeCategory
        ? items.filter((item) => item.categoryId === activeCategory)
        : items,
    [items, activeCategory],
  );

  if (isPending) {
    return (
      <div
        className="flex min-h-48 items-center justify-center text-sm text-ivory-50/80"
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
        className="flex min-h-48 items-center justify-center text-center text-sm text-red-200"
        role="alert"
      >
        {error instanceof Error
          ? error.message
          : "خطا در دریافت منو. لطفاً دوباره تلاش کنید."}
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div className="flex min-h-48 items-center justify-center text-sm text-ivory-50/80">
        آیتمی در منو یافت نشد.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {filteredItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
