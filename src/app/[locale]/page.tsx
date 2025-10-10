import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import FAQSection from "@/components/FAQSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturesSection />
			<ComparisonSection />
			<HowItWorksSection />
			<AccessibilitySection />
			<PricingSection />
			<Separator className="my-12 max-w-4xl mx-auto" />
			<FAQSection />
		</>
	);
}
