import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import AppSidebar from "@/components/dashboard/sidebar/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Moneter | Dashboard",
    template: "%s",
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="md:p-2 bg-transparent shadow-none!">
        <Header />
        <div className="dashboard-container -mt-0.5 md:mt-3 glass-section glass-content">
          <div className="w-full mx-auto max-w-7xl py-4 px-0 md:px-1.5 min-h-[70vh]">
            {children}
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
