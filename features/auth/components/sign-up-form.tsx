"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema } from "@/features/auth/schemas/auth.schema";
import type { SignUpValues } from "@/features/auth/types/auth.types";
import { FormField } from "@/shared/components/form/form-field";
import { Button } from "@/shared/components/ui/button/button";

export function SignUpForm() {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: SignUpValues) {
    setFormError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setFormError(payload.message ?? "ثبت‌نام ناموفق بود");
        return;
      }

      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        router.push("/login");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setFormError("خطا در ثبت‌نام. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField
        control={control}
        name="username"
        label="نام کاربری"
        type="text"
        autoComplete="username"
        placeholder="username"
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

      {formError ? (
        <p className="text-sm text-destructive" role="alert">
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <Link
          href="/login"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          ورود
        </Link>
      </p>
    </form>
  );
}
