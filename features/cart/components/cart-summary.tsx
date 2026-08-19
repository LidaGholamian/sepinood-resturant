"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useCartHydrated } from "@/features/cart/hooks/use-cart-hydrated";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { useCartStore } from "../store/cart.store";

function formatPrice(price: number) {
  return `${price.toLocaleString("fa-IR")} تومان`;
}

function CartSummaryEmpty() {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <ShoppingCart className="mb-3 size-12 opacity-70" />
      <p>سبد خرید شما خالی است.</p>
    </div>
  );
}

export function CartSummary() {
  const hasHydrated = useCartHydrated();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <Card className="sticky top-24 h-fit border border-forest-300 bg-forest-700 text-ivory-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="size-5" />
          سبد خرید
        </CardTitle>
      </CardHeader>

      <CardContent>
        {!hasHydrated || totalItems === 0 ? (
          <CartSummaryEmpty />
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>تعداد آیتم</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between font-semibold">
                <span>جمع کل</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <Button className="w-full bg-cream-100 font-semibold text-forest-900 hover:bg-cream-100/80">
              <Link href="/cart">مشاهده سبد خرید</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
