export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <section className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-cream-100 md:text-4xl">
            تماس با ما
          </h1>

          <p className="leading-8 text-cream-100/80">
            اگر سوالی درباره سفارش، خدمات یا تجربه استفاده از سپینود دارید،
            خوشحال می‌شویم با ما در ارتباط باشید.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-forest-600 bg-forest-700 p-6">
            <h2 className="mb-3 text-lg font-semibold text-cream-100">
              اطلاعات تماس
            </h2>

            <div className="space-y-3 text-sm text-cream-100/80">
              <p>تلفن: ۱۲۳۴۵۶۷۸-۰۲۱</p>

              <p>ایمیل: info@sepinood.ir</p>

              <p>آدرس: تهران، خیابان نمونه، پلاک ۱۰</p>
            </div>
          </div>

          <div className="rounded-lg border border-forest-600 bg-forest-700 p-6">
            <h2 className="mb-3 text-lg font-semibold text-cream-100">
              ساعات کاری
            </h2>

            <div className="space-y-3 text-sm text-cream-100/80">
              <p>هر روز از ساعت ۱۲ ظهر تا ۱۱ شب</p>

              <p>پاسخگویی سفارش‌ها و پشتیبانی در همین بازه انجام می‌شود.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
