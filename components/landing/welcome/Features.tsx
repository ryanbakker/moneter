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
    <section id="features" className="bg-neutral-50 relative">
      <div className="bg-linear-30 from-transparent via-indigo-50 to-transparent w-full h-full absolute top-0 left-0 opacity-70 from-30% to-70% z-0" />
      <div className="section-container">
        <Heading
          heading="Features"
          subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
          reiciendis ut nam temporibus et."
        />
        <div />

        <div className="flex flex-row items-center mt-8 justify-between">
          <div className="flex flex-row items-center justify-between mx-auto max-w-7xl relative z-10">
            <div>
              {/* Glass Container */}
              <ul className="flex flex-col gap-3 bg-indigo-50 rounded-lg p-4 border border-indigo-100 shadow-md shadow-indigo-200">
                {FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  const active = activeFeature === feat.label;

                  return (
                    <li
                      key={feat.label}
                      onClick={() => handleFeatureClick(feat.label, active)}
                      className={`rounded-md p-4 bg-background/40 backdrop-blur-md border border-border/65 shadow-sm shadow/70 shadow-indigo-200 cursor-pointer transition-all hover:border hover:border-indigo-300 ${
                        active ? "bg-indigo-100 border border-indigo-200" : ""
                      }`}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="rounded-md p-2 bg-background/40 backdrop-blur-md border border-indigo-200 shadow-sm shadow-indigo-200">
                          <Icon className="h-5 w-5 text-indigo-950" />
                        </div>
                        <h4 className="font-semibold text-indigo-950">
                          {feat.label}
                        </h4>
                      </div>

                      {active && (
                        <>
                          <p className="text-sm pt-2 max-w-md transition-all text-neutral-600">
                            {feat.description}
                          </p>

                          <Image
                            key={feat.label}
                            src={feat.image}
                            width={800}
                            height={800}
                            alt={feat.label}
                            className="relative rounded-md w-full mt-5 border-indigo-100 border block md:hidden"
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
                  className="relative rounded-xl max-w-[90%] border border-indigo-200 shadow-xl shadow-indigo-200"
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
