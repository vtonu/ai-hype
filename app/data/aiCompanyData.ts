export interface AICompanyData {
	name: string;
	userTrust: string;
	ethics: string;
	innovationScore: string;
	adoptionRate: string;
	hype: number;
	rank: number;
	doomLevel: "High" | "Medium" | "Low";
	impactLevel: "High" | "Medium" | "Low";
	monthlyHype: number[]; // Hype for each month (last 6 months)
	monthlyRank: number[]; // Rank for each month (last 6 months)
}

export const aiCompanyData: AICompanyData[] = [
	{
		name: "OpenAI",
		userTrust: "B",
		ethics: "B",
		innovationScore: "A+",
		doomLevel: "High",
		adoptionRate: "A+",
		impactLevel: "High",
		hype: 19000,
		rank: 1,
		monthlyHype: [12000, 14000, 16000, 17500, 18500, 19000],
		monthlyRank: [1, 1, 1, 1, 1, 1],
	},
	{
		name: "Google",
		userTrust: "B+",
		ethics: "B",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "A",
		impactLevel: "High",
		hype: 13000,
		rank: 2,
		monthlyHype: [9500, 10500, 11500, 12000, 12500, 13000],
		monthlyRank: [2, 2, 2, 2, 2, 2],
	},
	{
		name: "Microsoft",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "A+",
		impactLevel: "High",
		hype: 12000,
		rank: 3,
		monthlyHype: [8500, 9500, 10500, 11000, 11500, 12000],
		monthlyRank: [3, 3, 3, 3, 3, 3],
	},
	{
		name: "NVIDIA",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A+",
		doomLevel: "Medium",
		adoptionRate: "A+",
		impactLevel: "High",
		hype: 11000,
		rank: 4,
		monthlyHype: [7500, 8500, 9500, 10000, 10500, 11000],
		monthlyRank: [4, 4, 4, 4, 4, 4],
	},
	{
		name: "Anthropic",
		userTrust: "A-",
		ethics: "A",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "A",
		impactLevel: "High",
		hype: 9000,
		rank: 5,
		monthlyHype: [5500, 6500, 7500, 8000, 8500, 9000],
		monthlyRank: [6, 6, 5, 5, 5, 5],
	},
	{
		name: "DeepMind",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A+",
		doomLevel: "High",
		adoptionRate: "A",
		impactLevel: "High",
		hype: 8500,
		rank: 6,
		monthlyHype: [5000, 6000, 7000, 7500, 8000, 8500],
		monthlyRank: [5, 5, 6, 6, 6, 6],
	},
	{
		name: "Amazon",
		userTrust: "B",
		ethics: "C+",
		innovationScore: "A-",
		doomLevel: "Medium",
		adoptionRate: "A-",
		impactLevel: "High",
		hype: 6500,
		rank: 7,
		monthlyHype: [4000, 4800, 5300, 5700, 6100, 6500],
		monthlyRank: [7, 7, 7, 7, 7, 7],
	},
	{
		name: "Apple",
		userTrust: "A",
		ethics: "A-",
		innovationScore: "A-",
		doomLevel: "Low",
		adoptionRate: "B+",
		impactLevel: "Medium",
		hype: 6000,
		rank: 8,
		monthlyHype: [3500, 4200, 4800, 5200, 5600, 6000],
		monthlyRank: [8, 8, 8, 8, 8, 8],
	},
	{
		name: "Meta",
		userTrust: "C+",
		ethics: "C",
		innovationScore: "A-",
		doomLevel: "High",
		adoptionRate: "B+",
		impactLevel: "Medium",
		hype: 5000,
		rank: 9,
		monthlyHype: [3000, 3500, 4000, 4300, 4700, 5000],
		monthlyRank: [9, 9, 9, 9, 9, 9],
	},
	{
		name: "IBM",
		userTrust: "A-",
		ethics: "A-",
		innovationScore: "A-",
		doomLevel: "Low",
		adoptionRate: "B+",
		impactLevel: "Medium",
		hype: 4500,
		rank: 10,
		monthlyHype: [2500, 3000, 3500, 3800, 4200, 4500],
		monthlyRank: [10, 10, 10, 10, 10, 10],
	},
];
