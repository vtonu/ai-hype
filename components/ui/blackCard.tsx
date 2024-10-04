import * as React from 'react';
import { Card } from '@/components/ui/card';
import { ComponentTwo } from './rank-score';

export function BlackCard() {
  return (
    <Card className="h-[100px] flex items-center justify-center p-2">
      <ComponentTwo />
    </Card>
  );
}
