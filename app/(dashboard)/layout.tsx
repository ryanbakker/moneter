import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import AppSidebar from "@/components/dashboard/sidebar/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

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
        <div className="dashboard-container mt-3 glass-section glass-content">
          <div className="w-full mx-auto max-w-7xl py-4 px-1.5">{children}</div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
