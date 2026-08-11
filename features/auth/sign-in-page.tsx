import { AuthFormShell } from "@/features/auth/components/auth-form-shell";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export function SignInPage() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-12 md:py-16 mx-auto w-120 mt-8 my-16 rounded-3xl bg-forest-200">
      <AuthFormShell
        title="ورود"
        description="با نام کاربری و رمز عبور وارد حساب سپینود شوید."
      >
        <SignInForm />
      </AuthFormShell>
    </section>
  );
}
