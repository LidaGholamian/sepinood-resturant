import Image from "next/image";

import type { MenuCardProps } from "@/features/menu/types/menu-card.types";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card/card";
import { cn } from "@/shared/lib/utils";

function formatPrice(price: number) {
  return `${price.toLocaleString("fa-IR")} تومان`;
}

export function MenuCard({ item, onAddToCart, className }: MenuCardProps) {
  const { name, description, price, image, isAvailable } = item;

  return (
    <Card
      size="sm"
      className={cn(
        "group/card gap-0 bg-forest-100 py-0 text-neutral-900 ring-forest-700/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
        />
      </div>

      <CardHeader className="gap-1.5 px-3 pt-3">
        <CardTitle className="line-clamp-1 text-sm font-bold text-forest-800 md:text-base">
          {name}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs leading-5 text-neutral-600 md:text-sm md:leading-6">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-3 pt-2">
        <p className="text-sm font-semibold text-forest-700 md:text-base">
          {formatPrice(price)}
        </p>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent px-3 pb-3 pt-2">
        <Button
          type="button"
          size="sm"
          className="h-9 w-full text-sm"
          disabled={!isAvailable}
          onClick={() => onAddToCart?.(item)}
        >
          {isAvailable ? "افزودن به سبد" : "ناموجود"}
        </Button>
      </CardFooter>
    </Card>
  );
}
