import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Mail, Phone, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UpdateProfilePageProps {
  onBack: () => void;
}

export const UpdateProfilePage = ({ onBack }: UpdateProfilePageProps) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 pb-8 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-primary-foreground text-2xl font-bold">Update Profile</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Keep your information up to date</p>
      </div>

      {/* Profile Form */}
      <div className="px-6 py-6 space-y-6">
        {/* Profile Picture */}
        <Card className="p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                  MP
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-gradient-primary"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">Michael Peters</p>
              <p className="text-sm text-muted-foreground">Customer since 2020</p>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-6 space-y-4">
          <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="fullName" defaultValue="Michael Peters" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="email" type="email" defaultValue="michael.peters@email.com" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input id="phone" type="tel" defaultValue="+592 123-4567" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="address" defaultValue="123 Main Street, Georgetown" className="pl-10" />
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 space-y-4">
          <h3 className="font-semibold text-foreground mb-4">Security</h3>
          
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" placeholder="••••••••" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" placeholder="••••••••" />
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
            Save Changes
          </Button>
          <Button variant="outline" className="w-full" onClick={onBack}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};