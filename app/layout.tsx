import type { Metadata } from "next";
import { Vazirmatn, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/shared/components/layout/navbar";
import { Footer } from "@/shared/components/layout/footer";
import { Providers } from "./providers";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "رستوران گیاهی سپینود - سفارش آنلان غذا",
    template: "%s | Sepinood",
  },
  description:
    "Sepinood is a modern vegan restaurant where you can explore delicious plant-based meals, place online orders, and enjoy healthy food delivered to your door.",
  keywords: [
    "Vegan Restaurant",
    "Vegetarian",
    "Plant-Based Food",
    "Healthy Food",
    "Online Food Ordering",
    "Restaurant",
  ],
  authors: [{ name: "Lida Gholamian" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${vazirmatn.variable} ${figtree.variable}`}>
      <body className="bg-background text-foreground">
        <Providers>
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
