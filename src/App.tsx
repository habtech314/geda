import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';

function App() {
 
  const location = useLocation();
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
    };

    document.title = pathToTitle[location.pathname] || 'GEDA Clinic';
  }, [location.pathname]);

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
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Fixed elements */}
      
    </div>
  );
}

export default App;
