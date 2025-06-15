import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import styles from './Blog.module.css';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { BlogPost } from '../../types';

type BlogCategory = BlogPost['category'] | 'all';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('technical');
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });
  const intl = useIntl();

  const categories: { id: BlogCategory; label: string }[] = [
    { id: 'all', label: 'Tous les articles' },
    { id: 'project', label: 'Réalisations' },
    { id: 'technical', label: 'Compétences techniques' },
    { id: 'transversal', label: 'Compétences transverses' }
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className={styles.blog} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          {intl.formatMessage({ id: 'blog.title' })}
        </h2>
        
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
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;