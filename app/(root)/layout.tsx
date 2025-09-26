import { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";
import RootHeader from "@/components/root/RootHeader";
import ClientWrapper from "@/components/providers/ClientWrapper";
import RootFooter from "@/components/root/RootFooter";
import { Noto_Sans } from "next/font/google";

export const metadate: Metadata = {
  title: "Moneter | Welcome",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
});

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <body className={`${notoSans.className} relative antialiased`}>
      <ClientWrapper>
        <RootHeader />
        <main className="min-h-screen">{children}</main>
        <RootFooter />
      </ClientWrapper>
    </body>
  );
}
