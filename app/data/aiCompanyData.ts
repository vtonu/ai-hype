export interface AICompanyData {
  name: string;
  userTrust: string;
  ethics: string;
  innovation: string;
  adoptionRate: string;
  doomLevel: 'High' | 'Medium' | 'Low';
  impactLevel: 'High' | 'Medium' | 'Low';
}

export const aiCompanyData: AICompanyData[] = [
  {
    name: 'OpenAI',
    userTrust: 'A',
    ethics: 'B+',
    innovation: 'A+',
    doomLevel: 'High',
    adoptionRate: 'A+',
    impactLevel: 'High',
  },
  {
    name: 'Google',
    userTrust: 'B+',
    ethics: 'B',
    innovation: 'A',
    doomLevel: 'Medium',
    adoptionRate: 'A',
    impactLevel: 'High',
  },
  {
    name: 'Microsoft',
    userTrust: 'A-',
    ethics: 'B+',
    innovation: 'A',
    doomLevel: 'Medium',
    adoptionRate: 'A+',
    impactLevel: 'High',
  },
  {
    name: 'Apple',
    userTrust: 'A',
    ethics: 'A-',
    innovation: 'A-',
    doomLevel: 'Low',
    adoptionRate: 'B+',
    impactLevel: 'Medium',
  },
  {
    name: 'Amazon',
    userTrust: 'B',
    ethics: 'C+',
    innovation: 'A-',
    doomLevel: 'Medium',
    adoptionRate: 'A-',
    impactLevel: 'High',
  },
  {
    name: 'NVIDIA',
    userTrust: 'A-',
    ethics: 'B+',
    innovation: 'A+',
    doomLevel: 'Medium',
    adoptionRate: 'A+',
    impactLevel: 'High',
  },
  {
    name: 'Tesla',
    userTrust: 'B-',
    ethics: 'C+',
    innovation: 'A-',
    doomLevel: 'Medium',
    adoptionRate: 'B',
    impactLevel: 'Medium',
  },
  {
    name: 'Meta',
    userTrust: 'C+',
    ethics: 'C',
    innovation: 'A-',
    doomLevel: 'High',
    adoptionRate: 'B+',
    impactLevel: 'Medium',
  },
  {
    name: 'Anthropic',
    userTrust: 'A-',
    ethics: 'A',
    innovation: 'A',
    doomLevel: 'Medium',
    adoptionRate: 'A-',
    impactLevel: 'High',
  },
  {
    name: 'DeepMind',
    userTrust: 'A-',
    ethics: 'B+',
    innovation: 'A+',
    doomLevel: 'High',
    adoptionRate: 'A',
    impactLevel: 'High',
  },
  {
    name: 'Cohere',
    userTrust: 'B+',
    ethics: 'A-',
    innovation: 'A-',
    doomLevel: 'Low',
    adoptionRate: 'B',
    impactLevel: 'Medium',
  },
  {
    name: 'Stability AI',
    userTrust: 'B',
    ethics: 'B-',
    innovation: 'A-',
    doomLevel: 'Medium',
    adoptionRate: 'B+',
    impactLevel: 'Medium',
  },
  {
    name: 'Perplexity AI',
    userTrust: 'B+',
    ethics: 'B+',
    innovation: 'A-',
    doomLevel: 'Low',
    adoptionRate: 'B',
    impactLevel: 'Medium',
  },
];
