import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { Language } from '../types';
import { messages } from '../i18n/messages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      return savedLang;
    }
    return navigator.language.startsWith('fr') ? 'fr' : 'en';
  });

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      <IntlProvider messages={messages[language]} locale={language} defaultLocale="fr">
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};