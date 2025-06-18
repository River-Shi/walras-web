'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import { Linkedin, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Assets Under Management', value: '$2.5B+', icon: TrendingUp },
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Institutional Clients', value: '150+', icon: Users },
    { label: 'Average Annual Return', value: '32%', icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Walras Research</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Founded by former Wall Street quantitative analysts, we combine cutting-edge technology 
            with deep market expertise to deliver superior risk-adjusted returns in the cryptocurrency markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              To democratize access to institutional-grade quantitative trading strategies, 
              providing our clients with consistent, market-beating returns while maintaining 
              the highest standards of risk management and transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Leveraging cutting-edge machine learning and AI to identify market inefficiencies 
                and execute trades with precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Transparency</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time reporting and complete visibility into our trading strategies, 
                performance metrics, and risk management processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous improvement and optimization of our strategies to maintain 
                our competitive edge in dynamic markets.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the experts behind our success - seasoned professionals with decades 
              of combined experience in quantitative finance and cryptocurrency markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {member.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-center">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <div className="text-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;