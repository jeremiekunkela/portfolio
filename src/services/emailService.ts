// Configuration pour l'envoi d'emails via Supabase Edge Function
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  // Vérifier la configuration Supabase
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Configuration Supabase manquante. Vérifiez vos variables d\'environnement.');
    return false;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        message: emailData.message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur lors de l\'envoi de l\'email:', errorData);
      return false;
    }

    const result = await response.json();
    return result.success === true;

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