"use client";

import { useCartStore } from "@/features/cart/store/cart.store";

export function useCartHydrated() {
  return useCartStore((state) => state._hasHydrated);
}
