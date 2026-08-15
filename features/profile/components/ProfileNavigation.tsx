import { UserRound } from "lucide-react";
import { iconMap, profileNavigation } from "../constants/profile-navigation";

export function ProfileNavigation() {
  return (
    <div className="rounded-xl bg-forest-800/40 p-5">
      {/* Profile Header */}
      <div className="mb-5">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-forest-700">
          <UserRound className="size-6 text-cream-100" />
        </div>

        <h2 className="text-lg font-bold text-cream-100">پروفایل من</h2>

        <p className="mt-1 text-sm text-cream-100/60">مدیریت حساب کاربری</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 border-t border-cream-100/10 pt-3">
        {profileNavigation.map((item) => {
          const Icon = iconMap[item];

          return (
            <button
              key={item}
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-right text-sm font-medium text-cream-100/75 transition-colors hover:bg-forest-700/60 hover:text-cream-100"
            >
              <Icon className="size-4 shrink-0" />
              <span>{item}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
