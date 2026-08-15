import { KeyRound, MapPin, ShoppingBag, UserRound } from "lucide-react";

export const profileNavigation = [
  "اطلاعات حساب کاربری",
  "تغییر رمز عبور",
  "سفارش های من",
  "آدرس های من",
] as const;

export const iconMap = {
  "اطلاعات حساب کاربری": UserRound,
  "تغییر رمز عبور": KeyRound,
  "سفارش های من": ShoppingBag,
  "آدرس های من": MapPin,
} as const;
