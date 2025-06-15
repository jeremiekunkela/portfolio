import React from 'react';
import styles from './Footer.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { personalInfo } from '../../data';

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Accueil', sectionId: 'home' },
    { name: 'À propos', sectionId: 'about' },
    { name: 'Projets', sectionId: 'projects' },
    { name: 'Blog', sectionId: 'blog' },
    { name: 'Compétences', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>{personalInfo.name.split(' ')[0][0]}{personalInfo.name.split(' ')[1][0]}</div>
        <p className={styles.copyright}>
          &copy; {currentYear} {personalInfo.name}. Tous droits réservés.
        </p>
        
        <nav className={styles.nav}>
          {navItems.map(item => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.sectionId);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;