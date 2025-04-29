import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string; // Should be an absolute URL
  ogUrl?: string; // Should be the canonical URL of the page
  twitterCard?: string; // e.g., 'summary_large_image'
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string; // Should be an absolute URL
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = ['GEDA Clinic', 'healthcare', 'general medicine', 'pediatrics', 'doctor', 'clinic', 'appointment', 'Addis Ababa', 'clinic near me', 'medical services', 'lab tests'],
  author = 'GEDA Clinic',
  ogTitle,
  ogDescription,
  ogImage = 'https://geda.vercel.app/favicon.svg', // Default OG image
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage = 'https://geda.vercel.app/favicon.svg', // Default Twitter image
  canonicalUrl,
}) => {
  const siteName = 'GEDA Clinic';
  const fullTitle = `${title} | ${siteName}`;
  const effectiveOgTitle = ogTitle || title;
  const effectiveOgDescription = ogDescription || description;
  const effectiveTwitterTitle = twitterTitle || title;
  const effectiveTwitterDescription = twitterDescription || description;

  // Basic Local Business Schema (Customize with actual details)
  const schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'MedicalClinic',
    name: 'GEDA Clinic',
    description: 'Providing quality general medicine and pediatric healthcare services in Addis Ababa.',
    url: 'https://geda.vercel.app/',
    logo: 'https://geda.vercel.app/favicon.svg', // Replace with actual logo URL
    image: 'https://geda.vercel.app/assets/images/general.jpg', // Replace with a representative image URL
    telephone: '+251-XXX-XXXXXX', // Add actual phone number
    email: 'info@gedaclinic.com', // Add actual email
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address', // Add actual address
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa',
      postalCode: 'XXXX', // Add actual postal code
      addressCountry: 'ET',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00', // Adjust opening time
        closes: '20:00', // Adjust closing time
      },
    ],
    sameAs: [
      // Add links to social media profiles if available
      // "https://www.facebook.com/gedaclinic",
      // "https://www.twitter.com/gedaclinic",
    ],
    // Add more details like priceRange, reviews, etc. if applicable
  };


  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content={author} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={effectiveOgTitle} />
      <meta property="og:description" content={effectiveOgDescription} />
      <meta property="og:site_name" content={siteName} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}


      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={effectiveTwitterTitle} />
      <meta name="twitter:description" content={effectiveTwitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {/* Optional: Add Twitter site handle if available */}
      {/* <meta name="twitter:site" content="@YourTwitterHandle" /> */}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;
