import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Clock } from 'lucide-react';
import styles from './BlogPost.module.css';
import { blogPosts } from '../../data';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className={styles.article}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className={styles.title}>Article not found</h1>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <header className={styles.header}>
          {post.image && (
            <img 
              src={post.image} 
              alt={post.title} 
              className={styles.image}
            />
          )}
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <time>{format(new Date(post.date), 'MMM d, yyyy')}</time>
            <span className={styles.readTime}>
              <Clock size={14} />
              {post.readTime} min read
            </span>
          </div>
        </header>

        <div className={styles.content}>
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;