import { useEffect, useRef, useCallback } from "react";
import styles from "./SchoolLogoSlider.module.css";

const SchoolLogoSlider = ({ schools, direction = 1, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const isHovering = useRef(false);
  const rafIdRef = useRef(null);
  const lastTouchX = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);
  const isInitialized = useRef(false);

  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isInitialized.current) return;

    const initializePosition = () => {
      if (container.scrollWidth > 0) {
        const totalWidth = container.scrollWidth / 2;
        if (direction === -1) {
          container.scrollLeft = totalWidth;
        } else {
          container.scrollLeft = 0;
        }
        isInitialized.current = true;
      } else {
        setTimeout(initializePosition, 100);
      }
    };

    initializePosition();
  }, [direction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion.current) return;

    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const autoScroll = (currentTime) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        if (
          !isHovering.current &&
          !isDragging.current &&
          isInitialized.current
        ) {
          const totalWidth = container.scrollWidth / 2;
          container.scrollLeft += speed * direction;
          if (direction === 1) {
            if (container.scrollLeft >= totalWidth) {
              container.scrollLeft = 0;
            }
          } else {
            if (container.scrollLeft <= 0) {
              container.scrollLeft = totalWidth;
            }
          }
        }
        lastFrameTime = currentTime;
      }
      rafIdRef.current = requestAnimationFrame(autoScroll);
    };

    rafIdRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [direction, speed]);

  const handleStart = useCallback((e) => {
    isDragging.current = true;
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
        if (Math.abs(currentVelocity) < 0.1) return;
        const totalWidth = container.scrollWidth / 2;
        container.scrollLeft -= currentVelocity;
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = totalWidth;
        }
        currentVelocity *= 0.95;
        requestAnimationFrame(momentumScroll);
      };
      requestAnimationFrame(momentumScroll);
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
    isHovering.current = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (isDragging.current) isDragging.current = false;
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (!containerRef.current) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        containerRef.current.scrollLeft += 200;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        containerRef.current.scrollLeft -= 200;
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("keydown", handleKey);
      return () => container.removeEventListener("keydown", handleKey);
    }
  }, []);

  return (
    <ul
      ref={containerRef}
      className={styles["logo-slider"]}
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
      tabIndex={0}
      role="region"
      aria-label="School logos slider"
    >
      {[...schools, ...schools].map((school, index) => (
        <li
          key={`${school.name}-${index}`}
          className={styles["logo-slider__item"]}
        >
          <img
            src={school.logo}
            alt={`${school.name} logo`}
            loading="lazy"
            className={styles["logo-slider__image"]}
            draggable={false}
          />
        </li>
      ))}
    </ul>
  );
};

export default SchoolLogoSlider;
