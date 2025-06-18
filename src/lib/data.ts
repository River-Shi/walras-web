import { PerformanceData, TeamMember, TradingStrategy } from '@/types';

export const performanceData: PerformanceData[] = [
  { month: 'Jan', returns: 15.2, benchmark: 8.1, sharpeRatio: 2.1 },
  { month: 'Feb', returns: 18.5, benchmark: 7.3, sharpeRatio: 2.3 },
  { month: 'Mar', returns: 22.1, benchmark: 9.8, sharpeRatio: 2.5 },
  { month: 'Apr', returns: 19.8, benchmark: 6.2, sharpeRatio: 2.4 },
  { month: 'May', returns: 25.3, benchmark: 11.4, sharpeRatio: 2.7 },
  { month: 'Jun', returns: 21.7, benchmark: 8.9, sharpeRatio: 2.6 },
  { month: 'Jul', returns: 28.2, benchmark: 12.3, sharpeRatio: 2.9 },
  { month: 'Aug', returns: 24.6, benchmark: 10.1, sharpeRatio: 2.8 },
  { month: 'Sep', returns: 26.8, benchmark: 9.7, sharpeRatio: 3.0 },
  { month: 'Oct', returns: 30.1, benchmark: 13.2, sharpeRatio: 3.2 },
  { month: 'Nov', returns: 27.4, benchmark: 11.8, sharpeRatio: 3.1 },
  { month: 'Dec', returns: 32.5, benchmark: 14.6, sharpeRatio: 3.4 },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Investment Officer',
    bio: 'Former Goldman Sachs quantitative analyst with 15+ years in algorithmic trading and risk management.',
    image: '/team/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Research',
    bio: 'PhD in Financial Engineering from Stanford. Specialized in machine learning applications for crypto markets.',
    image: '/team/michael-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/michaelrodriguez'
  },
  {
    name: 'Alex Kim',
    role: 'Senior Quantitative Developer',
    bio: 'Former Jane Street trader with expertise in high-frequency trading systems and market microstructure.',
    image: '/team/alex-kim.jpg',
    linkedin: 'https://linkedin.com/in/alexkim'
  }
];

export const tradingStrategies: TradingStrategy[] = [
  {
    name: 'Market Neutral Arbitrage',
    description: 'Exploits price discrepancies across exchanges while maintaining market-neutral exposure.',
    riskLevel: 'Low',
    expectedReturn: '12-18% APY',
    icon: 'balance-scale'
  },
  {
    name: 'Momentum-Based Alpha',
    description: 'Captures trends using advanced technical indicators and machine learning predictions.',
    riskLevel: 'Medium',
    expectedReturn: '20-35% APY',
    icon: 'trending-up'
  },
  {
    name: 'DeFi Yield Optimization',
    description: 'Maximizes returns through automated yield farming and liquidity provision strategies.',
    riskLevel: 'Medium',
    expectedReturn: '25-40% APY',
    icon: 'coins'
  },
  {
    name: 'Cross-Chain Opportunities',
    description: 'Leverages inefficiencies between different blockchain ecosystems for superior returns.',
    riskLevel: 'High',
    expectedReturn: '30-50% APY',
    icon: 'link'
  }
];