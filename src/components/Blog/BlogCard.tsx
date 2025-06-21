import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';
import { BlogPost } from '../../types';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

interface BlogCardProps {
  post: BlogPost;
  isVisible: boolean;
  delay: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isVisible, delay }) => {
  return (
    <article 
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className={styles.image}
        />
      )}
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>
            {dayjs(post.date).locale('fr').format('D MMMM YYYY')}
          </span>
          <span className={styles.readTime}>
            <Clock size={14} />
            {post.readTime} min de lecture
          </span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        
        <Link to={`/blog/${post.slug}`} className={styles.readMore}>
          Lire l&apos;article
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
