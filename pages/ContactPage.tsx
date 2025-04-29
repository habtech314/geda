import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Gedaa Clinic | Addis Ababa Medical Center"
        description="Contact Gedaa Clinic for medical services, directions, and working hours in Addis Ababa. Call, email, WhatsApp, or visit our state-of-the-art clinic today."
        keywords={[
          "contact clinic",
          "clinic phone Addis Ababa",
          "medical directions",
          "clinic location",
          "Gedaa Clinic address",
          "working hours",
          "medical contact"
        ]}
        canonicalUrl="https://geda.vercel.app/contact"
        ogUrl="https://geda.vercel.app/contact"
        ogTitle="Contact Gedaa Clinic"
        ogDescription="Find Gedaa Clinic contact info, address, map, phone, email, and opening hours."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Gedaa Clinic Contact Details"
        twitterDescription="Reach Gedaa Clinic in Addis Ababa - call, email, or visit us for appointments and info."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "MedicalClinic",
          "name": "Gedaa Clinic",
          "url": "https://geda.vercel.app/contact",
          "telephone": "+251112345678",
          "email": "info@gedaclinic.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Mikael",
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
          }
        }}
      />
      {/* ...rest of ContactPage content... */}
    </>
  );
};

export default ContactPage;