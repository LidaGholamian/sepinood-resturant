import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

export function EmptyCart() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white p-8 text-center">
      <ShoppingCart className="mb-4 size-12 text-forest-700" />

      <h2 className="text-xl font-semibold text-forest-900">
        سبد خرید شما خالی است
      </h2>

      <p className="mt-2 text-sm text-neutral-500">
        هنوز محصولی به سبد خرید اضافه نکرده‌اید.
      </p>

      <Button className="mt-6 bg-forest-700 hover:bg-forest-800">
        <Link href="/menu">مشاهده منو</Link>
      </Button>
    </div>
  );
}
