import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden">
      <Image
        src="/images/vegBowl.png"
        alt="بشقاب سالاد گیاهی تازه با سبزیجات رنگارنگ"
        fill
        priority
        sizes="50vw"
        className="object-cover animate-[hero-zoom_18s_ease-out_forwards]"
      />

      <div
        className="absolute inset-0 bg-gradient-to-l from-forest-950/80 via-forest-900/55 to-forest-900/25"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-xl space-y-6 text-primary-foreground md:space-y-8">
            <p className="text-4xl font-extrabold tracking-tight opacity-0 animate-[fadeIn_0.8s_ease_forwards] md:text-6xl lg:text-7xl">
              سپینود
            </p>

            <h1 className="text-2xl font-bold leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease_0.15s_forwards] md:text-4xl md:leading-snug">
              طعم تازهٔ گیاهی، از مزرعه تا میز شما
            </h1>

            <p className="max-w-md text-base leading-8 text-primary-foreground/85 opacity-0 animate-[fadeIn_0.8s_ease_0.3s_forwards] md:text-lg">
              منوی کاملاً گیاهی سپینود را ببینید و سفارش آنلاین خود را در چند
              دقیقه ثبت کنید.
            </p>

            <div className="flex flex-wrap items-center gap-3 opacity-0 animate-[fadeIn_0.8s_ease_0.45s_forwards]">
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-ivory-50 px-6 text-base text-forest-800 hover:bg-ivory-50/90",
                )}
              >
                مشاهده منو
              </Link>
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                سفارش آنلاین
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
