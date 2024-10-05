'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart for User Trust';

// Chart data with doom level and a dummy score
const chartData = [
  { level: 'High', score: 100 },
  { level: 'Medium', score: 70 },
  { level: 'Low', score: 30 },
];

// Function to map levels to HSL colors
const getColorByLevel = (level: string) => {
  switch (level) {
    case 'High':
      return 'hsl(5, 110%, 50%)'; // High Level
    case 'Medium':
      return 'hsl(30, 100%, 50%)'; // Medium Level
    case 'Low':
      return 'hsl(55, 130%, 50%)'; // Low Level
    default:
      return 'hsl(0, 0%, 50%)'; // Default fallback color (gray)
  }
};

// Simplified chart config
const chartConfig = {
  level: {
    label: 'Level',
  },
} satisfies ChartConfig;

export function DoomCard() {
  const currentData = chartData[0]; // 0, 1, 2 to select High, Medium, Low

  return (
    <Card className="h-[100px] flex">
      <ChartContainer config={chartConfig} className="mx-auto w-full h-40 max-w-[150px]">
        <RadialBarChart
          data={[currentData]} // Only pass the current doom level data
          startAngle={0}
          endAngle={180}
          innerRadius={50}
          outerRadius={60}>
          <PolarGrid gridType="circle" radialLines={false} stroke="none" polarRadius={[86, 74]} />
          {/* Apply the color dynamically by mapping the level to color */}
          <RadialBar
            dataKey="score" // Use score as the data key for the bar size
            background
            cornerRadius={4}
            fill={getColorByLevel(currentData.level)}
          />
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
                        className="fill-current text-md font-bold">
                        {currentData.level}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
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
