import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Chatbot from './components/common/Chatbot';
import LanguageSwitcher from './components/common/LanguageSwitcher';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update document title on route change
  useEffect(() => {
    const pathToTitle: Record<string, string> = {
      '/': 'GEDA Clinic - Your Health, Our Commitment',
      '/about': 'About Us - GEDA Clinic',
      '/services': 'Our Services - GEDA Clinic',
      '/doctors': 'Our Doctors - GEDA Clinic',
      '/appointment': 'Book Appointment - GEDA Clinic',
      '/contact': 'Contact Us - GEDA Clinic',
      '/testimonials': 'Patient Testimonials - GEDA Clinic',
    };

    document.title = pathToTitle[location.pathname] || 'GEDA Clinic';
  }, [location.pathname]);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Fixed elements */}
      <LanguageSwitcher />
      <Chatbot isOpen={isChatbotOpen} toggle={toggleChatbot} />
      
      {/* Chatbot toggle button */}
      <button
        className="fixed bottom-6 right-6 bg-primary-500 text-white rounded-full p-3 shadow-lg z-50 hover:bg-primary-600 transition-all duration-300"
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        {isChatbotOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default App;
