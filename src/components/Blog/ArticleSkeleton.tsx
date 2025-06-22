import React from "react";
import styles from "./ArticleSkeleton.module.css";

const ArticleSkeleton: React.FC = () => (
  <div className={styles.article}>
    <div className={styles.container}>
      <div className={styles.skeletonHeader}>
        <div className={styles.skeletonImage} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonMeta} />
      </div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLine} />
        <div className={styles.skeletonLineShort} />
      </div>
    </div>
  </div>
);

export default ArticleSkeleton;
