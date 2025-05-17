import React from 'react';
import { useIntl } from 'react-intl';
import { ArrowRight, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  isVisible: boolean;
  delay: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isVisible, delay }) => {
  const intl = useIntl();

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
          <span className={styles.category}>{post.category}</span>
          <span className={styles.date}>
            {format(new Date(post.date), 'MMM d, yyyy')}
          </span>
          <span className={styles.readTime}>
            <Clock size={14} />
            {intl.formatMessage(
              { id: 'blog.minuteRead' },
              { minutes: post.readTime }
            )}
          </span>
        </div>
        
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        
        <Link to={`/blog/${post.slug}`} className={styles.readMore}>
          {intl.formatMessage({ id: 'blog.readMore' })}
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;