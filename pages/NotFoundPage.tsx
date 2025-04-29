import React from 'react';
import SEO from '../components/common/SEO';
// ...rest of existing imports...

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Gedaa Clinic"
        description="The page you’re looking for does not exist. Visit Gedaa Clinic for trusted medical services and appointments."
        keywords={[
          "404",
          "not found",
          "Gedaa Clinic",
          "medical services",
          "Addis Ababa clinic"
        ]}
        canonicalUrl="https://geda.vercel.app/404"
        ogUrl="https://geda.vercel.app/404"
        ogTitle="Page Not Found - Gedaa Clinic"
        ogDescription="Sorry, this page was not found. Gedaa Clinic: reliable healthcare in Addis Ababa."
        ogImage="https://geda.vercel.app/assets/images/doc.png"
        twitterTitle="Gedaa Clinic - Page Not Found"
        twitterDescription="The page does not exist. Gedaa Clinic is here to support your health journey."
        twitterImage="https://geda.vercel.app/assets/images/doc.png"
      />
      {/* ...rest of NotFoundPage content... */}
    </>
  );
};

export default NotFoundPage;