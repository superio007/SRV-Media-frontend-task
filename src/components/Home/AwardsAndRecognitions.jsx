import AccrossGlobe from "../../assets/AccrossGlobe.webp";
import ParticipatingSchools from "../../assets/ParticipatingSchools.webp";
import TrustedByParents from "../../assets/TrustedByParents.webp";
import YearsOfLeagacy from "../../assets/YearsOfLeagacy.webp";
import styles from "./AwardsAndRecognitions.module.css";

const AwardsAndRecognitions = () => {
  return (
    <section className={styles.awards} aria-labelledby="awards-heading">
      <h2 id="awards-heading" className="sr-only">
        Awards and Recognitions
      </h2>
      <ul className={styles.awards__list}>
        <li className={styles.awards__item}>
          <img
            src={TrustedByParents}
            alt="Trusted By Parents - Award badge"
            loading="lazy"
            className={styles.awards__image}
          />
        </li>
        <li className={styles.awards__item}>
          <img
            src={YearsOfLeagacy}
            alt="Years Of Legacy - Award badge"
            className={styles.awards__image}
            loading="lazy"
          />
        </li>
        <li className={styles.awards__item}>
          <img
            src={ParticipatingSchools}
            alt="Participating Schools - Award badge"
            className={styles.awards__image}
            loading="lazy"
          />
        </li>
        <li className={styles.awards__item}>
          <img
            src={AccrossGlobe}
            alt="Across Globe - Award badge"
            className={styles.awards__image}
            loading="lazy"
          />
        </li>
      </ul>
    </section>
  );
};

export default AwardsAndRecognitions;
