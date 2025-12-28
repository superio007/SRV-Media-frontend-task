import { useEffect, useRef, useCallback } from "react";

const VerticalAutoSlider = ({ images, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const isPaused = useRef(false);
  const rafIdRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollStart = useRef(0);
  const lastTouchY = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Enhanced auto-scroll with performance optimization
  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion.current) return;

    let lastFrameTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const scroll = (currentTime) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        if (!isPaused.current && !isDragging.current) {
          container.scrollTop += speed;

          if (
            container.scrollTop >=
            container.scrollHeight - container.clientHeight
          ) {
            container.scrollTop = 0;
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
  }, [speed]);

  // Touch and pointer event handlers
  const handleStart = useCallback((e) => {
    isDragging.current = true;
    isPaused.current = true;

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startY.current = clientY;
    lastTouchY.current = clientY;
    scrollStart.current = containerRef.current.scrollTop;
    lastTime.current = Date.now();
    velocity.current = 0;

    if (e.target.setPointerCapture && e.pointerId) {
      e.target.setPointerCapture(e.pointerId);
    }

    e.preventDefault();
  }, []);

  const handleMove = useCallback((e) => {
    if (!isDragging.current) return;

    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTime.current;

    if (timeDelta > 0) {
      velocity.current = (clientY - lastTouchY.current) / timeDelta;
    }

    const dy = clientY - startY.current;
    containerRef.current.scrollTop = scrollStart.current - dy;

    lastTouchY.current = clientY;
    lastTime.current = currentTime;

    e.preventDefault();
  }, []);

  const handleEnd = useCallback((e) => {
    if (!isDragging.current) return;

    isDragging.current = false;

    // Add momentum scrolling
    if (Math.abs(velocity.current) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity.current * 100;

      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.1) {
          isPaused.current = false;
          return;
        }

        container.scrollTop -= currentVelocity;
        currentVelocity *= 0.95;

        requestAnimationFrame(momentumScroll);
      };

      requestAnimationFrame(momentumScroll);
    } else {
      // Resume auto-scroll after a short delay
      setTimeout(() => {
        isPaused.current = false;
      }, 1000);
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

  // Pointer event handlers
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

  // Mouse event handlers
  const handleMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) {
      isPaused.current = false;
    }
  }, []);

  const handleFocus = useCallback(() => {
    isPaused.current = true;
  }, []);

  const handleBlur = useCallback(() => {
    if (!isDragging.current) {
      isPaused.current = false;
    }
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (!containerRef.current) return;

      if (e.key === "ArrowUp") {
        e.preventDefault();
        containerRef.current.scrollTop -= 100;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        containerRef.current.scrollTop += 100;
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
      className="h-180 overflow-hidden focus:outline-none touch-pan-y"
      style={{
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      tabIndex={0}
      role="region"
      aria-label="Vertical image slider"
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
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className="flex flex-col gap-6">
        {[...images, ...images].map((src, i) => (
          <div key={`image-${i}`} className="shrink-0">
            <img
              src={src.src}
              alt={`Header ${i + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoSlider;
