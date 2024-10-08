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
import { CircleDot, ArrowUp, ArrowDown } from 'lucide-react';
import { Cover } from '@/components/ui/cover';
import { CircleIcon } from '@/components/ui/cover';

export const description = 'AI Hype Line Chart';

const chartData = [
  { date: '2024-07-01', hype: 1100, rank: 6 },
  { date: '2024-07-15', hype: 1115, rank: 5 },
  { date: '2024-08-01', hype: 1125, rank: 4 },
  { date: '2024-08-15', hype: 1105, rank: 4 },
  { date: '2024-09-01', hype: 1125, rank: 3 },
  { date: '2024-09-15', hype: 910, rank: 2 },
  { date: '2024-09-25', hype: 1191, rank: 2 },
  { date: '2024-10-05', hype: 3148, rank: 1 },
  { date: '2024-10-10', hype: 3248, rank: 1 },
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

  const formatNumber = (num: number): string => {
    return num >= 10000 ? (num / 1000).toFixed(1) + 'K' : num.toLocaleString();
  };

  // Function to get the current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="px-2 pt-2">
      <Card>
        <CardHeader className="flex-row">
          <div className="flex flex-1 flex-col justify-center gap-2 ">
            <CardTitle>
              <Badge variant="secondary">
                Live
                {/* <CircleDot className="w-3 h-3 pl-1 fill-chart-1" /> */}
                <CircleIcon className="w-2 h-2" />
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs">
              {' '}
              Last Update: {getCurrentDateTime()} {/* Displaying current date and time */}
            </CardDescription>
          </div>

          <Cover>
            <div className="flex flex-col gap-4">
              <div className="flex">
                {['hype', 'rank'].map((key) => {
                  const chart = key as keyof typeof chartConfig;
                  const isHype = key === 'hype'; // Determine if it's 'hype'
                  const changeValue = isHype ? 71 : -23; // Dynamic values for hype and rank changes

                  // Determine the icon and color based on the change value
                  const getIconAndColor = (change: number) => {
                    if (change > 0) {
                      return { Icon: ArrowUp, color: 'text-green-500' }; // Positive change, green arrow-up
                    } else if (change < 0) {
                      return { Icon: ArrowDown, color: 'text-red-500' }; // Negative change, red arrow-down
                    } else {
                      return { Icon: CircleDot, color: 'text-gray-500' }; // No change, gray dot
                    }
                  };

                  const iconInfo = getIconAndColor(changeValue);

                  return (
                    <button
                      key={chart}
                      data-active={activeChart === chart}
                      className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:p-2"
                      onClick={() => setActiveChart(chart)}>
                      {/* Label and Arrow */}
                      <span className="text-xs text-muted-foreground flex items-center justify-center gap-4">
                        {chartConfig[chart].label}

                        {/* Icon and Percentage display */}
                        <span className="flex items-center">
                          <iconInfo.Icon className={`w-4 h-4 ${iconInfo.color}`} />
                          <span className={`ml-1 text-xs ${iconInfo.color}`}>
                            {changeValue}% {/* Display dynamic change value */}
                          </span>
                        </span>
                      </span>

                      {/* Number display */}
                      <span className="text-lg font-bold leading-none sm:text-xl">
                        {key === 'hype'
                          ? formatNumber(total[key as keyof typeof total])
                          : total[key as keyof typeof total].toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Cover>
        </CardHeader>

        <CardContent>
          <ChartContainer config={chartConfig} className="aspect-video h-[180px] w-full">
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
