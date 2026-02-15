'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// Types
interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: ValidationRule;
  className?: string;
}

interface FormValidationProps {
  fields: FieldConfig[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  submitButtonText: string;
  className?: string;
}

// Validation Functions
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+33|0)[1-9](?:[0-9]{8})$/;
const companyRegex = /^[a-zA-ZÀ-ÿ0-9\s\-&.,']{2,100}$/;

const validateField = (value: string, rules: ValidationRule): string | null => {
  if (rules.required && !value.trim()) {
    return 'Ce champ est obligatoire';
  }

  if (value.trim()) {
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum ${rules.minLength} caractères`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Maximum ${rules.maxLength} caractères`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Format invalide';
    }

    if (rules.custom) {
      return rules.custom(value);
    }
  }

  return null;
};

const FormValidation: React.FC<FormValidationProps> = ({
  fields,
  onSubmit,
  submitButtonText,
  className = '',
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form data
  useEffect(() => {
    const initialData: Record<string, string> = {};
    fields.forEach(field => {
      initialData[field.name] = '';
    });
    setFormData(initialData);
  }, [fields]);

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const field = fields.find(f => f.name === name);
    if (field?.validation) {
      const error = validateField(formData[name], field.validation);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    fields.forEach(field => {
      if (field.validation) {
        const error = validateField(formData[field.name], field.validation);
        if (error) {
          newErrors[field.name] = error;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    setTouched(Object.fromEntries(fields.map(f => [f.name, true])));
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setIsSubmitted(true);
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(Object.fromEntries(fields.map(f => [f.name, ''])));
        setTouched({});
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName: string) => {
    if (errors[fieldName] && touched[fieldName]) {
      return <XCircle className="h-5 w-5 text-red-500" />;
    }
    if (formData[fieldName] && !errors[fieldName]) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
    return null;
  };

  const getFieldClassName = (fieldName: string) => {
    const baseClass = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300";
    
    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-500 bg-red-50`;
    }
    if (formData[fieldName] && !errors[fieldName]) {
      return `${baseClass} border-green-500 bg-green-50`;
    }
    return `${baseClass} border-gray-300`;
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-2">Merci !</h3>
        <p className="text-gray-600">Votre demande a été envoyée avec succès.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {fields.map(field => (
        <div key={field.name}>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {field.label}
            {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          <div className="relative">
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => handleBlur(field.name)}
                className={getFieldClassName(field.name)}
              >
                <option value="">Sélectionnez...</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => handleBlur(field.name)}
                placeholder={field.placeholder}
                rows={4}
                className={getFieldClassName(field.name)}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
                onBlur={() => handleBlur(field.name)}
                placeholder={field.placeholder}
                className={getFieldClassName(field.name)}
              />
            )}
            
            {getFieldIcon(field.name) && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {getFieldIcon(field.name)}
              </div>
            )}
          </div>
          
          {errors[field.name] && touched[field.name] && (
            <div className="flex items-center mt-2 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-2" />
              {errors[field.name]}
            </div>
          )}
        </div>
      ))}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-600 text-white hover:bg-yellow-700 disabled:bg-gray-400 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Envoi en cours...
          </>
        ) : (
          submitButtonText
        )}
      </button>
    </form>
  );
};

// Predefined field configurations
export const fieldConfigs = {
  contact: [
    {
      name: 'name',
      label: 'Nom et Prénom',
      type: 'text' as const,
      placeholder: 'Jean Dupont',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/,
      },
    },
    {
      name: 'email',
      label: 'Email professionnel',
      type: 'email' as const,
      placeholder: 'jean.dupont@entreprise.com',
      validation: {
        required: true,
        pattern: emailRegex,
      },
    },
    {
      name: 'company',
      label: 'Entreprise',
      type: 'text' as const,
      placeholder: 'Nom de votre entreprise',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 100,
        pattern: companyRegex,
      },
    },
    {
      name: 'role',
      label: 'Fonction',
      type: 'select' as const,
      options: [
        { value: 'CEO', label: 'CEO / Président' },
        { value: 'DG', label: 'Directeur Général' },
        { value: 'CFO', label: 'CFO / Directeur Financier' },
        { value: 'COO', label: 'COO / Directeur Opérationnel' },
        { value: 'Directeur', label: 'Directeur / Manager' },
        { value: 'Autre', label: 'Autre' },
      ],
      validation: { required: true },
    },
    {
      name: 'phone',
      label: 'Téléphone (optionnel)',
      type: 'tel' as const,
      placeholder: '+33 1 23 45 67 89',
      validation: {
        pattern: phoneRegex,
      },
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea' as const,
      placeholder: 'Décrivez votre projet ou vos besoins...',
      validation: {
        required: true,
        minLength: 10,
        maxLength: 1000,
      },
    },
  ],
  
  newsletter: [
    {
      name: 'email',
      label: 'Email professionnel',
      type: 'email' as const,
      placeholder: 'votre.email@entreprise.com',
      validation: {
        required: true,
        pattern: emailRegex,
      },
    },
  ],
  
  leadMagnet: [
    {
      name: 'name',
      label: 'Nom et Prénom',
      type: 'text' as const,
      placeholder: 'Jean Dupont',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 50,
      },
    },
    {
      name: 'email',
      label: 'Email professionnel',
      type: 'email' as const,
      placeholder: 'jean.dupont@entreprise.com',
      validation: {
        required: true,
        pattern: emailRegex,
      },
    },
    {
      name: 'company',
      label: 'Entreprise',
      type: 'text' as const,
      placeholder: 'Nom de votre entreprise',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 100,
      },
    },
    {
      name: 'role',
      label: 'Fonction',
      type: 'select' as const,
      options: [
        { value: 'CEO', label: 'CEO / Président' },
        { value: 'DG', label: 'Directeur Général' },
        { value: 'CFO', label: 'CFO / Directeur Financier' },
        { value: 'COO', label: 'COO / Directeur Opérationnel' },
        { value: 'Directeur', label: 'Directeur / Manager' },
        { value: 'Autre', label: 'Autre' },
      ],
      validation: { required: true },
    },
  ],
};

export default FormValidation;
