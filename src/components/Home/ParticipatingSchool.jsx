import Harrow_School from "../../assets/Harrow_School.webp";
import Kings_School from "../../assets/Kings_School.webp";
import Mombasa_School from "../../assets/Mombasa_School.webp";
import Shrewsbury_School from "../../assets/Shrewsbury_School.webp";
import TISB_School from "../../assets/TISB_School.webp";
import Woodstock_School from "../../assets/Woodstock_School.webp";
import SchoolLogoSlider from "../Ui/SchoolLogoSlider";
import styles from "./ParticipatingSchool.module.css";

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
    <section
      className={styles.participating}
      aria-labelledby="participating-schools-heading"
    >
      <h2
        id="participating-schools-heading"
        className={styles.participating__heading}
      >
        Participating Schools
      </h2>
      <SchoolLogoSlider schools={schools} direction={-1} />
      <SchoolLogoSlider schools={schools} direction={1} />
    </section>
  );
};

export default ParticipatingSchool;
