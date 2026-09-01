"use client";

import { useState } from "react";

import { CartSummary } from "@/features/cart";
import { RestaurantInfo } from "@/features/home/components/restaurant-info";
import { CategoryTabs } from "@/features/menu/components/category-tabs";
import { Menu } from "@/features/menu/components/menu";
import { useCategories } from "@/features/menu/hook/use-categories";
import { cn } from "@/shared/lib/utils";

type HomeTab = "menu" | "restaurant";

export function HomeTabs() {
  const { data: categories = [], isPending, isError } = useCategories();
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTab, setActiveTab] = useState<HomeTab>("menu");

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-4 bg-forest-700 rounded-xl">
          <div
            role="tablist"
            aria-label="بخش‌های صفحه"
            className="inline-flex h-11 gap-1 rounded-t-xl overflow-hidden rounded-sm bg-forest-800 text-neutral-100"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "menu"}
              onClick={() => setActiveTab("menu")}
              className={cn(
                " px-4 text-sm font-medium transition-colors",
                activeTab === "menu"
                  ? "text-ivory-50 shadow-sm rounded-sm "
                  : "text-neutral-100 bg-forest-700",
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
                "px-4 text-sm font-medium transition-colors",
                activeTab === "restaurant"
                  ? "text-ivory-50 shadow-sm"
                  : "text-neutral-100 bg-forest-700",
              )}
            >
              اطلاعات رستوران
            </button>
          </div>

          {activeTab === "menu" ? (
            <div
              id="menu"
              role="tabpanel"
              className="space-y-6 rounded-b-xl rounded-t-xl bg-forest-700 p-4 scroll-mt-100 md:scroll-mt-40 lg:scroll-mt-40"
            >
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
            <div
              role="tabpanel"
              className="space-y-6 rounded-b-xl rounded-t-xl bg-forest-700 p-4"
            >
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
