"use client";

import { Button } from "@/components/ui/button";
import { AUTH_CONNECTIONS } from "@/constants/authentication";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";
import Link from "next/link";
import { CornerDownLeft } from "lucide-react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen sm:h-auto px-6 sm:py-20 sm:px-7 md:p-20 sm:items-start sm:justify-start">
      <div className="text-left flex flex-col items-start w-full">
        <h1 className="text-4xl sm:text-5xl pb-4 text-left font-medium text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 tracking-tighter">
          Create an account
        </h1>
        <p className="text-indigo-300/60 text-sm sm:text-base sm:text-indigo-900/60 sm:dark:text-indigo-300/60">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="underline cursor-pointer underline-offset-2"
          >
            Log in
          </Link>
        </p>
      </div>

      <section className="mt-10 w-full">
        <SignUp.Root>
          {/* Sign up form */}
          <SignUp.Step name="start">
            <span className="auth-subheads">Register with</span>
            <div className="grid grid-cols-3 gap-3 my-6">
              {AUTH_CONNECTIONS.map((con) => (
                <Clerk.Connection key={con.name} name={con.name} asChild>
                  <Button
                    type="button"
                    className="py-5 w-full bg-indigo-950/50 border border-indigo-900/60 hover:bg-indigo-950/80 sm:bg-indigo-100 sm:border-indigo-200 sm:hover:bg-indigo-200/60 sm:hover:border-indigo-300 sm:dark:bg-indigo-950/50 sm:dark:border-indigo-900/60 sm:dark:hover:bg-indigo-950/80 transition-all"
                  >
                    <Image
                      src={con.image}
                      alt={con.name}
                      height={20}
                      width={20}
                      className={`h-4 w-auto ${
                        con.name === "apple"
                          ? "invert sm:filter-none sm:dark:invert"
                          : ""
                      }`}
                    />
                    <span className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 text-sm pl-0.5 hidden sm:block">
                      {con.text}
                    </span>
                  </Button>
                </Clerk.Connection>
              ))}
            </div>

            <span className="auth-subheads">or</span>

            <div className="mt-6 flex flex-col gap-4">
              <Clerk.Field name="username">
                <Clerk.Input className="auth-input" placeholder="username" />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>

              <Clerk.Field name="emailAddress">
                <Clerk.Input className="auth-input" placeholder="email" />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>

              <Clerk.Field name="password">
                <Clerk.Input className="auth-input" placeholder="password" />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>
            </div>

            <SignUp.Captcha />

            <SignUp.Action submit asChild>
              <Button
                className="mt-6 w-full sm:w-auto"
                size="lg"
                variant="glass-primary"
              >
                <Clerk.Loading>
                  {(isLoading) =>
                    isLoading ? (
                      "Loading..."
                    ) : (
                      <span className="flex items-center gap-2">
                        Sign up
                        <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                      </span>
                    )
                  }
                </Clerk.Loading>
              </Button>
            </SignUp.Action>
          </SignUp.Step>

          {/* User must have a username */}
          <SignUp.Step name="continue">
            <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
              Create a username
            </h5>

            <Clerk.Field name="username">
              <Clerk.Input className="auth-input" />
              <Clerk.FieldError className="auth-error" />
            </Clerk.Field>

            <SignUp.Action submit asChild>
              <Button
                className="mt-6 w-full sm:w-auto"
                size="lg"
                variant="glass-primary"
              >
                <Clerk.Loading>
                  {(isLoading) =>
                    isLoading ? (
                      "Loading..."
                    ) : (
                      <span className="flex items-center gap-2">
                        Continue
                        <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                      </span>
                    )
                  }
                </Clerk.Loading>
              </Button>
            </SignUp.Action>
          </SignUp.Step>

          {/* Email verification */}
          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
                Check your email
              </h5>

              <Clerk.Field name="code">
                <Clerk.Input className="auth-input" placeholder="Enter code" />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>

              <SignUp.Action submit asChild>
                <Button
                  className="mt-6 w-full sm:w-auto"
                  size="lg"
                  variant="glass-primary"
                >
                  <Clerk.Loading>
                    {(isLoading) =>
                      isLoading ? (
                        "Loading..."
                      ) : (
                        <span className="flex items-center gap-2">
                          Verify
                          <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                        </span>
                      )
                    }
                  </Clerk.Loading>
                </Button>
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>

          <p className="pt-8 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light">
            By signing up you agree to our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Terms & Conditions
            </Link>
          </p>
        </SignUp.Root>
      </section>
    </div>
  );
};

export default SignUpPage;
