'use client';

import { TrendingUp } from 'lucide-react';
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart with text';

const chartData = [{ browser: 'safari', visitors: 9, fill: 'var(--color-safari)' }];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ComponentFive() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto  w-full h-40 max-w-[150px]">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        endAngle={180}
        innerRadius={50}
        outerRadius={60}>
        <PolarGrid gridType="circle" radialLines={false} stroke="none" polarRadius={[86, 74]} />
        <RadialBar dataKey="visitors" background cornerRadius={4} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 12}
                      className="fill-current text-lg font-semibold">
                      {chartData[0].visitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 8}
                      className="fill-muted-foreground">
                      Adoption
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
