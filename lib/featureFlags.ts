export enum FeatureFlag {
  ASSETS = "asset",
  BILLS = "bill",
  BUDGETS = "budget",
  GENERATE_REPORTS = "generate-report",
  GOALS = "goal",
  LIABILITIES = "liability",
  NET_WORTH = "net-worth",
  TRANSACTIONS = "transaction",
}

export const featureFlagEvents: Record<FeatureFlag, { event: string }> = {
  [FeatureFlag.ASSETS]: {
    event: "asset",
  },
  [FeatureFlag.BILLS]: {
    event: "bill",
  },
  [FeatureFlag.BUDGETS]: {
    event: "budget",
  },
  [FeatureFlag.GENERATE_REPORTS]: {
    event: "generate-report",
  },
  [FeatureFlag.GOALS]: {
    event: "goal",
  },
  [FeatureFlag.LIABILITIES]: {
    event: "liability",
  },
  [FeatureFlag.NET_WORTH]: {
    event: "net-worth",
  },
  [FeatureFlag.TRANSACTIONS]: {
    event: "transaction",
  },
};
