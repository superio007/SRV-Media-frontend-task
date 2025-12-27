import React from "react";
import Harrow_School from "../../assets/harrow_school.webp";
import Kings_School from "../../assets/Kings_School.webp";
import Mombasa_School from "../../assets/Mombasa_School.webp";
import Shrewsbury_School from "../../assets/Shrewsbury_School.webp";
import TISB_School from "../../assets/TISB_School.webp";
import Woodstock_School from "../../assets/Woodstock_School.webp";
import SchoolLogoSlider from "../Ui/SchoolLogoSlider";

const ParticipatingSchool = () => {
  const schools = [
    { name: "Harrow School", logo: Harrow_School },
    { name: "Kings School", logo: Kings_School },
    { name: "Mombasa School", logo: Mombasa_School },
    { name: "Shrewsbury School", logo: Shrewsbury_School },
    { name: "TISB School", logo: TISB_School },
    { name: "Woodstock School", logo: Woodstock_School },
  ];
  return (
    <>
      <section className="flex flex-col gap-10.5 md:mb-12 mb-8">
        <h2 className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-center font-bold md:text-3xl text-xl">
          Participating Schools
        </h2>
        <SchoolLogoSlider schools={schools} direction={1} />
        <SchoolLogoSlider schools={schools} direction={-1} />
      </section>
    </>
  );
};
export default ParticipatingSchool;
