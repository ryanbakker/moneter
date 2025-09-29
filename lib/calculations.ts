// Utility functions to perform financial calculations with strong safety guards

export type AmountLike = number | string | null | undefined;

export interface AmountCarrier {
  // Common field name across models in this codebase
  currentAmount?: AmountLike;
  // Allow flexible objects that might store value under different keys
  [key: string]: unknown;
}

export interface CalculateNetWorthInput<
  T extends AmountCarrier = AmountCarrier
> {
  assets?: T[] | null;
  liabilities?: T[] | null;
  // Some implementations may want to pass accounts only; we treat them as assets
  // unless a caller maps them differently. This is optional and off by default.
  accountsAsAssets?: boolean;
  accounts?: T[] | null;
  // If objects do not use `currentAmount`, specify a custom field name
  amountField?: string;
}

export interface CalculateNetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  // Helpful metadata
  assetCount: number;
  liabilityCount: number;
}

function coerceToNumber(value: AmountLike): number {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (typeof value === "string") {
    // Trim and remove non-numeric formatting (commas, spaces, currency symbols)
    const trimmed = value.trim();
    if (trimmed.length === 0) return 0;
    // Keep digits, decimal point, minus sign
    const normalized = trimmed.replace(/[^0-9.-]/g, "");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function sumAmounts<T extends AmountCarrier>(
  items: T[] | null | undefined,
  amountField: string
): { sum: number; count: number } {
  if (!Array.isArray(items) || items.length === 0) {
    return { sum: 0, count: 0 };
  }

  let sum = 0;
  let count = 0;

  for (const item of items) {
    // Fallback to `currentAmount` if custom field missing
    const raw = (item as any)[amountField] ?? (item as any)["currentAmount"];
    const amount = coerceToNumber(raw);
    if (amount !== 0) {
      sum += amount;
      count += 1;
    } else {
      // Even if 0, still include in count when raw was present and was a valid number 0
      if (raw === 0 || raw === "0") {
        count += 1;
      }
    }
  }

  // Normalize tiny floating errors
  if (Math.abs(sum) < 1e-10) sum = 0;
  return { sum, count };
}

/**
 * Calculate net worth with robust guards.
 * - Safely handles null/undefined inputs
 * - Coerces strings like "$1,234.56" or "1,234" to numbers
 * - Treats non-finite values as 0
 * - Optionally treats `accounts` as assets if `accountsAsAssets` is true
 * - Allows custom amount field name via `amountField` (defaults to `currentAmount`)
 */
export function calculateNetWorth<T extends AmountCarrier = AmountCarrier>(
  input: CalculateNetWorthInput<T>
): CalculateNetWorthResult {
  const {
    assets = [],
    liabilities = [],
    accounts = [],
    accountsAsAssets = false,
    amountField = "currentAmount",
  } = input || {};

  const assetsSum = sumAmounts(assets, amountField);
  const liabilitiesSum = sumAmounts(liabilities, amountField);

  let totalAssets = assetsSum.sum;
  let assetCount = assetsSum.count;

  if (accountsAsAssets && Array.isArray(accounts) && accounts.length > 0) {
    const accountTotals = sumAmounts(accounts, amountField);
    totalAssets += accountTotals.sum;
    assetCount += accountTotals.count;
  }

  const totalLiabilities = liabilitiesSum.sum;
  const liabilityCount = liabilitiesSum.count;

  const netWorth = totalAssets - totalLiabilities;

  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    assetCount,
    liabilityCount,
  };
}

/**
 * Convenience helper for when only assets and liabilities arrays are available.
 */
export function calculateNetWorthFromLists<
  T extends AmountCarrier = AmountCarrier
>(
  assets: T[] | null | undefined,
  liabilities: T[] | null | undefined,
  amountField: string = "currentAmount"
): CalculateNetWorthResult {
  return calculateNetWorth<T>({ assets, liabilities, amountField });
}

/**
 * Safe percentage change calculator.
 * Returns 0 when previous is 0 or invalid to avoid Infinity/NaN.
 */
export function safePercentChange(
  current: AmountLike,
  previous: AmountLike
): number {
  const curr = coerceToNumber(current);
  const prev = coerceToNumber(previous);
  if (prev === 0) return 0;
  const change = ((curr - prev) / Math.abs(prev)) * 100;
  return Number.isFinite(change) ? change : 0;
}
