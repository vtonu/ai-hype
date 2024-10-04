'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { SettingsToggle } from './settings-button';
import { CoBox } from './Companybox';
import { CollapsibleData } from './collapsible-data';
import { Badge } from '@/components/ui/badge';
import { ComponentOne } from './line-chart';

export function ResizableVertical() {
  return (
    <ResizablePanelGroup direction="vertical" className="max-w-lg rounded-sm border ">
      <ResizablePanel defaultSize={15} className="flex justify-center items-center gap-1">
        <span className="flex gap-1">
          <h6 className="font-semibold">Today's AI hype: </h6>
          <Badge variant="outline">NotebookLM</Badge>
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
