import type { NavLink } from "@/shared/components/layout/types/nav.types";

export const navLinks: readonly NavLink[] = [
  { href: "/menu", label: "منو" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
] as const;
