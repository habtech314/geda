import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">{t('common.clinic')}</h3>
            <p className="text-neutral-300 mb-4">{t('home.welcomeText').substring(0, 120)}...</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">{t('common.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="tel:+251112345678" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('common.phone')}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@gedaclinic.com" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('common.email')}</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">{t('navigation.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.home')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.about')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.services')}</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.doctors')}</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.appointment')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.contact')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">{t('common.ourServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('services.generalMedicine.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('services.pediatrics.title')}</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-300 hover:text-primary-400 transition-colors">{t('navigation.testimonials')}</Link>
              </li>
            </ul>
            
            {/* Hours */}
            <h3 className="text-xl font-bold mb-2 mt-6 text-primary-400">{t('contact.hoursTitle')}</h3>
            <div className="flex items-start">
              <Clock size={18} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
              <p className="text-neutral-300 whitespace-pre-line">{t('contact.hours')}</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">{t('contact.formTitle')}</h3>
            <p className="text-neutral-300 mb-4">{t('contact.subtitle')}</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 text-neutral-200 rounded-md focus:outline-none focus:border-primary-400"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors duration-300"
              >
                {t('contact.submitButton')}
              </button>
            </form>
            
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-primary-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Facebook">
                  <Facebook size={22} />
                </a>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Twitter">
                  <Twitter size={22} />
                </a>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Instagram">
                  <Instagram size={22} />
                </a>
                <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">{t('common.copyright').replace('2025', currentYear.toString())}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 text-sm hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 text-sm hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
