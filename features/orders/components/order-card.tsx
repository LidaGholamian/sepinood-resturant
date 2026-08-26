import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { ORDER_STATUS_LABELS, type OrderCardProps } from "@/features/orders";

export function OrderCard({order}: OrderCardProps){
    const totalItems = order.items.reduce((total, item) => total + item.quantity, 0);

    return (
      <Card className="bg-forest-700 border-none text-cream-100 w-full mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">سفارش شما</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-cream-100/70">وضعیت سفارش</span>

            <span>{ORDER_STATUS_LABELS[order.status]}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cream-100/70">تعداد اقلام</span>

            <span>{totalItems} قلم</span>
          </div>

          <div className="flex justify-between">
            <span className="text-cream-100/70">روش پرداخت</span>

            <span>
              {order.paymentMethod === "online"
                ? "پرداخت آنلاین"
                : "پرداخت هنگام تحویل"}
            </span>
          </div>

          <div className="flex justify-between font-semibold">
            <span className="text-cream-100/70">مبلغ سفارش</span>

            <span>{order.totalPrice.toLocaleString("fa-IR")} تومان</span>
          </div>
        </CardContent>
      </Card>
    );
}


