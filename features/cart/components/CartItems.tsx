"use client";

import { useCartStore } from "../store/cart.store";
import { CartItem } from "./CartItem";

export function CartItems() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
