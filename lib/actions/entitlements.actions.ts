"use server";

import { checkAllFeatureEntitlements } from "@/lib/checkUserEntitlement";

export async function getUserEntitlements(userId: string) {
  try {
    const entitlements = await checkAllFeatureEntitlements(userId);
    return { success: true, entitlements };
  } catch (error) {
    console.error("Failed to get user entitlements:", error);
    return { success: false, error: "Failed to load entitlements" };
  }
}
