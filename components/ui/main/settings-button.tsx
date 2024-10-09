'use client';

import * as React from 'react';
import { SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { TooltipHype } from '@/components/ui/toolTipHype';

export function SettingsToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <span className="flex justify-end p-3 gap-2">
      <TooltipHype />
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <SunMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </span>
  );
}
