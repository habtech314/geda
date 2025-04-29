import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import SEO from '../components/common/SEO'; // Import the SEO component
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Abel Zeleke',
    rating: 5,
    text: 'The service was excellent and the staff was very friendly.',
  },
  {
    id: 2,
    name: 'Blen Admasu',
    rating: 4,
    text: 'I had a great experience and would highly recommend this clinic.',
  },
 
];

const TestimonialsPreview: React.FC = () => { // Consider renaming if this IS the main Testimonials page
  const { t } = useTranslation();

  const pageTitle = t('testimonials.title', 'Patient Testimonials'); // Add 'testimonials.title' to translation files
  const pageDescription = t('testimonials.subtitle', 'Hear from satisfied patients about their experience at GEDA Clinic.'); // Add 'testimonials.subtitle'
  const canonicalUrl = "https://geda.vercel.app/testimonials";
  // Use a relevant image, maybe a collage or a generic positive healthcare image
  const ogImageUrl = "https://geda.vercel.app/assets/images/general.jpg"; // Using general image as placeholder

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogUrl={canonicalUrl}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogImage={ogImageUrl}
        twitterTitle={pageTitle}
        twitterDescription={pageDescription}
        twitterImage={ogImageUrl}
        keywords={[ // Custom keywords for Testimonials page
          'GEDA Clinic testimonials',
          'patient reviews Addis Ababa',
          'clinic feedback',
          'healthcare experience',
          'doctor reviews',
        ]}
      />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 relative transition-all duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-100" />

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800">{testimonial.name}</h3>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-neutral-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPreview;
