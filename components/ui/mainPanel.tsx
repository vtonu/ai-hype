'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { SettingsToggle } from './settings-button';
import { AICompanySelector } from './Companybox';
import { HypeInfo } from './hype-data';
import { ComponentOne } from './charts/line-chart';
import { SparklesAI } from './aihypesparkles';
import { aiCompanyData } from '@/app/data/aiCompanyData';
import { FooterStuff } from '@/components/ui/footer';

export function MainPanel() {
  return (
    <ResizablePanelGroup direction="vertical" className="max-w-xl rounded-sm border mb-2">
      {/* Main panel with resizable components */}
      <ResizablePanel
        defaultSize={25}
        className="flex justify-center items-center gap-1 flex-col sm:flex-row ">
        <span className="flex sm:flex-row gap-1 items-center">
          <h6 className="font-semibold">Today&apos;s AI hype: </h6>
          <SparklesAI /> {/* LLM Hype of the day */}
        </span>
        <span className="flex gap-1 items-center">
          {/* Refresh page */}
          <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
            Refresh
          </Button>
          <AICompanySelector companies={aiCompanyData} /> {/* Pass company data here */}
        </span>
      </ResizablePanel>
      <FooterStuff />
      <ComponentOne />
      <ResizablePanel defaultSize={75} className="flex justify-center items-end">
        <HypeInfo />
      </ResizablePanel>
      <ResizableHandle />
      <SettingsToggle />
    </ResizablePanelGroup>
  );
}
