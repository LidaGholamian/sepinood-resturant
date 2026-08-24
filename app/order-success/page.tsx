"use client";

import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="w-96 max-w-full mx-auto px-4 py-8 gap-4 flex flex-col items-center justify-center">
      <p className="text-center text-2xl font-bold text-cream-100">
        سفارش شما با موفقیت ثبت شد
      </p>
      <p className="text-center text-lg text-cream-100">
        شما میتوانید در صفحه سفارشات خود سفارشات خود را مشاهده کنید
      </p>
      <Button
        className="w-fit bg-cream-100 font-semibold text-forest-900 hover:bg-cream-100/80"
        onClick={() => router.push("/profile")}
      >
        بازگشت به پروفایل
      </Button>
    </div>
  );
}
