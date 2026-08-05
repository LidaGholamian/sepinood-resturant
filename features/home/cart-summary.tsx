import { ShoppingCart } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function CartSummary() {
  return (
    <Card className="sticky top-24 h-fit bg-forest-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="size-5" />
          سبد خرید
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="mb-4 size-14 text-muted-foreground" />

          <p className="font-medium">سبد خرید شما خالی است</p>

          <p className="mt-2 text-sm text-muted-foreground">
            غذای مورد علاقه‌تان را انتخاب کنید.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
