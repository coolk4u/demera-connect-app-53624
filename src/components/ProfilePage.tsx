import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Bell,
  Lock,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Settings,
  Shield
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/demerara-logo.png";

interface ProfilePageProps {
  onBack: () => void;
}

export const ProfilePage = ({ onBack }: ProfilePageProps) => {
  const userInfo = {
    name: "Michael Peters",
    email: "michael.peters@email.com",
    phone: "+592 623-4567",
    address: "123 Main Street, Georgetown, Guyana",
    accountSince: "January 2020",
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    onBack();
  };

  const menuItems = [
    {
      icon: User,
      label: "Personal Information",
      action: () => toast.info("Personal Information"),
      color: "text-primary",
    },
    {
      icon: CreditCard,
      label: "Cards & Accounts",
      action: () => toast.info("Cards & Accounts"),
      color: "text-primary",
    },
    {
      icon: Bell,
      label: "Notifications",
      action: () => toast.info("Notifications Settings"),
      color: "text-primary",
    },
    {
      icon: Lock,
      label: "Security & Privacy",
      action: () => toast.info("Security Settings"),
      color: "text-primary",
    },
    {
      icon: FileText,
      label: "Statements & Documents",
      action: () => toast.info("Documents"),
      color: "text-primary",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      action: () => toast.info("Help Center"),
      color: "text-primary",
    },
    {
      icon: Settings,
      label: "App Settings",
      action: () => toast.info("Settings"),
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Demerara Bank" className="h-12 object-contain" />
        </div>

        {/* Profile Card */}
        <Card className="bg-primary-foreground/10 backdrop-blur-sm border-0 p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold">
              {userInfo.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <h2 className="text-primary-foreground text-xl font-bold">{userInfo.name}</h2>
              <p className="text-primary-foreground/70 text-sm">Premium Customer</p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Member since {userInfo.accountSince}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Information */}
      <div className="px-6 py-6 space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-4">Contact Information</h3>
          <Card className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{userInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">{userInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="font-medium text-foreground">{userInfo.address}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-xs text-muted-foreground mt-1">Accounts</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">2</p>
            <p className="text-xs text-muted-foreground mt-1">Cards</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">5Y</p>
            <p className="text-xs text-muted-foreground mt-1">Member</p>
          </Card>
        </div>

        {/* Menu Items */}
        <div>
          <h3 className="text-foreground font-semibold mb-4">Settings & Preferences</h3>
          <Card className="divide-y divide-border">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <span className="flex-1 text-left font-medium text-foreground">{item.label}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            ))}
          </Card>
        </div>

        {/* Security Badge */}
        <Card className="p-4 bg-muted/50 border-primary/20">
          <div className="flex items-center gap-3">
            <div className="bg-success/10 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-success" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">Account Verified</p>
              <p className="text-xs text-muted-foreground">Your account is secure and verified</p>
            </div>
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-12 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};
