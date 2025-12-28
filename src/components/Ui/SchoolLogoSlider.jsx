import { useEffect, useRef } from "react";

const SchoolLogoSlider = ({ schools, direction = 1, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const isHovering = useRef(false);
  const rafIdRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    const autoScroll = () => {
      if (!isHovering.current && !isDragging.current) {
        container.scrollLeft += speed * direction;

        if (direction === 1 && container.scrollLeft >= totalWidth) {
          container.scrollLeft -= totalWidth;
        }

        if (direction === -1 && container.scrollLeft <= 0) {
          container.scrollLeft += totalWidth;
        }
      }

      rafIdRef.current = requestAnimationFrame(autoScroll);
    };

    rafIdRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [direction, speed]);

  // DRAG SUPPORT
  const onPointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = containerRef.current.scrollLeft;
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  // KEYBOARD SUPPORT
  useEffect(() => {
    const handleKey = (e) => {
      if (!containerRef.current) return;

      if (e.key === "ArrowRight") {
        containerRef.current.scrollLeft += 200;
      }

      if (e.key === "ArrowLeft") {
        containerRef.current.scrollLeft -= 200;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      style={{ scrollbarWidth: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      {[...schools, ...schools].map((school, index) => (
        <div
          key={index}
          className="min-w-70 border border-[#E8E7E7] py-4 flex justify-center items-center"
        >
          <img
            src={school.logo}
            alt={school.name}
            className="h-20 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SchoolLogoSlider;
