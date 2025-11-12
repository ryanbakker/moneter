import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Shortens an email address by keeping the first few and last few characters
 * of the local part, replacing the middle with ***
 * 
 * @example
 * shortenEmail("your_email+clerk_test@example.com")
 * // Returns: "your***test@example.com"
 */
export function shortenEmail(email: string): string {
  if (!email || !email.includes("@")) {
    return email;
  }

  const [localPart, domain] = email.split("@");
  
  if (localPart.length <= 7) {
    // If the local part is short, just show first 3 chars + ***
    return `${localPart.slice(0, 3)}***@${domain}`;
  }

  // Keep first 4 characters and last 4 characters of local part
  const firstPart = localPart.slice(0, 4);
  const lastPart = localPart.slice(-4);
  
  return `${firstPart}***${lastPart}@${domain}`;
}
