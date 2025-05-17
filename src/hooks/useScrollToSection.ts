import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToSection;
};