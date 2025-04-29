import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet if not already (though SEO handles it)
import SEO from '../components/common/SEO'; // Import the SEO component
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import WelcomeSection from '../components/home/WelcomeSection';

import AppointmentCTA from '../components/home/AppointmentCTA';
import { Star, Quote, HeartPulse, Stethoscope, Baby, Users, ClipboardCheck, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle'; // Adjust the path as needed
import generalMedicineImg from '../assets/images/general.jpg';
import pediatricsImg from '../assets/images/paiadtry.jpg';
import familyPlanningImg from '../assets/images/family.jpg';
import antenatalCareImg from '../assets/images/antenatal.jpg';
import prenatalCareImg from '../assets/images/parental.jpg';
import DoctorsPreview from '../pages/DoctorsPage'; // Adjust the path if necessary

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

const services = [
  {
    id: 'general-medicine',
    title: 'General Medicine',
    description: 'Comprehensive care for adults and children.',
    features: ['Routine check-ups', 'Chronic disease management', 'Preventive care'],
    icon: 'Stethoscope',
    image: generalMedicineImg, // Use imported image
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents.',
    features: ['Vaccinations', 'Growth monitoring', 'Developmental assessments'],
    icon: 'Baby',
    image: pediatricsImg, // Use imported image
  },
  {
    id: 'family-planning',
    title: 'Family Planning',
    description: 'Guidance and services for family planning.',
    features: ['Contraceptive counseling', 'Fertility assessments', 'Reproductive health education'],
    icon: 'Users',
    image: familyPlanningImg, // Use imported image
  },
  {
    id: 'antenatal-care',
    title: 'Antenatal Care',
    description: 'Care for expectant mothers during pregnancy.',
    features: ['Prenatal check-ups', 'Ultrasound scans', 'Nutritional counseling'],
    icon: 'HeartPulse',
    image: antenatalCareImg, // Use imported image
  },
  {
    id: 'prenatal-care',
    title: 'Prenatal Care',
    description: 'Support and care for a healthy pregnancy.',
    features: ['Birth planning', 'Labor preparation', 'Postnatal follow-ups'],
    icon: 'ClipboardCheck',
    image: prenatalCareImg, // Use imported image
  },
];

const HomePage: React.FC = () => {
  const pageTitle = "GEDA Clinic - Quality Healthcare in Addis Ababa";
  const pageDescription = "GEDA Clinic offers comprehensive general medicine and pediatric care in Addis Ababa. Experienced doctors, modern facilities. Book your appointment today!";
  const canonicalUrl = "https://geda.vercel.app/";
  const ogImageUrl = "https://geda.vercel.app/assets/images/general.jpg"; // Use a relevant image URL

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
        // Keywords can use the default or be customized:
        // keywords={['GEDA Clinic', 'Addis Ababa', 'healthcare', 'pediatrics', 'general medicine', 'doctor near me']}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WelcomeSection />
 {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Comprehensive Healthcare Solutions"
            subtitle="At GEDA Clinic, we offer a range of medical services to meet the healthcare needs of your entire family. Our team of experienced doctors and medical professionals are dedicated to providing high-quality care in a comfortable and welcoming environment."
          />
          
          <div className="mt-12 space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                        {/* Service Image */}
          <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={service.image} // Use the imported image here
                alt={service.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

                {/* Service Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-block p-3 mb-4 bg-primary-50 rounded-full">
                    {service.icon === 'Stethoscope' && <Stethoscope className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'Baby' && <Baby className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'Users' && <Users className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'HeartPulse' && <HeartPulse className="w-8 h-8 text-primary-500" />}
                    {service.icon === 'ClipboardCheck' && <ClipboardCheck className="w-8 h-8 text-primary-500" />}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-neutral-800">{service.title}</h3>
                  <p className="text-neutral-600 mb-6">{service.description}</p>

                  <h4 className="text-lg font-medium mb-3 text-neutral-800">Our {service.title} Services Include:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      
      <DoctorsPreview />
      {/* Appointment Call-to-Action Section */}
      <AppointmentCTA />

      {/* Testimonials Section */}
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

     {/* Map and Opening Hours Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-8">Visit Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Map */}
      <div>
        <iframe
          title="Clinic Location"
          // --- Updated src attribute ---
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.0816115257817!2d38.8188484!3d8.8632834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b794457a3e095%3A0xf4c29892d9cf462f!2zVHVsdSBEaW10dSBDb25kb21pbml1bXMgUHJvamVjdCAxMiB8IOGJseGIiSDhi7LhiJ3hibEg4Yqu4YqV4Yu24Yia4YqS4Yuo4YidIOGNleGIruGMgOGKreGJtSAxMg!5e1!3m2!1sen!2set!4v1745784802183!5m2!1sen!2set"
          width="100%" // Kept 100% for responsiveness
          height="450" // Updated height
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Added referrer policy
        ></iframe>
      </div>

      {/* Opening Hours */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Opening Hours</h3>
        <ul className="text-neutral-600 space-y-2">
          <li>
            <strong>Monday - Friday:</strong> 1:30 AM - 2:00 PM
          </li>
          <li>
            <strong>Saturday:</strong> 2:00 AM - 12:00 PM
          </li>
          <li>
            <strong>Sunday:</strong> Closed
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      </motion.div>
    </>
  );
};

export default HomePage;
