import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import HeroSection from "../../components/sections/HeroSection";
import StatsSection from "../../components/sections/StatsSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import CTASection from "../../components/sections/CTASection";

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <StatsSection />

      <FeaturesSection />

      <HowItWorksSection />

      <CTASection />

      <Footer />
    </>
  );
}

export default Home;