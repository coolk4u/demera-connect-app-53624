import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ScheduleAppointmentPageProps {
  onBack: () => void;
}

export const ScheduleAppointmentPage = ({ onBack }: ScheduleAppointmentPageProps) => {
  const branches = [
    "Main Street Branch",
    "Water Street Branch",
    "Regent Street Branch",
    "Sheriff Street Branch",
  ];

  const appointmentTypes = [
    "Account Opening",
    "Loan Consultation",
    "Investment Advice",
    "General Inquiry",
  ];

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
          <h1 className="text-primary-foreground text-2xl font-bold">Schedule Appointment</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Book a time to meet with our banking specialists</p>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-6">
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="appointmentType">Appointment Type</Label>
            <Select>
              <SelectTrigger id="appointmentType">
                <SelectValue placeholder="Select appointment type" />
              </SelectTrigger>
              <SelectContent>
                {appointmentTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch">Branch Location</Label>
            <Select>
              <SelectTrigger id="branch">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch} value={branch.toLowerCase().replace(/\s+/g, '-')}>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {branch}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <div className="relative">
                <Input id="date" type="date" />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time</Label>
              <div className="relative">
                <Input id="time" type="time" />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea 
              id="notes" 
              placeholder="Let us know if you have any specific requirements or questions"
              className="min-h-[100px]"
            />
          </div>

          <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
            Confirm Appointment
          </Button>
        </Card>

        {/* Available Slots Info */}
        <Card className="p-5 bg-muted/50">
          <h3 className="font-semibold text-foreground mb-3">Branch Hours</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </Card>
      </div>
    </div>
  );
};