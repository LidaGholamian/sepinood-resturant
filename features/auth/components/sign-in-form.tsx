"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema } from "@/features/auth/schemas/auth.schema";
import type { SignInValues } from "@/features/auth/types/auth.types";
import { FormField } from "@/shared/components/form/form-field";
import { Button } from "@/shared/components/ui/button/button";

export function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: SignInValues) {
    setFormError(null);
    setIsSubmitting(true);

    try {
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setFormError("نام کاربری یا رمز عبور اشتباه است");
        return;
      }

      router.push(callbackUrl);
      router.refresh();
    } catch {
      setFormError("خطا در ورود. لطفاً دوباره تلاش کنید.");
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
        autoComplete="current-password"
        placeholder="حداقل ۸ کاراکتر"
      />

      {formError ? (
        <p className="text-sm text-destructive" role="alert">
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full text-base rounded-xl"
        disabled={isSubmitting}
      >
        {isSubmitting ? "در حال ورود..." : "ورود"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        حساب کاربری ندارید؟{" "}
        <Link
          href="/register"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          ثبت‌نام
        </Link>
      </p>
    </form>
  );
}
