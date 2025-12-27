import FindSchool_one from "../../assets/FindSchool_three.webp";
import FindSchool_two from "../../assets/FindSchool_two.webp";
import FindSchool_three from "../../assets/FindSchool_one.webp";
import FindSchool_four from "../../assets/FindSchool_four.webp";
import React, { useEffect, useRef, useState } from "react";
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
    <>
      <section className="container mx-auto xxl:px-25 px-5 flex flex-col gap-10.5 md:mb-12 mb-8">
        <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-center font-semibold md:text-4xl text-2xl">
          Choose the School That Fits You Best
        </h2>
        <div className="hidden xl:flex justify-center items-center gap-4">
          {schools.map((school, index) => (
            <div
              key={index}
              className="w-105 relative h-101.25 rounded-xl p-2"
              style={{
                backgroundImage: `url(${school.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
              }}
            >
              <div className="absolute inset-0 z-10 bg-linear-to-b from-[#00000000] to-[#00000087] rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-[#FFFFFF] font-semibold text-xl">
                  {school.title}
                </h3>
                <p className="text-[#FFFFFF] font-normal text-[18px] ">
                  {school.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          className="xl:hidden flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {schools.map((school) => (
            <div
              key={school.id}
              className="w-105 relative h-101.25 rounded-xl p-2 shrink-0 snap-start"
              style={{
                backgroundImage: `url(${school.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 z-10 bg-linear-to-b from-[#00000000] to-[#00000087] rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-white font-semibold text-lg">
                  {school.title}
                </h3>
                <p className="text-white text-sm">{school.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="xl:hidden flex justify-center gap-2">
          {schools.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === i ? "bg-[#000E38] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default FindYourSchool;
