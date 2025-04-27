import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Testimonial } from '../../types';

const TestimonialsPreview: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Get testimonials from translations
  const testimonials = t('testimonials.testimonialsList', { returnObjects: true }) as Testimonial[];
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-16 md:py-24 bg-primary-500 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('home.testimonialsTitle')} 
          subtitle="Our patients share their experiences with GEDA Clinic"
          light={true}
        />
        
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`bg-white text-neutral-800 p-8 rounded-lg shadow-lg absolute w-full transition-all duration-500`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  zIndex: index === activeIndex ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <div className="flex mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-4xl text-primary-300">"</div>
                </div>
                
                <p className="text-neutral-600 mb-4">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white text-primary-500 hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white text-primary-500 hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/testimonials"
            className="inline-block bg-white hover:bg-neutral-100 text-primary-500 px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            {t('navigation.testimonials')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;