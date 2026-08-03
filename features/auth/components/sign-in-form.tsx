"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema } from "@/features/auth/schemas/auth.schema";
import type { SignInValues } from "@/features/auth/types/auth.types";
import { FormField } from "@/shared/components/form/form-field";
import { Button } from "@/shared/components/ui/button/button";

export function SignInForm() {
  const { control, handleSubmit } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      mobileNumber: "",
      password: "",
    },
  });

  function onSubmit(data: SignInValues) {
    console.log("Sign in:", data);
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
        autoComplete="current-password"
        placeholder="حداقل ۸ کاراکتر"
      />

      <Button type="submit" size="lg" className="h-11 w-full text-base">
        ورود
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        حساب کاربری ندارید؟{" "}
        <Link
          href="/sign-up"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          ثبت‌نام
        </Link>
      </p>
    </form>
  );
}
