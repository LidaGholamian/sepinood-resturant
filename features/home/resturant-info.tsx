import { Card, CardContent } from "@/shared/components/ui/card";


export function RestaurantInfo() {
  return (
    <Card>
      <CardContent className="space-y-5 py-6">
        <div>
          <h3 className="font-semibold">رستوران گیاهی سپینود</h3>

          <p className="mt-2 text-muted-foreground">
            ارائه انواع غذاهای گیاهی سالم و تازه
          </p>
        </div>

        <div>
          <strong>آدرس</strong>

          <p className="text-muted-foreground">رشت، خیابان ...</p>
        </div>

        <div>
          <strong>ساعت کاری</strong>

          <p className="text-muted-foreground">۱۲:۰۰ تا ۲۳:۰۰</p>
        </div>

        <div>
          <strong>تلفن</strong>

          <p className="text-muted-foreground">۰۱۳-xxxxxxx</p>
        </div>
      </CardContent>
    </Card>
  );
}
