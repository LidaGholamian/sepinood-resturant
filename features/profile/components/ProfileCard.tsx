"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut, Mail, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

export function ProfileCard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-neutral-500">در حال بارگذاری...</p>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <Card className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border-forest-800 bg-forest-900 text-cream-100">
      <CardHeader className="border-b border-forest-700 p-6">
        <div className="flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-forest-600">
            <User className="size-8" />
          </div>

          <div className="min-w-0">
            <h1 className="text-xl font-bold">{session.user.name}</h1>

            {session.user.email && (
              <p className="mt-1 truncate text-sm text-cream-100/60">
                {session.user.email}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3 rounded-xl bg-forest-800/70 p-4">
          <Mail className="size-5 text-cream-100/70" />

          <div>
            <p className="text-xs text-cream-100/50">ایمیل</p>
            <p className="mt-1 text-sm">{session.user.email || "ثبت نشده"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 h-14 pt-2 sm:flex-row">
          <Button
            className="flex-1 items-center h-11 bg-ivory-50 text-forest-900 hover:bg-ivory-50/90"
          >
            <Link href="/cart" className="flex items-center gap-2">
              <ShoppingCart className="size-4" />
              مشاهده سبد خرید
            </Link>
          </Button>

          <Button
            variant="outline"
            className="flex-1 h-11 border-error-500/50 bg-transparent text-error-500 hover:bg-error-500/10 hover:text-error-500"
            onClick={() => {
              void signOut({ callbackUrl: "/" });
            }}
          >
            <LogOut className="size-4" />
            خروج از حساب
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
