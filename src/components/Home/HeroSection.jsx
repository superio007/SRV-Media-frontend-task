import { useEffect, useRef, useCallback } from "react";
import EnquiryForm from "../Ui/EnquiryForm";
import HeroVerticalSlider from "../Ui/HeroVerticalSlider";
import Header_one from "../../assets/Header_one.webp";
import Header_two from "../../assets/Header_two.webp";
import Header_three from "../../assets/Header_three.webp";
import Header_four from "../../assets/Header_four.webp";
import Header_five from "../../assets/Header_five.webp";
import Header_six from "../../assets/Header_six.webp";
import Header_seven from "../../assets/Header_seven.webp";
import Header_eight from "../../assets/Header_eight.webp";
import Header_nine from "../../assets/Header_nine.webp";
import Header_ten from "../../assets/Header_ten.webp";
import Header_eleven from "../../assets/Header_eleven.webp";
import Header_twelve from "../../assets/Header_twelve.webp";
import Maskgroup from "../../assets/Maskgroup.svg";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const containerRef = useRef(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const lastTouchX = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);
  const rafIdRef = useRef(null);
  const speed = 0.5;

  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion.current) return;

    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const scroll = (currentTime) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        if (!isPaused.current && !isDragging.current) {
          container.scrollLeft += speed;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
        lastFrameTime = currentTime;
      }
      rafIdRef.current = requestAnimationFrame(scroll);
    };

    rafIdRef.current = requestAnimationFrame(scroll);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const handleStart = useCallback((e) => {
    isDragging.current = true;
    isPaused.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    lastTouchX.current = clientX;
    scrollStart.current = containerRef.current.scrollLeft;
    lastTime.current = Date.now();
    velocity.current = 0;
    if (e.target.setPointerCapture && e.pointerId) {
      e.target.setPointerCapture(e.pointerId);
    }
    e.preventDefault();
  }, []);

  const handleMove = useCallback((e) => {
    if (!isDragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTime.current;
    if (timeDelta > 0) {
      velocity.current = (clientX - lastTouchX.current) / timeDelta;
    }
    const dx = clientX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - dx;
    lastTouchX.current = clientX;
    lastTime.current = currentTime;
    e.preventDefault();
  }, []);

  const handleEnd = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (Math.abs(velocity.current) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity.current * 100;
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.1) {
          isPaused.current = false;
          return;
        }
        container.scrollLeft -= currentVelocity;
        currentVelocity *= 0.95;
        requestAnimationFrame(momentumScroll);
      };
      requestAnimationFrame(momentumScroll);
    } else {
      setTimeout(() => {
        isPaused.current = false;
      }, 1000);
    }
    e.preventDefault();
  }, []);

  const handleTouchStart = useCallback((e) => handleStart(e), [handleStart]);
  const handleTouchMove = useCallback((e) => handleMove(e), [handleMove]);
  const handleTouchEnd = useCallback((e) => handleEnd(e), [handleEnd]);
  const handlePointerDown = useCallback((e) => handleStart(e), [handleStart]);
  const handlePointerMove = useCallback((e) => handleMove(e), [handleMove]);
  const handlePointerUp = useCallback((e) => handleEnd(e), [handleEnd]);
  const handleMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) isPaused.current = false;
  }, []);
  const handleFocus = useCallback(() => {
    isPaused.current = true;
  }, []);
  const handleBlur = useCallback(() => {
    if (!isDragging.current) isPaused.current = false;
  }, []);

  const sliderOne = [
    { src: Header_one },
    { src: Header_two },
    { src: Header_three },
    { src: Header_four },
  ];
  const sliderTwo = [
    { src: Header_five },
    { src: Header_six },
    { src: Header_seven },
    { src: Header_eight },
  ];
  const sliderThree = [
    { src: Header_nine },
    { src: Header_ten },
    { src: Header_eleven },
    { src: Header_twelve },
  ];

  return (
    <>
      {/* Desktop Hero Section */}
      <section
        className={`${styles.hero} ${styles["hero--desktop"]}`}
        aria-labelledby="hero-heading-desktop"
      >
        <div className={styles.hero__container}>
          <header className={styles.hero__content}>
            <h1 id="hero-heading-desktop" className={styles.hero__title}>
              Discover Gurugram's <br /> Top 30+ Schools
            </h1>
            <p className={styles.hero__subtitle}>All In One Place</p>
            <aside
              className={styles["hero__event-info"]}
              aria-label="Event details"
            >
              <address className={styles["hero__event-location"]}>
                <strong className={styles["hero__event-venue"]}>
                  Apparel House,
                </strong>
                <span className={styles["hero__event-address"]}>
                  Sec 44, Gurugram
                </span>
              </address>
              <span
                className={styles["hero__event-divider"]}
                aria-hidden="true"
              />
              <time
                className={styles["hero__event-date"]}
                dateTime="2025-08-02/2025-08-03"
              >
                <strong className={styles["hero__event-date-text"]}>
                  2–3 August 2025
                </strong>
                <span className={styles["hero__event-time"]}>
                  Sat–Sun | 10AM – 6PM
                </span>
              </time>
            </aside>
          </header>
          <div
            className={styles.hero__sliders}
            role="img"
            aria-label="School images gallery"
          >
            <div className={styles["hero__sliders--desktop"]}>
              <HeroVerticalSlider images={sliderOne} />
              <HeroVerticalSlider images={sliderTwo} />
              <HeroVerticalSlider images={sliderThree} />
            </div>
          </div>
          <div className={styles["hero__form-wrapper"]}>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Mobile Hero Section */}
      <section
        className={styles["hero--mobile"]}
        aria-labelledby="hero-heading-mobile"
      >
        <div className={styles["hero__mobile-wrapper"]}>
          <div
            ref={containerRef}
            className={styles["hero__mobile-slider"]}
            tabIndex={0}
            role="region"
            aria-label="Hero images slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <div className={styles["hero__mobile-slider-track"]}>
              {[...sliderOne, ...sliderTwo, ...sliderThree].map(
                (img, index) => (
                  <img
                    key={`hero-${index}`}
                    src={img.src}
                    loading="lazy"
                    alt={`School exhibition image ${index + 1}`}
                    className={`${styles["hero__mobile-slider-image"]} ${
                      index % 2 === 0
                        ? styles["hero__mobile-slider-image--even"]
                        : styles["hero__mobile-slider-image--odd"]
                    }`}
                    draggable={false}
                  />
                )
              )}
            </div>
          </div>
          <header className={styles["hero__mobile-content"]}>
            <h1
              id="hero-heading-mobile"
              className={styles["hero__mobile-title"]}
            >
              Discover Gurugram's <br /> Top 30+ Schools
            </h1>
            <p className={styles["hero__mobile-subtitle"]}>All In One Place</p>
          </header>
        </div>
        <img
          src={Maskgroup}
          alt=""
          className={styles.hero__mask}
          loading="lazy"
          aria-hidden="true"
        />
        <aside
          className={styles["hero__mobile-event-wrapper"]}
          aria-label="Event details"
        >
          <div className={styles["hero__mobile-event-info"]}>
            <address className={styles["hero__event-location"]}>
              <strong className={styles["hero__mobile-event-venue"]}>
                Apparel House,
              </strong>
              <span className={styles["hero__mobile-event-address"]}>
                Sec 44, Gurugram
              </span>
            </address>
            <span
              className={styles["hero__event-divider"]}
              aria-hidden="true"
            ></span>
            <time
              className={styles["hero__event-date"]}
              dateTime="2025-08-02/2025-08-03"
            >
              <strong className={styles["hero__mobile-event-date-text"]}>
                2-3 August 2025
              </strong>
              <span className={styles["hero__mobile-event-time"]}>
                Sat-Sun | 10AM - 6PM
              </span>
            </time>
          </div>
        </aside>
      </section>
    </>
  );
};

export default HeroSection;
