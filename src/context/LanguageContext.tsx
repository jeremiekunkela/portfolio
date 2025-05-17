import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { Language } from '../types';
import { messages } from '../i18n/messages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || navigator.language.startsWith('fr') ? 'fr' : 'en';
  });

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange }}>
      <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};