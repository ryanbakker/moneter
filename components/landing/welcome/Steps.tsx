import { STEPS } from "@/constants/steps";
import Heading from "../Heading";
import { ArrowRight } from "lucide-react";

const Steps = () => {
  return (
    <section className="bg-linear-to-br from-indigo-50 via-white to-indigo-100/50 dark:from-indigo-950/30 dark:via-neutral-950 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-indigo-100/40 dark:via-indigo-900/20 to-transparent opacity-60 dark:opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(129,140,248,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(129,140,248,0.12),transparent_50%)]" />

      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-300/20 dark:bg-indigo-700/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-100/40 dark:bg-indigo-900/25 rounded-full blur-2xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="section-container relative z-10">
        <Heading
          heading="How it Works"
          subheading="Get started in four easy steps."
        />
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === STEPS.length - 1;

              return (
                <div key={step.label} className="relative">
                  <div className="bg-white/80 dark:bg-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border-2 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/20 relative group hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-xl bg-indigo-400/0 group-hover:bg-indigo-400/5 dark:group-hover:bg-indigo-500/10 transition-colors duration-300 -z-10 blur-xl" />

                    <span className="absolute -top-3 -left-3 bg-linear-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 text-white py-1.5 px-3 rounded-lg border-2 border-white dark:border-neutral-900 shadow-lg shadow-indigo-300/50 dark:shadow-indigo-900/50 text-sm font-bold">
                      {step.index}
                    </span>
                    <div className="flex flex-col items-center gap-3 text-center pt-2">
                      <div className="p-4 rounded-xl bg-linear-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950/50 dark:to-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 group-hover:scale-110 transition-transform duration-300 shadow shadow-indigo-200">
                        <Icon className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h5 className="font-bold text-indigo-900 dark:text-indigo-100 text-lg">
                        {step.label}
                      </h5>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector between steps (hidden on mobile) */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-20 -translate-y-1/2">
                      <div className="bg-white/90 dark:bg-neutral-800/90 rounded-full p-2 border-2 border-indigo-200 dark:border-indigo-800 shadow-md">
                        <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative accent line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-indigo-200/30 dark:via-indigo-800/30 to-transparent -translate-y-1/2 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
