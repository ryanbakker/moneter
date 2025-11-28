import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SidebarHeader, SidebarMenuButton } from "@/components/ui/sidebar";
import { useClerk, useUser } from "@clerk/nextjs";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, isLoaded } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { openUserProfile, signOut } = useClerk();

  const handleUserClick = () => {
    openUserProfile();
  };

  return (
    <SidebarHeader className="mt-3 ml-[2.5px] group-data-[collapsible=icon]:ml-0">
      {user && (
        <SidebarMenuButton
          onClick={handleUserClick}
          title="User Profile"
          className="group cursor-pointer transition-all duration-200 hover:bg-sidebar-accent"
        >
          <Avatar className="h-[32px] w-[32px] rounded-md -ml-[8px]">
            <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
          </Avatar>
          <span className="flex-1 text-left pb-[2.6px] transition-transform duration-200 group-hover:translate-x-1">
            <div className="text-sm font-medium">{user.fullName || "User"}</div>
            <div className="text-xs text-muted-foreground">
              {user.primaryEmailAddress?.emailAddress}
            </div>
          </span>
        </SidebarMenuButton>
      )}
    </SidebarHeader>
  );
};

export default Header;
