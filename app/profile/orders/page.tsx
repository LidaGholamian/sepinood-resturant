"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Order } from "@/features/orders";
import { getUserOrders } from "@/features/orders/api";
import { OrderCard } from "@/features/orders/components/order-card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/shared/components/ui/pagination";
import { cn } from "@/shared/lib/utils";

export default function OrdersPage() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const [orders, setOrders] = useState<Order[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

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

        const userOrders = await getUserOrders(session.user.id, page);

        setOrders(userOrders.data);
        setTotalPages(userOrders.pages);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("خطایی در دریافت سفارش ها رخ داده است");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [session, status, page]);

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

    const handlePageChange = (newPage: number) => {
        router.push(`/profile/orders?page=${newPage}`);
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">سفارش های من</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent className="gap-2">
          <PaginationItem>
            <PaginationPrevious
              text="قبلی"
              onClick={() => handlePageChange(page - 1)}
              aria-disabled={page === 1}
              className={cn(
                "text-cream-100 hover:bg-white/10 hover:text-cream-100",
                page === 1 && "pointer-events-none opacity-40",
              )}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              isActive
              href="#"
              onClick={(event) => {
                event.preventDefault();
              }}
              className="border-cream-100/30 bg-white/20 text-cream-100 hover:bg-white/10 hover:text-cream-100"
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              text="بعدی"
              onClick={() => handlePageChange(page + 1)}
              aria-disabled={page === totalPages}
              className={cn(
                "text-cream-100 hover:bg-white/10 hover:text-cream-100",
                page === totalPages && "pointer-events-none opacity-40",
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
