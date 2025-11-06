import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Finance Tracker | Moneter",
  description:
    "Moneter helps you track expenses, manage budgets, monitor net worth, and achieve financial goals—all in one easy personal finance web app.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
