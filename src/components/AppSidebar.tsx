import { User, LogOut, Home, CreditCard, Settings, HelpCircle } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import logo from "@/assets/demerara-logo.png";

interface AppSidebarProps {
  onNavigate: (page: string) => void;
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
  const menuItems = [
    { title: "Dashboard", icon: Home, action: "dashboard" },
    { title: "My Accounts", icon: CreditCard, action: "accounts" },
    { title: "Settings", icon: Settings, action: "settings" },
    { title: "Help & Support", icon: HelpCircle, action: "help" },
  ];

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Demerara Bank" className="h-10 w-10 object-contain" />
          <div>
            <h2 className="text-sm font-bold text-sidebar-foreground">Demerara Bank</h2>
            <p className="text-xs text-sidebar-foreground/60">Mobile Banking</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={() => onNavigate(item.action)}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => onNavigate("profile")}>
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => onNavigate("logout")}>
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          <p>Michael Peters</p>
          <p className="text-sidebar-foreground/40">Premium Member</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
