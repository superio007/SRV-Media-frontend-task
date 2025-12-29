import SchduleYourApp_desktop from "../../assets/SchduleYourApp_desktop.webp";
import SchduleYourApp_mobile from "../../assets/SchduleYourApp_mobile.webp";
import GradientButton from "../Ui/GradientButton";
import styles from "./ScheduleYourAppointment.module.css";

const ScheduleYourAppointment = () => {
  return (
    <>
      {/* Desktop Section */}
      <section
        className={`${styles.schedule} ${styles["schedule--desktop"]}`}
        style={{
          backgroundImage: `url(${SchduleYourApp_desktop})`,
        }}
        aria-labelledby="schedule-heading-desktop"
      >
        <div className={styles.schedule__container}>
          <header className={styles.schedule__content}>
            <p className={styles.schedule__tagline}>
              Exciting Opportunities for Parents!
            </p>
            <h2
              id="schedule-heading-desktop"
              className={styles.schedule__heading}
            >
              Pre-schedule Your <br /> School Appointments
            </h2>
            <p className={styles.schedule__tagline}>To Avoid Rush</p>
          </header>
          <div>
            <GradientButton label="PRE-SCHEDULE NOW" />
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section
        className={`${styles.schedule} ${styles["schedule--mobile"]}`}
        style={{
          backgroundImage: `url(${SchduleYourApp_mobile})`,
        }}
        aria-labelledby="schedule-heading-mobile"
      >
        <div className={styles.schedule__container}>
          <header className={styles.schedule__content}>
            <p
              className={`${styles.schedule__tagline} ${styles["schedule__tagline--mobile"]}`}
            >
              Exciting Opportunities for Parents!
            </p>
            <h2
              id="schedule-heading-mobile"
              className={`${styles.schedule__heading} ${styles["schedule__heading--mobile"]}`}
            >
              Pre-schedule Your <br /> School Appointments
            </h2>
            <p
              className={`${styles.schedule__tagline} ${styles["schedule__tagline--mobile"]}`}
            >
              To Avoid Rush
            </p>
          </header>
          <div>
            <GradientButton label="PRE-SCHEDULE NOW" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleYourAppointment;
