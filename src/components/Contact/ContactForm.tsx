import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import styles from './ContactForm.module.css';
import { sendEmail, checkRateLimit, recordSubmission, formatRemainingTime } from '../../services/emailService';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  isVisible: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [rateLimitError, setRateLimitError] = useState<string | null>(null);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Le nom ne peut pas dépasser 50 caractères';
    }
    
    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email est invalide';
    } else if (formData.email.length > 100) {
      newErrors.email = 'L\'email ne peut pas dépasser 100 caractères';
    }
    
    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Le message ne peut pas dépasser 1000 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Effacer les messages d'erreur globaux
    if (submitError) setSubmitError(null);
    if (rateLimitError) setRateLimitError(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier la limite d'envoi
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.canSubmit) {
      const remainingTime = formatRemainingTime(rateLimitCheck.remainingTime!);
      setRateLimitError(`Vous avez atteint la limite d'envoi. Veuillez patienter ${remainingTime} avant de renvoyer un message.`);
      return;
    }
    
    // Valider le formulaire
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setRateLimitError(null);
    
    try {
      const success = await sendEmail({
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        message: formData.message.trim(),
        to_email: 'jeremiekunkela@gmail.com'
      });
      
      if (success) {
        // Enregistrer la soumission pour la limite d'envoi
        recordSubmission();
        
        // Afficher le message de succès
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Masquer le message de succès après 8 secondes
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 8000);
      } else {
        setSubmitError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitError('Une erreur inattendue est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getCharacterCountClass = (current: number, max: number) => {
    if (current > max) return styles.error;
    if (current > max * 0.9) return styles.warning;
    return '';
  };
  
  return (
    <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
      {submitSuccess && (
        <div className={styles.successMessage}>
          <CheckCircle size={20} />
          Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
        </div>
      )}
      
      {submitError && (
        <div className={styles.errorMessage}>
          <AlertCircle size={20} />
          {submitError}
        </div>
      )}
      
      {rateLimitError && (
        <div className={styles.rateLimitMessage}>
          <Clock size={20} />
          {rateLimitError}
        </div>
      )}
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nom <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            placeholder="Votre nom complet"
            maxLength={50}
          />
          {errors.name && (
            <p className={styles.error}>
              <AlertCircle size={14} />
              {errors.name}
            </p>
          )}
          <div className={`${styles.characterCount} ${getCharacterCountClass(formData.name.length, 50)}`}>
            {formData.name.length}/50
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            placeholder="votre.email@exemple.com"
            maxLength={100}
          />
          {errors.email && (
            <p className={styles.error}>
              <AlertCircle size={14} />
              {errors.email}
            </p>
          )}
          <div className={`${styles.characterCount} ${getCharacterCountClass(formData.email.length, 100)}`}>
            {formData.email.length}/100
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
            placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
            maxLength={1000}
          />
          {errors.message && (
            <p className={styles.error}>
              <AlertCircle size={14} />
              {errors.message}
            </p>
          )}
          <div className={`${styles.characterCount} ${getCharacterCountClass(formData.message.length, 1000)}`}>
            {formData.message.length}/1000
          </div>
        </div>
        
        <button 
          type="submit" 
          className={styles.button}
          disabled={isSubmitting || !!rateLimitError}
        >
          {isSubmitting ? (
            <>
              <div className={styles.loadingSpinner} />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={16} />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;