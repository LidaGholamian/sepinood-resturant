import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { Order, OrderCustomerInfoProps } from "../types/order.types";

export function OrderCustomerInfo({ order }: OrderCustomerInfoProps) {
  const infoItemClass = "border-b border-cream-100/10 pb-3";
  const infoItemTitleClass = "text-sm text-cream-100/60";

  return (
    <Card className="w-full border-none bg-forest-600 text-cream-100">
      <CardHeader>
        <CardTitle>اطلاعات مشتری</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className={infoItemClass}>
          <p className={infoItemTitleClass}>نام</p>
          <p>{order.name}</p>
        </div>

        <div className={infoItemClass}>
          <p className={infoItemTitleClass}>ایمیل</p>
          <p>{order.email}</p>
        </div>

        <div className={infoItemClass}>
          <p className={infoItemTitleClass}>شماره تماس</p>
          <p>{order.phone}</p>
        </div>

        <div>
          <p>آدرس</p>
          <p className={infoItemTitleClass}>{order.address}</p>
        </div>
      </CardContent>
    </Card>
  );
}
