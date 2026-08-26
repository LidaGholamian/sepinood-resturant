import { OrderStatus } from "../types/order.types";

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "در انتظار بررسی",
  preparing: "در حال آماده‌سازی",
  delivering: "در حال ارسال",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};
