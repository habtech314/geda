import React from 'react'; // Removed useState
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Removed unused icons: MapPin, Mail, Phone, Calendar
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { Doctor } from '../components/types'; // Corrected import path

// Define the specific team members
const teamMembers: Doctor[] = [
  {
    id: 1, // Changed from 'doc1' to number
    name: 'Dr. Abebe Kebede', // Example Doctor Name
    specialty: 'General Practitioner', // Example Specialty
    bio: 'Dr. Kebede has over 10 years of experience in general medicine.', // Example Bio
    education: 'MD, Addis Ababa University', // Example Education
    experience: '10+ Years', // Example Experience
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example Image
  },
  {
    id: 2, // Changed from 'nurse1' to number
    name: 'Nurse Aster Lemma', // Example Nurse Name
    specialty: 'Registered Nurse', // Example Specialty/Role
    bio: 'Nurse Lemma is dedicated to providing compassionate patient care.', // Example Bio
    education: 'BSc Nursing, Gondar University', // Example Education
    experience: '5+ Years', // Example Experience
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Example Image
  }
];

const DoctorsPage: React.FC = () => {
  const { t } = useTranslation();
  // Removed activeFilter state and related logic (doctors, doctorImages, specialties, filteredDoctors)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title={t('doctors.title')} 
        subtitle={t('doctors.subtitle')}
        backgroundImage="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Doctors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Medical Team"
            subtitle="Our highly qualified medical professionals are dedicated to providing exceptional care"
          />
          
          {/* Removed Specialty Filters Section */}
          
          {/* Team Member Cards */}
          {/* Adjusted grid columns for 2 items, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto"> 
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 flex flex-col" // Added flex flex-col
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, y: 20 }}
                layout // Keep layout animation
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} // Use the specific image from the member object
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Added flex-grow to make content area expand */}
                <div className="p-6 flex flex-col flex-grow"> 
                  <h3 className="text-xl font-semibold mb-1 text-neutral-800">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.specialty}</p>
                  <p className="text-neutral-600 text-sm mb-4 flex-grow">{member.bio}</p> {/* Added flex-grow */}
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-neutral-600">
                      <span className="font-medium mr-2">Education:</span>
                      {/* Use optional chaining in case education/experience is missing */}
                      <span>{member.education ?? 'N/A'}</span> 
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <span className="font-medium mr-2">Experience:</span>
                      <span>{member.experience ?? 'N/A'}</span>
                    </div>
                  </div>
                  
                  {/* Added mt-auto to push button to bottom */}
                  <a 
                    href="/appointment"
                    className="block bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-md font-medium transition-colors duration-300 mt-auto" 
                  >
                    Book Appointment
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Join Our Team"
              subtitle="We're always looking for talented and passionate healthcare professionals to join our team"
            />
            
            <motion.p
              className="text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              If you're a dedicated medical professional who shares our commitment to providing exceptional patient care, we'd love to hear from you. Send your resume to careers@gedaclinic.com.
            </motion.p>
            
            <motion.a
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DoctorsPage;
