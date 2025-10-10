import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";

export default async function Header() {
	const t = await getTranslations("Header");
	const tHero = await getTranslations("HeroSection");

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 max-w-screen-2xl items-center">
				<Link href="/" className="mr-6 flex items-center space-x-2">
					<MessageSquareText className="h-6 w-6 text-primary" />
					<span className="hidden font-bold font-headline sm:inline-block">
						{t("productName")}
					</span>
				</Link>
				<div className="flex flex-1 items-center justify-end space-x-2">
					<LanguageSwitcher />
					<Button asChild className="hidden sm:flex">
						<Link href="/start">{tHero("cta")}</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
