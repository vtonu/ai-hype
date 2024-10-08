'use client';
import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImpactCard } from './hypeinfo/impact-score';
import { DoomCard } from './hypeinfo/doom-score';
import { TrustCard } from './hypeinfo/trust-score';
import { InnovationCard } from './hypeinfo/innovation-score';
import { AdoptionCard } from './hypeinfo/adoption-score';
import { EthicsCard } from './hypeinfo/ethics-score';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useSelectedCompany } from '@/app/hooks/useSelectedCompany';

export function CollapsibleData() {
  const [isOpen, setIsOpen] = React.useState(true);
  const { selectedCompany } = useSelectedCompany(); // Get the selected company data

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[500px] ">
      {/* Hide hype info button, text & icon */}
      <div className="flex items-center justify-end p-2">
        <h4 className="text-sm font-mono px-2">{isOpen ? 'Hide hype info' : 'Show hype info'}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm" className="w-8 p-0 m-0">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* Show hype info content (Cards) */}
      <CollapsibleContent>
        <div className="p-2 font-mono grid grid-cols-3 gap-2 ">
          <ImpactCard />
          <DoomCard />
          <TrustCard />
          <InnovationCard />
          <AdoptionCard />
          <EthicsCard />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
