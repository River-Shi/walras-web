'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/forex-trading-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Quantitative</span>
            <br />
            <span className="text-gray-900 dark:text-white">Crypto Trading</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced algorithmic strategies delivering exceptional returns and stable growth for institutional and high-net-worth investors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
            Start Investing
          </a>
          <a href="#performance" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block">
            View Performance
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">High Returns</h3>
            <p className="text-gray-600 dark:text-gray-300">Average 25-40% annual returns through sophisticated trading algorithms</p>
          </div>

          <div className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Risk Management</h3>
            <p className="text-gray-600 dark:text-gray-300">Advanced risk controls and diversification strategies protect your capital</p>
          </div>

          <div className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Precision Execution</h3>
            <p className="text-gray-600 dark:text-gray-300">Millisecond execution across multiple exchanges for optimal pricing</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;