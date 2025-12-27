import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const AwardsAndRecognitions = lazy(() =>
  import("../components/Home/AwardsAndRecognitions")
);
const ParticipatingSchool = lazy(() =>
  import("../components/Home/ParticipatingSchool")
);
const FindYourSchool = lazy(() => import("../components/Home/FindYourSchool"));
const ScheduleYourAppointment = lazy(() =>
  import("../components/Home/ScheduleYourAppointment")
);
const LandingPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <HeroSection /> */}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsAndRecognitions />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ParticipatingSchool />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FindYourSchool />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ScheduleYourAppointment />
      </Suspense>
    </>
  );
};

export default LandingPage;
