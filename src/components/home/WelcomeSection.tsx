import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, User, Clock, CheckCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const WelcomeSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Heart className="w-10 h-10 text-primary-500" />,
      title: 'Quality Care',
      description: 'We provide the highest standard of dental care with state-of-the-art equipment and experienced dental professionals.',
    },
    {
      icon: <User className="w-10 h-10 text-primary-500" />,
      title: 'Expert Dentists',
      description: 'Our team of dental experts includes specialists with years of experience in their respective fields.',
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-500" />,
      title: 'Convenient Hours',
      description: 'We offer extended working hours to ensure that you can receive care when you need it most.',
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-primary-500" />,
      title: 'Holistic Approach',
      description: 'We focus on treating not just the symptoms but the whole person for comprehensive oral health and overall wellness.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Welcome to Melani Dental Clinic"
          subtitle="At Melani Dental Clinic, we are dedicated to providing comprehensive dental care services with a focus on patient comfort and wellbeing. Our team of experienced dentists and dental professionals are committed to delivering the highest standard of care."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/about"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('common.learnMore')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
