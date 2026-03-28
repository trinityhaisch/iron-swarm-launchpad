import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import PlatformSection from "@/components/PlatformSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import FoundersSection from "@/components/FoundersSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";
import Hero from "@/components/openpage";
import FeatureSection from "@/components/underopen";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero/>
      <FeatureSection />
      {/* <HeroSection /> */}
      <WhatWeDoSection />
      <PlatformSection />
      <HowItWorksSection />
      <UseCasesSection />
      <FoundersSection />
      <VisionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
