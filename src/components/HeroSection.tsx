import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";

export default async function HeroSection() {
	const t = await getTranslations("HeroSection");

	return (
		<section className="relative w-full pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
			<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
			<div className="absolute top-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-b from-primary/10 to-transparent"></div>

			<div className="container mx-auto px-4 text-center">
				<h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
					{t("headline")}
				</h1>
				<p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
					{t("subtitle")}
				</p>
				<div className="mt-10">
					<Button
						asChild
						size="lg"
						className="font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
					>
						<Link href="/start">{t("cta")}</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
