import { featureFlagEvents, FeatureFlag } from "./featureFlags";
import { client } from "./schematic";
import { redirect } from "next/navigation";

export async function checkUserEntitlement(
  userId: string,
  eventSubtype: string
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("🔍 Checking entitlement for:", { userId, eventSubtype });

    const entitlements = await client.entitlements.getFeatureUsageByCompany({
      keys: {
        id: userId,
      },
    });

    console.log(
      "📊 Raw entitlements response:",
      JSON.stringify(entitlements, null, 2)
    );

    const feature = entitlements.data.features.find(
      (entitlement) => entitlement.feature?.eventSubtype === eventSubtype
    );

    console.log("🎯 Found feature:", feature ? "YES" : "NO");
    if (feature) {
      console.log("📋 Feature details:", JSON.stringify(feature, null, 2));
    }

    if (!feature) {
      console.log("❌ Feature unavailable on your current plan");
      console.log(
        "🔍 Available features:",
        entitlements.data.features.map((f) => ({
          eventSubtype: f.feature?.eventSubtype,
          usage: f.usage,
          allocation: f.allocation,
        }))
      );
      return {
        success: false,
        error: `This feature is not available on your current plan, please upgrade to continue`,
      };
    }

    const { usage, allocation } = feature;

    console.log("📈 Usage stats:", { usage, allocation });

    if (usage === undefined || allocation === undefined) {
      console.log("❌ Error reading allocation - undefined values");

      return {
        success: false,
      };
    }

    const hasExceededUsageLimit = usage >= allocation;

    console.log("🚦 Has exceeded limit:", hasExceededUsageLimit);

    if (hasExceededUsageLimit) {
      const featureName =
        Object.entries(featureFlagEvents).find(
          ([, value]) => value.event === eventSubtype
        )?.[0] || eventSubtype;

      console.log("⚠️ You have reached your limit");
      return {
        success: false,
        error: `You have reached your ${featureName} limit. Please upgrade your plan to continue using this feature.`,
      };
    }

    console.log("✅ Access granted");
    return { success: true };
  } catch (error) {
    console.error("💥 Error in checkUserEntitlement:", error);
    console.log("❌ Failed to check feature usage");

    return {
      success: false,
      error: "Error checking feature usage limit",
    };
  }
}

export async function checkAllFeatureEntitlements(
  userId: string
): Promise<
  Record<
    string,
    { success: boolean; error?: string; usage?: number; allocation?: number }
  >
