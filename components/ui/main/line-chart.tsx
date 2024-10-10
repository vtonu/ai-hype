"use client";

import { aiCompanyData } from "@/app/data/aiCompanyData"; // Import AI company data
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
// biome-ignore lint/style/useImportType: <explanation>
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Cover } from "@/components/ui/cover";
import { CircleIcon } from "@/components/ui/cover";
import { useSelectedCompany } from "@/hooks/useSelectedCompany"; // Import your custom hook
import { ArrowDown, ArrowUp, CircleDot } from "lucide-react";
import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartConfig = {
	hype: {
		label: "Hype",
		color: "hsl(var(--chart-1))",
	},
	rank: {
		label: "Rank",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

export function ComponentOne() {
	const { selectedCompany } = useSelectedCompany(); // Get the selected company from the context
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("hype");
	const [totals, setTotals] = React.useState<{ hype: number; rank: number }>({
		hype: 0,
		rank: 0,
	});

	// Calculate total hype and rank only for the selected company
	React.useEffect(() => {
		if (selectedCompany) {
			setTotals({
				hype: selectedCompany.hype,
				rank: selectedCompany.rank,
			});
		}
	}, [selectedCompany]);

	const formatNumber = (num: number): string => {
		return num >= 10000 ? `${(num / 1000).toFixed(1)}K` : num.toLocaleString();
	};

	const getCurrentDateTime = () => {
		const now = new Date();
		return now.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	const getIconAndColor = (change: number) => {
		if (change > 0) {
			return { Icon: ArrowUp, color: "text-green-500" };
		}
		if (change < 0) {
			return { Icon: ArrowDown, color: "text-red-500" };
		}
		return { Icon: CircleDot, color: "text-gray-500" };
	};

	// Define the interface above the function
	interface FakeData {
		date: string;
		hype: number;
		rank: number;
		name: string;
	}

	// Generate data for the last 6 months
	const getFakeData = (): FakeData[] => {
		const now = new Date();
		const fakeData: FakeData[] = []; // Explicitly type the fakeData array

		if (selectedCompany) {
			const { monthlyHype, monthlyRank, name } = selectedCompany;

			let lastRank = monthlyRank[5]; // Start from the latest known rank
			for (let i = 0; i < 6; i++) {
				const fakeDate = new Date(now.getFullYear(), now.getMonth() - i, 1); // Generate a date for each month
				const monthString = fakeDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

				// Simulate rank fluctuations
				const fluctuation = Math.floor(Math.random() * 3) - 1; // Randomly -1, 0, or +1
				lastRank = Math.max(1, Math.min(10, lastRank + fluctuation)); // Keep the rank between 1 and 10

				fakeData.push({
					date: monthString,
					hype: monthlyHype[5 - i], // Ensure this array is ordered from oldest to newest
					rank: lastRank, // Use the fluctuating rank
					name, // Include company name for reference
				});
			}
		}

		return fakeData.reverse(); // Reverse to show the most recent dates first
	};

	return (
		<div className="px-2 pt-2">
			<Card>
				<CardHeader className="flex-row">
					<div className="flex flex-1 flex-col justify-center gap-2 ">
						<CardTitle>
							<Badge variant="secondary">
								Live
								<CircleIcon className="w-2 h-2" />
							</Badge>
						</CardTitle>
						<CardDescription className="text-xs">
							Last Update: {getCurrentDateTime()}
						</CardDescription>
					</div>

					<Cover>
						<div className="flex flex-col gap-4">
							<div className="flex">
								{["hype", "rank"].map((key) => {
									const chart = key as keyof typeof chartConfig;
									const isHype = key === "hype";
									const changeValue = isHype ? 33 : -11; // Placeholder for % change for Hype and Rank

									const iconInfo = getIconAndColor(changeValue);

									return (
										<button
											key={chart}
											type="button"
											data-active={activeChart === chart}
											className="flex flex-1 flex-col justify-center gap-1 px-2 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:p-2"
											onClick={() => setActiveChart(chart)}
										>
											<span className="text-xs text-muted-foreground flex items-center justify-center gap-4">
												{chartConfig[chart].label}
												<span className="flex items-center">
													<iconInfo.Icon
														className={`w-4 h-4 ${iconInfo.color}`}
													/>
													<span className={`ml-1 text-xs ${iconInfo.color}`}>
														{changeValue}%
													</span>
												</span>
											</span>
											<span className="text-lg font-bold leading-none sm:text-xl">
												{formatNumber(totals[chart])}
											</span>
										</button>
									);
								})}
							</div>
						</div>
					</Cover>
				</CardHeader>

				<CardContent>
					<ChartContainer
						config={chartConfig}
						className="aspect-video h-[180px] w-full"
					>
						<LineChart
							accessibilityLayer
							data={getFakeData()} // Use generated fake data
							margin={{ left: 2, right: 2 }}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="date" // Ensure date is used as X-axis key
								tickLine={false}
								axisLine={false}
								tickMargin={12}
								minTickGap={32}
								tickFormatter={(value) => {
									const date = new Date(value);
									return date.toLocaleDateString("en-US", {
										month: "short",
										year: "numeric", // Change this to display only month and year if needed
									});
								}}
							/>
							<ChartTooltip
								content={
									<ChartTooltipContent
										className="w-[150px]"
										nameKey="views"
										labelFormatter={(value) => {
											return new Date(value).toLocaleDateString("en-US", {
												month: "short",
												day: "numeric",
												year: "numeric",
											});
										}}
									/>
								}
							/>
							<Line
								dataKey={activeChart} // Use active chart ('hype' or 'rank')
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
