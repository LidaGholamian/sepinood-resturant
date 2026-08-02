"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

const navLinks = [
  { href: "/menu", label: "منو" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-800/20 bg-forest-700 text-primary-foreground">
      <div className="container mx-auto flex h-20 items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-90 md:text-2xl"
        >
          سپینود
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="منوی اصلی">
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

        <div className="hidden md:block">
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "h-10 bg-ivory-50 px-5 text-forest-800 hover:bg-ivory-50/90",
            )}
          >
            سفارش آنلاین
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((prev) => !prev)}
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
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-forest-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "mt-2 h-10 bg-ivory-50 text-forest-800 hover:bg-ivory-50/90",
            )}
            onClick={() => setOpen(false)}
          >
            سفارش آنلاین
          </Link>
        </nav>
      </div>
    </header>
  );
}
