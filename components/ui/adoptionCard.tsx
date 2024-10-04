import * as React from 'react';
import { Card } from '@/components/ui/card';
import { ComponentFive } from './adoption-score';

export function AdoptionCard() {
  return (
    <Card className="h-[100px] flex ">
      <ComponentFive />
    </Card>
  );
}
