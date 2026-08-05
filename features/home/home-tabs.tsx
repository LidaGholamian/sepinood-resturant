"use client";

import { useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";

import { Menu } from "@/features/menu/components/Menu";
import { CartSummary } from "./cart-summary";
import { RestaurantInfo } from "./resturant-info";
import { CategoryTabs } from "@/features/menu/components/category-tabs";
import { useCategories } from "../menu/hook/useCategories";



export function HomeTabs() {
  const { data: categories = [], isLoading } = useCategories();

  const [activeCategory, setActiveCategory] = useState("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Content */}
        <Tabs defaultValue="menu">
          <TabsList className="mb-6">
            <TabsTrigger value="menu">منوی سفارش</TabsTrigger>

            <TabsTrigger value="restaurant">اطلاعات رستوران</TabsTrigger>
          </TabsList>

          <TabsContent value="menu">
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />

            <div className="mt-8">
              <Menu activeCategory={activeCategory} />
            </div>
          </TabsContent>

          <TabsContent value="restaurant">
            <RestaurantInfo />
          </TabsContent>
        </Tabs>

        {/* Cart */}
        <CartSummary />
      </div>
    </section>
  );
}
