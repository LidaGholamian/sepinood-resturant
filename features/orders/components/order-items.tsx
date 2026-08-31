import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { OrderItemsProps } from "../types/order.types";
import { formatPrice } from "../../../shared/lib/format-price";

export default function OrderItems({ items }: OrderItemsProps) {
  return (
    <Card className="bg-forest-600 border-none text-cream-100">
      <CardHeader>
        <CardTitle className="text-lg">آیتم‌های سفارش</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-cream-100/10 pb-3 last:border-none"
          >
            <div>
              <p className="font-medium">{item.name}</p>

              <p className="text-sm text-cream-100/70">
                تعداد: {item.quantity}
              </p>
            </div>

            <p className="text-sm">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
