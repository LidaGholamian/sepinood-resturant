import Cart from "@/features/cart/components/cart";
import { ProfileNavigation } from "@/features/profile/components/ProfileNavigation";

export default function ProfilePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div
        dir="ltr"
        className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]"
      >
        {/* Left: Cart */}
        <aside dir="rtl" className="min-w-0">
          <Cart />
        </aside>

        {/* Right: Profile Navigation */}
        <aside dir="rtl" className="min-w-0">
          <ProfileNavigation />
        </aside>
      </div>
    </main>
  );
}
