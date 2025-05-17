import React from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { socialLinks, personalInfo } from '../../data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  }, true);

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoHeading}>Let's connect!</h3>
            <p className={styles.text}>
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that you want to get started, think you need my help 
              with something, or just fancy saying hello, then get in touch.
            </p>
            
            <div className={styles.location}>
              <p>
                <strong>Location:</strong> {personalInfo.location}
              </p>
            </div>
            
            <div className={styles.socialLinks}>
              {socialLinks.map(link => {
                const IconComponent = (LucideIcons as any)[link.icon] || LucideIcons.Link;
                
                return (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <ContactForm isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Contact;