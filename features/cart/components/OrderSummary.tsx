"use client";

import { ShoppingBag } from "lucide-react";

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

export function OrderSummary() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const deliveryPrice = 0;
  const finalPrice = totalPrice + deliveryPrice;

  return (
    <Card className="border-forest-400 bg-forest-900 text-cream-100 lg:sticky lg:top-24">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ShoppingBag className="size-5" />
          خلاصه سفارش
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Order Details */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-cream-100/70">تعداد آیتم</span>

            <span className="font-medium">{totalItems}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-cream-100/70">جمع محصولات</span>

            <span className="font-medium">{formatPrice(totalPrice)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-cream-100/70">هزینه ارسال</span>

            <span className="font-medium text-cream-100">
              {deliveryPrice === 0 ? "رایگان" : formatPrice(deliveryPrice)}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream-100/20" />

        {/* Final Price */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold">مبلغ قابل پرداخت</span>

          <span className="whitespace-nowrap text-lg font-bold">
            {formatPrice(finalPrice)}
          </span>
        </div>

        {/* Checkout */}
        <Button
          className="w-full bg-cream-100 font-semibold text-forest-900 hover:bg-cream-100/90"
          disabled={totalItems === 0}
        >
          ادامه فرایند سفارش
        </Button>
      </CardContent>
    </Card>
  );
}
