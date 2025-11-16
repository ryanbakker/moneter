import Image from "next/image";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <header className="dashboard-container glass-section glass-header">
      <div className="mx-auto w-full max-w-7xl flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <SidebarTrigger size="icon-lg" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          {/* Breadcrumbs */}
        </div>

        <div>
          <Image
            src="/logo/moneter-logo-light.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-4.5 w-auto cursor-pointer visible dark:hidden"
          />
          <Image
            src="/logo/moneter-logo-dark.svg"
            alt="Moneter logo"
            width={180}
            height={72}
            className="h-4.5 w-auto cursor-pointer hidden dark:block"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
