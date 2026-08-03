import { Button as ButtonPrimitive } from "@base-ui/react/button";

import type { ButtonProps } from "@/shared/components/ui/button/button.types";
import { buttonVariants } from "@/shared/components/ui/button/button.variants";
import { cn } from "@/shared/lib/utils";

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
