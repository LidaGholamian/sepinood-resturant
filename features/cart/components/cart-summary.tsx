import { ShoppingCart } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function CartSummary() {
  return (
    <Card className="sticky top-24 h-fit bg-forest-100 text-neutral-900 ring-forest-700/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-forest-800">
          <ShoppingCart className="size-5" />
          سبد خرید
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="mb-4 size-14 text-neutral-400" />

          <p className="font-medium text-forest-800">سبد خرید شما خالی است</p>

          <p className="mt-2 text-sm text-neutral-600">
            غذای مورد علاقه‌تان را انتخاب کنید.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
