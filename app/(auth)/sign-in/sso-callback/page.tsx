"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function SSOCallbackPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        // Redirect to home page after successful sign-in
        router.push("/");
      } else {
        // If not signed in, redirect back to sign-in page
        router.push("/sign-in");
      }
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-indigo-50 sm:text-indigo-950 sm:dark:text-indigo-50">
          Completing sign-in...
        </p>
      </div>
    </div>
  );
}

