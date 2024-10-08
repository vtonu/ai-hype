'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react'; // Importing icons
import { cn } from '@/lib/utils'; // Utility function for conditional classNames
import { Button } from '@/components/ui/button'; // UI Button component
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'; // Command components for building the input and results
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; // Popover UI components
import { AICompanyData } from '@/app/data/aiCompanyData'; // AI company data structure

// Defining the interface for component props
interface AICompanySelectorProps {
  companies: AICompanyData[]; // The list of companies to be passed as a prop
}

// Component to select an AI company from a list
export function AICompanySelector({ companies }: AICompanySelectorProps) {
  const [open, setOpen] = React.useState(false); // State for controlling the popover visibility
  const [selectedCompany, setSelectedCompany] = React.useState('Google'); // State for the selected company, default is 'Google'
  const [searchTerm, setSearchTerm] = React.useState(''); // State for the search term in the input field

  // Function to filter companies based on the search term
  const filteredCompanies = companies.filter(
    (company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()), // Case-insensitive search
  );

  return (
    // Popover component that wraps the input and list of companies
    <Popover open={open} onOpenChange={setOpen}>
      {/* Popover trigger button */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open} // ARIA attribute for accessibility
          className="w-full justify-between">
          {/* Display the selected company or placeholder text */}
          {selectedCompany || 'Select AI Company'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> {/* Dropdown arrow icon */}
        </Button>
      </PopoverTrigger>

      {/* Popover content that contains the searchable command list */}
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* Search input field */}
          <CommandInput
            placeholder="Search AI Company..."
            onValueChange={(value) => setSearchTerm(value)} // Updates search term state on input change
          />

          {/* List of filtered companies or an empty state */}
          <CommandList>
            {filteredCompanies.length === 0 ? (
              // Show message when no company matches the search term
              <CommandEmpty>No company found.</CommandEmpty>
            ) : (
              // Group and display the filtered company list
              <CommandGroup>
                {filteredCompanies.map((company: AICompanyData) => (
                  <CommandItem
                    key={company.name}
                    value={company.name}
                    onSelect={() => {
                      setSelectedCompany(company.name); // Update selected company
                      setOpen(false); // Close the popover after selection
                    }}>
                    {/* Check icon to show selected company */}
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedCompany === company.name ? 'opacity-100' : 'opacity-0', // Show checkmark only for the selected company
                      )}
                    />
                    {company.name} {/* Display the company name */}
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
