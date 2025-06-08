import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Send, Calendar } from 'lucide-react';

// IMPORTANT: To fully transform this to a dental clinic, you should replace the
// video asset located at '../../assets/videos/3 video.mp4' with a video
// that is relevant to a dental clinic.
// For example, you might have: import dentalClinicVideo from '../../assets/videos/dental_clinic_video.mp4';
import video3 from '../../assets/videos/3 video.mp4'; // This import should ideally be updated by the user to a dental video

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  // Animation variants (no change needed here as they control animation behavior)
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
      {/* The 'src' attribute points to the imported 'video3'.
          Ensure the actual video file at '../../assets/videos/3 video.mp4'
          is replaced with a dental-themed video, or update the import path. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        src={video3} // This will use the video imported as 'video3'.
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
            {/* IMPORTANT: Update the translation key 'home.heroTitle' in your i18n
                translation files to reflect a dental clinic's tagline. */}
            {t('home.heroTitle')}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-neutral-100"
            variants={item}
          >
            {/* IMPORTANT: Update the translation key 'home.heroSubtitle' in your i18n
                translation files to reflect a dental clinic's services. */}
            {t('home.heroSubtitle')}
          </motion.p>

          {/* Stats Section (kept as is, but could be repurposed for dental stats) */}
          <motion.div
            className="flex flex-row justify-center gap-4 mt-8"
            variants={statsContainer}
            initial="hidden"
            animate="show"
          >
          </motion.div>
          <div className="flex justify-center mt-8 space-x-4">
            <Link
              to="/appointment"
              className="bg-primary-500 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition-colors duration-300 flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              {t('common.bookAppointment')}
            </Link>
            <Link
              to="tel:+1-555-DENTAL" // Changed phone number to a generic dental clinic number
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center"
            >
              <Phone size={16} className="mr-2" />
              Call Us Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave SVG (kept as is, no changes needed for dental theme) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;