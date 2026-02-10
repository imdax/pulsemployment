import React from "react";
import HeroSection from "../Components/HeroSection";
import VisionSection from "../Components/VisionSection";
import ServicesGrid from "../Components/ServicesGrid";
import ConsultancySection from "../Components/ConsultancySection";
import CaseStudies from "../Components/CaseStudies";
import ProcessSection from "../Components/ProcessSection";
import TeamSection from "../Components/TeamSection";
import ClientsStrip from "../Components/ClientsStrip";
import BlogSection from "../Components/BlogSection";
import TestimonialSection from "../Components/TestimonialSection";

import EmployerSection from "../Components/EmployerSection";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />          {/* Sections 3 & 4 */}
      <VisionSection />        {/* Section 5 */}
      <EmployerSection />      {/* New Employer Section */}
      <ServicesGrid />         {/* Section 6 */}
      <ConsultancySection />   {/* Sections 7 & 8 */}
      <CaseStudies />          {/* Section 9 */}
      <TestimonialSection />   {/* New Section */}
      <ProcessSection />       {/* Section 10 */}
      <TeamSection />          {/* Section 11 */}
      <ClientsStrip />         {/* Section 12 */}
    </div>
  );
}

export default Home;
