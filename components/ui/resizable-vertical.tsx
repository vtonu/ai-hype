'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './toggle-button';
import { SettingsToggle } from './settings-button';
import { CollapsibleData } from './collapsible-data';
import { Badge } from '@/components/ui/badge';

export function ResizableVertical() {
  return (
    <ResizablePanelGroup direction="vertical" className=" max-w-lg rounded-md border">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full justify-center">
          <span className="font-semibold flex items-center gap-2">
            <span className="flex gap-2">
              <Badge variant="outline">OpenAI</Badge>
              <h6>Today's AI hype</h6>
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.reload()}
              className="border-zinc-700 border">
              Refresh
            </Button>
            {/* <ModeToggle /> */}
            <SettingsToggle />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex p-2 justify-center">
          <CollapsibleData />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
