"use client";

// biome-ignore lint/style/useImportType: <explanation>
import { AICompanyData } from "@/app/data/aiCompanyData";
import { Card } from "@/components/ui/card";
// biome-ignore lint/style/useImportType: <explanation>
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";

export const description = "A radial chart for User Trust";

// Function to map levels to HSL colors
const getColorByLevel = (level: string) => {
	switch (level) {
		case "High":
			return "hsl(120 110% 40%)"; // High Impact
		case "Medium":
			return "hsl(50, 130%, 50%)"; // Medium Impact
		case "Low":
			return "hsl(25 110% 50%)"; // Low Impact
		default:
			return "hsl(0, 0%, 50%)"; // Default fallback color (gray)
	}
};

// Simplified chart config
const chartConfig = {
	level: {
		label: "Level",
	},
} satisfies ChartConfig;

// Update ImpactCard to accept companyData as nullable
interface ImpactCardProps {
	companyData: AICompanyData | null; // Allow companyData to be null
}

export function ImpactCard({ companyData }: ImpactCardProps) {
	// Determine current data based on companyData or use defaults
	const currentData = companyData
		? {
				level: companyData.impactLevel,
				score:
					companyData.impactLevel === "High"
						? 100
						: companyData.impactLevel === "Medium"
							? 70
							: 30,
			}
		: {
				level: "None", // Default level when no company is selected
				score: 0, // Default score when no company is selected
			};

	return (
		<Card className="h-[100px] flex">
			<ChartContainer
				config={chartConfig}
				className="mx-auto w-full h-40 max-w-[150px]"
			>
				<RadialBarChart
					data={[currentData]} // Pass the current impact level data
					startAngle={0}
					endAngle={180}
					innerRadius={50}
					outerRadius={60}
				>
					<PolarGrid
						gridType="circle"
						radialLines={false}
						stroke="none"
						polarRadius={[86, 74]}
					/>
					<RadialBar
						dataKey="score"
						background
						cornerRadius={4}
						fill={getColorByLevel(currentData.level)} // Use default color if no company is selected
					/>
					<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
						<Label
							content={({ viewBox }) => {
								if (viewBox && "cx" in viewBox && "cy" in viewBox) {
									return (
										<text
											x={viewBox.cx}
											y={viewBox.cy}
											textAnchor="middle"
											dominantBaseline="middle"
										>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy || 0) - 18}
												className="fill-current text-md font-bold"
											>
												{currentData.level}
											</tspan>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy || 0) + 4}
												className="fill-muted-foreground"
											>
												AI Impact
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
