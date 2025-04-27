import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Get values from translations
  const values = t('about.values', { returnObjects: true }) as Array<{ title: string; description: string }>;
  
  // Map icons to values
  const valueIcons = [
    <Award className="w-12 h-12 text-primary-500" />,
    <Heart className="w-12 h-12 text-primary-500" />,
    <Target className="w-12 h-12 text-primary-500" />,
    <Lightbulb className="w-12 h-12 text-primary-500" />
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title={t('about.title')} 
        subtitle={t('about.subtitle')}
        backgroundImage="https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-primary-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary-700">{t('about.missionTitle')}</h2>
              <p className="text-neutral-700">{t('about.missionText')}</p>
            </motion.div>
            
            <motion.div
              className="bg-secondary-50 p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-secondary-700">{t('about.visionTitle')}</h2>
              <p className="text-neutral-700">{t('about.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('about.valuesTitle')}
            subtitle="The principles that guide everything we do at GEDA Clinic"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{valueIcons[index]}</div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title={t('about.historyTitle')}
              center={false}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-neutral-700 mb-6 text-lg">{t('about.historyText')}</p>
              
              <div className="relative border-l-2 border-primary-200 pl-8 ml-4 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">2010 - Foundation</h3>
                  <p className="text-neutral-600">GEDA Clinic was established with a small team of dedicated healthcare professionals.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">2015 - Expansion</h3>
                  <p className="text-neutral-600">We expanded our facilities and added specialized departments to serve more patients.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">2020 - Modernization</h3>
                  <p className="text-neutral-600">We upgraded our equipment and technology to provide cutting-edge healthcare services.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">2025 - Today</h3>
                  <p className="text-neutral-600">Today, GEDA Clinic is a trusted healthcare provider serving thousands of patients with excellence and compassion.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Image */}
      <section
        className="py-32 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3735766/pexels-photo-3735766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Health is Our Priority
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With our team of dedicated professionals, we're committed to providing exceptional healthcare services to our community.
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;