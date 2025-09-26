import Contact from "@/components/root/Contact";
import Features from "@/components/root/Features";
import Hero from "@/components/root/Hero";
import Pricing from "@/components/root/Pricing";
import { FadeInUp } from "@/components/ui/animate-on-scroll";

function WelcomePage() {
  return (
    <>
      <FadeInUp delay={200} duration={1000}>
        <Hero />
      </FadeInUp>
      <FadeInUp delay={100} duration={800}>
        <Features />
      </FadeInUp>
      <FadeInUp delay={100} duration={800}>
        <Pricing />
      </FadeInUp>
      <FadeInUp delay={100} duration={800}>
        <Contact />
      </FadeInUp>
    </>
  );
}

export default WelcomePage;
