import React, { useState } from 'react';
import styles from './Skills.module.css';
import SkillItem from './SkillItem';
import { skillsData } from '../../data';
import { Skill } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type SkillCategory = Skill['category'] | 'all';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('technical');
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'technical', label: 'Techniques' },
    { id: 'soft', label: 'Compétences douces' },
    { id: 'tools', label: 'Outils' },
    { id: 'language', label: 'Langues' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Mes Compétences</h2>
        <p className={styles.subheading}>
          Voici un aperçu de mes compétences. Je suis toujours en train d'apprendre et d'évoluer,
        </p>
        
        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <SkillItem 
              key={skill.id} 
              skill={skill} 
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;