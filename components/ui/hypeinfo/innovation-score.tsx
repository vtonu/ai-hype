"use client";

// biome-ignore lint/style/useImportType: <explanation>
import { AICompanyData } from "@/app/data/aiCompanyData"; // Import your AICompanyData type
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

export const description = "A radial chart for Innovation Score";

// Default chart data with a dummy score
const defaultChartData = [
	{ score: 0, symbol: "N/A", fill: "var(--color-gray)" },
]; // Default data when no company is selected

// Score to symbol mapping for the grades
const scoreToSymbolMapping: Record<number, string> = {
	10: "A+",
	9: "A",
	8: "A-",
	7: "B+",
	6: "B",
	5: "B-",
	4: "C+",
	3: "C",
	2: "C-",
	1: "D",
};

// Function to map scores to HSL colors
const getColorByScore = (score: number) => {
	switch (scoreToSymbolMapping[score]) {
		case "A+":
		case "A":
		case "A-":
			return "hsl(var(--chart-1))"; // Green for top scores
		case "B+":
		case "B":
		case "B-":
			return "hsl(var(--chart-4))"; // Orange for medium scores
		case "C+":
		case "C":
		case "C-":
		case "D":
			return "hsl(var(--chart-3))"; // Red for lower scores
		default:
			return "hsl(var(--color-gray))"; // Gray for 'N/A'
	}
};

const chartConfig = {
	score: {
		label: "Score",
	},
} satisfies ChartConfig;

// Update InnovationCard to accept companyData as nullable
interface InnovationCardProps {
	companyData: AICompanyData | null; // Allow companyData to be null
}

export function InnovationCard({ companyData }: InnovationCardProps) {
	// Determine current data based on companyData or use defaults
	const currentData = companyData
		? [
				{
					score:
						companyData.innovationScore === "A+"
							? 10
							: companyData.innovationScore === "A"
								? 9
								: companyData.innovationScore === "A-"
									? 8
									: companyData.innovationScore === "B+"
										? 7
										: companyData.innovationScore === "B"
											? 6
											: companyData.innovationScore === "B-"
												? 5
												: companyData.innovationScore === "C+"
													? 4
													: companyData.innovationScore === "C"
														? 3
														: companyData.innovationScore === "C-"
															? 2
															: 1, // Default fallback score if not matched
					symbol: companyData.innovationScore,
					fill: getColorByScore(
						companyData.innovationScore === "A+"
							? 10
							: companyData.innovationScore === "A"
								? 9
								: companyData.innovationScore === "A-"
									? 8
									: companyData.innovationScore === "B+"
										? 7
										: companyData.innovationScore === "B"
											? 6
											: companyData.innovationScore === "B-"
												? 5
												: companyData.innovationScore === "C+"
													? 4
													: companyData.innovationScore === "C"
														? 3
														: companyData.innovationScore === "C-"
															? 2
															: 1,
					), // Use dynamic color based on score
				},
			]
		: defaultChartData; // Use default chart data when no company is selected

	return (
		<Card className="h-[100px] flex">
			<ChartContainer
				config={chartConfig}
				className="mx-auto w-full h-40 max-w-[150px]"
			>
				<RadialBarChart
					data={currentData} // Pass the current innovation data
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
						dataKey="score" // Use score as the data key for the bar size
						background
						cornerRadius={4}
						fill={currentData[0].fill} // Apply fill color dynamically
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
												className="fill-current text-lg font-semibold"
											>
												{/* Display the mapped string symbol */}
												{scoreToSymbolMapping[currentData[0].score] ||
													currentData[0].symbol}
											</tspan>
											<tspan
												x={viewBox.cx}
												y={(viewBox.cy || 0) + 4}
												className="fill-muted-foreground"
											>
												Innovation
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
