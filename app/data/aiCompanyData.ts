export interface AICompanyData {
  name: string;
  userTrust: number;
  ethics: number;
  innovation: number;
  doomLevel: number;
}

export const aiCompanyData: AICompanyData[] = [
  { name: 'OpenAI', userTrust: 85, ethics: 70, innovation: 95, doomLevel: 65 }, // 1. OpenAI (Extremely popular due to ChatGPT and partnerships)
  { name: 'Google', userTrust: 80, ethics: 75, innovation: 90, doomLevel: 60 }, // 2. Google (Dominant in AI tools, cloud, and search)
  { name: 'Microsoft', userTrust: 75, ethics: 80, innovation: 85, doomLevel: 55 }, // 3. Microsoft (Investments in AI and OpenAI collaboration)
  { name: 'Apple', userTrust: 90, ethics: 85, innovation: 88, doomLevel: 50 }, // 4. Apple (Known for AI in hardware and software integration)
  { name: 'Amazon', userTrust: 70, ethics: 68, innovation: 87, doomLevel: 62 }, // 5. Amazon (AI-driven e-commerce and AWS services)
  { name: 'NVIDIA', userTrust: 78, ethics: 72, innovation: 92, doomLevel: 58 }, // 6. NVIDIA (Top in AI hardware—GPUs)
  { name: 'Tesla', userTrust: 72, ethics: 73, innovation: 91, doomLevel: 59 }, // 7. Tesla (AI-driven autonomous vehicles)
  { name: 'Meta', userTrust: 60, ethics: 65, innovation: 80, doomLevel: 70 }, // 8. Meta (AI for social media and metaverse applications)
  { name: 'Anthropic', userTrust: 79, ethics: 86, innovation: 89, doomLevel: 57 }, // 9. Anthropic (Prominent safety-focused AI company)
  { name: 'DeepMind', userTrust: 83, ethics: 78, innovation: 96, doomLevel: 68 }, // 10. DeepMind (Known for breakthroughs in general AI)
  { name: 'IBM', userTrust: 82, ethics: 88, innovation: 83, doomLevel: 45 }, // 11. IBM (Known for AI in enterprise services)
  { name: 'Samsung', userTrust: 76, ethics: 77, innovation: 84, doomLevel: 54 }, // 12. Samsung (AI in consumer electronics)
  { name: 'Intel', userTrust: 80, ethics: 79, innovation: 82, doomLevel: 52 }, // 13. Intel (AI in semiconductors)
  { name: 'AMD', userTrust: 77, ethics: 78, innovation: 83, doomLevel: 53 }, // 14. AMD (AI hardware, especially in GPUs)
  { name: 'Qualcomm', userTrust: 75, ethics: 76, innovation: 85, doomLevel: 55 }, // 15. Qualcomm (AI in mobile and embedded systems)
  { name: 'Alibaba', userTrust: 67, ethics: 71, innovation: 83, doomLevel: 60 }, // 16. Alibaba (AI in e-commerce, cloud, and finance in China)
  { name: 'Baidu', userTrust: 65, ethics: 70, innovation: 82, doomLevel: 59 }, // 17. Baidu (China's leader in AI, especially autonomous driving)
  { name: 'Tencent', userTrust: 68, ethics: 72, innovation: 84, doomLevel: 61 }, // 18. Tencent (AI in gaming and social platforms)
  { name: 'SenseTime', userTrust: 62, ethics: 69, innovation: 85, doomLevel: 64 }, // 19. SenseTime (China's leading AI company for image recognition)
  { name: 'Huawei', userTrust: 60, ethics: 68, innovation: 86, doomLevel: 63 }, // 20. Huawei (AI in telecommunications)

  // Newly added companies:
  { name: 'Cohere', userTrust: 74, ethics: 80, innovation: 88, doomLevel: 56 }, // 21. Cohere (Leading NLP company)
  { name: 'Stability AI', userTrust: 73, ethics: 75, innovation: 87, doomLevel: 58 }, // 22. Stability AI (Popular for generative AI tools like Stable Diffusion)
  { name: 'Perplexity AI', userTrust: 70, ethics: 73, innovation: 85, doomLevel: 57 }, // 23. Perplexity AI (Growing in search-based AI tools)
  { name: 'Anduril', userTrust: 68, ethics: 65, innovation: 83, doomLevel: 72 }, // 24. Anduril (AI in defense tech)
];
