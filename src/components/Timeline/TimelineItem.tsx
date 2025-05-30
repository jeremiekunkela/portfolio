import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import styles from './TimelineItem.module.css';
import { TimelineItem as TimelineItemType } from '../../types';

interface TimelineItemProps {
  item: TimelineItemType;
  position: 'left' | 'right';
  isVisible: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  position, 
  isVisible,
  delay
}) => {
  return (
    <div className={`${styles.timelineItem} ${styles[position]}`}>
      <div className={styles.dot}></div>
      <div 
        className={`${styles.content} ${isVisible ? styles.visible : ''}`} 
        style={{ transitionDelay: `${delay}s` }}
      >
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.organization}>{item.organization}</p>
        <p className={styles.period}>
          <Calendar size={16} />
          {item.period}
        </p>
        {item.location && (
          <p className={styles.location}>
            <MapPin size={16} />
            {item.location}
          </p>
        )}
        <p className={styles.description}>{item.description}</p>
        <span className={styles.skills}>
          {item.skills && item.skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;