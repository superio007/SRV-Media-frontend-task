import React from "react";
import AccrossGlobe from "../../assets/AccrossGlobe.webp";
import ParticipatingSchools from "../../assets/ParticipatingSchools.webp";
import TrustedByParents from "../../assets/TrustedByParents.webp";
import YearsOfLeagacy from "../../assets/YearsOfLeagacy.webp";

const AwardsAndRecognitions = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-5 md:px-25 md:py-20 py-8 place-items-center">
      <img src={TrustedByParents} alt="Trusted By Parents" className="w-42.5" />
      <img src={YearsOfLeagacy} alt="Years Of Legacy" className="w-42.5" />
      <img
        src={ParticipatingSchools}
        alt="Participating Schools"
        className="w-42.5"
      />
      <img src={AccrossGlobe} alt="Across Globe" className="w-42.5" />
    </div>
  );
};

export default AwardsAndRecognitions;
