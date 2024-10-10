"use client";

// biome-ignore lint/style/useImportType: <explanation>
import { AICompanyData } from "@/app/data/aiCompanyData";
import * as React from "react";

// Define the context and provider types
interface SelectedCompanyContextType {
	selectedCompany: AICompanyData | null;
	setSelectedCompany: (company: AICompanyData | null) => void;
}

// Create a context for the selected company
const SelectedCompanyContext = React.createContext<
	SelectedCompanyContextType | undefined
>(undefined);

// Create a provider component
export const SelectedCompanyProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [selectedCompany, setSelectedCompany] =
		React.useState<AICompanyData | null>(null);

	return (
		<SelectedCompanyContext.Provider
			value={{ selectedCompany, setSelectedCompany }}
		>
			{children}
		</SelectedCompanyContext.Provider>
	);
};

// Create a custom hook to use the selected company context
export const useSelectedCompany = () => {
	const context = React.useContext(SelectedCompanyContext);
	if (!context) {
		throw new Error(
			"useSelectedCompany must be used within a SelectedCompanyProvider",
		);
	}
	return context;
};
