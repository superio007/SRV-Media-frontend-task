import React, { useState } from "react";
import curve from "../../assets/curve.webp";
import AdmissionsCounselling from "../../assets/AdmissionsCounselling.webp";
import ComparePedagogy from "../../assets/ComparePedagogy.webp";
import ExclusiveOffers from "../../assets/ExclusiveOffers.webp";
import InterectHeads from "../../assets/InterectHeads.webp";
import SchoolsOfferings from "../../assets/SchoolsOfferings.webp";
import { MoveRight, MoveLeft } from "lucide-react";

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
  const cardWidth = 380; // must match actual card width + gap

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < highlights.length - 1) setIndex(index + 1);
  };

  return (
    <>
      <section className="bg-linear-to-t from-[#091740fc] to-[#3F186A]">
        <div className="container mx-auto xxl:px-25 px-5 md:pt-20 pt-8">
          <h2 className="text-white text-center font-semibold md:text-4xl text-2xl mb-10">
            What Makes This Exhibition a Must-Visit
          </h2>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300"
              style={{ transform: `translateX(-${index * cardWidth}px)` }}
            >
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="min-w-90 rounded-xl p-0.5 bg-linear-to-r from-[#070F3D] to-[#755797]"
                >
                  <div className="rounded-xl bg-[#DDBFFF] p-7.5 h-80 flex flex-col gap-7.5">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt={item.title}
                      className="w-20 h-20"
                    />
                    <div>
                      <h3 className="font-bold text-2xl text-[#000E38]">
                        {item.title}
                      </h3>
                      <p className="text-xl text-[#000E38]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ARROWS */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="border p-3 border-white group hover:bg-white rounded-full disabled:opacity-40 hover:cursor-pointer"
            >
              <MoveLeft className="text-white group-hover:text-[#000E38] group-hover:cursor-pointer" />
            </button>
            <button
              onClick={next}
              disabled={index === highlights.length - 1}
              className="border p-3 border-white group hover:bg-white rounded-full disabled:opacity-40 hover:cursor-pointer"
            >
              <MoveRight className="text-white group-hover:text-[#000E38] group-hover:cursor-pointer" />
            </button>
          </div>
        </div>
      </section>

      <div className="md:mb-12 mb-8">
        <img src={curve} alt="Curve" className="w-full" loading="lazy" />
      </div>
    </>
  );
};

export default ExhibitionHighlights;
