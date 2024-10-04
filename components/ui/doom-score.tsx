'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart for User Trust';

const chartData = [{ browser: 'darkorange', score: 3, fill: 'var(--color-darkorange)' }];

const chartConfig = {
  score: {
    label: 'Score',
  },
  darkorange: {
    label: 'Dark Orange',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function DoomCard() {
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
                        {chartData[0].score.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 8}
                        className="fill-muted-foreground">
                        Doom Level
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
