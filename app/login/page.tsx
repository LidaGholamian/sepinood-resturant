import type { Metadata } from "next";
import { Suspense } from "react";

import { SignInPage } from "@/features/auth";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به سپینود با نام کاربری و رمز عبور",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="py-16 text-center text-sm">...</div>}>
      <SignInPage />
    </Suspense>
  );
}
