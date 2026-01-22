import React from "react";
import HeroSection from "../Components/HeroSection";
import WhyChooseUs from "../Components/Why";
import StatsSection from "../Components/StatsSection";
import HowItWorksPreview from "../Components/HowItWorksPreview";
import JobCategories from "../Components/JobCategories";
import TrustCompliance from "../Components/TrustCompliance";
import CTABanner from "../Components/CTABanner";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyChooseUs />
      <StatsSection />
      <HowItWorksPreview />
      <JobCategories />
      <TrustCompliance />
      <CTABanner />
    </div>
  );
}

export default Home;
