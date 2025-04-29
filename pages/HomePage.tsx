import React from 'react';
import SEO from '../components/common/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Gedaa Clinic - Best Clinic in Addis Ababa | Medical & Pediatric Care"
        description="Gedaa Clinic offers quality medical services in Addis Ababa, including pediatrics, lab tests, and general healthcare with top professionals. Book today!"
        keywords={[
          "Best Clinic in Addis Ababa",
          "Addis Ababa clinic",
          "clinic near me",
          "medical services",
          "pediatrics",
          "lab tests",
          "emergency clinic Tulu Dimtu"
        ]}
        canonicalUrl="https://geda.vercel.app/"
        ogUrl="https://geda.vercel.app/"
        ogTitle="Gedaa Clinic | Comprehensive Medical & Pediatric Services"
        ogDescription="Experience premier healthcare at Gedaa Clinic. Book appointments, access expert doctors, and discover trusted medical services in Addis Ababa."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Gedaa Clinic - Best Medical Services in Addis Ababa"
        twitterDescription="Premier clinic for family health, pediatrics, labs, and care in Addis Ababa."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "MedicalClinic",
          "name": "Gedaa Clinic",
          "image": "https://geda.vercel.app/assets/images/doc.png",
          "url": "https://geda.vercel.app/",
          "telephone": "+251112345678",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Mikael",
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
          },
          "openingHours": [
            "Mo-Fr 08:00-20:00",
            "Sa 09:00-17:00"
          ],
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "196"
          },
          "review": [
            {
              "@type": "Review",
              "author": "A. Kassahun",
              "datePublished": "2023-06-11",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": "Modern clinic, friendly doctors, very clean."
            }
          ]
        }}
      />
      {/* ...existing homepage content... */}
    </>
  );
};

export default HomePage;