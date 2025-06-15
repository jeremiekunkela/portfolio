import emailjs from '@emailjs/browser';

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_portfolio';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // À remplacer par votre clé publique EmailJS

export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        message: emailData.message,
        to_email: 'jeremiekunkela@gmail.com',
        reply_to: emailData.from_email,
      },
      EMAILJS_PUBLIC_KEY
    );

    return result.status === 200;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

// Gestion de la limite d'envoi
const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS_PER_HOUR = 3;
const HOUR_IN_MS = 60 * 60 * 1000;

export const checkRateLimit = (): { canSubmit: boolean; remainingTime?: number } => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]') as number[];
  
  // Filtrer les soumissions de la dernière heure
  const recentSubmissions = submissions.filter(timestamp => now - timestamp < HOUR_IN_MS);
  
  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    const oldestSubmission = Math.min(...recentSubmissions);
    const remainingTime = HOUR_IN_MS - (now - oldestSubmission);
    return { canSubmit: false, remainingTime };
  }
  
  return { canSubmit: true };
};

export const recordSubmission = (): void => {
  const now = Date.now();
  const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]') as number[];
  
  // Ajouter la nouvelle soumission et nettoyer les anciennes
  const updatedSubmissions = [...submissions, now].filter(timestamp => now - timestamp < HOUR_IN_MS);
  
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(updatedSubmissions));
};

export const formatRemainingTime = (ms: number): string => {
  const minutes = Math.ceil(ms / (60 * 1000));
  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}min` : ''}`;
};