import React from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  address: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ address, className = '' }) => {
  // Map coordinates
  const latitude = 10.271049802929575;
  const longitude = 38.51407262780275;
  
  // OpenStreetMap URL with specific coordinates
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.005},${latitude-0.005},${longitude+0.005},${latitude+0.005}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden h-[500px] ${className}`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src={openStreetMapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="GEDA Clinic Location"
      />
    </motion.div>
  );
};

export default Map;