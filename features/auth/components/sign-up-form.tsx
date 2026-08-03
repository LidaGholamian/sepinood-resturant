"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/features/auth/schemas/auth.schema";
import type { SignUpValues } from "@/features/auth/types/auth.types";
import { FormField } from "@/shared/components/form/form-field";
import { Button } from "@/shared/components/ui/button/button";

export function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignUpValues) {
    console.log("Sign up:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField
        control={control}
        name="mobileNumber"
        label="شماره موبایل"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        placeholder="09123456789"
        dir="ltr"
      />

      <FormField
        control={control}
        name="password"
        label="رمز عبور"
        type="password"
        autoComplete="new-password"
        placeholder="حداقل ۸ کاراکتر"
      />

      <FormField
        control={control}
        name="confirmPassword"
        label="تکرار رمز عبور"
        type="password"
        autoComplete="new-password"
        placeholder="رمز عبور را دوباره وارد کنید"
      />

      <Button type="submit" size="lg" className="h-11 w-full text-base">
        ثبت‌نام
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <Link
          href="/sign-in"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          ورود
        </Link>
      </p>
    </form>
  );
}
