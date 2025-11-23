import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    <SidebarHeader className="mt-3 ml-[2.5px]">
      {user && (
        <SidebarMenuButton
          onClick={handleUserClick}
          title="User Profile"
          className="hover:bg-transparent cursor-pointer"
        >
          <Avatar className="h-[32px] w-[32px] rounded-md -ml-[8px]">
            <AvatarImage src={user.imageUrl} alt={user.fullName || "User"} />
            <AvatarFallback>
              {user.firstName?.charAt(0)}
              {user.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="flex-1 text-left pb-[2.6px]">
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
