'use client';

import { motion } from 'framer-motion';
import { tradingStrategies } from '@/lib/data';
import { 
  Scale, 
  TrendingUp, 
  Coins, 
  Link, 
  ArrowRight,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

const iconMap = {
  'balance-scale': Scale,
  'trending-up': TrendingUp,
  'coins': Coins,
  'link': Link,
};

const Services = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time market analysis and sentiment tracking across multiple data sources'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated risk controls with dynamic position sizing and stop-loss mechanisms'
    },
    {
      icon: Zap,
      title: 'High-Frequency Execution',
      description: 'Sub-millisecond execution across 3+ exchanges for optimal price discovery'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400';
      case 'High':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-400';
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Trading Strategies</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Diversified portfolio of quantitative strategies designed to maximize returns 
            while managing risk across different market conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tradingStrategies.slice(0, 3).map((strategy, index) => {
            const IconComponent = iconMap[strategy.icon as keyof typeof iconMap];
            let strategyName = strategy.name;
            let riskLevel = strategy.riskLevel;
            let description = strategy.description;
            
            // Update strategy names, risk levels, and descriptions
            if (index === 0) {
              strategyName = 'Market Neutral Arbitrage';
              riskLevel = 'Low';
              description = 'Exploits price discrepancies between related securities while maintaining market neutrality. This strategy provides consistent returns with minimal market exposure.';
            } else if (index === 1) {
              strategyName = 'Statistical Arbitrage';
              riskLevel = 'Medium';
              description = 'Uses advanced statistical models to identify and capitalize on mean-reverting relationships between assets. Combines quantitative analysis with systematic execution.';
            } else if (index === 2) {
              strategyName = 'CTA Strategy';
              riskLevel = 'High';
              description = 'Commodity Trading Advisor strategy that leverages trend-following algorithms across futures markets. Designed to capture momentum in various asset classes.';
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary-600" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(riskLevel)}`}>
                    {riskLevel} Risk
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {strategyName}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
