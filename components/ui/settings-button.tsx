'use client';

import * as React from 'react';
import { Cog } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function SettingsToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Cog className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Cog className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem> */}
        <DropdownMenuItem>OpenAI</DropdownMenuItem>
        <DropdownMenuItem>Meta</DropdownMenuItem>
        <DropdownMenuItem>Google</DropdownMenuItem>
        <DropdownMenuItem>Anthropic</DropdownMenuItem>
        <DropdownMenuItem>Mistral</DropdownMenuItem>
        <DropdownMenuItem>Cohere</DropdownMenuItem>
        <DropdownMenuItem>Perplexity</DropdownMenuItem>
        <DropdownMenuItem>Stability</DropdownMenuItem>
        <DropdownMenuItem>DeepSeek</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
