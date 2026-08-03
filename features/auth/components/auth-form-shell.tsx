import type { AuthFormShellProps } from "@/features/auth/types/auth-form-shell.types";

export function AuthFormShell({
  title,
  description,
  children,
}: AuthFormShellProps) {
  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-forest-800 md:text-3xl">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
