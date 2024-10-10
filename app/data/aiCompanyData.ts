// Data from Perplexity AI based on current market trends and data.
export interface AICompanyData {
	name: string; // Company name
	userTrust: string; // Public trust level based on AI model metrics
	ethics: string; // Ethical evaluation based on AI model metrics
	innovationScore: string; // Innovation rating based on AI model metrics
	adoptionRate: string; // Public adoption rate of AI products
	currentHype: number; // Current hype score
	currentRank: number; // Current rank among companies
	doomLevel: "High" | "Medium" | "Low"; // Perceived risk of AI-related threats
	impactLevel: "High" | "Medium" | "Low"; // Social and environmental impact of AI products
	monthlyHype: number[]; // Hype score over the last 6 months
	monthlyRank: number[]; // Rank score over the last 6 months
}

export const aiCompanyData: AICompanyData[] = [
	{
		name: "OpenAI",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A+",
		doomLevel: "High",
		adoptionRate: "A+",
		impactLevel: "High",
		currentHype: 20000,
		currentRank: 1,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 14000, 16000, 17500, 18500, 19000,
			20000,
		],
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
		currentHype: 14000,
		currentRank: 2,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 10500, 11500, 12000, 12500, 13000,
			14000,
		],
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
		currentHype: 13000,
		currentRank: 3,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 9500, 10500, 11000, 11500, 12000,
			13000,
		],
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
		currentHype: 12000,
		currentRank: 4,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 8500, 9500, 10000, 10500, 11000,
			12000,
		],
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
		currentHype: 10000,
		currentRank: 5,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 6500, 7500, 8000, 8500, 9000, 10000,
		],
		monthlyRank: [6, 5, 5, 5, 5, 5],
	},
	{
		name: "DeepMind",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A+",
		doomLevel: "High",
		adoptionRate: "A",
		impactLevel: "High",
		currentHype: 9500,
		currentRank: 6,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 6000, 7000, 7500, 8000, 8500, 9500,
		],
		monthlyRank: [5, 6, 6, 6, 6, 6],
	},
	{
		name: "Amazon",
		userTrust: "B",
		ethics: "C+",
		innovationScore: "A-",
		doomLevel: "Medium",
		adoptionRate: "A-",
		impactLevel: "High",
		currentHype: 7000,
		currentRank: 7,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 4800, 5300, 5700, 6100, 6500, 7000,
		],
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
		currentHype: 6500,
		currentRank: 8,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 4200, 4800, 5200, 5600, 6000, 6500,
		],
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
		currentHype: 5500,
		currentRank: 9,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 3500, 4000, 4300, 4700, 5000, 5500,
		],
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
		currentHype: 5000,
		currentRank: 10,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 3000, 3500, 3800, 4200, 4500, 5000,
		],
		monthlyRank: [10, 10, 10, 10, 10, 10],
	},
	{
		name: "Cohere",
		userTrust: "B+",
		ethics: "B",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "B+",
		impactLevel: "Medium",
		currentHype: 4200,
		currentRank: 11,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 2500, 2900, 3100, 3500, 3800, 4200,
		],
		monthlyRank: [11, 11, 11, 11, 11, 11],
	},
	{
		name: "Hugging Face",
		userTrust: "A-",
		ethics: "A",
		innovationScore: "A+",
		doomLevel: "Low",
		adoptionRate: "A-",
		impactLevel: "Medium",
		currentHype: 4000,
		currentRank: 12,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 2600, 2700, 2900, 3100, 3700, 4000,
		],
		monthlyRank: [12, 12, 12, 12, 12, 12],
	},
	{
		name: "Stability AI",
		userTrust: "B+",
		ethics: "B",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "A-",
		impactLevel: "Medium",
		currentHype: 3800,
		currentRank: 13,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 2200, 2500, 2800, 3200, 3500, 3800,
		],
		monthlyRank: [13, 13, 13, 13, 13, 13],
	},
	{
		name: "Databricks",
		userTrust: "A-",
		ethics: "B+",
		innovationScore: "A",
		doomLevel: "Low",
		adoptionRate: "B+",
		impactLevel: "Medium",
		currentHype: 3600,
		currentRank: 14,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 2000, 2300, 2600, 3000, 3300, 3600,
		],
		monthlyRank: [14, 14, 14, 14, 14, 14],
	},
	{
		name: "Inflection AI",
		userTrust: "B",
		ethics: "B+",
		innovationScore: "A",
		doomLevel: "Medium",
		adoptionRate: "B",
		impactLevel: "Medium",
		currentHype: 3400,
		currentRank: 15,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 1800, 2100, 2400, 2800, 3100, 3400,
		],
		monthlyRank: [15, 15, 15, 15, 15, 15],
	},
	{
		name: "Palantir",
		userTrust: "C+",
		ethics: "C",
		innovationScore: "A-",
		doomLevel: "High",
		adoptionRate: "B+",
		impactLevel: "High",
		currentHype: 3200,
		currentRank: 16,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 1600, 1900, 2200, 2600, 2900, 3200,
		],
		monthlyRank: [16, 16, 16, 16, 16, 16],
	},
	{
		name: "Scale AI",
		userTrust: "B+",
		ethics: "B",
		innovationScore: "A-",
		doomLevel: "Low",
		adoptionRate: "B",
		impactLevel: "Medium",
		currentHype: 3000,
		currentRank: 17,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 1400, 1700, 2000, 2400, 2700, 3000,
		],
		monthlyRank: [17, 17, 17, 17, 17, 17],
	},
	{
		name: "SambaNova",
		userTrust: "B",
		ethics: "B+",
		innovationScore: "A-",
		doomLevel: "Low",
		adoptionRate: "B-",
		impactLevel: "Medium",
		currentHype: 2800,
		currentRank: 18,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 1200, 1500, 1800, 2200, 2500, 2800,
		],
		monthlyRank: [18, 18, 18, 18, 18, 18],
	},
	{
		name: "Adept AI",
		userTrust: "B",
		ethics: "B",
		innovationScore: "A-",
		doomLevel: "Medium",
		adoptionRate: "B-",
		impactLevel: "Medium",
		currentHype: 2600,
		currentRank: 19,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 1000, 1300, 1600, 2000, 2300, 2600,
		],
		monthlyRank: [19, 19, 19, 19, 19, 19],
	},
	{
		name: "Runway",
		userTrust: "B+",
		ethics: "B",
		innovationScore: "A",
		doomLevel: "Low",
		adoptionRate: "B",
		impactLevel: "Medium",
		currentHype: 2400,
		currentRank: 20,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 800, 1100, 1400, 1800, 2100, 2400,
		],
		monthlyRank: [20, 20, 20, 20, 20, 20],
	},
	{
		name: "Jasper",
		userTrust: "B",
		ethics: "B-",
		innovationScore: "B+",
		doomLevel: "Low",
		adoptionRate: "B+",
		impactLevel: "Low",
		currentHype: 2200,
		currentRank: 21,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 600, 900, 1200, 1600, 1900, 2200,
		],
		monthlyRank: [21, 21, 21, 21, 21, 21],
	},
	{
		name: "Midjourney",
		userTrust: "B+",
		ethics: "B-",
		innovationScore: "A",
		doomLevel: "Low",
		adoptionRate: "A-",
		impactLevel: "Medium",
		currentHype: 2000,
		currentRank: 22,
		monthlyHype: [
			1234, 2345, 4567, 5643, 6754, 7865, 400, 700, 1000, 1400, 1700, 2000,
		],
		monthlyRank: [22, 22, 22, 22, 22, 22],
	},
];
