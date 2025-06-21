import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import styles from './ReadingProgressBar.module.css';

interface ReadingProgressBarProps {
  contentRef: React.RefObject<HTMLElement>;
  showPercentage?: boolean;
}

const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ 
  contentRef, 
  showPercentage = true 
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      if (!contentRef.current) return;

      const element = contentRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Commencer le calcul quand l'article devient visible
      const startOffset = elementTop - windowHeight * 0.3;
      const endOffset = elementTop + elementHeight - windowHeight * 0.7;

      if (scrollTop < startOffset) {
        setProgress(0);
        setIsVisible(false);
      } else if (scrollTop > endOffset) {
        setProgress(100);
        setIsVisible(true);
      } else {
        const progressRange = endOffset - startOffset;
        const currentProgress = scrollTop - startOffset;
        const percentage = Math.min(Math.max((currentProgress / progressRange) * 100, 0), 100);
        
        setProgress(percentage);
        setIsVisible(true);
      }
    };

    // Mettre à jour immédiatement
    updateProgress();

    // Écouter le scroll avec throttling pour les performances
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateProgress);
    };
  }, [contentRef]);

  return (
    <>
      {/* Barre de progression */}
      <div className={`${styles.progressContainer} ${isVisible ? styles.visible : ''}`}>
        <div 
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Indicateur de pourcentage */}
      {showPercentage && (
        <div className={`${styles.progressInfo} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.progressText}>
            <BookOpen size={14} />
            <span className={styles.progressPercentage}>
              {Math.round(progress)}%
            </span>
            <span>lu</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadingProgressBar;