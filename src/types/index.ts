export interface PerformanceData {
  month: string;
  returns: number;
  benchmark: number;
  sharpeRatio: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface TradingStrategy {
  name: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  expectedReturn: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}