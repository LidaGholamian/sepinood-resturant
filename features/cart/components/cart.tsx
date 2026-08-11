"use client";

import { useCartStore } from "../store/cart.store";
import { CartSummary } from "./cart-summary";
import { CartHeader } from "./CartHeader";
import { CartItems } from "./CartItems";
import { EmptyCart } from "./EmptyCart";

export default function Cart() {
  const items = useCartStore((state) => state.items);

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

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section>
          <CartItems />
        </section>

        <aside>
          <CartSummary />
        </aside>
      </div>
    </main>
  );
}
