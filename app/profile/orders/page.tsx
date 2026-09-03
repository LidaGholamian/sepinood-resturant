import { Suspense } from "react";

import OrdersPage from "./orders-page";

export default function Page() {
  return (
    <Suspense
      fallback={
        <p className="text-center py-10 text-cream-100">
          در حال دریافت سفارش ها...
        </p>
      }
    >
      <OrdersPage />
    </Suspense>
  );
}
