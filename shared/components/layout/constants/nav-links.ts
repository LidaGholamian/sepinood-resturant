import type { NavLink } from "@/shared/components/layout/types/nav.types";

export const navLinks: readonly NavLink[] = [
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: " تماس با ما" },
] as const;
