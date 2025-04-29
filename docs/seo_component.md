# SEO Component Usage Guide

## Overview
This project uses a reusable `SEO` component (with `react-helmet`) to inject dynamic meta tags, Open Graph, Twitter cards, canonical links, and JSON-LD structured data for each page. This approach significantly enhances search engine optimization (SEO), indexability, and social sharing.

## Integrating SEO in a Page

1. **Import the SEO component:**
    ```tsx
    import SEO from '../components/common/SEO';
    ```

2. **Add the SEO component at the top of your page's component tree:**
    ```tsx
    <SEO
      title="Your page title"
      description="Your meta description"
      keywords={["keyword1", "keyword2"]}
      canonicalUrl="https://geda.vercel.app/your-path"
      ogUrl="https://geda.vercel.app/your-path"
      ogTitle="Open Graph title"
      ogDescription="Open Graph description"
      ogImage="https://geda.vercel.app/assets/images/doc.png"
      twitterTitle="Twitter Card title"
      twitterDescription="Twitter Card description"
      twitterImage="https://geda.vercel.app/assets/images/doc.png"
      structuredData={{ /* JSON-LD object for your page */ }}
    />
    ```
   - `structuredData` should be a JSON-LD object describing your page, business, department, reviews, etc. (see [schema.org MedicalClinic](https://schema.org/MedicalClinic))

3. **Best Practices:**
   - Use unique and descriptive title and meta description for each page.
   - Ensure all images have meaningful `alt` attributes for accessibility.
   - Maintain a proper heading hierarchy (`h1`, `h2`, etc.).
   - Use internal links to your main service and contact pages.
   - For new pages, simply re-use the SEO component and supply new props as needed.
   - The default schema has Gedaa Clinic's core info; override on specific pages if deeper detail is needed.

## References

- [react-helmet documentation](https://github.com/nfl/react-helmet)
- [Schema.org Local Business](https://schema.org/MedicalClinic)