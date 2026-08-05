import { Card, CardContent } from "@/shared/components/ui/card";

export function RestaurantInfo() {
  return (
    <Card className="bg-ivory-50 text-neutral-900 ring-forest-700/10">
      <CardContent className="space-y-5 py-6">
        <div>
          <h3 className="font-semibold text-forest-800">رستوران گیاهی سپینود</h3>

          <p className="mt-2 text-neutral-600">
            ارائه انواع غذاهای گیاهی سالم و تازه
          </p>
        </div>

        <div>
          <strong className="text-forest-800">آدرس</strong>
          <p className="text-neutral-600">رشت، خیابان ...</p>
        </div>

        <div>
          <strong className="text-forest-800">ساعت کاری</strong>
          <p className="text-neutral-600">۱۲:۰۰ تا ۲۳:۰۰</p>
        </div>

        <div>
          <strong className="text-forest-800">تلفن</strong>
          <p className="text-neutral-600">۰۱۳-xxxxxxx</p>
        </div>
      </CardContent>
    </Card>
  );
}
