'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { AICompanyData } from '@/app/data/aiCompanyData'; // Import your AICompanyData type

export const description = 'A radial chart for Doom Level';

// Function to map doom levels to HSL colors
const getColorByLevel = (level: string) => {
  switch (level) {
    case 'High':
      return 'hsl(0, 120%, 50%)'; // High Level /* Dark Red Error */
    case 'Medium':
      return 'hsl(40, 100%, 50%)'; // Medium Level /* Medium Orange */
    case 'Low':
      return 'hsl(80, 98%, 46%)'; // Low Level /* Lime Green */
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

// Update DoomCard to accept companyData as nullable
interface DoomCardProps {
  companyData: AICompanyData | null; // Allow companyData to be null
}

export function DoomCard({ companyData }: DoomCardProps) {
  // Determine current data based on companyData or use defaults
  const currentData = companyData
    ? {
        level: companyData.doomLevel,
        score:
          companyData.doomLevel === 'High' ? 100 : companyData.doomLevel === 'Medium' ? 70 : 30,
      }
    : {
        level: 'None', // Default level when no company is selected
        score: 0, // Default score when no company is selected
      };

  return (
    <Card className="h-[100px] flex">
      <ChartContainer config={chartConfig} className="mx-auto w-full h-40 max-w-[150px]">
        <RadialBarChart
          data={[currentData]} // Pass the current doom level data
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
            fill={getColorByLevel(currentData.level)} // Use color based on currentData level
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
