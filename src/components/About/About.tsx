import React from 'react';
import { BookOpen, Zap, Globe, Users, Music, Target } from 'lucide-react';
import styles from './About.module.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  const aboutCards = [
    {
      id: 1,
      icon: BookOpen,
      title: "Méthodologie rigoureuse",
      content: "Mon parcours scolaire m'a appris l'importance d'une méthodologie de travail rigoureuse, essentielle pour résoudre des problèmes complexes en développement web."
    },
    {
      id: 2,
      icon: Zap,
      title: "Valeurs sportives",
      content: "La pratique de l'athlétisme m'apporte discipline et persévérance, des qualités que j'applique au quotidien dans le développement."
    },
    {
      id: 3,
      icon: Users,
      title: "Esprit d'équipe",
      content: "Mon engagement bénévole comme animateur sportif a renforcé mes compétences en travail d'équipe et en communication."
    },
    {
      id: 4,
      icon: Target,
      title: "Curiosité technologique",
      content: "Je m'intéresse activement aux nouveautés du web et des technologies pour rester à jour et progresser."
    },
    {
      id: 5,
      icon: Globe,
      title: "Ouverture d'esprit",
      content: "Voyager dans plusieurs pays m'a permis de découvrir différentes cultures et d'élargir ma vision du monde."
    },
    {
      id: 6,
      icon: Music,
      title: "Créativité et autonomie",
      content: "La pratique du piano, en conservatoire puis en autodidacte, illustre ma créativité et ma capacité à apprendre par moi-même."
    }
  ];

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>À propos de moi</h2>
        <p className={styles.subheading}>Développeur web passionné et polyvalent</p>
        
        <div className={styles.intro}>
          <span className={styles.highlight}>Développeur alliant rigueur technique, esprit d'équipe et ouverture d'esprit</span>, 
          je suis prêt à relever de nouveaux défis dans vos projets web.
        </div>
        
        <div className={styles.content}>
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id}
                className={`${styles.card} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <p className={styles.cardContent}>{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;