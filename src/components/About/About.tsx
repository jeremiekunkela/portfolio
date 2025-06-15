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
      content: "Mon parcours scolaire, marqué par des défis, m'a enseigné l'importance d'une méthodologie de travail rigoureuse - une compétence essentielle que j'applique aujourd'hui dans le développement web. Cette expérience a forgé mon esprit critique et ma capacité à résoudre des problèmes complexes."
    },
    {
      id: 2,
      icon: Zap,
      title: "Des valeurs sportives au service du code",
      content: "Sprinteur pratiquant l'athlétisme à bon niveau, j'ai développé discipline et résilience à travers des entraînements rigoureux. Ces qualités se traduisent naturellement dans ma pratique du développement : persévérance face aux bugs, discipline dans l'écriture de code propre, et capacité à maintenir un rythme soutenu sur les projets."
    },
    {
      id: 3,
      icon: Users,
      title: "Esprit d'équipe",
      content: "Mon engagement bénévole comme animateur sportif a renforcé mes compétences en travail d'équipe et ma capacité à expliquer des concepts complexes - des atouts précieux pour collaborer efficacement en équipe de développement."
    },
    {
      id: 4,
      icon: Target,
      title: "Curiosité technologique",
      content: "Passionné par l'innovation numérique, je maintiens une veille active sur les dernières tendances en développement web, intelligence artificielle et nouvelles technologies. Cette curiosité naturelle me permet de rester à la pointe des évolutions du secteur."
    },
    {
      id: 5,
      icon: Globe,
      title: "Ouverture internationale",
      content: "Mes voyages à travers l'Europe et le Canada (Croatie, Italie, Allemagne, Angleterre, Portugal, Canada...) ont développé mon adaptabilité et ma capacité à travailler dans des environnements multiculturels - un atout dans le monde globalisé du développement web."
    },
    {
      id: 6,
      icon: Music,
      title: "Créativité et autonomie",
      content: "Ma pratique du piano, initiée en conservatoire puis poursuivie en autodidacte, témoigne de ma capacité d'apprentissage autonome et de ma créativité - des qualités essentielles pour innover et se former continuellement aux nouvelles technologies."
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