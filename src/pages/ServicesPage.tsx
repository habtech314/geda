import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO'; // Import the SEO component
import { motion } from 'framer-motion';
import { Stethoscope, Baby, CheckCircle, Users, HeartPulse, ClipboardCheck } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { Service } from '../components/types'; // Corrected import path

// Import images from src
import generalMedicineImg from '../assets/images/general.jpg';
import pediatricsImg from '../assets/images/paiadtry.jpg';
import familyPlanningImg from '../assets/images/family.jpg';
import postnatalCareImg from '../assets/images/postnatal.jpg';
import prenatalCareImg from '../assets/images/parental.jpg';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      id: 'general-medicine',
      title: t('services.generalMedicine.title'),
      description: t('services.generalMedicine.description'),
      features: t('services.generalMedicine.features', { returnObjects: true }) as string[],
      icon: 'Stethoscope',
      image: generalMedicineImg,
    },
    {
      id: 'pediatrics',
      title: t('services.pediatrics.title'),
      description: t('services.pediatrics.description'),
      features: t('services.pediatrics.features', { returnObjects: true }) as string[],
      icon: 'Baby',
      image: pediatricsImg,
    },
    {
      id: 'family-planning',
      title: t('services.familyPlanning.title'),
      description: t('services.familyPlanning.description'),
      features: t('services.familyPlanning.features', { returnObjects: true }) as string[],
      icon: 'Users',
      image: familyPlanningImg,
    },
    {
      id: 'postnatal-care',
      title: t('services.postnatalCare.title'),
      description: t('services.postnatalCare.description'),
      features: t('services.postnatalCare.features', { returnObjects: true }) as string[],
      icon: 'HeartPulse',
      image: postnatalCareImg,
    },
    {
      id: 'prenatal-care',
      title: t('services.prenatalCare.title'),
      description: t('services.prenatalCare.description'),
      features: t('services.prenatalCare.features', { returnObjects: true }) as string[],
      icon: 'ClipboardCheck',
      image: prenatalCareImg,
    },
  ];

  const pageTitle = t('services.title');
  const pageDescription = t('services.subtitle');
  const canonicalUrl = "https://geda.vercel.app/services";
  const ogImageUrl = "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Use PageHeader image

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogUrl={canonicalUrl}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={ogImageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={ogImageUrl}
        keywords={[ // Custom keywords for Services page
          'GEDA Clinic services',
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
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4"> {/* Changed container to max-w-4xl */}
          <SectionTitle 
            title="Comprehensive Healthcare Solutions"
            subtitle="At GEDA Clinic, we offer a range of medical services to meet the healthcare needs of your entire family. Our team of experienced doctors and medical professionals are dedicated to providing high-quality care in a comfortable and welcoming environment."
          />
          
          {/* Service Cards */}
          <div className="mt-12 space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full object-contain" // Removed max-width and mx-auto
                    />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block p-3 mb-4 bg-primary-50 rounded-full">
                    {/* Updated icon rendering logic */}
                    {service.icon === 'Stethoscope' && <Stethoscope className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'Baby' && <Baby className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'Users' && <Users className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'HeartPulse' && <HeartPulse className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'ClipboardCheck' && <ClipboardCheck className="w-8 h-8 text-primary-500" />}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-neutral-800">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-medium mb-3 text-neutral-800">Our {service.title} Services Include:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, i: number) => ( // Added type annotations
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
