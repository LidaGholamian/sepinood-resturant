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
    <Card className="flex items-center gap-4 p-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>

          <p className="text-sm text-neutral-500">{formatPrice(item.price)}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => decreaseQuantity(item.id)}
            >
              <Minus className="size-4" />
            </Button>

            <span className="w-8 text-center font-medium">{item.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              onClick={() => increaseQuantity(item.id)}
            >
              <Plus className="size-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(item.id)}
          >
            <Trash2 className="size-4 text-red-500" />
          </Button>
        </div>
      </div>

      <div className="text-right font-semibold whitespace-nowrap">
        {formatPrice(item.price * item.quantity)}
      </div>
    </Card>
  );
}
