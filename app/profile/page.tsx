import Cart from "@/features/cart/components/cart";
import { OrderSummary } from "@/features/cart/components/OrderSummary";
import { ProfileNavigation } from "@/features/profile/components/ProfileNavigation";

export default function ProfilePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div
        dir="rtl"
        className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)_300px]"
      >
        {/* Left: Cart */}
        <aside dir="rtl" className="min-w-0">
          <ProfileNavigation />
        </aside>

        {/* Right: Profile Navigation */}
        <aside dir="rtl" className="min-w-0">
          <OrderSummary />
        </aside>
      </div>
    </main>
  );
}
