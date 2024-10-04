import * as React from 'react';
import { Card } from '@/components/ui/card';
import { ComponentThree } from './doom-score';

export function DoomCard() {
  return (
    <Card className="h-[100px] flex ">
      <ComponentThree />
    </Card>
  );
}
