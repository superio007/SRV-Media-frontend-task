import AccrossGlobe from "../../assets/AccrossGlobe.webp";
import ParticipatingSchools from "../../assets/ParticipatingSchools.webp";
import TrustedByParents from "../../assets/TrustedByParents.webp";
import YearsOfLeagacy from "../../assets/YearsOfLeagacy.webp";

const AwardsAndRecognitions = () => {
  return (
    <section aria-labelledby="awards-heading">
      <h2 id="awards-heading" className="sr-only">
        Awards and Recognitions
      </h2>
      <ul className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-10 px-5 py-8 md:py-20 place-items-center list-none">
        <li>
          <figure>
            <img
              src={TrustedByParents}
              alt="Trusted By Parents - Award badge"
              loading="lazy"
              className="w-42.5"
            />
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={YearsOfLeagacy}
              alt="Years Of Legacy - Award badge"
              className="w-42.5"
              loading="lazy"
            />
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={ParticipatingSchools}
              alt="Participating Schools - Award badge"
              className="w-42.5"
              loading="lazy"
            />
          </figure>
        </li>
        <li>
          <figure>
            <img
              src={AccrossGlobe}
              alt="Across Globe - Award badge"
              className="w-42.5"
              loading="lazy"
            />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default AwardsAndRecognitions;
