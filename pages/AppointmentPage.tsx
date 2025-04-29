import React, { useState } from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const AppointmentPage: React.FC = () => {
  // ...existing hooks and state...

  return (
    <>
      <SEO
        title="Book an Appointment | Gedaa Clinic Addis Ababa"
        description="Schedule your consultation or check-up with Gedaa Clinic online. Fast booking, WhatsApp, Telegram, call, or visit for top medical care in Addis Ababa."
        keywords={[
          "appointment booking",
          "medical booking",
          "consultation Addis Ababa",
          "clinic near me",
          "book doctor online",
          "clinic appointment",
          "Gedaa Clinic"
        ]}
        canonicalUrl="https://geda.vercel.app/appointment"
        ogUrl="https://geda.vercel.app/appointment"
        ogTitle="Book an Appointment at Gedaa Clinic"
        ogDescription="Book medical appointments instantly. Gedaa Clinic - fast, affordable healthcare in Addis Ababa."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Book a Medical Consultation | Gedaa Clinic"
        twitterDescription="Easily book your check-up or consultation with Gedaa Clinic in Addis Ababa."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "MedicalClinic",
          "name": "Gedaa Clinic",
          "url": "https://geda.vercel.app/appointment",
          "serviceProvided": [
            "General Check-up",
            "Pediatric Consultation"
          ],
          "telephone": "+251112345678",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Mikael",
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": "https://geda.vercel.app/appointment",
            "name": "Book Medical Appointment"
          }
        }}
      />
      {/* ...rest of AppointmentPage content... */}
    </>
  );
};

export default AppointmentPage;