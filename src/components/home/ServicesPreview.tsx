import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Stethoscope, Baby, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Service } from '../types';

const ServicesPreview: React.FC = () => {
  const { t } = useTranslation();
  
  const services: Service[] = [
    {
      id: 'general-medicine',
      title: t('services.generalMedicine.title'),
      description: t('services.generalMedicine.description'),
      features: t('services.generalMedicine.features', { returnObjects: true }) as string[],
      icon: 'Stethoscope'
    },
    {
      id: 'pediatrics',
      title: t('services.pediatrics.title'),
      description: t('services.pediatrics.description'),
      features: t('services.pediatrics.features', { returnObjects: true }) as string[],
      icon: 'Baby'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.servicesTitle')} 
          subtitle="Providing comprehensive healthcare services for the whole family"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6 inline-block p-3 bg-primary-50 rounded-full">
                {service.icon === 'Stethoscope' ? (
                  <Stethoscope className="w-8 h-8 text-primary-500" />
                ) : (
                  <Baby className="w-8 h-8 text-primary-500" />
                )}
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description.substring(0, 150)}...</p>
              
              <ul className="mb-4 space-y-2">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={`/services#${service.id}`}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                {t('common.readMore')}
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('common.ourServices')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;