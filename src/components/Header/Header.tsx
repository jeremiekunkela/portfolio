import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useScrollToSection } from "../../hooks/useScrollToSection";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", sectionId: "home" },
    { name: "À propos", sectionId: "about" },
    { name: "Chronologie", sectionId: "timeline" },
    { name: "Compétences", sectionId: "skills" },
    { name: "Projets", sectionId: "projects" },
    { name: "Blog", sectionId: "blog" },
    { name: "Contact", sectionId: "contact" },
  ];

  const handleNavClick = async (sectionId: string) => {
    if (location.pathname !== "/") {
      await navigate("/");
      // Wait for the navigation to complete
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          JK
        </a>
        <div className={styles.themeSwitch}>
          <ThemeSwitch />
        </div>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;