import { ADVANCED_FEATURES } from "@/constants/features";
import Heading from "../Heading";

const AdvancedFeatures = () => {
  return (
    <section
      id="features"
      className="bg-neutral-50 dark:bg-neutral-950 relative"
    >
      <div className="bg-linear-30 from-transparent via-indigo-50 dark:via-indigo-950 to-transparent w-full h-full absolute top-0 left-0 opacity-70 dark:opacity-30 from-20% to-80% z-0" />
      <div className="section-container">
        <Heading
          heading="Advanced Features"
          subheading="Features for financial management power users and businesses."
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {ADVANCED_FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                className="bg-white/80 dark:bg-indigo-900/20 backdrop-blur-sm rounded-xl py-7 px-8 border-2 border-indigo-200/50 dark:border-indigo-800/50 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/40 relative group hover:shadow-xl hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1"
                key={feat.label}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-indigo-400/0 group-hover:bg-indigo-400/5 dark:group-hover:bg-indigo-500/10 transition-colors duration-300 -z-10 blur-xl" />

                <div className="flex flex-row items-center gap-2">
                  <Icon />
                  <h5 className="font-semibold">{feat.label}</h5>
                </div>

                <p className="text-sm mt-2">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
