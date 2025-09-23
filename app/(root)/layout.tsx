import { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";

export const metadate: Metadata = {
  title: "Moneter | Welcome",
};

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <main>{children}</main>;
}
