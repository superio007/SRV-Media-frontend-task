import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../components/Home/HeroSection"));
const AwardsAndRecognitions = lazy(() =>
  import("../components/Home/AwardsAndRecognitions")
);
const LandingPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AwardsAndRecognitions />
      </Suspense>
    </>
  );
};

export default LandingPage;
