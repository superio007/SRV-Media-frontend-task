import FindSchool_one from "../../assets/FindSchool_three.webp";
import FindSchool_two from "../../assets/FindSchool_two.webp";
import FindSchool_three from "../../assets/FindSchool_one.webp";
import FindSchool_four from "../../assets/FindSchool_four.webp";
import { useEffect, useRef, useState } from "react";
import styles from "./FindYourSchool.module.css";

const FindYourSchool = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstChild.offsetWidth;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const cardWidth = container.firstChild.offsetWidth;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  const schools = [
    {
      id: 1,
      title: "Pre-Schools & Early Learning Centres",
      description:
        "Nurturing foundational skills for toddlers and pre-primary children.",
      image: FindSchool_one,
    },
    {
      id: 2,
      title: "K–12 CBSE Day Schools",
      description:
        "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
      image: FindSchool_two,
    },
    {
      id: 3,
      title: "Heritage to New-Age Schools",
      description:
        "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools",
      image: FindSchool_three,
    },
    {
      id: 4,
      title: "International Curriculum Schools",
      description:
        "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
      image: FindSchool_four,
    },
  ];

  return (
    <section
      className={styles["find-school"]}
      aria-labelledby="find-school-heading"
    >
      <h2 id="find-school-heading" className={styles["find-school__heading"]}>
        Choose the School That Fits You Best
      </h2>

      {/* Desktop Grid */}
      <ul className={styles["find-school__grid"]}>
        {schools.map((school) => (
          <li key={school.id}>
            <article
              className={styles["find-school__card"]}
              style={{
                backgroundImage: `url(${school.image})`,
              }}
            >
              <div
                className={styles["find-school__card-overlay"]}
                aria-hidden="true"
              />
              <div className={styles["find-school__card-content"]}>
                <h3 className={styles["find-school__card-title"]}>
                  {school.title}
                </h3>
                <p className={styles["find-school__card-description"]}>
                  {school.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Mobile Carousel */}
      <ul
        ref={containerRef}
        className={styles["find-school__carousel"]}
        role="region"
        aria-label="School types carousel"
      >
        {schools.map((school) => (
          <li key={school.id}>
            <article
              className={styles["find-school__card"]}
              style={{
                backgroundImage: `url(${school.image})`,
              }}
            >
              <div
                className={styles["find-school__card-overlay"]}
                aria-hidden="true"
              />
              <div className={styles["find-school__card-content"]}>
                <h3
                  className={`${styles["find-school__card-title"]} ${styles["find-school__card-title--mobile"]}`}
                >
                  {school.title}
                </h3>
                <p
                  className={`${styles["find-school__card-description"]} ${styles["find-school__card-description--mobile"]}`}
                >
                  {school.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Dots Navigation */}
      <nav
        className={styles["find-school__pagination"]}
        aria-label="Carousel pagination"
      >
        {schools.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`${styles["find-school__dot"]} ${
              activeIndex === i ? styles["find-school__dot--active"] : ""
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={activeIndex === i ? "step" : undefined}
            type="button"
          />
        ))}
      </nav>
    </section>
  );
};

export default FindYourSchool;
