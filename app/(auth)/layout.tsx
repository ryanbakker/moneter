import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | Moneter",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden h-screen relative bg-linear-to-tr from-indigo-50/60 to-indigo-50/60 via-indigo-100 from-10% via-75% to-10% dark:from-indigo-950/20 dark:to-indigo-950/20 dark:via-indigo-950/60">
      <main className="relative min-h-screen overflow-hidden mx-auto max-w-7xl">
        {/* Mobile background image */}
        <div className="absolute inset-0 sm:hidden">
          <Image
            src="/graphics/auth-bg.jpg"
            alt="Auth graphic"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="relative z-10 grid min-h-screen grid-cols-1 sm:grid-cols-2 sm:pr-6">
          {children}

          {/* Desktop/Tablet side image */}
          <section className="relative hidden sm:block w-full my-6 h-[calc(100vh-3rem)]">
            <div className="absolute w-full h-18 top-0 left-0 z-20 flex flex-row justify-between items-center px-5">
              <Link
                href="/welcome"
                className="flex flex-row items-center gap-1.5 bg-neutral-900 backdrop-blur-md border border-border/50 py-1 px-2.5 rounded-lg text-sm cursor-pointer hover:bg-neutral-800 transition-all text-neutral-400 hover:text-neutral-200"
              >
                <ArrowLeft className="h-4 w-4" /> Back to website
              </Link>

              <Image
                src="/logo/moneter-logo-dark.svg"
                alt="Moneter"
                width={300}
                height={100}
                className="h-5 w-auto z-20"
              />
            </div>

            <div className="absolute bottom-6 left-6 z-20">
              <h1 className="uppercase text-4xl font-extrabold tracking-tight opacity-90 text-white">
                <span className="text-[25px] opacity-50">Take Control,</span>{" "}
                <br />
                Manage Your <br />
                Finances
              </h1>
            </div>

            <Image
              src="/graphics/auth-bg.jpg"
              alt="Auth graphic"
              fill
              className="rounded-3xl w-full h-full object-fill z-0 shadow-xl shadow-indigo-950/40"
              priority
            />
          </section>
        </div>
      </main>
    </div>
  );
}
