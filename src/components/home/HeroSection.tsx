import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import video3 from '../../assets/videos/3 video.mp4';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const statsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.8, // Delay after the main text animation
      },
    },
  };

  const statsItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        src={video3}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="max-w-2xl mx-auto text-center text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={item}
          >
            {t('home.heroTitle')}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-neutral-100"
            variants={item}
          >
            {t('home.heroSubtitle')}
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="flex flex-row justify-center gap-4 mt-8"
            variants={statsContainer}
            initial="hidden"
            animate="show"
          >
            {/* Experience */}
            <motion.div
              className="flex flex-row items-center text-center p-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
              variants={statsItem}
            >
              <span className="text-2xl font-bold text-yellow-400 mr-2">9+</span>
              <span className="text-lg text-neutral-200">Years of Experience</span>
            </motion.div>

            {/* Partner */}
            <motion.div
              className="flex flex-row items-center text-center p-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
              variants={statsItem}
            >
              <span className="text-2xl font-bold text-red-600 mr-2">DKT Ethiopia</span>
              <span className="text-lg text-neutral-200">Trusted Partner</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;