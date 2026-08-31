import { getOrderById } from "@/features/orders/api";
import { ORDER_STATUS_LABELS, orderStatusClasses } from "@/features/orders/constants/order-status.constants";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";

interface orderDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderDetailsPage({
  params,
}: orderDetailsPageProps) {
  const { id } = await params;
  const order = await getOrderById(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-forest-700 border-none text-cream-100 w-full mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">جزئیات سفارش</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-cream-100/70">وضعیت سفارش</span>

            <Badge className={orderStatusClasses[order.status]}>
              {ORDER_STATUS_LABELS[order.status]}
            </Badge>
          </div>

          <div className="space-y-3 border-t border-cream-100/10 pt-4">
            <div className="flex justify-between">
              <span className="text-cream-100/70">نام</span>
              <span>{order.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-cream-100/70">تلفن</span>
              <span>{order.phone}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-cream-100/70">پرداخت</span>
              <span>
                {order.paymentMethod === "online" ? "آنلاین" : "نقدی"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-cream-100/70">مبلغ کل</span>
              <span>{order.totalPrice.toLocaleString("fa-IR")} تومان</span>
            </div>

            <div>
              <span className="text-cream-100/70 block mb-1">آدرس</span>
              <p>{order.address}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
