"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, User, Mail, Phone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FormState = {
  services: string[];
  contactMethods: string[];
  name: string;
  email: string;
  phone: string;
};

const SERVICES = [
  "Wimpern Neuset",
  "Wimpern Refill",
  "Wimpern Lifting",
  "Augenbrauenstyling",
  "Maniküre",
  "Fußpflege",
  "etwas anderes"
];

const CONTACT_METHODS = [
  "Anruf",
  "Per E-Mail",
  "Per WhatsApp",
  "Per SMS"
];

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    services: [],
    contactMethods: [],
    name: '',
    email: '',
    phone: ''
  });

  const toggleSelection = (field: 'services' | 'contactMethods', value: string) => {
    setFormData(prev => {
      const list = prev[field];
      if (list.includes(value)) {
        return { ...prev, [field]: list.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...list, value] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation for step 3
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Bitte fülle die Pflichtfelder (Name und Telefonnummer) aus.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // Progress percentage
  const progress = step === 1 ? 25 : step === 2 ? 50 : 75;

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-gray-100">
        <div className="w-20 h-20 bg-[#03B19F]/10 text-[#03B19F] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Vielen Dank!</h3>
        <p className="text-lg text-gray-600 mb-8">
          Deine Anfrage wurde erfolgreich gesendet. Ich werde mich so schnell wie möglich bei dir melden.
        </p>
        <Button 
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
            setFormData({ services: [], contactMethods: [], name: '', email: '', phone: '' });
          }}
          className="bg-[#03B19F] hover:bg-[#028E7F] text-white px-8 py-6 rounded-md text-base font-semibold transition-all"
        >
          Weitere Anfrage senden
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border border-gray-100">
      {/* Progress Indicator */}
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold text-gray-500 mb-2 block">{progress}%</span>
        <div className="w-32 h-1 bg-gray-200 mx-auto rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#03B19F] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Welche Dienste dürfen wir dir anbieten?</h2>
              <p className="text-gray-500">(Mehrfachauswahl natürlich möglich)</p>
            </div>

            <div className="space-y-3 mb-10 max-w-md mx-auto">
              {SERVICES.map(service => (
                <label 
                  key={service} 
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${formData.services.includes(service) ? 'bg-[#03B19F] border-[#03B19F]' : 'border-gray-300 bg-white'}`}>
                    {formData.services.includes(service) && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-gray-800 text-lg">{service}</span>
                  {/* Invisible real checkbox for accessibility */}
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.services.includes(service)}
                    onChange={() => toggleSelection('services', service)}
                  />
                </label>
              ))}
            </div>

            <div className="flex justify-center">
              <Button 
                onClick={nextStep}
                className="bg-[#03B19F] hover:bg-[#028E7F] text-white px-8 py-6 rounded-md text-base font-semibold w-full md:w-auto transition-transform hover:scale-105"
              >
                Weiter zur nächsten Frage
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Wie dürfen wir dich kontaktieren, um einen Termin zu vereinbaren?</h2>
              <p className="text-gray-500">(Mehrfachauswahl möglich)</p>
            </div>

            <div className="space-y-3 mb-10 max-w-md mx-auto">
              {CONTACT_METHODS.map(method => (
                <label 
                  key={method} 
                  className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${formData.contactMethods.includes(method) ? 'bg-[#03B19F] border-[#03B19F]' : 'border-gray-300 bg-white'}`}>
                    {formData.contactMethods.includes(method) && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-gray-800 text-lg">{method}</span>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={formData.contactMethods.includes(method)}
                    onChange={() => toggleSelection('contactMethods', method)}
                  />
                </label>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="outline" 
                onClick={prevStep}
                className="p-6 h-auto aspect-square border-gray-200 hover:bg-gray-50 rounded-md"
                aria-label="Zurück"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </Button>
              <Button 
                onClick={nextStep}
                className="bg-[#03B19F] hover:bg-[#028E7F] text-white px-8 py-6 rounded-md text-base font-semibold w-full md:w-auto transition-transform hover:scale-105"
              >
                Weiter zu letzten Frage
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Kontaktinformationen</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Gib deine Kontaktdaten ein, damit sich unser Team bei dir melden kann und dir deine Fragen beantworten kann.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto mb-10">
              <div className="space-y-2">
                <label className="font-bold text-gray-900 text-sm">Vor- & Nachname *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vorname Nachname"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03B19F] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-gray-900 text-sm">E-Mail-Adresse</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@mailadresse.at"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03B19F] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-gray-900 text-sm">Telefonnummer *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    {/* Small Austrian Flag representation */}
                    <div className="w-5 h-3.5 flex flex-col rounded-sm overflow-hidden border border-gray-200">
                      <div className="bg-red-600 flex-1"></div>
                      <div className="bg-white flex-1"></div>
                      <div className="bg-red-600 flex-1"></div>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+43"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03B19F] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-center gap-4 pt-4">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="p-6 h-auto aspect-square border-gray-200 hover:bg-gray-50 rounded-md"
                  aria-label="Zurück"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </Button>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#03B19F] hover:bg-[#028E7F] text-white px-8 py-6 rounded-md text-base font-semibold w-full md:w-auto transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Wird gesendet..." : "Anfrage unverbindlich absenden"}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
