import { getTranslations } from "next-intl/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	CheckCircle,
	Zap,
	FileText,
	ThumbsUp,
	HeartHandshake,
	Sparkles,
} from "lucide-react";

const features = [
	{ icon: CheckCircle, tKey: "whatsapp" },
	{ icon: Zap, tKey: "comparison" },
	{ icon: FileText, tKey: "longAudio" },
	{ icon: ThumbsUp, tKey: "simple" },
	{ icon: HeartHandshake, tKey: "accessibility" },
	{ icon: Sparkles, tKey: "comingSoon", isComingSoon: true },
];

export default async function FeaturesSection() {
	const t = await getTranslations("FeaturesSection");

	return (
		<section className="py-20 sm:py-32">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						{t("title")}
					</h2>
				</div>
				<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<Card
							key={feature.tKey}
							className="relative bg-card hover:shadow-lg transition-shadow duration-300"
						>
							{feature.isComingSoon && (
								<Badge variant="secondary" className="absolute -top-3 -right-3">
									{t(`${feature.tKey}.badge`)}
								</Badge>
							)}
							<CardHeader>
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
									<feature.icon className="h-6 w-6" aria-hidden="true" />
								</div>
								<CardTitle className="font-headline text-lg font-semibold leading-6 text-foreground">
									{t(`${feature.tKey}.title`)}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-base text-muted-foreground">
									{t(`${feature.tKey}.description`)}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
