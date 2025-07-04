'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    '/assets/forex-trading-background.mp4',
    '/assets/market-loop-background.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div suppressHydrationWarning>
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Quantitative Trading</span>
            <br />
            <span className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Crypto & Traditional Markets</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Advanced algorithmic strategies delivering exceptional returns and stable growth for institutional and high-net-worth investors in cryptocurrency and traditional markets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
            Start Investing
          </a>
          <a href="#about" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block">
            About Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
        >
          <div className="glass-effect rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multi-strategy</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">10-70% annual return across markets and strategies</p>
          </div>

          <div className="glass-effect rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Risk Management</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Advanced risk controls and diversification strategies protect your capital</p>
          </div>

          <div className="glass-effect rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
            <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-accent-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">AI-Human</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Empowering innovations through next-generation AI and expert-driven intelligence.</p>
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
