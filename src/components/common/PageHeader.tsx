import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  // Changed the default background image to a dental-themed one from Pexels
  backgroundImage = 'https://images.pexels.com/photos/3845648/pexels-photo-3845648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
}) => {
  return (
    <section 
      className="relative py-24 md:py-32 bg-cover bg-center" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;