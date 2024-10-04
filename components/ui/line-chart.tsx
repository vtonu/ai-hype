'use client';

import * as React from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';

export const description = 'AI Hype Line Chart';

const chartData = [
  { date: '2024-09-01', hype: 125, rank: 1 },
  { date: '2024-09-05', hype: 95, rank: 2 },
  { date: '2024-09-10', hype: 191, rank: 2 },
  { date: '2024-09-15', hype: 238, rank: 1 },
  { date: '2024-10-20', hype: 348, rank: 1 },
  { date: '2024-10-25', hype: 452, rank: 1 },
  { date: '2024-10-30', hype: 389, rank: 5 },
];

const chartConfig = {
  hype: {
    label: 'Hype',
    color: 'hsl(var(--chart-1))',
  },
  rank: {
    label: 'Rank',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export function ComponentOne() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('hype');

  const total = React.useMemo(
    () => ({
      hype: chartData.reduce((acc, curr) => acc + curr.hype, 0),
      rank: chartData.reduce((acc, curr) => acc + curr.rank, 0),
    }),
    [],
  );

  return (
    <div className="px-2">
      <Card>
        <CardHeader className="flex-row">
          <div className="flex flex-1 flex-col justify-center gap-2 sm:py-2">
            <CardTitle>
              <Badge variant="secondary">
                Live
                <CircleDot className="w-3 h-3 pl-1 fill-chart-1" />
              </Badge>
            </CardTitle>

            <CardDescription>Total hype data:</CardDescription>
          </div>
          <div className="flex">
            {['hype', 'rank'].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="flex flex-1 flex-col justify-center gap-1  px-2 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}>
                  <span className="text-xs text-muted-foreground">{chartConfig[chart].label}</span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      });
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
