import DynamicBreadcrumb from "./DynamicBreadcrumb";
import Logo from "./Logo";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { FadeInUp } from "./ui/animate-on-scroll";

function DashboardHeader() {
  return (
    <header className="w-full bg-[#fcfcfc] dark:bg-neutral-950 md:rounded-xl py-3 px-5 md:shadow-lg">
      <div className="mx-auto w-full max-w-7xl flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <FadeInUp delay={250}>
            <SidebarTrigger />
          </FadeInUp>

          <FadeInUp delay={300}>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </FadeInUp>

          <FadeInUp delay={400}>
            <DynamicBreadcrumb />
          </FadeInUp>
        </div>

        <FadeInUp delay={550}>
          <Logo size="md" />
        </FadeInUp>
      </div>
    </header>
  );
}

export default DashboardHeader;
