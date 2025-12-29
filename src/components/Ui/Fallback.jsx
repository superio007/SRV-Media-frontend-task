import styles from "./Fallback.module.css";

const FallBack = () => {
  return (
    <section
      className={styles.fallback}
      aria-label="Loading content"
      aria-busy="true"
    >
      <div className={styles.fallback__container}>
        <div
          className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--hero"]}`}
          role="presentation"
        ></div>

        <div className={styles.fallback__grid}>
          <div
            className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--card"]}`}
            role="presentation"
          ></div>
          <div
            className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--card"]}`}
            role="presentation"
          ></div>
          <div
            className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--card"]}`}
            role="presentation"
          ></div>
          <div
            className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--card"]}`}
            role="presentation"
          ></div>
        </div>

        <div
          className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--section"]}`}
          role="presentation"
        ></div>
        <div
          className={`${styles.fallback__skeleton} ${styles["fallback__skeleton--section"]}`}
          role="presentation"
        ></div>
      </div>
      <span className="sr-only">Loading page content, please wait...</span>
    </section>
  );
};

export default FallBack;
