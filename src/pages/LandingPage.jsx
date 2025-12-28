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
const ExhibitionHighlights = lazy(() =>
  import("../components/Home/ExhibitionHighlights")
);
import FallBack from "../components/Ui/Fallback";
const LandingPage = () => {
  return (
    <>
      <Suspense fallback={<FallBack />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<FallBack />}>
        <AwardsAndRecognitions />
      </Suspense>
      <Suspense fallback={<FallBack />}>
        <ParticipatingSchool />
      </Suspense>
      <Suspense fallback={<FallBack />}>
        <FindYourSchool />
      </Suspense>
      <Suspense fallback={<FallBack />}>
        <ScheduleYourAppointment />
      </Suspense>
      <Suspense fallback={<FallBack />}>
        <ExhibitionHighlights />
      </Suspense>
    </>
  );
};

export default LandingPage;
