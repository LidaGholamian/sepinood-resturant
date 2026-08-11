import { AuthFormShell } from "@/features/auth/components/auth-form-shell";
import { SignUpForm } from "@/features/auth/components/sign-up-form";

export function SignUpPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12 md:py-16 mx-auto w-120 mt-8 my-16 rounded-3xl bg-forest-200">
      <AuthFormShell
        title="ثبت‌نام"
        description="حساب کاربری خود را ایجاد کنید"
      >
        <SignUpForm />
      </AuthFormShell>
    </section>
  );
}
