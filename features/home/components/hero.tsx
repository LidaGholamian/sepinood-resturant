import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden mx-28 my-8 rounded-3xl">
      <Image
        src="/images/veganFood.png"
        alt="بشقاب سالاد گیاهی تازه با سبزیجات رنگارنگ"
        fill
        priority
        sizes="50vw"
        className="object-cover animate-[hero-zoom_18s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-forest-950/20" />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-xl space-y-6 text-cream-100 md:space-y-8">
            <p className="text-4xl font-extrabold tracking-tight opacity-0 animate-[fadeIn_0.8s_ease_forwards] md:text-6xl lg:text-7xl drop-shadow-[0_3px_14px_rgba(0,0,0,1)]">
              سپینود
            </p>

            <h1 className="text-2xl font-bold leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease_0.15s_forwards] md:text-4xl md:leading-snug drop-shadow-[0_3px_14px_rgba(0,0,0,1)]">
              طعم تازهٔ گیاهی، از مزرعه تا میز شما
            </h1>

            <p className="max-w-md text-base leading-8 text-primary-foreground/85 opacity-0 animate-[fadeIn_0.8s_ease_0.3s_forwards] md:text-lg text-shadow-2xl text-shadow-neutral-800 drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              منوی کاملاً گیاهی سپینود را ببینید و سفارش آنلاین خود را در چند
              دقیقه ثبت کنید.
            </p>

            <div className="flex flex-wrap items-center gap-3 opacity-0 animate-[fadeIn_0.8s_ease_0.45s_forwards]">
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-forest-700 hover:bg-forest-800 text-cream-50 font-semibold rounded-lg px-8 py-4 shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl",
                )}
              >
                مشاهده منو
              </Link>
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-cream-100/80 border border-foreground/50 text-forest-600 font-semibold rounded-lg px-8 py-4 transition-all duration-300 hover:bg-hero-text hover:border-hero-text hover:-translate-y-0.5",
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
