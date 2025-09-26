import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Monetor",
  description: "Financial Management",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoSans.className} antialiased`}
    >
      {children}
    </html>
  );
}
