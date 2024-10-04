'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { BlackCard } from './blackCard';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function CollapsibleData() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[500px] space-y-2">
      <div className="flex items-center justify-end p-2">
        {/* Conditionally render "Hide all hype" or "Show all hype" based on the isOpen state */}
        <h4 className="text-sm font-mono px-2">{isOpen ? 'Hide all hype' : 'Show all hype'}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
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
