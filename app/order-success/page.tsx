"use client";

import { Button } from "@/shared/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div>
      <p className="text-center text-2xl font-bold">
        سفارش شما با موفقیت ثبت شد
      </p>
      <p className="text-center text-lg">
        شما میتوانید در صفحه سفارشات خود سفارشات خود را مشاهده کنید
      </p>
      <Button
        className="w-full bg-cream-100 font-semibold text-forest-900 hover:bg-cream-100/80"
        onClick={() => router.push("/profile")}
      >
        بازگشت به پروفایل
      </Button>
    </div>
  );
}
