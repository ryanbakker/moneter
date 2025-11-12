"use client";

import { Button } from "@/components/ui/button";
import { AUTH_CONNECTIONS } from "@/constants/authentication";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import Link from "next/link";
import { CornerDownLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { shortenEmail } from "@/lib/utils";

// Component to automatically trigger the reset password email strategy
const AutoTriggerReset = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Automatically click the hidden button to trigger the reset
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <SignIn.SupportedStrategy name="reset_password_email_code" asChild>
      <button
        ref={buttonRef}
        type="button"
        className="hidden"
        aria-hidden="true"
      />
    </SignIn.SupportedStrategy>
  );
};

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen sm:h-auto px-6 sm:py-20 sm:px-7 md:p-20 sm:items-start sm:justify-start">
      <div className="text-left flex flex-col items-start w-full">
        <h1 className="text-4xl sm:text-5xl pb-4 text-left font-medium text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 tracking-tighter">
          Welcome back!
        </h1>
        <p className="text-indigo-300/60 text-sm sm:text-base sm:text-indigo-900/60 sm:dark:text-indigo-300/60">
          Not a member?{" "}
          <Link
            href="/sign-up"
            className="underline cursor-pointer underline-offset-2"
          >
            Register
          </Link>
        </p>
      </div>

      <section className="mt-10 w-full">
        <SignIn.Root>
          {/* Sign In form */}
          <SignIn.Step name="start">
            <span className="auth-subheads">Sign in with</span>
            <div className="grid grid-cols-3 gap-3 my-6">
              <Clerk.Connection name="google" asChild>
                <Button
                  type="button"
                  className="py-5 w-full bg-indigo-950/50 border border-indigo-900/60 hover:bg-indigo-950/80 sm:bg-indigo-100 sm:border-indigo-200 sm:hover:bg-indigo-200/60 sm:hover:border-indigo-300 sm:dark:bg-indigo-950/50 sm:dark:border-indigo-900/60 sm:dark:hover:bg-indigo-950/80 transition-all"
                >
                  <Clerk.Icon />
                  <span className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 text-sm pl-0.5 hidden md:block">
                    Google
                  </span>
                </Button>
              </Clerk.Connection>

              <Clerk.Connection name="apple" asChild>
                <Button
                  type="button"
                  className="py-5 w-full bg-indigo-950/50 border border-indigo-900/60 hover:bg-indigo-950/80 sm:bg-indigo-100 sm:border-indigo-200 sm:hover:bg-indigo-200/60 sm:hover:border-indigo-300 sm:dark:bg-indigo-950/50 sm:dark:border-indigo-900/60 sm:dark:hover:bg-indigo-950/80 transition-all"
                >
                  <Clerk.Icon />
                  <span className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 text-sm pl-0.5 hidden md:block">
                    Apple
                  </span>
                </Button>
              </Clerk.Connection>

              <Clerk.Connection name="microsoft" asChild>
                <Button
                  type="button"
                  className="py-5 w-full bg-indigo-950/50 border border-indigo-900/60 hover:bg-indigo-950/80 sm:bg-indigo-100 sm:border-indigo-200 sm:hover:bg-indigo-200/60 sm:hover:border-indigo-300 sm:dark:bg-indigo-950/50 sm:dark:border-indigo-900/60 sm:dark:hover:bg-indigo-950/80 transition-all"
                >
                  <Clerk.Icon />
                  <span className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 text-sm pl-0.5 hidden md:block">
                    Microsoft
                  </span>
                </Button>
              </Clerk.Connection>

              {/* {AUTH_CONNECTIONS.map((con) => (
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
                    <span className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50 text-sm pl-0.5 hidden md:block">
                      {con.text}
                    </span>
                  </Button>
                </Clerk.Connection>
              ))} */}
            </div>

            <span className="auth-subheads">or</span>

            <div className="mt-6 flex flex-col gap-4">
              <Clerk.Field name="identifier">
                <Clerk.Input
                  className="auth-input"
                  placeholder="email or username"
                />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>
            </div>

            <SignIn.Action submit asChild>
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
            </SignIn.Action>
          </SignIn.Step>

          {/* Verifications step - for password and other verification strategies */}
          <SignIn.Step name="verifications">
            <SignIn.Strategy name="password">
              <div className="mt-6 flex flex-col gap-4">
                <Clerk.Field name="password">
                  <Clerk.Input
                    className="auth-input"
                    type="password"
                    placeholder="password"
                  />
                  <Clerk.FieldError className="auth-error" />
                </Clerk.Field>
              </div>

              <p className="mt-2 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light text-right">
                <SignIn.Action navigate="forgot-password" asChild>
                  <button
                    type="button"
                    className="underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                  >
                    Forgot password?
                  </button>
                </SignIn.Action>
              </p>

              <SignIn.Action submit asChild>
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
                          Sign in
                          <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                        </span>
                      )
                    }
                  </Clerk.Loading>
                </Button>
              </SignIn.Action>
            </SignIn.Strategy>

            {/* Password reset verification code strategy */}
            <SignIn.Strategy name="reset_password_email_code">
              <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
                Check your email
              </h5>
              <p className="text-sm opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 mb-4 flex flex-wrap md:flex-nowrap items-baseline gap-1">
                <span className="whitespace-nowrap">
                  We&apos;ve sent a verification code to:
                </span>
                <span className="truncate min-w-0 font-semibold">
                  <SignIn.SafeIdentifier transform={shortenEmail} />
                </span>
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <Clerk.Field name="code">
                  <Clerk.Input
                    className="auth-input"
                    placeholder="Verification code"
                  />
                  <Clerk.FieldError className="auth-error" />
                </Clerk.Field>
              </div>

              <SignIn.Action submit asChild>
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
                          Verify code
                          <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                        </span>
                      )
                    }
                  </Clerk.Loading>
                </Button>
              </SignIn.Action>

              <p className="mt-4 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light text-left! sm:text-center">
                <SignIn.Action navigate="forgot-password" asChild>
                  <button
                    type="button"
                    className="underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                  >
                    Back to reset request
                  </button>
                </SignIn.Action>
              </p>
            </SignIn.Strategy>
          </SignIn.Step>

          {/* Forgot password step - automatically triggers email reset */}
          <SignIn.Step name="forgot-password">
            <AutoTriggerReset />
            <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
              Reset your password
            </h5>
            <p className="text-sm opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 mb-4">
              We&apos;re sending a verification code to your email address...
            </p>

            <p className="mt-4 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light text-center">
              <SignIn.Action navigate="start" asChild>
                <button
                  type="button"
                  className="underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                >
                  Back to sign in
                </button>
              </SignIn.Action>
            </p>
          </SignIn.Step>

          {/* Reset password step */}
          <SignIn.Step name="reset-password">
            <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
              Set new password
            </h5>
            <p className="text-sm opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 mb-4">
              Enter your new password below.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <Clerk.Field name="password">
                <Clerk.Input
                  className="auth-input"
                  type="password"
                  placeholder="New password"
                />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Input
                  className="auth-input"
                  type="password"
                  placeholder="Confirm password"
                />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>
            </div>

            <SignIn.Action submit asChild>
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
                        Update password
                        <CornerDownLeft className="h-4 w-4 hidden sm:block" />
                      </span>
                    )
                  }
                </Clerk.Loading>
              </Button>
            </SignIn.Action>

            <p className="mt-4 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light text-center">
              <SignIn.Action navigate="start" asChild>
                <button
                  type="button"
                  className="underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                >
                  Back to sign in
                </button>
              </SignIn.Action>
            </p>
          </SignIn.Step>

          {/* Email code verification - MFA commented out (not available on current plan) */}
          {/* <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <h5 className="opacity-70 font-medium pb-2 text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
                Check your email
              </h5>
              <p className="text-sm opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 mb-4">
                We&apos;ve sent a verification code to your email address.
              </p>

              <Clerk.Field name="code">
                <Clerk.Input
                  className="auth-input"
                  placeholder="Verification code"
                />
                <Clerk.FieldError className="auth-error" />
              </Clerk.Field>

              <SignIn.Action submit asChild>
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
              </SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step> */}

          <p className="pt-8 text-xs opacity-60 text-indigo-300 sm:text-indigo-800 sm:dark:text-indigo-300 font-light">
            By signing in you agree to our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Terms & Conditions
            </Link>
          </p>
        </SignIn.Root>
      </section>
    </div>
  );
};

export default SignInPage;
