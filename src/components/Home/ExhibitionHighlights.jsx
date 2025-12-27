import React from "react";
import curve from "../../assets/curve.webp";
const ExhibitionHighlights = () => {
  return (
    <>
      <section className="bg-linear-to-t relative from-[#091740fc] to-[#3F186A]">
        <section className="container mx-auto xxl:px-25 px-5 md:py-20 py-8  flex flex-col gap-10.5">
          <h2 className="text-white text-center font-semibold md:text-4xl text-2xl">
            What Makes This Exhibition a Must-Visit
                  </h2>
                  
        </section>
      </section>
      <div className="md:mb-12 mb-8">
        <img src={curve} alt="Curve" className="w-full" />
      </div>
    </>
  );
};
export default ExhibitionHighlights;
