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
    content: "Formé à l'analyse méthodique et à la résolution structurée de problèmes complexes, j'applique cette rigueur académique à chaque défi technique pour concevoir des solutions robustes et maintenables."
  },
  {
    id: 2,
    icon: Zap,
    title: "Résilience sportive",
    content: "L'athlétisme m'a forgé une mentalité de persévérance face aux obstacles. Cette résilience, acquise sur la piste, me permet de transformer chaque bug en opportunité d'apprentissage et chaque échec en tremplin vers la réussite."
  },
  {
    id: 3,
    icon: Users,
    title: "Leadership collaboratif",
    content: "Mon expérience d'animateur sportif a développé ma capacité à fédérer une équipe autour d'objectifs communs. Je cultive un environnement de travail où l'entraide et la communication bienveillante favorisent l'innovation collective."
  },
  {
    id: 4,
    icon: Target,
    title: "Veille technologique active",
    content: "Passionné par l'évolution rapide du web, je maintiens une curiosité constante pour les technologies émergentes. Cette veille stratégique me permet d'anticiper les tendances et d'intégrer les innovations pertinentes dans mes projets."
  },
  {
    id: 5,
    icon: Globe,
    title: "Vision multiculturelle",
    content: "Mes voyages à travers différents pays ont enrichi ma compréhension des enjeux globaux et des diversités culturelles. Cette ouverture internationale nourrit ma capacité à concevoir des solutions inclusives et universelles."
  },
  {
    id: 6,
    icon: Music,
    title: "Créativité autodidacte",
    content: "Du conservatoire à l'apprentissage autonome, le piano illustre ma capacité à maîtriser des compétences complexes par la pratique personnelle. Cette créativité disciplinée enrichit mon approche du développement et stimule mes solutions innovantes."
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