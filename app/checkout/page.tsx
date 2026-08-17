
import { OrderSummary } from "@/features/cart";
import { CheckoutForms } from "@/features/checkout";

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* Checkout Form */}
        <section className="rounded-xl bg-forest-800 p-6">
          <h1 className="mb-6 text-xl font-bold text-cream-100">تکمیل سفارش</h1>

          <CheckoutForms />
        </section>

        {/* Order Summary */}
        <aside>
          <OrderSummary showCheckoutButton={false} />
        </aside>
      </div>
    </main>
  );
}
