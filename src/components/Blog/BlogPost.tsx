import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import styles from "./BlogPost.module.css";
import { blogPosts } from "../../data";
import dayjs from "dayjs";
import "dayjs/locale/fr";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!post) {
    return (
      <div className={styles.article}>
        <div className={styles.container}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={20} />
            Retour à l'accueil
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
          Retour à l'accueil
        </Link>

        <header className={styles.header}>
          {post.image && (
            <img src={post.image} alt={post.title} className={styles.image} />
          )}

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <time>{dayjs(post.date).locale("fr").format("D MMMM YYYY")}</time>
            <span className={styles.readTime}>
              <Clock size={14} />
              {post.readTime} min de lecture
            </span>
          </div>
        </header>

        <div className={styles.content}>
          {/* Utilisation de ReactMarkdown pour rendre le contenu Markdown */}
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Affichage des compétences à la fin */}
        {post.skills && post.skills.length > 0 && (
          <section className={styles.skillsSection}>
            <h2 className={styles.skillsTitle}>Compétences utilisées</h2>
            <div className={styles.skills}>
              {post.skills.map((skill, index) => (
                <span key={index} className={styles.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
