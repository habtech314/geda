import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Medical Services | Gedaa Clinic Addis Ababa"
        description="Explore Gedaa Clinic's medical services: general check-ups, pediatric care, lab tests, and emergency services in Addis Ababa."
        keywords={[
          "medical services",
          "Addis Ababa health",
          "pediatrics",
          "lab testing",
          "emergency care",
          "walk-in clinic",
          "general medicine"
        ]}
        canonicalUrl="https://geda.vercel.app/services"
        ogUrl="https://geda.vercel.app/services"
        ogTitle="Gedaa Clinic - Medical Services"
        ogDescription="Discover comprehensive health services at Gedaa Clinic: check-ups, pediatrics, labs, and more."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Gedaa Clinic Services"
        twitterDescription="General medicine, pediatrics, labs: quality health care at Gedaa Clinic."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "MedicalClinic",
          "name": "Gedaa Clinic",
          "url": "https://geda.vercel.app/services",
          "department": [
            {
              "@type": "MedicalDepartment",
              "name": "Pediatrics"
            },
            {
              "@type": "MedicalDepartment",
              "name": "General Medicine"
            },
            {
              "@type": "MedicalDepartment",
              "name": "Laboratory"
            }
          ],
          "serviceOffered": [
            "General Check-up",
            "Pediatrics",
            "Laboratory Testing",
            "Emergency Services"
          ]
        }}
      />
      {/* ...rest of ServicesPage content... */}
    </>
  );
};

export default ServicesPage;