import React, { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data';
import { Project } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type ProjectCategory = Project['category'] | 'all';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'Personal', label: 'Personal Projects' },
    { id: 'Student', label: 'Student Projects' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        
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
        
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;