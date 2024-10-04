import * as React from 'react';
import { Card } from '@/components/ui/card';
import { ComponentTwo } from './rank-score';

export function RankCard() {
  return (
    <Card className="h-[100px] flex ">
      <ComponentTwo />
    </Card>
  );
}
