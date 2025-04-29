import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  author?: string;
  canonicalUrl?: string;
  ogUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
}

const defaultAuthor = "Gedaa Clinic";
const defaultBusinessSchema = {
  "@context": "http://schema.org",
  "@type": "MedicalClinic",
  "name": "Gedaa Clinic",
  "image": "https://geda.vercel.app/assets/images/doc.png",
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
  "url": "https://geda.vercel.app",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "196"
  }
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  ogUrl,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(", ")} />
    <meta name="author" content={author || defaultAuthor} />
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl || canonicalUrl || "https://geda.vercel.app"} />
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    <meta property="og:image" content={ogImage || "https://geda.vercel.app/assets/images/doc.png"} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={ogUrl || canonicalUrl || "https://geda.vercel.app"} />
    <meta name="twitter:title" content={twitterTitle || title} />
    <meta name="twitter:description" content={twitterDescription || description} />
    <meta name="twitter:image" content={twitterImage || ogImage || "https://geda.vercel.app/assets/images/doc.png"} />
    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify(structuredData || defaultBusinessSchema)}
    </script>
  </Helmet>
);

export default SEO;