import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Timeline', sectionId: 'timeline' },
    { name: 'Skills', sectionId: 'skills' },
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
          AM
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

        <div className={styles.mobileControls}>
          <ThemeSwitch />
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
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
        </div>
      </div>
    </header>
  );
};

export default Header;