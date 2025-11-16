import {
  ArrowRightLeft,
  ChartNoAxesCombined,
  ChartPie,
  CreditCard,
  LayoutDashboard,
  ReceiptText,
  Target,
} from "lucide-react";

// Landing Links
export const LANDING_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Our Promise", href: "/#promise" },
];

export const LANDING_FOOTER_LINKS = [
  { label: "Get Started", href: "/sign-up" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// Sidebar Links
export const SIDEBAR_NAV_LINKS = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: ArrowRightLeft,
    label: "Transactions",
    href: "/transactions",
  },
  {
    icon: ReceiptText,
    label: "Bills",
    href: "/bills",
  },
  {
    icon: Target,
    label: "Goals",
    href: "/goals",
  },
  {
    icon: ChartPie,
    label: "Budgeting",
    href: "/budgeting",
  },
  {
    icon: ChartNoAxesCombined,
    label: "Assets",
    href: "assets",
  },
  {
    icon: CreditCard,
    label: "Liabilities",
    href: "/liabilities",
  },
];
