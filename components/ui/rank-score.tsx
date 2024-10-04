'use client';

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A radial chart with stacked sections for AI Impact';

const chartData = [{ month: 'january', hype: 16, score: 2 }];

const chartConfig = {
  hype: {
    label: 'AI Impact',
    color: 'hsl(var(--chart-1))',
  },
  score: {
    label: 'AI Hype',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function ComponentTwo() {
  const totalVisitors = chartData[0].hype + chartData[0].score;

  return (
    <ChartContainer config={chartConfig} className="mx-auto  w-full h-40 max-w-[150px]">
      <RadialBarChart data={chartData} endAngle={180} innerRadius={50} outerRadius={80}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 12}
                      className="fill-current text-lg font-semibold">
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 4}
                      className="fill-muted-foreground">
                      AI Impact
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
        <RadialBar
          dataKey="hype"
          stackId="a"
          cornerRadius={4}
          fill="hsl(var(--chart-1))"
          className="stroke-transparent stroke-2"
        />
        <RadialBar
          dataKey="score"
          fill="hsl(var(--chart-2))"
          stackId="a"
          cornerRadius={5}
          className="stroke-transparent stroke-2"
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
