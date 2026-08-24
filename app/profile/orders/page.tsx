"use client";

import { Order } from "@/features/orders";
import { getUserOrders } from "@/features/orders/api/orders.api";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const { data: session, status } = useSession();

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user?.id) {
      setError("برای مشاهده سفارش ها ابتدا باید وارد حساب کاربری خود شوید");
      setIsLoading(false);
      return;
    }
    const fetchOrders = async () => {
      try {
        setError(null);

        const userOrders = await getUserOrders(session?.user.id);
        setOrders(userOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("خطایی در دریافت سفارش ها رخ داده است");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [session, status]);

  if (status === "loading" || isLoading)
    return (
      <p className="text-center py-10 text-cream-100">
        در حال دریافت سفارش ها...
      </p>
    );

  if (error)
    return (
      <p className="text-center py-10 text-error-500 font-bold">{error}</p>
    );

  if (orders.length === 0)
    return (
      <p className="text-center py-10 text-cream-100">
        هیچ سفارشی ثبت نشده است
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">سفارش های من</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>{order.id}</h2>
          <p>سفارش های من: {order.id}</p>
          <p>مبلغ: {order.totalPrice}</p>
        </div>
      ))}
    </div>
  );
}
