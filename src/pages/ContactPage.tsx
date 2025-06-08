import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Map from '../components/contact/Map';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full">
                <MapPin className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t('contact.addressTitle')}</h3>
              <p className="text-neutral-600">{t('common.address')}</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary-500 hover:text-primary-600 transition-colors"
              >
                View on Map
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t('contact.phoneTitle')}</h3>
               <a
                 href={`tel:${t('common.phone')}`}
                 className="text-neutral-600 hover:text-primary-500 transition-colors"
               >
                 {t('common.phone')}
              </a>
              <a
                href={`tel:${t('contact.emergencyNumber')}`}
                className="block mt-2 text-red-500 hover:text-red-600 transition-colors"
              >
                {t('contact.emergencyNumber')} (Emergency)
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t('contact.emailTitle')}</h3>
              <a
                href={`mailto:${t('common.email')}`}
                className="text-neutral-600 hover:text-primary-500 transition-colors"
              >
                {t('common.email')}
              </a>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">{t('contact.hoursTitle')}</h3>
              <p className="text-neutral-600 whitespace-pre-line">{t('contact.hours')}</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map and Opening Hours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div>
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.0816115257817!2d38.8188484!3d8.8632834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b794457a3e095%3A0xf4c29892d9cf462f!2zVHVsdSBEaW10dSBDb25kb21pbml1bXMgUHJvamVjdCAxMiB8IOGJseGIiSDhi7LhiJ3hibEg4Yqu4YqV4Yu24Yia4YqS4Yuo4YidIOGNleGIruGMgOGKreGJtSAxMg!5e1!3m2!1sen!2set!4v1745784802183!5m2!1sen!2set"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Opening Hours</h3>
              <ul className="text-neutral-600 space-y-2">
                <li>
                  <strong>Monday - Friday:</strong> 1:30 AM - 2:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 2:00 AM - 12:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Emergency Section */}
      <section className="py-12 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{t('contact.emergencyTitle')}</h2>
          <p className="text-white/90 mb-3">{t('contact.emergencyText')}</p>
          <a
            href={`tel:${t('contact.emergencyNumber')}`}
            className="text-xl font-bold hover:underline"
          >
            {t('contact.emergencyNumber')}
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
