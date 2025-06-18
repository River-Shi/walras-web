'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { performanceData } from '@/lib/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, Award, Target, DollarSign } from 'lucide-react';

const Performance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalReturn = performanceData.reduce((acc, data) => acc + data.returns, 0);
  const averageReturn = totalReturn / performanceData.length;
  const maxReturn = Math.max(...performanceData.map(d => d.returns));
  const averageSharpe = performanceData.reduce((acc, data) => acc + data.sharpeRatio, 0) / performanceData.length;

  const keyMetrics = [
    {
      label: 'Total Annual Return',
      value: `${totalReturn.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Average Monthly Return',
      value: `${averageReturn.toFixed(1)}%`,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      label: 'Best Month',
      value: `${maxReturn.toFixed(1)}%`,
      icon: Award,
      color: 'text-purple-600'
    },
    {
      label: 'Average Sharpe Ratio',
      value: averageSharpe.toFixed(2),
      icon: DollarSign,
      color: 'text-indigo-600'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-medium text-gray-900 dark:text-white">{`${label} 2024`}</p>
          <p className="text-primary-600">
            {`Our Returns: ${payload[0]?.value?.toFixed(1)}%`}
          </p>
          {payload[1] && (
            <p className="text-gray-600 dark:text-gray-400">
              {`Benchmark: ${payload[1].value.toFixed(1)}%`}
            </p>
          )}
          {payload[2] && (
            <p className="text-accent-600">
              {`Sharpe Ratio: ${payload[2].value.toFixed(2)}`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="performance" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Performance <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track record of consistent outperformance across multiple market cycles, 
            demonstrating the robustness of our quantitative strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Monthly Returns vs Benchmark
            </h3>
            <div className="h-80">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="month" 
                      className="text-sm text-gray-600 dark:text-gray-400"
                    />
                    <YAxis 
                      className="text-sm text-gray-600 dark:text-gray-400"
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="returns" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#3b82f6' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      stroke="#9ca3af" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#9ca3af', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading chart...</div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Sharpe Ratio Progression
            </h3>
            <div className="h-80">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="sharpeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#d946ef" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="month" 
                      className="text-sm text-gray-600 dark:text-gray-400"
                    />
                    <YAxis 
                      className="text-sm text-gray-600 dark:text-gray-400"
                      domain={[0, 4]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="sharpeRatio" 
                      stroke="#d946ef" 
                      fillOpacity={1} 
                      fill="url(#sharpeGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading chart...</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Monthly Performance Comparison
          </h3>
          <div className="h-80">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    className="text-sm text-gray-600 dark:text-gray-400"
                  />
                  <YAxis 
                    className="text-sm text-gray-600 dark:text-gray-400"
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="returns" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="benchmark" fill="#9ca3af" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Loading chart...</div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Consistent Excellence</h3>
            <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Our quantitative strategies have delivered superior risk-adjusted returns across various market conditions, 
              consistently outperforming traditional benchmarks while maintaining disciplined risk management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Months Profitable</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2.8x</div>
                <div className="text-sm opacity-90">Avg. vs Benchmark</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">&lt;5%</div>
                <div className="text-sm opacity-90">Max Drawdown</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;