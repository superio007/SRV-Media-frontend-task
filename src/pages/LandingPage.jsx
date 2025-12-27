import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const AwardsAndRecognitions = lazy(() =>
  import("../components/Home/AwardsAndRecognitions")
);
const ParticipatingSchool = lazy(() =>
  import("../components/Home/ParticipatingSchool")
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
    </>
  );
};

export default LandingPage;
