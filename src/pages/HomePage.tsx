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
import postnatalCareImg from '../assets/images/postnatal.jpg'; // Renamed variable
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
    id: 'dental-fillings',
    title: 'Dental Fillings',
    description: 'Restore the health and function of your teeth with our high-quality dental fillings.',
    features: ['Composite Fillings', 'Amalgam Fillings', 'Glass Ionomer Fillings'],
    icon: 'Stethoscope',
    image: generalMedicineImg, // Use imported image
  },
  {
    id: 'braces',
    title: 'Braces (Metal & Ceramic)',
    description: 'Straighten your teeth and achieve a confident smile with our braces options.',
    features: ['Metal Braces', 'Ceramic Braces', 'Lingual Braces', 'Orthodontic Consultation'],
    icon: 'Baby',
    image: pediatricsImg, // Use imported image
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with our long-lasting and natural-looking dental implants.',
    features: ['Single Tooth Implants', 'Multiple Tooth Implants', 'Implant Consultation'],
    icon: 'Users',
    image: prenatalCareImg, // Use imported image
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Specialized dental care for correcting teeth and jaw alignment.',
    features: ['Braces', 'Aligners', 'Retainers'],
    icon: 'ClipboardCheck',
    image: familyPlanningImg, // Use imported image
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    description: 'Specialized dental care for restoring missing or damaged teeth.',
    features: ['Crowns', 'Bridges', 'Dentures'],
    icon: 'ClipboardCheck',
    image: familyPlanningImg, // Use imported image
  }
];

const HomePage: React.FC = () => {
  const pageTitle = "Melani Clinic - Quality Healthcare in Addis Ababa";
  const pageDescription = "Melani Clinic offers comprehensive general medicine and pediatric care in Addis Ababa. Experienced doctors, modern facilities. Book your appointment today!";
const canonicalUrl = "https://melani.vercel.app/";
  const ogImageUrl = "https://melani.vercel.app/assets/images/general.jpg"; // Use a relevant image URL

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
        // keywords={['Melani Clinic', 'Addis Ababa', 'healthcare', 'pediatrics', 'general medicine', 'doctor near me']}
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
            title="Comprehensive Dental Solutions"
            subtitle="At Melani Dental Clinic, we offer a range of dental services to meet the oral healthcare needs of your entire family. Our team of experienced dentists and dental professionals are dedicated to providing high-quality care in a comfortable and welcoming environment."
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
                src="" // Use the imported image here
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
                  <a href="/services" className="inline-block mt-4 px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors duration-300">
                    More Services
                  </a>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.0816115257817!2d38.8188484!3d8.8632834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b794457a3e095%3A0xf4c29892d9cf462f!2zVHVsdUFEaW10dSBDb25kb21pbml1bXMgUHJvamVjdCAxMiB8IOGJseGIiSDhi7LhiJ3hibEg4Yqu4YqV4Yu24Yia4YqS4Yuo4YidIOGNleGIruGMgOGKreGJtSAxMg!5e1!3m2!1sen!2set!4v1745784802183!5m2!1sen!2set"
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
