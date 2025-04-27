import React from 'react';
import { motion } from 'framer-motion';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.0816115257817!2d38.8188484!3d8.8632834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b794457a3e095%3A0xf4c29892d9cf462f!2zVHVsdSBEaW10dSBDb25kb21pbml1bXMgUHJvamVjdCAxMiB8IOGJseGIiSDhi7LhiJ3hibEg4Yqu4YqV4Yu24Yia4YqS4Yuo4YidIOGNleGIruGMgOGKreGJtSAxMg!5e1!3m2!1sen!2set!4v1745777796950!5m2!1sen!2set";

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden h-[500px] ${className}`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src={googleMapsEmbedUrl}
        width="600"
        height="450"
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
