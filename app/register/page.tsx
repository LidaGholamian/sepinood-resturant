import type { Metadata } from "next";

import { SignUpPage } from "@/features/auth";

export const metadata: Metadata = {
  title: "ثبت‌نام",
  description: "ایجاد حساب کاربری در سپینود",
};

export default function Page() {
  return <SignUpPage />;
}
