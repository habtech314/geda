import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = t('about.values', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const valueIcons = [
    <Award className="w-12 h-12 text-primary-500" />,
    <Heart className="w-12 h-12 text-primary-500" />,
    <Target className="w-12 h-12 text-primary-500" />,
    <Lightbulb className="w-12 h-12 text-primary-500" />,
  ];

  const pageTitle = 'About Melani Dental Clinic';
  const pageDescription = 'Learn more about Melani Dental Clinic, our mission, vision, and dedicated team.';
  const canonicalUrl = 'https://melani.vercel.app/about';
  const ogImageUrl =
    'https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

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
        keywords={[
          'Melani Dental Clinic history',
          'about Melani Dental Clinic',
          'dental mission',
          'dental vision',
          'dentists in Addis Ababa',
          'dental professionals',
        ]}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="About Melani Dental Clinic"
          subtitle="Dedicated to providing exceptional dental care with compassion and expertise."
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
                <h2 className="text-2xl font-bold mb-4 text-primary-700">Our Mission</h2>
                <p className="text-neutral-700">
                  At Melani Dental Clinic, our mission is to enhance lives through outstanding dental care that combines technology, expertise, and compassion.
                </p>
              </motion.div>

              <motion.div
                className="bg-secondary-50 p-8 rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-secondary-700">Our Vision</h2>
                <p className="text-neutral-700">
                  To be the most trusted and preferred dental clinic in the region, known for innovation, care, and excellence in oral healthcare.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that guide everything we do at Melani Dental Clinic"
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
              <SectionTitle title="Our History" center={false} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-neutral-700 mb-6 text-lg">
                  Since our founding, Melani Dental Clinic has grown from a small private practice to one of the most reputable dental clinics in Addis Ababa.
                </p>

                <div className="relative border-l-2 border-primary-200 pl-8 ml-4 space-y-12">
                  <div className="relative">
                    <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">1996 E.C – Inception</h3>
                    <p className="text-neutral-600">
                      Melani Dental Clinic was established 21 years ago in Saris Kadisco Akababi with a vision to make quality dental care accessible to all.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">2008 E.C – Growth</h3>
                    <p className="text-neutral-600">
                      The clinic expanded with more specialists, improved facilities, and advanced equipment.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">2013 E.C – Digitalization</h3>
                    <p className="text-neutral-600">
                      Introduced digital x-rays, 3D imaging, and modernized patient management systems.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[38px] bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <div className="bg-white rounded-full w-2 h-2"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-800">2017 E.C – Present</h3>
                    <p className="text-neutral-600">
                      Melani Dental Clinic continues to serve with excellence, trusted by thousands for top-notch oral health services.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Image Section */}
        <section
          className="py-32 bg-cover bg-center relative"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3735766/pexels-photo-3735766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
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
              Your Smile is Our Priority
            </motion.h2>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With a team of expert dentists and caring staff, we’re committed to making every visit to Melani Dental Clinic a positive experience.
            </motion.p>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage;
