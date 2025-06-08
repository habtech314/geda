import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Calendar, Facebook, Twitter, Instagram, Linkedin, Stethoscope, Home, Info, User } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/services', label: t('navigation.services') },
    { path: '/doctors', label: t('navigation.doctors') },
    { path: '/contact', label: t('navigation.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary-500 text-goldenrod py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${t('common.email')}`}
                className="hidden md:inline text-sm hover:text-goldenrod/80 transition-colors"
              >
                {t('common.email')}
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <a href="#" className="text-goldenrod hover:text-goldenrod/80 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-goldenrod hover:text-goldenrod/80 transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-goldenrod hover:text-goldenrod/80 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-goldenrod hover:text-goldenrod/80 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`py-4 ${isScrolled ? 'py-2' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold" style={{ color: 'goldenrod' }}>Melani</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-4 overflow-x-auto">
              {navItems.map((item) => {
                const iconMap: Record<string, JSX.Element> = {
                  '/': <Home className="w-5 h-5" />,
                  '/about': <Info className="w-5 h-5" />,
                  '/services': <Stethoscope className="w-5 h-5" />,
                  '/doctors': <User className="w-5 h-5" />,
                  '/contact': <Phone className="w-5 h-5" />,
                };
                const IconComponent = iconMap[item.path];
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-300 flex items-center whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-primary-500'
                        : 'text-goldenrod hover:text-primary-500'
                    }`}
                  >
                    <span className="hidden md:inline">{item.label}</span>
                    <span className="inline md:hidden">{IconComponent}</span>
                  </Link>
                );
              })}
              <Link
                to="/appointment"
                className="bg-primary-500 text-goldenrod px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center whitespace-nowrap hidden sm:flex"
              >
                <Calendar size={16} className="mr-1" />
                <span className="inline md:inline">{t('common.bookAppointment')}</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
