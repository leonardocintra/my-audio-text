import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { XCircle, CheckCircle2 } from "lucide-react";

export default async function ComparisonSection() {
  const t = await getTranslations("ComparisonSection");
  const whatsappFailImage = PlaceHolderImages.find(
    (p) => p.id === "whatsapp-fail"
  );
  const ourAppSuccessImage = PlaceHolderImages.find(
    (p) => p.id === "our-app-success"
  );

  return (
    <section className="bg-primary/5 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-destructive/50 border-2 bg-card">
            <CardHeader className="flex-row items-center gap-3 space-y-0">
              <XCircle className="h-7 w-7 text-destructive flex-shrink-0" />
              <CardTitle className="font-headline text-xl text-destructive">
                {t("whatsappNative.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {whatsappFailImage && (
                <Image
                  src={whatsappFailImage.imageUrl}
                  alt={whatsappFailImage.description}
                  data-ai-hint={whatsappFailImage.imageHint}
                  width={300}
                  height={600}
                  className="rounded-lg object-cover aspect-[9/16] max-w-xs w-full border shadow-lg"
                />
              )}
            </CardContent>
          </Card>
          <Card className="border-primary/50 border-2 bg-card">
            <CardHeader className="flex-row items-center gap-3 space-y-0">
              <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0" />
              <CardTitle className="font-headline text-xl text-primary">
                {t("myAudioText.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {ourAppSuccessImage && (
                <Image
                  src={ourAppSuccessImage.imageUrl}
                  alt={ourAppSuccessImage.description}
                  data-ai-hint={ourAppSuccessImage.imageHint}
                  width={300}
                  height={600}
                  className="rounded-lg object-cover aspect-[9/16] max-w-xs w-full border shadow-lg"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
