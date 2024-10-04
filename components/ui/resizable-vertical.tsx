'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { SettingsToggle } from './settings-button';
import { CollapsibleData } from './collapsible-data';
import { Badge } from '@/components/ui/badge';

export function ResizableVertical() {
  return (
    <ResizablePanelGroup direction="vertical" className="max-w-lg rounded-md border">
      <ResizablePanel defaultSize={15} className="flex justify-center items-center gap-2">
        <span className="flex gap-2">
          <h6 className="font-semibold">Today's AI hype</h6>
          <Badge variant="outline">OpenAI</Badge>
        </span>

        <span className="flex gap-2 items-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.location.reload()}
            className="border-zinc-700 border">
            Refresh
          </Button>
          <SettingsToggle />
        </span>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} className="flex justify-center items-end">
        <CollapsibleData />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
