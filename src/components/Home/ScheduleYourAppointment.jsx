import SchduleYourApp_desktop from "../../assets/SchduleYourApp_desktop.webp";
import SchduleYourApp_mobile from "../../assets/SchduleYourApp_mobile.webp";
import GradientButton from "../Ui/GradientButton";

const ScheduleYourAppointment = () => {
  return (
    <>
      {/* Desktop Section */}
      <section
        className="xxl:px-25 px-5 hidden md:flex justify-start items-center gap-10.5 w-auto h-181.25"
        style={{
          backgroundImage: `url(${SchduleYourApp_desktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        aria-labelledby="schedule-heading-desktop"
      >
        <div className="flex flex-col container mx-auto gap-10">
          <header className="flex flex-col gap-3">
            <p className="bg-linear-to-t from-[#755797] to-[#9B4DF0] md:text-3xl text-1.5 bg-clip-text text-transparent">
              Exciting Opportunities for Parents!
            </p>
            <h2
              id="schedule-heading-desktop"
              className="bg-linear-to-t from-[#000E38] to-[#3F186A] text-transparent bg-clip-text text-6xl"
            >
              Pre-schedule Your <br /> School Appointments
            </h2>
            <p className="bg-linear-to-t from-[#755797] to-[#9B4DF0] md:text-3xl text-1.5 bg-clip-text text-transparent">
              To Avoid Rush
            </p>
          </header>
          <div>
            <GradientButton label="PRE-SCHEDULE NOW" />
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section
        className="px-5 py-10 md:hidden flex flex-col justify-start items-start gap-10.5 w-auto h-181.25"
        style={{
          backgroundImage: `url(${SchduleYourApp_mobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
        aria-labelledby="schedule-heading-mobile"
      >
        <div className="flex flex-col gap-10">
          <header className="flex flex-col gap-3">
            <p className="bg-linear-to-t from-[#755797] to-[#9B4DF0] text-lg text-1.5 bg-clip-text text-transparent">
              Exciting Opportunities for Parents!
            </p>
            <h2
              id="schedule-heading-mobile"
              className="bg-linear-to-t from-[#000E38] to-[#3F186A] text-transparent bg-clip-text text-3xl"
            >
              Pre-schedule Your <br /> School Appointments
            </h2>
            <p className="bg-linear-to-t from-[#755797] to-[#9B4DF0] text-lg text-1.5 bg-clip-text text-transparent">
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
