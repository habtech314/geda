import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import servicesData from '../data/services.json';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState(servicesData);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const pageTitle = t('services.title');
  const pageDescription = t('services.subtitle');
  const canonicalUrl = "https://melani.vercel.app/services";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogUrl="https://melani.vercel.app/services"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage="https://melani.vercel.app/assets/images/doc.png"
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage="https://melani.vercel.app/assets/images/doc.png"
        keywords={[
          'Melani Clinic services',
          'medical services Addis Ababa',
          'general medicine',
          'pediatric care',
          'family planning clinic',
          'antenatal care Addis Ababa',
          'prenatal care',
          'routine check-ups',
          'vaccinations',
        ]}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          backgroundImage="https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <SectionTitle
              title="Our Services"
              subtitle="Comprehensive Dental Solutions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-1/3">
                    <img src="https://via.placeholder.com/300x200" alt={service.title} className="rounded-lg" />
                  </div>
                  <div className="w-2/3 ml-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="mb-4 space-y-2">
                      {service.services.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 mt-2">{service.imagePlaceholder}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ServicesPage;
