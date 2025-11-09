import Hero from "@/components/landing/welcome/Hero";
import Features from "@/components/landing/welcome/Features";
import Steps from "@/components/landing/welcome/Steps";
import Pricing from "@/components/landing/welcome/Pricing";
import AdvancedFeatures from "@/components/landing/welcome/AdvancedFeatures";
import Promise from "@/components/landing/welcome/Promise";
// import GetStarted from "@/components/landing/welcome/GetStarted";
import Faqs from "@/components/landing/welcome/Faqs";

function WelcomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <AdvancedFeatures />
      <Promise />
      {/* <GetStarted /> */}
      <Faqs />
    </>
  );
}

export default WelcomePage;
