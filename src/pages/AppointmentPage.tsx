import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Users, Phone, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { Doctor } from '../types';

const AppointmentPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  // Get doctors from translations
  const doctors = t('doctors.doctorsList', { returnObjects: true }) as Doctor[];
  
  // Services options
  const services = [
    t('services.generalMedicine.title'),
    t('services.pediatrics.title')
  ];
  
  // Time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader 
        title={t('appointment.title')} 
        subtitle={t('appointment.subtitle')}
        backgroundImage="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Appointment Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Form Column */}
              <div>
                <SectionTitle 
                  title={t('appointment.formTitle')}
                  center={false}
                />
                
                {isSuccess ? (
                  <motion.div
                    className="bg-green-50 p-6 rounded-lg border border-green-100 flex flex-col items-center text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Appointment Request Submitted!</h3>
                    <p className="text-green-700">{t('appointment.successMessage')}</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
                    >
                      Book Another Appointment
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.nameLabel')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.emailLabel')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        {t('appointment.phoneLabel')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.dateLabel')} *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.timeLabel')} *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="doctor" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.doctorLabel')}
                        </label>
                        <select
                          id="doctor"
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">No preference</option>
                          {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                          {t('appointment.serviceLabel')} *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        {t('appointment.messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-md font-medium transition-colors duration-300 flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          {t('appointment.submitButton')}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Options */}
              <div>
                <SectionTitle 
                  title={t('appointment.contactTitle')} 
                  center={false}
                />
                
                <div className="space-y-6">
                  <motion.div
                    className="bg-green-50 p-6 rounded-lg border border-green-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{t('appointment.whatsappTitle')}</h3>
                    <p className="text-green-700 mb-4">{t('appointment.whatsappText')}</p>
                    <a
                      href="https://wa.me/251112345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M7.5 10C8.33 10 9 9.33 9 8.5C9 7.67 8.33 7 7.5 7C6.67 7 6 7.67 6 8.5C6 9.33 6.67 10 7.5 10M16.5 10C17.33 10 18 9.33 18 8.5C18 7.67 17.33 7 16.5 7C15.67 7 15 7.67 15 8.5C15 9.33 15.67 10 16.5 10M12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
                      </svg>
                      +251 11 234 5678
                    </a>
                  </motion.div>
                  
                  <motion.div
                    className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{t('appointment.telegramTitle')}</h3>
                    <p className="text-blue-700 mb-4">{t('appointment.telegramText')}</p>
                    <a
                      href="https://t.me/gedaclinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M8.89,13.17L8.12,16.47C8.09,16.61 8.12,16.76 8.21,16.88C8.29,17 8.42,17.08 8.57,17.08C8.71,17.08 8.84,17.01 8.92,16.9L10.97,14.39L13.97,16.47C14.17,16.62 14.44,16.54 14.53,16.32L17.25,9.49C17.33,9.3 17.26,9.07 17.08,8.96C16.89,8.85 16.66,8.89 16.53,9.08L8.97,17.13L8.89,13.17Z" />
                      </svg>
                      @gedaclinic
                    </a>
                  </motion.div>
                  
                  <motion.div
                    className="bg-neutral-50 p-6 rounded-lg border border-neutral-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{t('appointment.phoneTitle')}</h3>
                    <p className="text-neutral-600 mb-4">{t('appointment.phoneText')}</p>
                    <a
                      href="tel:+251112345678"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      +251 11 234 5678
                    </a>
                  </motion.div>
                </div>
                
                <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Working Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-neutral-700">Monday - Friday</span>
                      <span className="text-primary-700 font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-700">Saturday</span>
                      <span className="text-primary-700 font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-700">Sunday</span>
                      <span className="text-primary-700 font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="py-12 bg-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{t('contact.emergencyTitle')}</h2>
          <p className="text-white/90 mb-3">{t('contact.emergencyText')}</p>
          <a
            href={`tel:${t('contact.emergencyNumber')}`}
            className="text-xl font-bold hover:underline"
          >
            {t('contact.emergencyNumber')}
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default AppointmentPage;