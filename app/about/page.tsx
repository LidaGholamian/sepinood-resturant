export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <section className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-cream-100 md:text-4xl">
            درباره سپینود
          </h1>

          <p className="text-base leading-8 text-cream-100/80">
            سپینود تجربه‌ای از سفارش آنلاین غذا با تمرکز بر کیفیت، سادگی و رضایت
            مشتری است. ما تلاش می‌کنیم انتخاب غذا و تجربه سفارش را به فرآیندی
            سریع و لذت‌بخش تبدیل کنیم.
          </p>
        </div>

        <div className="rounded-lg border border-forest-600 bg-forest-700 p-6 text-right">
          <h2 className="mb-3 text-xl font-semibold text-cream-100">
            داستان ما
          </h2>

          <p className="leading-8 text-cream-100/80">
            در سپینود، هدف ما ایجاد فضایی است که کیفیت غذا و تجربه کاربری در
            کنار هم قرار بگیرند. از انتخاب غذا تا ثبت سفارش، هر بخش با توجه به
            نیاز کاربران طراحی شده است.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "مواد اولیه با کیفیت",
            "سفارش آسان و سریع",
            "تجربه کاربری ساده",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-forest-600 bg-forest-700 p-4 text-sm text-cream-100"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
