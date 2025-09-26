import { ChartNoAxesCombined, LogIn } from "lucide-react";
import { Button } from "../ui/button";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-tr from-sky-900 dark:from-sky-950 via-sky-600 dark:via-sky-700 to-sky-200 dark:to-sky-400">
      <div className="section-container w-full flex flex-col md:flex-row gap-10 items-center">
        <div className="flex flex-col">
          <h1 className="uppercase text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-sky-100 to-neutral-100 dark:from-sky-200 dark:to-neutral-100">
            <span className="text-[35px]">Take Control,</span> <br />
            Manage Your <br />
            Finances
          </h1>

          <h2 className="text-white max-w-[610px] text-sm md:text-base">
            The first step is knowing your numbers. Our platform helps you track
            and visualise your financial habits. Effectively save and plan for
            your future.
          </h2>

          <p className="font-medium text-sm text-white/70 pt-10">
            Get started with Moneter
          </p>

          <div className="flex flex-col-reverse md:flex-row gap-3 lg:gap-6 pt-1">
            <Link href="/#welcome-features">
              <Button className="" size="lg" variant="glassSecondary">
                <div className="flex items-center gap-3">
                  <ChartNoAxesCombined className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Explore Features</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </Link>
            <Button
              className="group relative overflow-hidden px-8 py-4 rounded-md font-semibold hover:scale-[1.03] active:scale-95 cursor-pointer transition-all duration-300 text-sm w-full md:w-auto"
              size="lg"
              variant="glassPrimary"
            >
              <SignUpButton mode="modal">
                <div>
                  <div className="flex items-center gap-3">
                    <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Sign Up</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </div>
              </SignUpButton>
            </Button>
          </div>
        </div>
        <div className="w-[30vw] text-center">
          <p>Img</p>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern with Fade Effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "41px 41px",
            maskImage:
              "linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 100%)",
            WebkitMaskImage:
              "linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
