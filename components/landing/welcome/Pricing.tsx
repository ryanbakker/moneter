import { PLANS } from "@/constants/plans";
import Heading from "../Heading";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Pricing = () => {
  return (
    <section className="bg-linear-40 from-indigo-500 via-indigo-800 to-indigo-900 dark:from-indigo-600 dark:via-indigo-900 dark:to-indigo-950 shadow-lg shadow-indigo-400/70 dark:shadow-indigo-700/60 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <Heading
          heading="Pricing"
          subheading="Choose the best plan for you."
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, index) => {
            const isPremium = plan.label === "Premium";
            const isUltimate = plan.label === "Ultimate";
            const isFirst = index === 0;

            return (
              <div
                key={plan.label}
                className={`group relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/50 ${
                  isPremium
                    ? "ring-2 ring-indigo-400/50 ring-offset-2 ring-offset-indigo-900/50 shadow-xl shadow-indigo-500/30"
                    : "hover:border-white/30"
                } ${isFirst ? "sm:col-span-2 md:col-span-1" : ""}`}
              >
                {/* Gradient overlay for premium */}
                {isPremium && (
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-indigo-600/20 rounded-2xl -z-10" />
                )}

                {/* Popular badge for premium */}
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-linear-to-r from-indigo-400 to-purple-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card content */}
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h5 className="uppercase font-bold text-sm tracking-wider text-indigo-100 mb-2">
                      {plan.label}
                    </h5>
                    <div className="mb-3">
                      <span className="text-4xl font-extrabold text-white">
                        {plan.cost}
                      </span>
                      {plan.cost !== "Free" && (
                        <span className="text-indigo-200 text-sm font-medium ml-1">
                          /month
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-indigo-100/80 leading-relaxed max-w-[230px] text-center mx-auto">
                      {plan.description}
                    </p>
                  </div>

                  <Separator className="w-[30px]! mx-auto mb-7" />

                  {/* Features list */}
                  <ul className="flex-1 space-y-3 mb-6">
                    {plan.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex flex-row items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 shrink-0">
                          <div className="h-5 w-5 rounded-full bg-indigo-400/20 backdrop-blur-sm border border-indigo-300/30 flex items-center justify-center group-hover/item:bg-indigo-400/30 transition-colors">
                            <Check
                              className="h-3 w-3 text-indigo-200"
                              strokeWidth={3}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-indigo-50 leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full mt-auto transition-all duration-300 cursor-pointer hover:text-white! ${
                      isPremium
                        ? "bg-white/30 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm shadow-md shadow-indigo-400"
                        : isUltimate
                        ? "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm"
                    }`}
                    variant={isPremium ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
