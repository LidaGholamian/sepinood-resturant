"use client";

import { useState } from "react";

import { CartSummary } from "@/features/cart";
import { RestaurantInfo } from "@/features/home/components/restaurant-info";
import { CategoryTabs } from "@/features/menu/components/category-tabs";
import { Menu } from "@/features/menu/components/Menu";
import { useCategories } from "@/features/menu/hook/use-categories";
import { cn } from "@/shared/lib/utils";

type HomeTab = "menu" | "restaurant";

export function HomeTabs() {
  const { data: categories = [], isPending, isError } = useCategories();
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTab, setActiveTab] = useState<HomeTab>("menu");

  return (
    <section className="container mx-auto px-4 py-14 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-4 bg-forest-700 rounded-xl px-4">
          <div
            role="tablist"
            aria-label="بخش‌های صفحه"
            className="inline-flex h-11 gap-1 rounded-sm bg-forest-700 p-1 text-neutral-100"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "menu"}
              onClick={() => setActiveTab("menu")}
              className={cn(
                "rounded-sm px-4 text-sm font-medium transition-colors",
                activeTab === "menu"
                  ? "bg-forest-700 text-ivory-50 shadow-sm"
                  : "text-neutral-100 hover:text-ivory-50 hover:bg-forest-600 bg-forest-800",
              )}
            >
              منوی سفارش
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "restaurant"}
              onClick={() => setActiveTab("restaurant")}
              className={cn(
                "rounded-sm px-4 text-sm font-medium transition-colors",
                activeTab === "restaurant"
                  ? "bg-forest-700 text-ivory-50 shadow-sm"
                  : "text-neutral-100 hover:text-ivory-50 bg-forest-800 hover:bg-forest-600",
              )}
            >
              اطلاعات رستوران
            </button>
          </div>

          {activeTab === "menu" ? (
            <div role="tabpanel" className="space-y-6">
              {isPending ? (
                <p className="text-sm text-ivory-50/80">
                  در حال بارگذاری دسته‌بندی‌ها...
                </p>
              ) : isError ? (
                <p className="text-sm text-red-200" role="alert">
                  خطا در دریافت دسته‌بندی‌ها. مطمئن شوید json-server روی پورت
                  ۳۰۰۱ در حال اجرا است.
                </p>
              ) : (
                <CategoryTabs
                  categories={categories}
                  activeCategory={activeCategory}
                  onChange={setActiveCategory}
                />
              )}

              <Menu activeCategory={activeCategory} />
            </div>
          ) : (
            <div role="tabpanel">
              <RestaurantInfo />
            </div>
          )}
        </div>

        <aside className="min-w-0">
          <CartSummary />
        </aside>
      </div>
    </section>
  );
}
