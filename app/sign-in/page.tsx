import type { Metadata } from "next";

import { SignInPage } from "@/features/auth";

export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به سپینود با شماره موبایل",
};

export default function Page() {
  return <SignInPage />;
}
