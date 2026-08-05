import { HomeHero } from "@/features/home/components/hero";
import { Menu } from "../menu";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <Menu />
      <div className="text-2xl font-extrabold text-center">
        تب یا منو رستوران
      </div>
    </>
  );
}
