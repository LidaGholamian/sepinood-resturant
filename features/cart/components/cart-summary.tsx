"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

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

export function CartSummary() {
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
        {totalItems === 0 ? (
          <div className="flex flex-col items-center py-10 text-center">
            <ShoppingCart className="mb-3 size-12 opacity-70" />
            <p>سبد خرید شما خالی است.</p>
          </div>
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

            <Button className="w-full">
              <Link href="/cart">مشاهده سبد خرید</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
