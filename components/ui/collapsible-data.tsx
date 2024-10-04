'use client';
import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BlackCard } from './blackCard';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function CollapsibleData() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[500px] space-y-2">
      <div className="flex items-center justify-end p-2">
        <h4 className="text-sm font-mono px-2">{isOpen ? 'Hide hype info' : 'Show hype info'}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="w-9 p-0">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <div className="p-2 font-mono text-sm grid grid-cols-3 gap-2">
          <BlackCard />
          <BlackCard />
          <BlackCard />
          <BlackCard />
          <BlackCard />
          <BlackCard />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
