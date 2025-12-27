import React from "react";
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
              Discover Gurugram’s <br /> Top 30+ Schools
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
            className="overflow-x-auto overscroll-x-contain"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-6 w-max px-6">
              {[...sliderOne, ...sliderTwo, ...sliderThree].map((img, index) =>
                index % 2 === 0 ? (
                  <img
                    key={index}
                    src={img.src}
                    alt=""
                    className="w-36 h-56 pt-10 shrink-0"
                  />
                ) : (
                  <img
                    key={index}
                    src={img.src}
                    alt=""
                    className="w-36 h-56 pb-10 shrink-0"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-semibold bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent mb-2">
              Discover Gurugram’s <br /> Top 30+ Schools
            </h1>
            <p className="text-sm font-normal bg-linear-to-r from-[#FFCC81] to-[#E9C79F] bg-clip-text text-transparent">
              All In One Place
            </p>
          </div>
        </div>
        <img src={Maskgroup} alt="Maskgroup" className="bg-[#000E38] w-full" />
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
