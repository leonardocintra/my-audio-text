import { getTranslations } from "next-intl/server";
import { Smartphone, PenSquare, MessageSquareText } from "lucide-react";

export default async function HowItWorksSection() {
	const t = await getTranslations("HowItWorksSection");
	const steps = t.raw("steps") as { title: string; description: string }[];

	const icons = [Smartphone, PenSquare, MessageSquareText];

	return (
		<section className="bg-primary/5 py-20 sm:py-32">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						{t("title")}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
				</div>
				<div className="relative mt-16">
					<div
						aria-hidden="true"
						className="absolute inset-0 hidden sm:flex items-center"
					>
						<div className="w-full border-t-2 border-dashed border-border"></div>
					</div>
					<div className="relative grid grid-cols-1 gap-12 sm:grid-cols-3">
						{steps.map((step, index) => {
							const Icon = icons[index];
							return (
								<div key={index} className="text-center p-4">
									<div className="flex justify-center items-center bg-background rounded-full">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-8 ring-background">
											<span className="text-3xl font-bold font-headline">
												{index + 1}
											</span>
										</div>
									</div>
									<h3 className="mt-6 font-headline text-xl font-semibold text-foreground">
										{step.title}
									</h3>
									<p className="mt-2 text-muted-foreground">
										{step.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
