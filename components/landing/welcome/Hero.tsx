import { FadeInUp } from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import VantaTopology from "@/components/VantaTopology";
import { ChartNoAxesCombined, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative -mt-24 pt-24  overflow-hidden">
      <VantaTopology color={0x4338ca} />

      <div className="relative z-10 flex flex-col lg:flex-row container items-center lg:items-center lg:justify-between gap-10 md:gap-5">
        <div className="text-left">
          <h1 className="uppercase text-5xl sm:text-6xl font-extrabold tracking-tight">
            <span className="text-[30px] sm:text-[35px]">Take Control,</span>{" "}
            <br />
            Manage Your <br />
            Finances
          </h1>

          <h2 className="max-w-[610px] text-sm md:text-base pt-2">
            The first step is knowing your numbers. Our platform helps you track
            and visualise your financial habits. Effectively save and plan for
            your future.
          </h2>

          <div className="relative z-10 container">
            <p className="font-extrabold uppercase text-xs pt-14 pb-4">
              Get started with Moneter
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/sign-up" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="glass-primary"
                  className="cursor-pointer flex flex-row items-center gap-1.5 w-full sm:w-auto"
                >
                  <LogIn />
                  Get started
                </Button>
              </Link>
              <Link href="/#features" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="glass-secondary"
                  className="cursor-pointer flex flex-row items-center gap-1.5 w-full sm:w-auto"
                >
                  <ChartNoAxesCombined />
                  Explore features
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-center z-50! max-w-[600px]">
          <div className="hidden dark:grid grid-cols-5 gap-2">
            {/* Top Left - Desktop Dashboard */}
            <div className="flex items-end justify-end col-span-4">
              <FadeInUp delay={600} duration={800}>
                <Image
                  src="/hero/dark-desktop-dashboard.png"
                  alt="Dark Mode Desktop Dashboard"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-950"
                />
              </FadeInUp>
            </div>

            {/* Top Right - Mobile Nav */}
            <div className="flex items-end justify-start col-span-1">
              <FadeInUp delay={800} duration={800}>
                <Image
                  src="/hero/dark-mobile-nav.png"
                  alt="Dark Mode Mobile Nav"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-950"
                />
              </FadeInUp>
            </div>

            {/* Bottom Left - Mobile Transactions */}
            <div className="flex items-start justify-end col-span-1">
              <FadeInUp delay={1000} duration={800}>
                <Image
                  src="/hero/dark-mobile-transactions.png"
                  alt="Dark Mode Mobile Transactions"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-950"
                />
              </FadeInUp>
            </div>

            {/* Bottom Right - Desktop Transactions */}
            <div className="flex items-start justify-start col-span-4">
              <FadeInUp delay={1200} duration={800}>
                <Image
                  src="/hero/dark-desktop-transactions.png"
                  alt="Dark Mode Desktop Transactions"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-950"
                />
              </FadeInUp>
            </div>
          </div>

          <div className="grid dark:hidden grid-cols-5 gap-2">
            {/* Top Left - Desktop Dashboard */}
            <div className="flex items-end justify-end col-span-4">
              <FadeInUp delay={600} duration={800}>
                <Image
                  src="/hero/light-desktop-dashboard.png"
                  alt="Light Mode Desktop Dashboard"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-100"
                />
              </FadeInUp>
            </div>

            {/* Top Right - Mobile Nav */}
            <div className="flex items-end justify-start col-span-1">
              <FadeInUp delay={800} duration={800}>
                <Image
                  src="/hero/light-mobile-nav.png"
                  alt="Light Mode Mobile Nav"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-100"
                />
              </FadeInUp>
            </div>

            {/* Bottom Left - Mobile Transactions */}
            <div className="flex items-start justify-end col-span-1">
              <FadeInUp delay={1000} duration={800}>
                <Image
                  src="/hero/light-mobile-transactions.png"
                  alt="Light Mode Mobile Transactions"
                  width={200}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-100"
                />
              </FadeInUp>
            </div>

            {/* Bottom Right - Desktop Transactions */}
            <div className="flex items-start justify-start col-span-4">
              <FadeInUp delay={1200} duration={800}>
                <Image
                  src="/hero/light-desktop-transactions.png"
                  alt="Light Mode Desktop Transactions"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg hover:scale-[1.012] transition-all duration-300 ease-out shadow-indigo-100"
                />
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
