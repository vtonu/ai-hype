import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AdoptionCard } from "@/components/ui/hypeinfo/adoption-score";
import { DoomCard } from "@/components/ui/hypeinfo/doom-score";
import { EthicsCard } from "@/components/ui/hypeinfo/ethics-score";
import { ImpactCard } from "@/components/ui/hypeinfo/impact-score";
import { InnovationCard } from "@/components/ui/hypeinfo/innovation-score";
import { TrustCard } from "@/components/ui/hypeinfo/trust-score";
import { useSelectedCompany } from "@/hooks/useSelectedCompany";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

// Function to convert userTrust string to a numeric score
const trustScoreMapping: Record<string, number> = {
	"A+": 10,
	A: 9,
	"A-": 8,
	"B+": 7,
	B: 6,
	"B-": 5,
	"C+": 4,
	C: 3,
	"C-": 2,
	D: 1,
};

export function HypeInfo() {
	const [isOpen, setIsOpen] = React.useState(true);
	const { selectedCompany } = useSelectedCompany(); // Get the selected company data

	// Extract userTrust from selectedCompany and convert to a numeric score
	const userTrust = selectedCompany?.userTrust; // Get the userTrust property
	const trustScore = userTrust ? trustScoreMapping[userTrust] || 0 : 0; // Convert to a numeric score

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[500px] ">
			{/* Hide hype info button, text & icon */}
			<div className="flex items-center justify-end p-2">
				<h4 className="text-sm font-mono px-2">
					{isOpen ? "Hide hype info" : "Show hype info"}
				</h4>
				<CollapsibleTrigger asChild>
					<Button variant="outline" size="sm" className="w-8 p-0 m-0">
						{isOpen ? (
							<ChevronDown className="h-4 w-4" />
						) : (
							<ChevronUp className="h-4 w-4" />
						)}
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			{/* Show hype info content (Cards) */}
			<CollapsibleContent>
				<div className="py-4 font-mono grid grid-cols-3 gap-2">
					<ImpactCard companyData={selectedCompany} />
					<DoomCard companyData={selectedCompany} />
					<TrustCard score={trustScore} /> {/* Pass the trust score here */}
					<InnovationCard companyData={selectedCompany} />
					<AdoptionCard companyData={selectedCompany} />
					<EthicsCard companyData={selectedCompany} />
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
