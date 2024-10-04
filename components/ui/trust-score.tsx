'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart for User Trust';

// Map string symbols to numeric values
const chartData = [{ browser: 'yellow', score: 7, symbol: 'A-', fill: 'var(--color-yellow)' }];

// You can add additional mappings if you need more than just 'A-', 'B+', etc.
const scoreToSymbolMapping: Record<number, string> = {
  10: 'A+',
  9: 'A',
  8: 'A-',
  7: 'B+',
  6: 'B',
  5: 'B-',
  4: 'C+',
  3: 'C',
  2: 'C-',
  1: 'D',
};

const chartConfig = {
  score: {
    label: 'Score',
  },
  yellow: {
    label: 'Yellow',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function TrustCard() {
  return (
    <Card className="h-[100px] flex ">
      <ChartContainer config={chartConfig} className="mx-auto  w-full h-40 max-w-[150px]">
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={180}
          innerRadius={50}
          outerRadius={60}>
          <PolarGrid gridType="circle" radialLines={false} stroke="none" polarRadius={[86, 74]} />
          <RadialBar dataKey="score" background cornerRadius={4} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 12}
                        className="fill-current text-lg font-semibold">
                        {/* Display the mapped string symbol */}
                        {scoreToSymbolMapping[chartData[0].score] || chartData[0].score}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 8}
                        className="fill-muted-foreground">
                        User Trust
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </Card>
  );
}
