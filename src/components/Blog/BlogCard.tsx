import React from 'react';
import { useIntl } from 'react-intl';
import { ArrowRight, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  isVisible: boolean;
  delay: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, isVisible, delay }) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(`/blog/${post.slug}`);
  };

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
        
        <a href={`/blog/${post.slug}`} className={styles.readMore} onClick={handleClick}>
          {intl.formatMessage({ id: 'blog.readMore' })}
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;