import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Partner } from '../../types';

const InsurancePartnersPreview: React.FC = () => {
  const { t } = useTranslation();
  
  // Get partners from translations
  const partners = t('partners.partnersList', { returnObjects: true }) as Partner[];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.partnersTitle')} 
          subtitle="We work with leading insurance providers to ensure you get the care you need"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full">
                <ShieldCheck className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">{partner.name}</h3>
              <p className="text-neutral-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/partners"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('navigation.partners')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartnersPreview;