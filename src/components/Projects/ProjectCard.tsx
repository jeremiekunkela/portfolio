import React from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import styles from './ProjectCard.module.css';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isVisible, delay }) => {
  return (
    <article 
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className={styles.image}
      />
      
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.technology}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Github size={16} />
              Code
            </a>
          )}
          
          {project.videoUrl && (
            <a 
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Youtube size={16} />
              Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;