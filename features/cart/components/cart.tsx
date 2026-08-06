"use client";

import { useCartStore } from "../store/cart.store";
import { CartItem } from "./CartItem";

export default function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
