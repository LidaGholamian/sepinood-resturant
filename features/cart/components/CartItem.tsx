"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { useCartStore } from "../store/cart.store";
import type { CartItemProps } from "../types/cart-item-props.types";

function formatPrice(price: number) {
  return `${price.toLocaleString("fa-IR")} تومان`;
}

export function CartItem({ item }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <Card className="flex flex-row items-center gap-12 rounded-xl p-4 bg-forest-900 text-cream-100 w-full border border-forest-400">
      {/* Product Image */}
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl sm:size-28">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Product Content */}
      <div className="flex flex-col md:flex-row lg:flex-row min-w-0 flex-1 justify-between">
        {/* Header */}
        <div className="flex flex-row items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm md:text-base lg:text-base font-semibold text-cream-100">
              {item.name}
            </h3>

            <p className="mt-1 text-sm md:text-base lg:text-base text-cream-100">
              {formatPrice(item.price)}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex flex-col md:flex-row lg:flex-row justify-center items-start md:items-center lg:items-center md:justify-between lg:justify-between gap-2 md:gap-16 lg:gap-16">
          {/* Quantity */}
          <div className="flex items-center md:gap-4 lg:gap-4">
            {item.quantity === 1 ? (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => removeItem(item.id)}
                className="size-8 rounded-sm border border-neutral-200"
                aria-label="حذف"
              >
                <Trash2 className="size-3.5" />
              </Button>
            ): (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => decreaseQuantity(item.id)}
              className="size-8 rounded-sm border border-neutral-200"
              aria-label="کاهش تعداد"
            >
              <Minus className="size-3.5" />
            </Button> )}

            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => increaseQuantity(item.id)}
              className="size-8 rounded-sm border border-neutral-200"
              aria-label="افزایش تعداد"
            >
              <Plus className="size-3.5" />
            </Button>
          </div>

          {/* Total */}
          <span className="whitespace-nowrap text-sm font-bold text-cream-100 md:text-base lg:text-base">
            {formatPrice(item.price * item.quantity)}
          </span>

          {/* Remove */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.id)}
            className="shrink-0 text-error-500 hover:bg-forest-700"
            aria-label={`حذف ${item.name}`}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
