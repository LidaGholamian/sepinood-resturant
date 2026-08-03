import { AuthFormShell } from "@/features/auth/components/auth-form-shell";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export function SignInPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12 md:py-16">
      <AuthFormShell
        title="ورود"
        description="با شماره موبایل وارد حساب سپینود شوید."
      >
        <SignInForm />
      </AuthFormShell>
    </section>
  );
}
