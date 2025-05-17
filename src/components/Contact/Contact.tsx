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
        <h2 className={styles.heading}> Contactez moi</h2>
        <p className={styles.subheading}>
          N'hésitez pas à me contacter si vous recherchez un développeur, avez une question, ou souhaitez simplement échanger.
        </p>
        
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoHeading}>Entrons en contact !</h3>
            <p className={styles.text}>
              Si vous avez un projet que vous souhaitez démarrer, pensez que vous avez besoin de mon aide 
              pour quelque chose, ou souhaitez simplement dire bonjour, alors contactez-moi.
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