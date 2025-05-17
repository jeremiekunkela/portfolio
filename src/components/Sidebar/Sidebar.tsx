import React, { useState, useContext } from 'react';
import { useIntl } from 'react-intl';
import { Home, User, Code2, BookOpen, Mail, Menu, X } from 'lucide-react';
import styles from './Sidebar.module.css';
import { LanguageContext } from '../../context/LanguageContext';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const scrollToSection = useScrollToSection();
  const intl = useIntl();

  const navItems = [
    { id: 'home', icon: Home, label: intl.formatMessage({ id: 'nav.home' }) },
    { id: 'about', icon: User, label: intl.formatMessage({ id: 'nav.about' }) },
    { id: 'skills', icon: Code2, label: intl.formatMessage({ id: 'nav.skills' }) },
    { id: 'blog', icon: BookOpen, label: intl.formatMessage({ id: 'nav.blog' }) },
    { id: 'contact', icon: Mail, label: intl.formatMessage({ id: 'nav.contact' }) },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className={styles.navItem}>
                  <a
                    href={`#${item.id}`}
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <Icon size={20} className={styles.navIcon} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.languageSwitch}>
          <button
            className={`${styles.languageButton} ${language === 'en' ? styles.active : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={`${styles.languageButton} ${language === 'fr' ? styles.active : ''}`}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;