import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Doctor } from '../types'; // Ensure correct type import path

// Define the specific team members, updated for a dental clinic
const teamMembers: Doctor[] = [
  {
    id: 1, 
    name: 'DR. Sofia Chen', // Changed name
    specialty: 'General Dentist', // Changed specialty
    bio: 'DR. Sofia Chen has over 12 years of experience providing comprehensive family dental care, focusing on preventive and restorative treatments.', // Updated bio
    education: 'DDS, University of Dental Medicine, NA', // Updated education
    experience: '12+ Years', 
    image: '/assets/images/dentist1.png' // Changed image path to a dental professional
  },
  {
    id: 2, 
    name: 'DR. Alex Turner', // Changed name
    specialty: 'Orthodontist', // Changed specialty
    bio: 'DR. Alex Turner specializes in orthodontics, helping patients achieve confident smiles through braces and clear aligners.', // Updated bio
    education: 'DDS, MS Orthodontics, NA State University', // Updated education
    experience: '7+ Years', 
    image: '/assets/images/dentist2.png' // Changed image path to another dental professional
  }
  // If you need more members, add them here following the Doctor type
];

const DoctorsPreview: React.FC = () => {
  const { t } = useTranslation();
  // Removed logic fetching all doctors and separate images array

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.featuredDoctorsTitle')} // This translation key might need updating in your i18n files to "home.featuredDentistsTitle" for accuracy
          subtitle="Our expert team of dental professionals is dedicated to providing the highest standard of oral care." // Updated subtitle for dental clinic
        />
        
        {/* Adjusted grid columns for 2 items, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"> 
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id} // Use member id
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} // Use image from member object
                  alt={member.name} // Use member name
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-neutral-800">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-4">{member.specialty}</p>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500">{member.experience}</span>
                  <Link 
                    to="/doctors" // Link remains the same, assumes 'doctors' page will now list dentists
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
            {t('common.bookAppointment')} {/* Assuming 'common.bookAppointment' exists in translations */}
          </Link>
          <Link
            to="/doctors" // Link remains the same
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300" // Using secondary color for distinction
          >
            {t('common.learnMore')} {/* Assuming 'common.learnMore' exists in translations */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsPreview;