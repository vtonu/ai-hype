import { Button } from '@/components/ui/button';
import { Sparkle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function TooltipHype() {
  return (
    <Button variant="outline" size="icon">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Sparkle className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          </TooltipTrigger>
          <TooltipContent>
            <p>Hype Company</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Button>
  );
}
