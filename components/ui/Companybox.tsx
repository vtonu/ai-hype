'use client';

import * as React from 'react';
import { Check, Cog } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const frameworks = [
  {
    value: 'openai',
    label: 'OpenAI',
  },
  {
    value: 'meta',
    label: 'Meta',
  },
  {
    value: 'google',
    label: 'Google',
  },
  {
    value: 'anthropic',
    label: 'Anthropic',
  },
  {
    value: 'mistral',
    label: 'Mistral',
  },
  {
    value: 'perplexity',
    label: 'Perplexity',
  },
  {
    value: 'stability',
    label: 'Stability',
  },
  {
    value: 'deepseek',
    label: 'DeepSeek',
  },
  {
    value: 'cohere',
    label: 'Cohere',
  },
];

export function CoBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between">
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select AI Company'}
          <Cog className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search ..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
