'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart for User Trust';

// Map string symbols to numeric values, including 'N/A' for 0
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
  0: 'N/A', // Added N/A mapping for score 0
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

// Define the props for TrustCard
interface TrustCardProps {
  score: number; // Score remains required, but can be 0
}

export function TrustCard({ score }: TrustCardProps) {
  // Use the mapped score or default to the score itself
  const displayScore = scoreToSymbolMapping[score] || score;

  // Prepare chart data, ensure 0 uses the correct fill and display
  const chartData = [
    {
      browser: 'yellow',
      score,
      symbol: displayScore,
      fill: score === 0 ? 'var(--color-gray)' : 'var(--color-yellow)', // Gray for N/A (0), yellow otherwise
    },
  ];

  return (
    <Card className="h-[100px] flex">
      <ChartContainer config={chartConfig} className="mx-auto w-full h-40 max-w-[150px]">
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
                        y={(viewBox.cy || 0) - 18}
                        className="fill-current text-lg font-semibold">
                        {/* Display the mapped string symbol or score */}
                        {displayScore}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
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
