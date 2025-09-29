// Update this page (the content is just a fallback if you fail to update the page)

import Hero from "@/components/Hero";
import RotationalMastery from "@/components/RotationalMastery";
import WhyJar from "@/components/WhyJar";
import ProgramOverview from "@/components/ProgramOverview";
import WhatYoullGet from "@/components/WhatYoullGet";
import WhoShouldApply from "@/components/WhoShouldApply";
import BeyondLearning from "@/components/BeyondLearning";
import WhyAPMsChooseJar from "@/components/WhyAPMsChooseJar";
import ApplicationProcess from "@/components/ApplicationProcess";
import FloatingApplyCTA from "@/components/FloatingApplyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RotationalMastery />
      <WhoShouldApply />
      <WhatYoullGet />
      <WhyJar />
      <ProgramOverview />
      <WhyAPMsChooseJar />
      <BeyondLearning />
      <ApplicationProcess />
      <FloatingApplyCTA />
      <Footer />
    </div>
  );
};

export default Index;
