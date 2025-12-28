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
          container.scrollLeft += speed;

          // Reset at HALF, not end
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

  // Touch and pointer event handlers
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

    // Add momentum scrolling
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
      <section className="hidden md:flex min-h-[90vh] bg-linear-to-r from-[#000E38] to-[#3F186A] items-center">
        <div
          className="
      container lg:mx-auto xxl:px-25 px-5
      flex justify-between items-center 
      gap-10
    "
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl w-max font-semibold bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent mb-2">
              Discover Gurugram's <br /> Top 30+ Schools
            </h1>

            <p className="text-2xl lg:text-3xl font-normal bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent">
              All In One Place
            </p>

            <div className="bg-linear-to-r from-[#FFCC81] to-[#E9C79F] p-6 rounded-full mt-8 w-max flex gap-8 items-center">
              <div className="flex flex-col">
                <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent font-bold text-2xl">
                  Apparel House,
                </h2>
                <p className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-lg">
                  Sec 44, Gurugram
                </p>
              </div>

              <div className="border-r border-[#000E38] h-16" />

              <div className="flex flex-col">
                <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent font-bold text-2xl">
                  2–3 August 2025
                </h2>
                <p className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-lg">
                  Sat–Sun | 10AM – 6PM
                </p>
              </div>
            </div>
          </div>

          {/* CENTER SLIDERS */}
          <div className="flex justify-center gap-4">
            {/* Desktop: 3 sliders */}
            <div className="hidden xl:flex gap-4">
              <HeroVerticalSlider images={sliderOne} />
              <HeroVerticalSlider images={sliderTwo} />
              <HeroVerticalSlider images={sliderThree} />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-105 justify-self-end">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="md:hidden">
        <div className="px-5 relative py-5 gap-6 flex flex-col bg-linear-to-t from-[#000E38] to-[#3F186A]">
          <div
            ref={containerRef}
            className="overflow-x-hidden focus:outline-none touch-pan-x scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            tabIndex={0}
            role="region"
            aria-label="Hero images slider"
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
            <div className="flex gap-6 w-max px-6">
              {[...sliderOne, ...sliderTwo, ...sliderThree].map(
                (img, index) => (
                  <img
                    key={`hero-${index}`}
                    src={img.src}
                    loading="lazy"
                    alt={`Header ${index + 1}`}
                    className={`w-36 h-56 shrink-0 pointer-events-none ${
                      index % 2 === 0 ? "pt-10" : "pb-10"
                    }`}
                    draggable={false}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-semibold bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent mb-2">
              Discover Gurugram's <br /> Top 30+ Schools
            </h1>
            <p className="text-sm font-normal bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent">
              All In One Place
            </p>
          </div>
        </div>
        <img
          src={Maskgroup}
          alt="Maskgroup"
          className="bg-[#000E38] w-full"
          loading="lazy"
        />
        <div className="flex w-full justify-center">
          <div className="bg-linear-to-r from-[#FFCC81] to-[#E9C79F] p-3 rounded-full  w-max flex gap-7.5 text-center items-center">
            <div className="flex flex-col">
              <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent font-bold text-xl">
                Apparel House,
              </h2>
              <p className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-sm">
                Sec 44, Gurugram
              </p>
            </div>
            <div className="border-r border-[#000E38] h-16"></div>
            <div className="flex flex-col">
              <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent font-bold text-xl">
                2-3 August 2025
              </h2>
              <p className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-sm">
                Sat-Sun | 10AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
