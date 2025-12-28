import React from "react";
import AccrossGlobe from "../../assets/AccrossGlobe.webp";
import ParticipatingSchools from "../../assets/ParticipatingSchools.webp";
import TrustedByParents from "../../assets/TrustedByParents.webp";
import YearsOfLeagacy from "../../assets/YearsOfLeagacy.webp";

const AwardsAndRecognitions = () => {
  return (
    <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-10 px-5 py-8 md:py-20 place-items-center">
      <img
        src={TrustedByParents}
        alt="Trusted By Parents"
        loading="lazy"
        className="w-42.5"
      />
      <img
        src={YearsOfLeagacy}
        alt="Years Of Legacy"
        className="w-42.5"
        loading="lazy"
      />
      <img
        src={ParticipatingSchools}
        alt="Participating Schools"
        className="w-42.5"
        loading="lazy"
      />
      <img
        src={AccrossGlobe}
        alt="Across Globe"
        className="w-42.5"
        loading="lazy"
      />
    </div>
  );
};

export default AwardsAndRecognitions;
