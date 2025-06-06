import React from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './SkillItem.module.css';
import { Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, isVisible, delay }) => {
  const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Puzzle;
  
  const getLevelClass = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return styles.beginner;
      case 'intermediate':
        return styles.intermediate;
      case 'advanced':
        return styles.advanced;
      case 'native':
        return styles.native;
      default:
        return styles.intermediate;
    }
  };

  return (
    <div 
      className={`${styles.skillItem} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.iconContainer}>
        <IconComponent size={30} />
      </div>
      <h3 className={styles.name}>{skill.name}</h3>
      {skill.level && (
        <span className={`${styles.levelChip} ${getLevelClass(skill.level)}`}>
          {skill.level}
        </span>
      )}
    </div>
  );
};

export default SkillItem;