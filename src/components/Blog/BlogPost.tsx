import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./BlogPost.module.css";
import { blogPosts } from "../../data";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { useScrollToSection } from "../../hooks/useScrollToSection";


const CATEGORY_LABELS: Record<string, string> = {
  project: 'Réalisations',
  technical: 'Techniques',
  transversal: 'Transverses',
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  // Ajoutez un state pour le contenu markdown
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (post?.content && post.content.endsWith(".md")) {
      fetch(post.content)
        .then((res) => res.text())
        .then(setMarkdownContent);
    } else {
      setMarkdownContent("");
    }
  }, [post?.content, slug]);

  const handleBackToBlog = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      await navigate("/");
      setTimeout(() => {
        scrollToSection("blog");
      }, 100);
    } else {
      scrollToSection("blog");
    }
  };

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
        <Link to="/" className={styles.backLink} onClick={handleBackToBlog}>
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <header className={styles.header}>
          {post.image && (
            <img src={post.image} alt={post.title} className={styles.image} />
          )}

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span className={styles.category}>{CATEGORY_LABELS[post.category] || post.category}</span>
            <time>{dayjs(post.date).locale("fr").format("D MMMM YYYY")}</time>
            <span className={styles.readTime}>
              <Clock size={14} />
              {post.readTime} min de lecture
            </span>
          </div>
        </header>

        <div className={styles.content}>
          <ReactMarkdown
            components={{
              code({
                inline,
                className,
                children,
                ...props
              }: React.HTMLAttributes<HTMLElement> & {
                inline?: boolean;
                children?: React.ReactNode;
              }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark as unknown}
                    language={match[1]}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownContent ? markdownContent : post?.content || ""}
          </ReactMarkdown>
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
