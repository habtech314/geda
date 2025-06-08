import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/common/SEO'; // Import the SEO component
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { Doctor } from '../components/types'; // Corrected import path for Doctor type

// Import images
import DoctorImage from '../assets/images/doc.png'; // Replace with the actual path to the doctor image
import NurseImage from '../assets/images/nurse.png';  // Replace with the actual path to the nurse image

const teamMembers: Doctor[] = [
  {
    id: 1, 
    name: 'DR. Feyisa', 
    specialty: 'General Practitioner', 
    bio: 'DR. Feyisa has over 10 years of experience in general medicine.', 
    education: 'MD, Addis Ababa University', 
    experience: '10+ Years', 
    image: DoctorImage // Use imported image
  },
  {
    id: 2, 
    name: 'Nurse. Hana', 
    specialty: 'Registered Nurse', 
    bio: 'Nurse. Hana is dedicated to providing compassionate patient care.', 
    education: 'BSc Nursing, Gondar University', 
    experience: '5+ Years', 
    image: NurseImage // Use imported image
  }
];

const DoctorsPreview: React.FC = () => { // Consider renaming component if this IS the main Doctors page
  const { t } = useTranslation();

  const pageTitle = t('doctors.title', 'Meet Our Doctors'); // Add 'doctors.title' to translation files
  const pageDescription = t('doctors.subtitle', 'Our expert team of medical professionals at Melani Clinic.'); // Add 'doctors.subtitle'
  const canonicalUrl = "https://melani.vercel.app/doctors";
  // Use a relevant image, maybe a team photo or a generic medical image if no specific one exists
  const ogImageUrl = "https://melani.vercel.app/assets/images/doc.png";

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://melani.vercel.app/doctors"
        ogUrl="https://melani.vercel.app/doctors"
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage="https://melani.vercel.app/assets/images/doc.png"
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage="https://melani.vercel.app/assets/images/doc.png"
        keywords={[ // Custom keywords for Doctors page
          'Melani Clinic doctors',
          'medical team Addis Ababa',
          'general practitioner',
          'pediatrician Addis Ababa', // Add if applicable
          'registered nurse',
          'healthcare professionals',
          'find a doctor Addis Ababa',
        ]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.featuredDoctorsTitle')} 
          subtitle="Our expert team of medical professionals is dedicated to providing the highest standard of care"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"> 
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
  <img 
    src={member.image}
    alt={member.name}
    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
  />
</div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-neutral-800">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member.specialty}</p>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500">{member.experience}</span>
                  <Link 
                    to="/doctors"
                    className="text-primary-500 hover:text-primary-600 text-sm font-medium transition-colors"
                  >
                    {t('common.readMore')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center space-x-4">
          <Link
            to="/appointment"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('common.bookAppointment')}
          </Link>
          <Link
            to="/doctors"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('common.learnMore')}
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default DoctorsPreview;
