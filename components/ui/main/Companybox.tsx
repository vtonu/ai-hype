"use client";

// biome-ignore lint/style/useImportType: <explanation>
import { AICompanyData } from "@/app/data/aiCompanyData";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

interface AICompanySelectorProps {
	companies: AICompanyData[];
	onCompanySelect: (company: AICompanyData) => void; // Callback to handle company selection
}

export function AICompanySelector({
	companies,
	onCompanySelect,
}: AICompanySelectorProps) {
	const [open, setOpen] = React.useState(false);
	const [selectedCompany, setSelectedCompany] =
		React.useState<AICompanyData | null>(null);
	const [searchTerm, setSearchTerm] = React.useState("");

	const filteredCompanies = companies.filter((company) =>
		company.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					// biome-ignore lint/a11y/useSemanticElements: <explanation>
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{selectedCompany ? selectedCompany.name : "Select AI Company"}
					<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput
						placeholder="Search AI Company..."
						onValueChange={(value) => setSearchTerm(value)}
					/>
					<CommandList>
						{filteredCompanies.length === 0 ? (
							<CommandEmpty>No company found.</CommandEmpty>
						) : (
							<CommandGroup>
								{filteredCompanies.map((company: AICompanyData) => (
									<CommandItem
										key={company.name}
										onSelect={() => {
											setSelectedCompany(company); // Store the full company data
											onCompanySelect(company); // Pass the company data back to the parent
											setOpen(false);
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												selectedCompany?.name === company.name
													? "opacity-100"
													: "opacity-0",
											)}
										/>
										{company.name}
									</CommandItem>
								))}
							</CommandGroup>
						)}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
