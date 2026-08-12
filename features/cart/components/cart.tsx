"use client";

import { useCartHydrated } from "@/features/cart/hooks/use-cart-hydrated";
import { useCartStore } from "../store/cart.store";
import { CartHeader } from "./CartHeader";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";
import { OrderSummary } from "./OrderSummary";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartHydrated();

  if (!hasHydrated) {
    return (
      <div className="flex min-h-75 items-center justify-center">
        <p className="text-cream-100">در حال بارگذاری سبد خرید...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-10 md:px-6">
        <CartHeader />
        <EmptyCart />
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 md:px-6">
      <CartHeader />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8">
        <section>
          <CartItems />
        </section>

        <aside>
          <OrderSummary />
        </aside>
      </div>
    </main>
  );
}
