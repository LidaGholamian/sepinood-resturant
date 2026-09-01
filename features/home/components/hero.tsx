import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

export function HomeHero() {
  return (
    <section className="relative isolate h-[55svh] min-h-105 max-h-155 overflow-hidden mx-4 sm:mx-4 md:mx-10 lg:mx-28 my-2 rounded-3xl">
      <Image
        src="/images/veganFood.png"
        alt="بشقاب سالاد گیاهی تازه با سبزیجات رنگارنگ"
        fill
        priority
        sizes="50vw"
        className="object-cover animate-[hero-zoom_18s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-forest-950/20" />

      <div className="relative z-10 flex min-h-[calc(50svh-5rem)] items-center">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-xl space-y-6 text-cream-100 md:space-y-8">
            <p className="text-3xl font-extrabold tracking-tight opacity-0 animate-[fadeIn_0.8s_ease_forwards] md:text-4xl lg:text-5xl drop-shadow-[0_3px_14px_rgba(0,0,0,1)]">
              سپینود
            </p>

            <h1 className="text-xl font-bold leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease_0.15s_forwards] md:text-3xl md:leading-snug drop-shadow-[0_3px_14px_rgba(0,0,0,1)]">
              طعم تازهٔ گیاهی، از مزرعه تا میز شما
            </h1>

            <p className="max-w-md text-base leading-8 text-primary-foreground/85 opacity-0 animate-[fadeIn_0.8s_ease_0.3s_forwards] md:text-base text-shadow-2xl text-shadow-neutral-800 drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              منوی کاملاً گیاهی سپینود را ببینید و سفارش آنلاین خود را در چند
              دقیقه ثبت کنید.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
