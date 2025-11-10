"use client";

import { FEATURES } from "@/constants/features";
import Heading from "../Heading";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(
    FEATURES[0].label
  );
  // Change to true after dev
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeFeat = activeFeature
    ? FEATURES.find((feat) => feat.label === activeFeature)
    : null;

  // Auto-cycle through features
  useEffect(() => {
    if (isAutoCycling) {
      // If no feature is active, immediately show the current one
      setActiveFeature(FEATURES[currentIndexRef.current].label);

      intervalRef.current = setInterval(() => {
        currentIndexRef.current =
          (currentIndexRef.current + 1) % FEATURES.length;
        setActiveFeature(FEATURES[currentIndexRef.current].label);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoCycling]);

  // Handle manual feature selection
  const handleFeatureClick = (featLabel: string, isActive: boolean) => {
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Update current index to match selected feature
    const clickedIndex = FEATURES.findIndex((feat) => feat.label === featLabel);
    if (clickedIndex !== -1) {
      currentIndexRef.current = clickedIndex;
    }

    // Set the active feature
    setActiveFeature(isActive ? null : featLabel);

    // Pause auto-cycling
    setIsAutoCycling(false);

    // Resume auto-cycling after 20 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoCycling(true);
    }, 20000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features"
      className="bg-neutral-50 dark:bg-neutral-950 relative"
    >
      <div className="bg-linear-30 from-transparent via-indigo-50 dark:via-indigo-950 to-transparent w-full h-full absolute top-0 left-0 opacity-70 dark:opacity-30 from-20% to-80% z-0" />
      <div className="section-container">
        <Heading
          heading="Features"
          subheading="Everything you need to take control of your finances, all in one secure platform."
        />

        <div className="flex flex-row items-center mt-8 justify-between">
          <div className="flex flex-row items-center justify-between mx-auto max-w-7xl relative z-10">
            <div>
              {/* Glass Container */}
              <ul className="flex flex-col gap-3 bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-indigo-200/50 dark:border-white/10 rounded-2xl p-4 shadow-xl shadow-indigo-200/50 dark:shadow-indigo-500/30">
                {FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  const active = activeFeature === feat.label;

                  return (
                    <li
                      key={feat.label}
                      onClick={() => handleFeatureClick(feat.label, active)}
                      className={`group relative rounded-xl p-4 bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-indigo-200/50 dark:border-white/10 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-300/50 dark:hover:shadow-indigo-500/50 hover:border-indigo-300/70 dark:hover:border-white/20 ${
                        active
                          ? "bg-indigo-100/60 dark:bg-indigo-500/20 border-indigo-300/70 dark:border-indigo-400/50 shadow-md shadow-indigo-300/40 dark:shadow-indigo-500/40"
                          : ""
                      }`}
                    >
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-white/30 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                      <div className="flex flex-row items-center gap-2">
                        <div className="rounded-lg p-2 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-indigo-200/50 dark:border-white/10 shadow-sm">
                          <Icon className="h-5 w-5 text-indigo-950 dark:text-indigo-200" />
                        </div>
                        <h4 className="font-semibold text-indigo-950 dark:text-indigo-100">
                          {feat.label}
                        </h4>
                      </div>

                      {active && (
                        <>
                          <p className="text-sm pt-2 max-w-md transition-all text-neutral-700 dark:text-indigo-100/80">
                            {feat.description}
                          </p>

                          <Image
                            key={feat.label}
                            src={feat.image}
                            width={800}
                            height={800}
                            alt={feat.label}
                            className="relative rounded-xl w-full mt-5 border border-indigo-200/50 dark:border-white/10 shadow-lg shadow-indigo-200/30 dark:shadow-indigo-500/30 block md:hidden"
                          />
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative z-20 hidden md:block">
            <div className="flex justify-end ">
              {activeFeat && (
                <Image
                  key={activeFeat.label}
                  src={activeFeat.image}
                  width={800}
                  height={800}
                  alt={activeFeat.label}
                  className="relative rounded-xl max-w-[95%] border border-indigo-200/50 dark:border-indigo-900 shadow-xl shadow-indigo-200/50 dark:shadow-indigo-700/60"
                />
              )}
            </div>
          </div>
        </div>

        {/* Advanced features link */}
        <div className="mt-6">
          <Link href="/welcome#advanced-features" className="cursor-pointer">
            <Button variant="outline">View advanced features</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;

{
  /*
  - Manage Transactions
  - Track income & spending
  - Track bills
  - Budgeting
  - Create financial goals
  - Generate AI financial reports
  - Track assets
  - Track liabiliites
  - Track net worth
  - Smart spending insights & projections
  - Multi-currency support
  - Export data (CSV, PDF, etc.)
  - Custom categories & rules
  */
}
