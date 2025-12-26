import React from "react";
import AccrossGlobe from "../../assets/AccrossGlobe.webp";
import ParticipatingSchools from "../../assets/ParticipatingSchools.webp";
import TrustedByParents from "../../assets/TrustedByParents.webp";
import YearsOfLeagacy from "../../assets/YearsOfLeagacy.webp";
const AwardsAndRecognitions = () => {
  return (
    <>
      <div className="container mx-auto flex justify-center gap-10 px-25 py-20">
        <img src={AccrossGlobe} alt="Across Globe" className="w-70"/>
        <img src={ParticipatingSchools} alt="Participating Schools" className="w-70" />
        <img src={TrustedByParents} alt="Trusted By Parents" className="w-70" />
        <img src={YearsOfLeagacy} alt="Years Of Legacy" className="w-70" />
      </div>
    </>
  );
};
export default AwardsAndRecognitions;
