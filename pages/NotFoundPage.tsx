import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Mealini Dental Clinic"
        description="The page you’re looking for does not exist. Visit Mealini Dental Clinic for trusted dental services and appointments."
        keywords={[
          "404",
          "not found",
          "Mealini Dental Clinic", // Changed clinic name
          "dental services", // Changed service type
          "NA dental clinic", // Changed location and service type
          "dentist NA" // Added specific dental keyword
        ]}
        canonicalUrl="https://mealini.vercel.app/404" // Changed URL base
        ogUrl="https://mealini.vercel.app/404" // Changed URL base
        ogTitle="Page Not Found - Mealini Dental Clinic" // Changed clinic name
        ogDescription="Sorry, this page was not found. Mealini Dental Clinic: reliable dental care in NA." // Changed clinic name and location
        ogImage="https://mealini.vercel.app/assets/images/mealini-dental.png" // Changed image name
        twitterTitle="Mealini Dental Clinic - Page Not Found" // Changed clinic name
        twitterDescription="The page does not exist. Mealini Dental Clinic is here to support your dental health journey." // Changed clinic name and focus
        twitterImage="https://mealini.vercel.app/assets/images/mealini-dental.png" // Changed image name
      />
      {/* ...rest of NotFoundPage content... */}
    </>
  );
};

export default NotFoundPage;