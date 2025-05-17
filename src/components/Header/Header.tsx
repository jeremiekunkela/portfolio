import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', sectionId: 'home' },
    { name: 'Chronologie', sectionId: 'timeline' },
    { name: 'Compétences', sectionId: 'skills' },
    { name: 'Projets', sectionId: 'projects' },
    { name: 'Blog', sectionId: 'blog' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={() => handleNavClick('home')}>
          JK
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              className={styles.navItem}
              href={`#${item.sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.sectionId);
              }}
            >
              {item.name}
            </a>
          ))}
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;