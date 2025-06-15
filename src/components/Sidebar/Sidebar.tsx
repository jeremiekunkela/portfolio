import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, User, Code2, BookOpen, Mail, Menu, X, AppWindow, Clock } from 'lucide-react';
import styles from './Sidebar.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';

const navLabels: Record<string, string> = {
  home: 'Accueil',
  about: 'À propos',
  timeline: 'Chronologie',
  skills: 'Compétences',
  projects: 'Projets',
  blog: 'Blog',
  contact: 'Contact',
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'about', icon: User },
    { id: 'timeline', icon: Clock },
    { id: 'skills', icon: Code2 },
    { id: 'projects', icon: AppWindow },
    { id: 'blog', icon: BookOpen },
    { id: 'contact', icon: Mail },
  ];

  const handleNavClick = async (sectionId: string) => {
    if (location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
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
                    {navLabels[item.id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;