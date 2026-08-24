"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCartStore } from "@/features/cart/store/cart.store";
import { createOrderPayload, createOrder } from "@/features/orders";
import { CheckoutFormValues } from "../types/checkout.types";
import { checkoutSchema } from "../schemas/checkout.schema";
import { Button } from "@/shared/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Input } from "@/shared/components/ui/input";

export function CheckoutForms() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const router = useRouter();
  const { data: session } = useSession();

  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "online",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    if (!session?.user?.id) {
      setSubmitError("برای ثبت سفارش ابتدا وارد حساب کاربری خود شوید.");
      setIsSubmitting(false);
      return;
    }

    const orderPayload = createOrderPayload({
      userId: session.user.id,
      ...data,
      items,
      totalPrice: getTotalPrice(),
    });

    try {
      const createdOrder = await createOrder(orderPayload);

      clearCart();
      router.push("/order-success");
    } catch (error) {
      setSubmitError("ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-cream-100/70">
          نام
        </Label>

        <Input
          id="name"
          type="text"
          {...register("name")}
          placeholder="نام خود را وارد کنید"
          className="text-cream-100"
        />

        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-cream-100/70">
          ایمیل
        </Label>

        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="example@email.com"
          className="text-cream-100"
        />

        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-cream-100/70">
          شماره تماس
        </Label>

        <Input
          id="phone"
          dir="rtl"
          type="tel"
          {...register("phone")}
          placeholder="شماره تماس خود را وارد کنید"
          className="text-cream-100"
        />

        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address" className="text-cream-100/70">
          آدرس
        </Label>

        <Textarea
          id="address"
          rows={4}
          {...register("address")}
          placeholder="آدرس کامل خود را وارد کنید"
          className="text-cream-100"
        />

        {errors.address && (
          <p className="text-sm text-destructive">{errors.address.message}</p>
        )}
      </div>

      {/* Payment Method */}
      <div className="space-y-3">
        <Label className="text-cream-100/70">روش پرداخت</Label>

        <Controller
          name="paymentMethod"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online" className="text-cream-100/70">
                  پرداخت آنلاین
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="text-cream-100/70">
                  پرداخت هنگام تحویل
                </Label>
              </div>
            </RadioGroup>
          )}
        />

        {errors.paymentMethod && (
          <p className="text-sm text-destructive">
            {errors.paymentMethod.message}
          </p>
        )}
      </div>

      {submitError && <p className="text-sm text-destructive">{submitError}</p>}

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cream-100 font-semibold text-forest-900 hover:bg-cream-100/80"
      >
        {isSubmitting ? "در حال ثبت سفارش..." : "ثبت سفارش"}
      </Button>
    </form>
  );
}
