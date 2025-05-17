import React from 'react';
import { Heart } from 'lucide-react';
import styles from './Footer.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { personalInfo } from '../../data';

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Timeline', sectionId: 'timeline' },
    { name: 'Skills', sectionId: 'skills' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>{personalInfo.name.split(' ')[0][0]}{personalInfo.name.split(' ')[1][0]}</div>
        <p className={styles.copyright}>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
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
        
        <p className={styles.madeWith}>
          Made with <Heart size={16} className={styles.heart} /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;