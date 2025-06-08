import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Mealini Dental Clinic | NA Dental Center"
        description="Contact Mealini Dental Clinic for dental services, directions, and working hours in NA. Call, email, WhatsApp, or visit our state-of-the-art clinic today."
        keywords={[
          "contact dental clinic",
          "dental clinic phone NA",
          "dental directions",
          "dental clinic location",
          "Mealini Dental Clinic address",
          "dental working hours",
          "dental contact",
          "dentist NA"
        ]}
        canonicalUrl="https://mealini.vercel.app/contact"
        ogUrl="https://mealini.vercel.app/contact"
        ogTitle="Contact Mealini Dental Clinic"
        ogDescription="Find Mealini Dental Clinic contact info, address, map, phone, email, and opening hours."
        ogImage="https://mealini.vercel.app/assets/images/mealini-dental.png" // Changed image name for relevance
        twitterTitle="Mealini Dental Clinic Contact Details"
        twitterDescription="Reach Mealini Dental Clinic in NA - call, email, or visit us for appointments and info."
        twitterImage="https://mealini.vercel.app/assets/images/mealini-dental.png" // Changed image name for relevance
        structuredData={{
          "@context": "http://schema.org",
          "@type": "DentalClinic", // Changed to DentalClinic
          "name": "Mealini Dental Clinic", // Changed clinic name
          "url": "https://mealini.vercel.app/contact", // Changed URL
          "telephone": "+1234567890", // Placeholder phone number
          "email": "info@mealinidental.com", // Placeholder email
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Street", // Generic street address
            "addressLocality": "NA", // Changed locality
            "addressCountry": "US" // Changed country (assuming US for NA, adjust as needed)
          }
        }}
      />
      {/* ...rest of ContactPage content... */}
    </>
  );
};
                                                    
export default ContactPage;
