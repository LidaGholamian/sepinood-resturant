"use client";

import { ChevronDown, User, LogOut, ShoppingCart } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/drop-down-menu";

export function UserMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (!session?.user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-10 items-center gap-2 rounded-lg px-2 text-cream-100 hover:bg-sage-100/70">
        <div className="flex size-8 items-center justify-center rounded-full bg-forest-600">
          <User className="size-4" />
        </div>

        <span className="hidden sm:inline">{session.user.name}</span>

        <ChevronDown className="size-4" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-forest-900 text-cream-100"
      >
        <div className="px-3 py-2">
          <p className="font-semibold">{session.user.name}</p>

          {session.user.email && (
            <p className="mt-1 truncate text-xs text-cream-100/60">
              {session.user.email}
            </p>
          )}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User className="size-4" />
          حساب کاربری
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => router.push("/cart")}>
          <ShoppingCart className="size-4" />
          سبد خرید
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => {
            void signOut({ callbackUrl: "/" });
          }}
          className="text-error-500 focus:text-error-500"
        >
          <LogOut className="size-4" />
          خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