> {
  const results: Record<
    string,
    { success: boolean; error?: string; usage?: number; allocation?: number }
  > = {};

  // Get all feature eventSubtypes
  const allFeatures = Object.values(FeatureFlag);

  try {
    // Get entitlements once for all features
    const entitlements = await client.entitlements.getFeatureUsageByCompany({
      keys: {
        id: userId,
      },
    });

    // Check each feature
    for (const featureEventSubtype of allFeatures) {
      try {
        console.log(`\n🎯 Checking feature: ${featureEventSubtype}`);

        const feature = entitlements.data.features.find(
          (entitlement) =>
            entitlement.feature?.eventSubtype === featureEventSubtype
        );

        if (!feature) {
          console.log(
            `❌ Feature '${featureEventSubtype}' not found in entitlements`
          );
          results[featureEventSubtype] = {
            success: false,
            error: `Feature '${featureEventSubtype}' not available on your current plan`,
          };
          continue;
        }

        // Check if this is a boolean feature (no usage/allocation)
        // Boolean features typically have null or undefined for both usage and allocation
        // Also check for 0 values which might indicate boolean features
        const isBooleanFeature =
          (feature.usage === undefined ||
            feature.usage === null ||
            feature.usage === 0) &&
          (feature.allocation === undefined ||
            feature.allocation === null ||
            feature.allocation === 0);

        console.log(`🔍 Feature '${featureEventSubtype}' boolean check:`, {
          usage: feature.usage,
          allocation: feature.allocation,
          isBooleanFeature,
          usageType: typeof feature.usage,
          allocationType: typeof feature.allocation,
        });

        if (isBooleanFeature) {
          console.log(
            `🔘 Boolean feature '${featureEventSubtype}' - checking if enabled`
          );

          // For boolean features, we just check if the feature exists and is enabled
          // The presence of the feature in the entitlements means it's enabled
          results[featureEventSubtype] = {
            success: true,
            usage: feature.usage,
            allocation: feature.allocation,
          };
          console.log(`✅ Boolean feature '${featureEventSubtype}' is enabled`);
          continue;
        }

        // Additional check: if this looks like it might be a boolean feature but wasn't caught above
        // This handles edge cases where the API might return different values
        const mightBeBoolean =
          (feature.usage === 0 && feature.allocation === 0) ||
          (feature.usage === 1 && feature.allocation === 1) ||
          (feature.usage === -1 && feature.allocation === -1);

        if (mightBeBoolean) {
          console.log(
            `🔘 Potential boolean feature '${featureEventSubtype}' detected (usage: ${feature.usage}, allocation: ${feature.allocation})`
          );

          // Treat as boolean feature - if it exists, it's enabled
          results[featureEventSubtype] = {
            success: true,
            usage: feature.usage,
            allocation: feature.allocation,
          };
          console.log(
            `✅ Potential boolean feature '${featureEventSubtype}' is enabled`
          );
          continue;
        }

        // Handle usage-based features (trait-based and event-based)
        const { usage, allocation } = feature;

        console.log(
          `📊 Processing usage-based feature '${featureEventSubtype}':`,
          {
            usage,
            allocation,
            usageType: typeof usage,
            allocationType: typeof allocation,
          }
        );

        // Check if we have valid numeric values for usage and allocation
        if (
          usage === undefined ||
          usage === null ||
          allocation === undefined ||
          allocation === null ||
          typeof usage !== "number" ||
          typeof allocation !== "number"
        ) {
          console.log(
            `❌ Error reading allocation for '${featureEventSubtype}' - usage: ${usage} (${typeof usage}), allocation: ${allocation} (${typeof allocation})`
          );
          results[featureEventSubtype] = {
            success: false,
            error: "Error reading feature allocation - invalid data format",
          };
          continue;
        }

        const hasExceededUsageLimit = usage >= allocation;
        console.log(
          `🚦 Has exceeded limit for '${featureEventSubtype}':`,
          hasExceededUsageLimit
        );

        if (hasExceededUsageLimit) {
          const featureName =
            Object.entries(featureFlagEvents).find(
              ([, value]) => value.event === featureEventSubtype
            )?.[0] || featureEventSubtype;

          console.log(`⚠️ User has reached limit for '${featureEventSubtype}'`);
          results[featureEventSubtype] = {
            success: false,
            error: `You have reached your ${featureName} limit. Please upgrade your plan to continue using this feature.`,
            usage,
            allocation,
          };
        } else {
          console.log(`✅ Access granted for '${featureEventSubtype}'`);
          results[featureEventSubtype] = {
            success: true,
            usage,
            allocation,
          };
        }
      } catch (featureError) {
        console.error(
          `💥 Error processing feature '${featureEventSubtype}':`,
          featureError
        );
        results[featureEventSubtype] = {
          success: false,
          error: `Error processing feature: ${
            featureError instanceof Error
              ? featureError.message
              : "Unknown error"
          }`,
        };
      }
    }

    console.log("\n📊 FINAL ENTITLEMENT RESULTS:");
    console.log("=".repeat(50));
    Object.entries(results).forEach(([feature, result]) => {
      const status = result.success ? "✅" : "❌";
      const usage =
        result.usage !== undefined
          ? ` (${result.usage}/${result.allocation})`
          : "";
      console.log(
        `${status} ${feature}: ${result.success ? "GRANTED" : "DENIED"}${usage}`
      );
      if (result.error) {
        console.log(`   └─ Error: ${result.error}`);
      }
    });
    console.log("=".repeat(50));

    return results;
  } catch (error) {
    console.error("💥 Error in checkAllFeatureEntitlements:", error);

    // Return error state for all features
    allFeatures.forEach((feature) => {
      results[feature] = {
        success: false,
        error: "Error checking feature usage limit",
      };
    });

    return results;
  }
}

/**
 * Checks if a user has access to a specific feature and redirects to manage-plan if not.
 * This function is designed for use in page components to enforce feature access.
 *
 * @param userId - The user's ID
 * @param eventSubtype - The feature event subtype to check
 * @returns void (redirects if user doesn't have access)
 */
export async function checkFeatureAccessAndRedirect(
  userId: string,
  eventSubtype: string
): Promise<void> {
  const entitlement = await checkUserEntitlement(userId, eventSubtype);

  if (!entitlement.success) {
    console.log(
      `❌ User ${userId} does not have access to feature ${eventSubtype}, redirecting to manage-plan`
    );
    redirect("/manage-plan");
  }

  console.log(`✅ User ${userId} has access to feature ${eventSubtype}`);
}
