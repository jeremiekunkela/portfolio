import React from 'react';
import styles from './Timeline.module.css';
import TimelineItem from './TimelineItem';
import { timelineData } from '../../data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Timeline: React.FC = () => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });


  return (
    <section id="timeline" className={styles.timeline} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Mon Parcours</h2>
        
        <div className={styles.timelineContainer}>
          <div className={styles.centerLine}></div>
          
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={item.id}
              item={item}
              position={item.type === 'education' ? 'left' : 'right'}
              isVisible={isVisible}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;