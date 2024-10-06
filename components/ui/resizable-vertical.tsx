'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { SettingsToggle } from './settings-button';
import { CoBox } from './Companybox';
import { CollapsibleData } from './collapsible-data';
import { ComponentOne } from './line-chart';
import { SparklesAI } from './aihypesparkles';

export function ResizableVerticalPanel() {
  return (
    <ResizablePanelGroup direction="vertical" className="max-w-lg rounded-sm border">
      <ResizablePanel
        defaultSize={25}
        className="flex justify-center items-center gap-1 flex-col sm:flex-row pt-4">
        <span className="flex sm:flex-row gap-1 items-center">
          <h6 className="font-semibold">Today&apos;s AI hype: </h6>
          <SparklesAI />
        </span>
        <span className="flex gap-1 items-center">
          <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
            Refresh
          </Button>
          <CoBox />
        </span>
      </ResizablePanel>
      <ComponentOne />
      <ResizablePanel defaultSize={75} className="flex justify-center items-end">
        <CollapsibleData />
      </ResizablePanel>
      <ResizableHandle />
      <SettingsToggle />
    </ResizablePanelGroup>
  );
}
