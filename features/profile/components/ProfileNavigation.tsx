import { profileNavigation } from "../constants/profile-navigation";

export function ProfileNavigation() {
  return (
    <nav className="flex flex-col gap-2">
      {profileNavigation.map((item) => (
        <button
          key={item}
          type="button"
          className="w-full rounded-lg px-4 py-3 text-right text-sm font-medium transition-colors hover:bg-forest-50 hover:text-forest-700"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
