import { OrderStatus } from "../types/order.types";

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "در انتظار بررسی",
  preparing: "در حال آماده‌سازی",
  delivering: "در حال ارسال",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};

export const orderStatusClasses = {
  pending: "bg-yellow-500/5 text-yellow-200 border-yellow-500/30",
  preparing: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  delivering: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  completed: "bg-green-500/15 text-green-300 border-green-500/30",
  cancelled: "bg-red-500/15 text-red-300 border-red-500/30",
} as const;
