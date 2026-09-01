import { getOrderById } from "@/features/orders/api";
import {
  ORDER_STATUS_LABELS,
  orderStatusClasses,
} from "@/features/orders/constants/order-status.constants";
import OrderItems from "@/features/orders/components/order-items";

import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import OrderDetailsSummary from "@/features/orders/components/order-details-summary";
import { orderDetailsPageProps } from "@/features/orders/types/order.types";
import { OrderCustomerInfo } from "@/features/orders/components/order-customer-info";

export default async function OrderDetailsPage({
  params,
}: orderDetailsPageProps) {
  const { id } = await params;
  const order = await getOrderById(id);

  return (
    <div className="container max-w-xl mx-auto my-2 px-4 py-8 border border-forest-700 rounded-lg bg-forest-700">
      <div className="mx-auto max-w-xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-cream-100">جزئیات سفارش</h1>

          <Badge className={orderStatusClasses[order.status]}>
            {ORDER_STATUS_LABELS[order.status]}
          </Badge>
        </div>

        <OrderItems items={order.items} />

        <OrderDetailsSummary order={order} />

        <OrderCustomerInfo order={order} />
      </div>
    </div>
  );
}
