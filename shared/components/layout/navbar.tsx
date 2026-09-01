"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


import { cn } from "@/shared/lib/utils";
import { navLinks } from "@/shared/components/layout/constants/nav-links";
import { useMobileNav } from "@/shared/components/layout/hooks/use-mobile-nav";
import { Button, buttonVariants } from "@/shared/components/ui/button";

import { UserMenu } from "@/features/auth/components/user-menu";


export function Navbar() {
  const { open, toggle, close } = useMobileNav();
  const { data: session, status } = useSession();
  const isAuthenticated = Boolean(session?.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-800/20 bg-forest-700 text-primary-foreground">
      <div className="container mx-auto flex h-20 items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-90 md:text-2xl"
        >
          سپینود
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="منوی اصلی"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {!mounted ? null : status === "loading" ? (
            <span className="text-sm text-primary-foreground/70">...</span>
          ) : isAuthenticated ? (
            <UserMenu />
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-10 border border-ivory-50 bg-transparent px-4 text-primary-foreground hover:bg-forest-600",
              )}
            >
              ورود / ثبت نام
            </Link>
          )}

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="h-10 bg-ivory-50 px-4 text-forest-800 hover:bg-ivory-50/90"
          >
            سفارش آنلاین
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={toggle}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-forest-800/20 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="container mx-auto flex flex-col gap-1 px-4 py-4"
          aria-label="منوی موبایل"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-forest-600"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="rounded-sm px-3 py-2.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-forest-600"
            onClick={close}
          >
            سبد خرید
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            {mounted && isAuthenticated && <UserMenu />}
          </div>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });

              close();
            }}
            className="mt-2 h-10 bg-ivory-50 text-forest-800 hover:bg-ivory-50/90"
          >
            سفارش آنلاین
          </Button>
        </nav>
      </div>
    </header>
  );
}
