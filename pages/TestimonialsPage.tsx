import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Patient Testimonials | Gedaa Clinic Addis Ababa"
        description="Read patient reviews and testimonials for Gedaa Clinic, a trusted health provider in Addis Ababa, Ethiopia. See why we're rated highly!"
        keywords={[
          "clinic reviews",
          "Gedaa Clinic testimonials",
          "patient testimonials",
          "Addis Ababa doctor",
          "trusted health provider"
        ]}
        canonicalUrl="https://geda.vercel.app/testimonials"
        ogUrl="https://geda.vercel.app/testimonials"
        ogTitle="What Our Patients Say | Gedaa Clinic"
        ogDescription="Authentic patient reviews and testimonials for Gedaa Clinic, Addis Ababa."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Gedaa Clinic Testimonials"
        twitterDescription="Hear from real patients about their experience with Gedaa Clinic."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
        structuredData={{
          "@context": "http://schema.org",
          "@type": "MedicalClinic",
          "name": "Gedaa Clinic",
          "url": "https://geda.vercel.app/testimonials",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "196"
          },
          "review": [
            {
              "@type": "Review",
              "author": "S. Girma",
              "datePublished": "2023-08-02",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": "Outstanding service and caring doctors at Gedaa Clinic."
            }
          ]
        }}
      />
      {/* ...rest of TestimonialsPage content... */}
    </>
  );
};

export default TestimonialsPage;