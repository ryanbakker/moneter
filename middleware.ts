import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/welcome", "/privacy"]);
const isWebhookRoute = createRouteMatcher(["/api/webhooks"]);

export default clerkMiddleware(async (auth, req) => {
  const startTime = Date.now();
  const { userId } = await auth();
  const { pathname } = req.nextUrl;
  const userAgent = req.headers.get("user-agent");
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");

  try {
    // Skip authentication checks for webhook routes
    if (isWebhookRoute(req)) {
      console.log(`[MIDDLEWARE] Webhook route - skipping auth`, {
        pathname,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.next();
    }

    // Allow all non-webhook API routes to pass through so route handlers
    // can return JSON (avoids redirects causing Failed to fetch on client)
    if (pathname.startsWith("/api")) {
      return NextResponse.next();
    }

    // Allow Next.js Server Actions POST requests to pass through without redirect
    // These requests carry a special header and can target any route segment
    const isServerAction =
      req.method === "POST" &&
      (req.headers.get("next-action") ||
        req.headers.get("next-router-state-tree") ||
        req.headers.get("content-type")?.includes("multipart/form-data"));

    if (isServerAction) {
      return NextResponse.next();
    }

    // If user is not authenticated and trying to access protected routes
    if (!userId && !isPublicRoute(req)) {
      const welcomeUrl = new URL("/welcome", req.url);
      return NextResponse.redirect(welcomeUrl);
    }

    // If user is authenticated and trying to access /welcome, redirect to home
    if (userId && pathname === "/welcome") {
      const homeUrl = new URL("/", req.url);
      return NextResponse.redirect(homeUrl);
    }

    const responseTime = Date.now() - startTime;

    return NextResponse.next();
  } catch (error) {
    const responseTime = Date.now() - startTime;

    // In case of middleware error, allow the request to continue
    // to avoid breaking the application
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
