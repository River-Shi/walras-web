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
      description: 'Sub-millisecond execution across 20+ exchanges for optimal price discovery'
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Trading Strategies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diversified portfolio of quantitative strategies designed to maximize returns 
            while managing risk across different market conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingStrategies.map((strategy, index) => {
            const IconComponent = iconMap[strategy.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary-600" />}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(strategy.riskLevel)}`}>
                    {strategy.riskLevel} Risk
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {strategy.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {strategy.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Expected Return</p>
                    <p className="text-2xl font-bold text-primary-600">{strategy.expectedReturn}</p>
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join our exclusive community of investors and start earning superior returns today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Track Record
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;