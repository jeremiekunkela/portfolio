import React from 'react';
import styles from './Hero.module.css';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { personalInfo } from '../../data';

const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>Bonjour 👋, je suis</p>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
          <p className={styles.bio}>{personalInfo.bio}</p>
          <a 
            href="#contact" 
            className={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get in touch
          </a>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageBackground}></div>
          <div className={styles.imageWrapper}>
            <img 
              src={personalInfo.profileImage} 
              alt={`${personalInfo.name} profile`} 
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;