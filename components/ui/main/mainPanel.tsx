'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { SettingsToggle } from './settings-button';
import { AICompanySelector } from './Companybox';
import { HypeInfo } from './hype-data';
import { ComponentOne } from './line-chart';
import { SparklesAI } from './aihypesparkles';
import { aiCompanyData } from '@/app/data/aiCompanyData';
import { BetaAlert } from '@/components/ui/betaAlert';
import { useSelectedCompany } from '@/hooks/useSelectedCompany'; // Import the hook
import { AICompanyData } from '@/app/data/aiCompanyData'; // Import AICompanyData type

export function MainPanel() {
  const { setSelectedCompany } = useSelectedCompany(); // Get the setSelectedCompany function from the context

  // Function to handle the selection of a company
  const handleCompanySelect = (company: AICompanyData) => {
    // Specify the type here
    setSelectedCompany(company); // Update the selected company in context
  };

  return (
    <ResizablePanelGroup direction="vertical" className="max-w-xl rounded-sm border">
      <ResizablePanel
        defaultSize={25}
        className="flex justify-center items-center gap-1 flex-col sm:flex-row ">
        <span className="flex sm:flex-row gap-1 items-center">
          <h6 className="font-semibold">Today&apos;s AI hype: </h6>
          <SparklesAI /> {/* LLM Hype of the day */}
        </span>
        <span className="flex gap-1 items-center">
          <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
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
      <ResizablePanel defaultSize={75} className="flex justify-center items-end">
        <HypeInfo />
      </ResizablePanel>
      <ResizableHandle />
      <SettingsToggle />
    </ResizablePanelGroup>
  );
}
