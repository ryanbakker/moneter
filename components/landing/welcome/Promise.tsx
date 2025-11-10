import Image from "next/image";
import Heading from "../Heading";
import { Button } from "@/components/ui/button";

const Promise = () => {
  return (
    <section className="bg-linear-to-br from-indigo-100/90 via-indigo-50/80 to-indigo-100/70 dark:from-indigo-950/30 dark:via-neutral-950 dark:to-indigo-900/20 relative overflow-hidden">
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-indigo-100/40 dark:via-indigo-900/20 to-transparent opacity-60 dark:opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(129,140,248,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_50%,rgba(129,140,248,0.12),transparent_50%)]" />

      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-300/20 dark:bg-indigo-700/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-100/40 dark:bg-indigo-900/25 rounded-full blur-2xl" />

      <div className="section-container relative z-10">
        <Heading
          heading="Our Promise"
          subheading="This is our data protection promise to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <div className="relative mt-4 order-2 lg:order-1">
            <div className="bg-white/40 dark:bg-indigo-900/15 backdrop-blur-lg rounded-xl py-7 px-8 border-2 border-indigo-200/60 dark:border-indigo-800/50 shadow-lg shadow-indigo-200/40 dark:shadow-indigo-900/40 relative group hover:shadow-xl hover:shadow-indigo-300/50 dark:hover:shadow-indigo-900/30 hover:border-indigo-300/80 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-indigo-400/0 group-hover:bg-indigo-400/10 dark:group-hover:bg-indigo-500/10 transition-colors duration-300 -z-10 blur-xl" />

              <p>
                Every user has the right to control their own data — including
                where it is stored, who can access it, and how it is used. In a
                time where data brokering has become a business model, and
                entire companies exist solely to help people remove their
                information from unauthorized lists, privacy is no longer
                optional — it is essential.
                <br />
                <br />
                At Moneter, your data is never sold, traded, or shared with
                third parties, on or off the platform. Your information exists
                for your benefit only, and you remain the sole owner of your
                financial data.
                <br />
                <br />
                We believe trust is earned, not requested. That is why Moneter
                is built on a clear promise: your data stays private, encrypted,
                and under your control — always. Have concerns? Get in touch!
                <br />
                <br />
                &mdash;&nbsp; Moneter
              </p>
            </div>

            <Button
              variant="default"
              className="mt-6 cursor-pointer w-full sm:w-auto"
              size="lg"
            >
              Contact Us
            </Button>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/promise/graphic_two.png"
              alt="Our promise"
              height={800}
              width={800}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
