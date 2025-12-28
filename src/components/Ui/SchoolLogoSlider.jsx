import { useEffect, useRef, useCallback } from "react";

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

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Initialize scroll position based on direction
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isInitialized.current) return;

    // Wait for images to load and container to have proper dimensions
    const initializePosition = () => {
      if (container.scrollWidth > 0) {
        const totalWidth = container.scrollWidth / 2;

        if (direction === -1) {
          // For reverse direction, start from the end
          container.scrollLeft = totalWidth;
        } else {
          // For forward direction, start from the beginning
          container.scrollLeft = 0;
        }

        isInitialized.current = true;
      } else {
        // Retry if container isn't ready
        setTimeout(initializePosition, 100);
      }
    };

    initializePosition();
  }, [direction]);

  // AUTO SCROLL with performance optimization
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

          // Handle infinite scroll for both directions
          if (direction === 1) {
            // Forward direction: reset when reaching the end
            if (container.scrollLeft >= totalWidth) {
              container.scrollLeft = 0;
            }
          } else {
            // Reverse direction: reset when reaching the beginning
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

  // Enhanced touch/pointer support
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

    // Prevent default to avoid scrolling issues on mobile
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

    // Add momentum scrolling for better mobile experience
    if (Math.abs(velocity.current) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity.current * 100; // Scale velocity

      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.1) return;

        const totalWidth = container.scrollWidth / 2;
        container.scrollLeft -= currentVelocity;

        // Handle infinite scroll during momentum
        if (container.scrollLeft >= totalWidth) {
          container.scrollLeft = 0;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft = totalWidth;
        }

        currentVelocity *= 0.95; // Friction
        requestAnimationFrame(momentumScroll);
      };

      requestAnimationFrame(momentumScroll);
    }

    e.preventDefault();
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e) => {
      handleStart(e);
    },
    [handleStart]
  );

  const handleTouchMove = useCallback(
    (e) => {
      handleMove(e);
    },
    [handleMove]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      handleEnd(e);
    },
    [handleEnd]
  );

  // Pointer event handlers (for better cross-device support)
  const handlePointerDown = useCallback(
    (e) => {
      handleStart(e);
    },
    [handleStart]
  );

  const handlePointerMove = useCallback(
    (e) => {
      handleMove(e);
    },
    [handleMove]
  );

  const handlePointerUp = useCallback(
    (e) => {
      handleEnd(e);
    },
    [handleEnd]
  );

  // Mouse event handlers for hover state
  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);

  // KEYBOARD SUPPORT with better mobile handling
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
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none touch-pan-x"
      style={{
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
      }}
      // Touch events
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      // Pointer events
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      // Mouse events
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Accessibility
      tabIndex={0}
      role="region"
      aria-label="School logos slider"
    >
      {[...schools, ...schools].map((school, index) => (
        <div
          key={`${school.name}-${index}`}
          className="min-w-70 border border-[#E8E7E7] py-4 flex justify-center items-center flex-shrink-0"
        >
          <img
            src={school.logo}
            alt={school.name}
            loading="lazy"
            className="h-20 object-contain pointer-events-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default SchoolLogoSlider;
