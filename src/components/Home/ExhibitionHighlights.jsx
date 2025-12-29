import { useState } from "react";
import curve from "../../assets/curve.webp";
import AdmissionsCounselling from "../../assets/AdmissionsCounselling.webp";
import ComparePedagogy from "../../assets/ComparePedagogy.webp";
import ExclusiveOffers from "../../assets/ExclusiveOffers.webp";
import InterectHeads from "../../assets/InterectHeads.webp";
import SchoolsOfferings from "../../assets/SchoolsOfferings.webp";
import { MoveRight, MoveLeft } from "lucide-react";
import styles from "./ExhibitionHighlights.module.css";

const ExhibitionHighlights = () => {
  const highlights = [
    {
      title: "Interact Directly with School Heads",
      description: "Get answers straight from the experts",
      image: InterectHeads,
    },
    {
      title: "Compare Curriculum & Pedagogy",
      description:
        "Understand the differences between CBSE, ICSE, IB, Cambridge, Finnish & more",
      image: ComparePedagogy,
    },
    {
      title: "Get Exclusive Fee Structures & Offers",
      description: "Access transparent information and avail offers",
      image: ExclusiveOffers,
    },
    {
      title: "Explore Schools Offerings",
      description:
        "Preview infrastructure, co-curricular, teaching methodology and culture",
      image: SchoolsOfferings,
    },
    {
      title: "On-the-Spot Admissions & Counselling",
      description: "Save time with instant applications and expert guidance",
      image: AdmissionsCounselling,
    },
  ];

  const [index, setIndex] = useState(0);
  const cardWidth = 380;

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < highlights.length - 1) setIndex(index + 1);
  };

  return (
    <>
      <section
        className={styles.highlights}
        aria-labelledby="highlights-heading"
      >
        <div className={styles.highlights__container}>
          <h2 id="highlights-heading" className={styles.highlights__heading}>
            What Makes This Exhibition a Must-Visit
          </h2>

          {/* SLIDER */}
          <div
            className={styles.highlights__slider}
            role="region"
            aria-label="Exhibition highlights carousel"
          >
            <ul
              className={styles.highlights__track}
              style={{ transform: `translateX(-${index * cardWidth}px)` }}
            >
              {highlights.map((item, i) => (
                <li key={i} className={styles.highlights__item}>
                  <article className={styles.highlights__card}>
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className={styles["highlights__card-image"]}
                      aria-hidden="true"
                    />
                    <div className={styles["highlights__card-content"]}>
                      <h3 className={styles["highlights__card-title"]}>
                        {item.title}
                      </h3>
                      <p className={styles["highlights__card-description"]}>
                        {item.description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          {/* ARROWS */}
          <nav
            className={styles.highlights__nav}
            aria-label="Carousel navigation"
          >
            <button
              onClick={prev}
              disabled={index === 0}
              className={styles["highlights__nav-button"]}
              aria-label="Previous highlight"
              type="button"
            >
              <MoveLeft aria-hidden="true" />
            </button>
            <button
              onClick={next}
              disabled={index === highlights.length - 1}
              className={styles["highlights__nav-button"]}
              aria-label="Next highlight"
              type="button"
            >
              <MoveRight aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>

      <div className={styles.highlights__curve} aria-hidden="true">
        <img
          src={curve}
          alt=""
          className={styles["highlights__curve-image"]}
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ExhibitionHighlights;
