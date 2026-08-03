import { AuthFormShell } from "@/features/auth/components/auth-form-shell";
import { SignUpForm } from "@/features/auth/components/sign-up-form";

export function SignUpPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12 md:py-16">
      <AuthFormShell
        title="ثبت‌نام"
        description="حساب جدید بسازید و سفارش آنلاین را شروع کنید."
      >
        <SignUpForm />
      </AuthFormShell>
    </section>
  );
}
