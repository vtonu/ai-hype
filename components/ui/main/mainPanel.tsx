"use client";

import { aiCompanyData } from "@/app/data/aiCompanyData";
// biome-ignore lint/style/useImportType: <explanation>
import { AICompanyData } from "@/app/data/aiCompanyData"; // Import AICompanyData type
import { BetaAlert } from "@/components/ui/main/betaAlert";
import { Button } from "@/components/ui/button";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useSelectedCompany } from "@/hooks/useSelectedCompany"; // Import the hook
import { AICompanySelector } from "./Companybox";
import { SparklesAI } from "./aihypesparkles";
import { HypeInfo } from "./hype-data";
import { ComponentOne } from "./line-chart";
import { SettingsToggle } from "./settings-button";

export function MainPanel() {
	const { setSelectedCompany } = useSelectedCompany(); // Get the setSelectedCompany function from the context

	// Function to handle the selection of a company
	const handleCompanySelect = (company: AICompanyData) => {
		// Specify the type here
		setSelectedCompany(company); // Update the selected company in context
	};

	return (
		<ResizablePanelGroup
			direction="vertical"
			className="max-w-xl rounded-sm border"
		>
			<ResizablePanel
				defaultSize={25}
				className="flex justify-center items-center gap-1 flex-col sm:flex-row "
			>
				<span className="flex sm:flex-row gap-1 items-center">
					<h6 className="font-semibold">Today&apos;s AI hype: </h6>
					<SparklesAI /> {/* LLM Hype of the day */}
				</span>
				<span className="flex gap-1 items-center">
					<Button
						variant="secondary"
						size="sm"
						onClick={() => window.location.reload()}
					>
						Refresh
					</Button>
					<AICompanySelector
						companies={aiCompanyData} // Pass the AI company data
						onCompanySelect={handleCompanySelect} // Pass the onCompanySelect function
					/>
				</span>
			</ResizablePanel>
			<BetaAlert />
			<ComponentOne />
			<ResizablePanel
				defaultSize={75}
				className="flex justify-center items-end"
			>
				<HypeInfo />
			</ResizablePanel>
			<ResizableHandle />
			<SettingsToggle />
		</ResizablePanelGroup>
	);
}
