import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Doctor } from '../types'; // Ensure correct type import path

// Define the specific team members (same as in DoctorsPage.tsx)
const teamMembers: Doctor[] = [
  {
    id: 1, 
    name: 'DR. Feyisa', 
    specialty: 'General Practitioner', 
    bio: 'DR. Feyisa has over 10 years of experience in general medicine.', 
    education: 'MD, Addis Ababa University', 
    experience: '10+ Years', 
    image: '/../assets/images/doc.png' 
  },
  {
    id: 2, 
    name: 'Nurse. Hana', 
    specialty: 'Registered Nurse', 
    bio: 'Nurse. Hana is dedicated to providing compassionate patient care.', 
    education: 'BSc Nursing, Gondar University', 
    experience: '5+ Years', 
    image: '.' 
  }
];

const DoctorsPreview: React.FC = () => {
  const { t } = useTranslation();
  // Removed logic fetching all doctors and separate images array

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.featuredDoctorsTitle')} 
          subtitle="Our expert team of medical professionals is dedicated to providing the highest standard of care"
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
                    to="/doctors" // Link remains the same
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
            to="/doctors"
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
