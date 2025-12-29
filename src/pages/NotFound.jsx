import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section
      className={styles["not-found"]}
      aria-labelledby="not-found-heading"
    >
      <TriangleAlert className={styles["not-found__icon"]} aria-hidden="true" />
      <h1 id="not-found-heading" className={styles["not-found__heading"]}>
        404 Not Found
      </h1>
      <p className={styles["not-found__text"]}>This page does not exist</p>
      <Link to="/" className={styles["not-found__link"]}>
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
