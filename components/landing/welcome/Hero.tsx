import { Button } from "@/components/ui/button";
import VantaTopology from "@/components/VantaTopology";
import { ChartNoAxesCombined, LogIn } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-12 mb-2">
      <VantaTopology color={0x4338ca} />

      <div className="relative z-10 flex flex-col md:flex-row container justify-between md:items-center gap-10 md:gap-5">
        <div>
          <h1 className="uppercase text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-[35px]">Take Control,</span> <br />
            Manage Your <br />
            Finances
          </h1>

          <h2 className="max-w-[610px] text-sm md:text-base pt-2">
            The first step is knowing your numbers. Our platform helps you track
            and visualise your financial habits. Effectively save and plan for
            your future.
          </h2>
        </div>

        <div>
          <p>Imgs</p>
        </div>
      </div>

      <div className="relative z-10 container">
        <p className="font-extrabold uppercase text-xs pt-14 pb-4">
          Get started with Moneter
        </p>

        <div className="flex flex-row items-center gap-4">
          <Link href="/sign-up">
            <Button
              size="lg"
              className="cursor-pointer flex flex-row items-center gap-1.5"
            >
              <LogIn />
              Get started
            </Button>
          </Link>
          <Link href="/#features">
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer flex flex-row items-center gap-1.5"
            >
              <ChartNoAxesCombined />
              Explore features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
