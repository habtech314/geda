import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dental Services | Mealini Dental Clinic NA"
        description="Explore Mealini Dental Clinic's dental services: general check-ups, cleanings, fillings, cosmetic dentistry, and emergency dental care in NA."
        keywords={[
          "dental services",
          "NA dental health",
          "pediatric dentistry",
          "teeth cleaning",
          "fillings",
          "root canal",
          "cosmetic dentistry",
          "emergency dental care",
          "walk-in dentist",
          "general dentistry",
          "oral hygiene"
        ]}
        canonicalUrl="https://mealini.vercel.app/services"
        ogUrl="https://mealini.vercel.app/services"
        ogTitle="Mealini Dental Clinic - Dental Services"
        ogDescription="Discover comprehensive dental services at Mealini Dental Clinic: check-ups, cleanings, cosmetic procedures, and more."
        ogImage="https://mealini.vercel.app/assets/images/mealini-dental.png"
        twitterTitle="Mealini Dental Clinic Services"
        twitterDescription="Dental check-ups, cleanings, cosmetic dentistry: quality dental care at Mealini Dental Clinic."
        twitterImage="https://mealini.vercel.app/assets/images/mealini-dental.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "DentalClinic", // Changed to DentalClinic
          "name": "Mealini Dental Clinic", // Changed clinic name
          "url": "https://mealini.vercel.app/services", // Changed URL base
          "department": [
            {
              "@type": "MedicalDepartment", // MedicalDepartment is still used for sub-departments
              "name": "General Dentistry"
            },
            {
              "@type": "MedicalDepartment",
              "name": "Cosmetic Dentistry"
            },
            {
              "@type": "MedicalDepartment",
              "name": "Pediatric Dentistry"
            },
            {
              "@type": "MedicalDepartment",
              "name": "Orthodontics"
            }
          ],
          "serviceOffered": [
            "Dental Check-up",
            "Teeth Cleaning",
            "Dental Fillings",
            "Root Canal Treatment",
            "Tooth Extraction",
            "Dental Implants",
            "Teeth Whitening",
            "Veneers",
            "Braces",
            "Emergency Dental Care"
          ]
        }}
      />
      {/* ...rest of ServicesPage content... */}
    </>
  );
};

export default ServicesPage;