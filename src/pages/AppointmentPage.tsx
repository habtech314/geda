import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { Doctor } from '../components/types';

const AppointmentPage: React.FC = () => {
  const { t } = useTranslation();

  const doctors = t('doctors.doctorsList', { returnObjects: true }) as Doctor[];
  const defaultDoctor = doctors.find(d => d.name === 'Melani')?.name || 'Melani';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: defaultDoctor,
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const services = [
    t('services.generalMedicine.title'),
    t('services.pediatrics.title')
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to book appointment');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: defaultDoctor,
        service: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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
        backgroundImage="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionTitle title={t('appointment.formTitle')} center={false} />
              {isSuccess ? (
                <motion.div
                  className="bg-green-50 p-6 rounded-lg border border-green-100 flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Appointment Request Submitted!
                  </h3>
                  <p className="text-green-700">{t('appointment.successMessage')}</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <inputField name="name" value={formData.name} onChange={handleChange} label={t('appointment.nameLabel')} required />
                    <inputField name="email" type="email" value={formData.email} onChange={handleChange} label={t('appointment.emailLabel')} required />
                  </div>

                  <inputField name="phone" type="tel" value={formData.phone} onChange={handleChange} label={t('appointment.phoneLabel')} required />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <inputField name="date" type="date" value={formData.date} onChange={handleChange} label={t('appointment.dateLabel')} min={new Date().toISOString().split('T')[0]} required />
                    <selectField name="time" value={formData.time} onChange={handleChange} label={t('appointment.timeLabel')} options={timeSlots} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <selectField name="doctor" value={formData.doctor} onChange={handleChange} label={t('appointment.doctorLabel')} options={doctors.map(d => d.name)} />
                    <selectField name="service" value={formData.service} onChange={handleChange} label={t('appointment.serviceLabel')} options={services} required />
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t('appointment.messageLabel')}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  />

                  {error && <p className="text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition"
                  >
                    {isSubmitting ? 'Submitting...' : t('appointment.submitButton')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

// Input field reusable component
const inputField = ({ name, type = 'text', value, onChange, label, required = false, min }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1">{label}{required && ' *'}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500"
    />
  </div>
);

// Select field reusable component
const selectField = ({ name, value, onChange, label, options, required = false }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1">{label}{required && ' *'}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500"
    >
      <option value="">Select</option>
      {options.map((option: string) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default AppointmentPage;
