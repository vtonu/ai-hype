'use client'; // Marks the component to run on the client-side only (specific to Next.js).

import * as React from 'react'; // Imports the React library.
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'; // Imports specific chart components from the recharts library.
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Imports custom UI components for card layout.
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'; // Imports custom UI components for handling charts.
import { Badge } from '@/components/ui/badge'; // Imports a custom badge component.
import { CircleDot, ArrowUp, ArrowDown } from 'lucide-react'; // Imports icons from lucide-react.
import { Cover } from '@/components/ui/cover'; // Imports a custom cover component.
import { CircleIcon } from '@/components/ui/cover'; // Imports a custom circle icon component.

export const description = 'AI Hype Line Chart'; // Description string for the chart.

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
]; // Static data for the chart, representing "hype" and "rank" over time.

const chartConfig = {
  hype: {
    label: 'Hype',
    color: 'hsl(var(--chart-1))',
  },
  rank: {
    label: 'Rank',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig; // Configuration for chart labels and colors, using the `ChartConfig` type.

export function ComponentOne() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('hype'); // State to track which chart (hype or rank) is active.

  // Memoizes total sums for hype and rank, preventing unnecessary recalculations.
  const total = React.useMemo(
    () => ({
      hype: chartData.reduce((acc, curr) => acc + curr.hype, 0), // Sums up all hype values.
      rank: chartData.reduce((acc, curr) => acc + curr.rank, 0), // Sums up all rank values.
    }),
    [],
  );

  // Helper function to format large numbers (e.g., 10,000 becomes 10K).
  const formatNumber = (num: number): string => {
    return num >= 10000 ? (num / 1000).toFixed(1) + 'K' : num.toLocaleString();
  };

  // Function to get the current date and time in a readable format.
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
                Live {/* Displays a "Live" badge */}
                {/* <CircleDot className="w-3 h-3 pl-1 fill-chart-1" /> */}
                <CircleIcon className="w-2 h-2" />{' '}
                {/* Shows a small circle icon next to the badge */}
              </Badge>
            </CardTitle>
            <CardDescription className="text-xs">
              {' '}
              Last Update: {getCurrentDateTime()} {/* Displays the current date and time */}
            </CardDescription>
          </div>

          <Cover>
            <div className="flex flex-col gap-4">
              <div className="flex">
                {['hype', 'rank'].map((key) => {
                  const chart = key as keyof typeof chartConfig; // Casts key as either 'hype' or 'rank'.
                  const isHype = key === 'hype'; // Checks if the current key is 'hype'.
                  const changeValue = isHype ? 71 : -23; // Dynamically sets the change value for hype and rank.

                  // Function to determine the appropriate icon and color based on the change value.
                  const getIconAndColor = (change: number) => {
                    if (change > 0) {
                      return { Icon: ArrowUp, color: 'text-green-500' }; // Positive change, green arrow-up.
                    } else if (change < 0) {
                      return { Icon: ArrowDown, color: 'text-red-500' }; // Negative change, red arrow-down.
                    } else {
                      return { Icon: CircleDot, color: 'text-gray-500' }; // No change, gray dot.
                    }
                  };

                  const iconInfo = getIconAndColor(changeValue); // Gets the icon and color for the current change value.

                  return (
                    <button
                      key={chart}
                      data-active={activeChart === chart}
                      className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:p-2"
                      onClick={() => setActiveChart(chart)}>
                      {' '}
                      {/* Updates the active chart when clicked */}
                      {/* Label and Arrow */}
                      <span className="text-xs text-muted-foreground flex items-center justify-center gap-4">
                        {chartConfig[chart].label} {/* Displays the label for hype or rank */}
                        {/* Icon and Percentage display */}
                        <span className="flex items-center">
                          <iconInfo.Icon className={`w-4 h-4 ${iconInfo.color}`} />{' '}
                          {/* Displays the appropriate icon */}
                          <span className={`ml-1 text-xs ${iconInfo.color}`}>
                            {changeValue}% {/* Displays the dynamic change value */}
                          </span>
                        </span>
                      </span>
                      {/* Number display */}
                      <span className="text-lg font-bold leading-none sm:text-xl">
                        {key === 'hype'
                          ? formatNumber(total[key as keyof typeof total]) // Formats the total hype.
                          : total[key as keyof typeof total].toLocaleString()}{' '}
                        {/* Formats the total rank. */}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Cover>
        </CardHeader>

        <CardContent>
          {/* Chart container for displaying the line chart */}
          <ChartContainer config={chartConfig} className="aspect-video h-[180px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 2,
                right: 2,
              }}>
              <CartesianGrid vertical={false} /> {/* Adds a horizontal grid to the chart */}
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  }); // Formats the X-axis ticks as short dates.
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
                      }); // Formats the tooltip date.
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart} // Uses the active chart ('hype' or 'rank') for the data.
                type="monotone"
                stroke={`var(--color-${activeChart})`} // Uses the appropriate color for the line.
                strokeWidth={2}
                dot={false} // Hides the dots on the line.
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
