
export interface Competitor {
  id: string;
  name: string;
  origin: string;
  marketShare: number;
  segments: string[];
  mainProducts: string[];
  pricing: 'Premium' | 'Mid-range' | 'Mass' | 'Value';
  marketingStrategy: string;
  strengths: string[];
  weaknesses: string[];
  logo: string;
  description: string;
}

export interface MarketInsight {
  year: number;
  totalMarketSize: number;
  growthRate: number;
}

export interface ComparisonMetric {
  label: string;
  key: keyof Competitor | string;
}
