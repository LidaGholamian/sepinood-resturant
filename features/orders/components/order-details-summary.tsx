import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { formatPrice } from "@/shared/lib/format-price";
import { OrderDetailsSummaryProps } from "../types/order.types";

export default function OrderDetailsSummary({
  order,
}: OrderDetailsSummaryProps) {
  const totalItems = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <Card className="bg-forest-600 border-none text-cream-100">
      <CardHeader>
        <CardTitle className="text-lg">خلاصه سفارش</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-cream-100/70">تعداد آیتم</span>

          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-cream-100/70">روش پرداخت</span>

          <span>{order.paymentMethod === "online" ? "آنلاین" : "نقدی"}</span>
        </div>

        <div className="border-t border-cream-100/10 pt-4 flex justify-between font-semibold">
          <span>مبلغ کل</span>

          <span className="whitespace-nowrap">
            {formatPrice(order.totalPrice)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
