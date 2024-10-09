'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { AICompanyData } from '@/app/data/aiCompanyData'; // Adjust this import according to your project structure

export const description = 'A radial chart for Ethics';

// Default chart data with a dummy score
const defaultChartData = [{ score: 0, fill: 'var(--color-gray)' }]; // Default values when no company is selected

// Score to symbol mapping
const ethicsScoreToSymbolMapping: Record<number, string> = {
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
  0: 'N/A', // Added N/A mapping
};

const chartConfig = {
  ethics: {
    label: 'Ethics Score',
  },
  green: {
    label: 'Green',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

// Update EthicsCard to accept companyData as nullable
interface EthicsCardProps {
  companyData: AICompanyData | null; // Allow companyData to be null
}

export function EthicsCard({ companyData }: EthicsCardProps) {
  // Determine current data based on companyData or use defaults
  const currentData = companyData
    ? [
        {
          score:
            companyData.ethics === 'A+'
              ? 10
              : companyData.ethics === 'A'
              ? 9
              : companyData.ethics === 'A-'
              ? 8
              : companyData.ethics === 'B+'
              ? 7
              : companyData.ethics === 'B'
              ? 6
              : companyData.ethics === 'B-'
              ? 5
              : companyData.ethics === 'C+'
              ? 4
              : companyData.ethics === 'C'
              ? 3
              : companyData.ethics === 'C-'
              ? 2
              : companyData.ethics === 'D'
              ? 1
              : companyData.ethics === 'N/A'
              ? 0
              : 0, // Default fallback score if not matched
          fill: 'var(--color-green)', // Customize fill color as needed
        },
      ]
    : defaultChartData; // Use default chart data when no company is selected

  return (
    <Card className="h-[100px] flex">
      <ChartContainer config={chartConfig} className="mx-auto w-full h-40 max-w-[150px]">
        <RadialBarChart
          data={currentData} // Pass the current ethics data
          startAngle={0}
          endAngle={180}
          innerRadius={50}
          outerRadius={60}>
          <PolarGrid gridType="circle" radialLines={false} stroke="none" polarRadius={[86, 74]} />
          <RadialBar
            dataKey="score" // Use score as the data key for the bar size
            background
            cornerRadius={4}
            fill={currentData[0].fill} // Apply fill color dynamically
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
                        className="fill-current text-lg font-semibold">
                        {/* Display the mapped string symbol */}
                        {ethicsScoreToSymbolMapping[currentData[0].score] || currentData[0].score}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground">
                        Ethics
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
