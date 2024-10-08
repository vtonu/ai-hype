// Companybox.tsx
'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';
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
import { AICompanyData } from '@/app/data/aiCompanyData';

interface AICompanySelectorProps {
  companies: AICompanyData[]; // Add this line to accept the companies prop
}

export function AICompanySelector({ companies }: AICompanySelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedCompany, setSelectedCompany] = React.useState('Google');
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter function for search
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between">
          {selectedCompany || 'Select AI Company'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search AI Company..."
            onValueChange={(value) => setSearchTerm(value)}
          />
          <CommandList>
            {filteredCompanies.length === 0 ? (
              <CommandEmpty>No company found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {filteredCompanies.map((company: AICompanyData) => (
                  <CommandItem
                    key={company.name}
                    value={company.name}
                    onSelect={() => {
                      setSelectedCompany(company.name);
                      setOpen(false);
                    }}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedCompany === company.name ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {company.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
