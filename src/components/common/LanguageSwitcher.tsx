import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { LanguageOption } from '../../types';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };
  
  return (
    <div className="fixed top-24 right-6 z-40">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 bg-white rounded-md px-3 py-2 shadow-md hover:bg-neutral-50 transition-colors"
          aria-label="Toggle language menu"
        >
          <Globe size={18} className="text-primary-500" />
          <span className="text-sm font-medium">{currentLanguage.flag}</span>
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden w-32 z-50"
            >
              <div className="py-1">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`flex items-center w-full px-4 py-2 text-sm ${
                      i18n.language === language.code
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <span className="mr-2">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSwitcher;