import { useEffect, useRef } from "react";

const VerticalAutoSlider = ({ images, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;

    const scroll = () => {
      if (!isPaused.current) {
        container.scrollTop += speed;

        if (
          container.scrollTop >=
          container.scrollHeight - container.clientHeight
        ) {
          container.scrollTop = 0;
        }
      }

      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className="h-180 overflow-hidden focus:outline-none"
      tabIndex={0}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onFocus={() => (isPaused.current = true)}
      onBlur={() => (isPaused.current = false)}
    >
      <div className="flex flex-col gap-6">
        {[...images, ...images].map((src, i) => (
          <div key={i} className="shrink-0">
            <img src={src.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalAutoSlider;
