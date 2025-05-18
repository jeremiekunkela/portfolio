import React, { createContext, useState, useEffect, useContext } from 'react';

interface ScrollToTopContextProps {
  isVisible: boolean;
  scrollToTop: () => void;
}

const ScrollToTopContext = createContext<ScrollToTopContextProps | undefined>(undefined);

export const ScrollToTopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Affiche le bouton après 300px de défilement
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollToTopContext.Provider value={{ isVisible, scrollToTop }}>
      {children}
    </ScrollToTopContext.Provider>
  );
};

export const useScrollToTop = () => {
  const context = useContext(ScrollToTopContext);
  if (!context) {
    throw new Error('useScrollToTop must be used within a ScrollToTopProvider');
  }
  return context;
};