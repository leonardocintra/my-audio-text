import { getFormatter, getTranslations, getLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "@/navigation";

export default async function PricingSection() {
	const t = await getTranslations("PricingSection");
	const locale = await getLocale();
	const format = await getFormatter({ locale });

	// Price is in BRL, so we need to convert if locale is different or just display with symbol.
	// The request is to show R$4.90/month, so we fix currency to BRL.
	const price = 4.9;

	const features = t.raw("plan.features") as string[];

	return (
		<section className="py-20 sm:py-32">
			<div className="container mx-auto px-4 max-w-md">
				<div className="text-center mb-12">
					<h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						{t("title")}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
				</div>
				<Card className="shadow-2xl border-primary border-2 transform transition-transform duration-300 hover:scale-105 bg-card">
					<CardHeader className="text-center p-6">
						<CardTitle className="font-headline text-2xl">
							{t("plan.name")}
						</CardTitle>
						<CardDescription>{t("plan.description")}</CardDescription>
					</CardHeader>
					<CardContent className="p-6">
						<div className="text-center my-4">
							<span className="font-headline text-5xl font-bold">
								{format.number(price, {
									style: "currency",
									currency: t("plan.currency"),
								})}
							</span>
							<span className="text-muted-foreground">/{t("plan.period")}</span>
						</div>
						<ul className="space-y-3">
							{features.map((feature, index) => (
								<li key={index} className="flex items-start gap-3">
									<Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</CardContent>
					<CardFooter className="flex-col gap-4 p-6">
						<Button asChild size="lg" className="w-full font-bold">
							<Link href="/start">{t("cta")}</Link>
						</Button>
						<p className="text-xs text-muted-foreground">{t("trial_info")}</p>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
