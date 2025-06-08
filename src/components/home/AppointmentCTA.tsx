import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle } from 'lucide-react'; // These icons are still relevant

const AppointmentCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-24 bg-cover bg-center relative text-white"
      style={{
        // Changed the background image to a dental-themed one from Pexels
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/5699478/pexels-photo-5699478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' 
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('appointment.title')}</h2>
          <p className="text-lg mb-8">{t('appointment.subtitle')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <Calendar className="w-10 h-10 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
              <p className="text-white/80 mb-4">Book your dental appointment online at your convenience</p> {/* Minor text tweak */}
              <Link
                to="/appointment"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
              >
                Book Now
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <Phone className="w-10 h-10 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">Call our friendly staff to schedule your visit</p>
              <a
                href="tel:+15551234567" // Changed phone number to a generic NA format
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
              >
                {t('common.phone')} {/* This translation key should point to the new phone number */}
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-10 h-10 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat With Us</h3>
              <p className="text-white/80 mb-4">Message us on WhatsApp or Telegram for dental inquiries</p> {/* Minor text tweak */}
              <div className="flex justify-center space-x-2">
                <a
                  href="#" // Keep as placeholder or replace with actual WhatsApp link
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
                >
                  WhatsApp
                </a>
                <a
                  href="#" // Keep as placeholder or replace with actual Telegram link
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-white/80">Need emergency dental care? Call our 24/7 emergency line at {t('contact.emergencyNumber')}</p> {/* Minor text tweak */}
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;