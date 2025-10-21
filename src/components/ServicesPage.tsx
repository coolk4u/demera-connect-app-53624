import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  Banknote, 
  UserPlus, 
  CreditCard, 
  TrendingUp,
  HelpCircle,
  Building2,
  Phone,
  Mail,
  Clock,
  CheckCircle
} from "lucide-react";
import { toast } from "sonner";

interface ServicesPageProps {
  onBack: () => void;
}

export const ServicesPage = ({ onBack }: ServicesPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const serviceCategories = [
    { id: "loans", label: "Loans", icon: Banknote, color: "bg-gradient-gold" },
    { id: "accounts", label: "Account Services", icon: UserPlus, color: "bg-gradient-primary" },
    { id: "cards", label: "Card Services", icon: CreditCard, color: "bg-gradient-accent" },
    { id: "investments", label: "Investment Services", icon: TrendingUp, color: "bg-gradient-secondary" },
    { id: "support", label: "Support Services", icon: HelpCircle, color: "bg-gradient-primary" },
  ];

  const serviceOptions: Record<string, Array<{ value: string; label: string; description: string; processingTime: string; features: string[] }>> = {
    loans: [
      {
        value: "personal-loan",
        label: "Personal Loan",
        description: "Quick approval for personal needs",
        features: ["Up to $500,000", "Low interest rates", "Flexible repayment"],
        processingTime: "24-48 hours"
      },
      {
        value: "home-loan",
        label: "Home Loan",
        description: "Make your dream home a reality",
        features: ["Up to $50M", "25 year tenure", "Competitive rates"],
        processingTime: "5-7 business days"
      },
      {
        value: "auto-loan",
        label: "Auto Loan",
        description: "Finance your vehicle purchase",
        features: ["New & used cars", "Up to 7 years", "Quick processing"],
        processingTime: "2-3 business days"
      },
      {
        value: "business-loan",
        label: "Business Loan",
        description: "Grow your business with flexible financing",
        features: ["Up to $100M", "Working capital", "Equipment financing"],
        processingTime: "3-5 business days"
      }
    ],
    accounts: [
      {
        value: "open-account",
        label: "Open New Account",
        description: "Start your banking journey with us",
        features: ["Savings account", "Current account", "Zero balance"],
        processingTime: "Same day"
      },
      {
        value: "account-upgrade",
        label: "Account Upgrade",
        description: "Upgrade to premium banking services",
        features: ["Higher limits", "Premium cards", "Exclusive benefits"],
        processingTime: "1-2 business days"
      },
      {
        value: "close-account",
        label: "Close Account",
        description: "Close your account safely",
        features: ["No hidden charges", "Balance transfer", "Quick process"],
        processingTime: "2-3 business days"
      }
    ],
    cards: [
      {
        value: "new-credit-card",
        label: "New Credit Card",
        description: "Apply for credit cards with rewards",
        features: ["Cashback rewards", "Travel benefits", "Online security"],
        processingTime: "5-7 business days"
      },
      {
        value: "debit-replacement",
        label: "Debit Card Replacement",
        description: "Replace lost or damaged debit card",
        features: ["Emergency replacement", "Same day service", "Contactless enabled"],
        processingTime: "Same day"
      },
      {
        value: "card-upgrade",
        label: "Card Upgrade",
        description: "Upgrade to premium card variants",
        features: ["Higher limits", "Lounge access", "Concierge service"],
        processingTime: "3-5 business days"
      }
    ],
    investments: [
      {
        value: "fixed-deposit",
        label: "Fixed Deposit",
        description: "Secure returns on your savings",
        features: ["Competitive rates", "Flexible tenure", "Loan against FD"],
        processingTime: "Same day"
      },
      {
        value: "investment-advisory",
        label: "Investment Advisory",
        description: "Expert guidance for wealth growth",
        features: ["Portfolio management", "Risk assessment", "Regular reviews"],
        processingTime: "By appointment"
      },
      {
        value: "mutual-funds",
        label: "Mutual Funds",
        description: "Invest in diversified portfolios",
        features: ["SIP options", "Tax benefits", "Professional management"],
        processingTime: "1-2 business days"
      }
    ],
    support: [
      {
        value: "account-statement",
        label: "Account Statement",
        description: "Request detailed transaction history",
        features: ["Email delivery", "PDF format", "Custom date range"],
        processingTime: "Instant"
      },
      {
        value: "cheque-book",
        label: "Cheque Book Request",
        description: "Order new cheque books",
        features: ["Multiple leaves", "Home delivery", "Personalized design"],
        processingTime: "3-5 business days"
      },
      {
        value: "update-kyc",
        label: "Update KYC",
        description: "Keep your information current",
        features: ["Document upload", "Video verification", "Secure process"],
        processingTime: "1-2 business days"
      },
      {
        value: "report-issue",
        label: "Report Issue",
        description: "Get help with banking problems",
        features: ["24/7 support", "Quick resolution", "Track status"],
        processingTime: "Varies"
      }
    ]
  };

  const selectedCategoryData = serviceCategories.find(cat => cat.id === selectedCategory);
  const availableServices = selectedCategory ? serviceOptions[selectedCategory] : [];
  const selectedServiceData = availableServices.find(service => service.value === selectedService);

  const handleSubmit = () => {
    if (!selectedCategory || !selectedService) {
      toast.error("Please select a service category and type");
      return;
    }
    toast.success(`Service request for ${selectedServiceData?.label} submitted successfully!`);
    setSelectedCategory("");
    setSelectedService("");
    setAdditionalNotes("");
  };

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
          <h1 className="text-primary-foreground text-2xl font-bold">Banking Services</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Select a service to get started</p>
      </div>

      {/* Service Request Form */}
      <div className="px-6 py-6 space-y-6">
        <Card className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="serviceCategory">Service Category</Label>
            <Select value={selectedCategory} onValueChange={(value) => {
              setSelectedCategory(value);
              setSelectedService("");
            }}>
              <SelectTrigger id="serviceCategory" className="h-12">
                <SelectValue placeholder="Choose service category" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                {serviceCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCategory && (
            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger id="serviceType" className="h-12">
                  <SelectValue placeholder="Choose specific service" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {availableServices.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {selectedServiceData && (
            <Card className={`p-4 ${selectedCategoryData?.color} border-0`}>
              <h3 className="font-bold text-primary-foreground mb-2">{selectedServiceData.label}</h3>
              <p className="text-sm text-primary-foreground/80 mb-3">{selectedServiceData.description}</p>
              
              <div className="flex items-center gap-2 text-xs text-primary-foreground/90 mb-3">
                <Clock className="h-3 w-3" />
                <span>Processing Time: {selectedServiceData.processingTime}</span>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-primary-foreground/90 mb-1">Key Features:</p>
                {selectedServiceData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          )}

          {selectedService && (
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Add any specific requirements or questions..."
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                className="min-h-[80px]"
              />
            </div>
          )}

          <Button 
            onClick={handleSubmit}
            disabled={!selectedService}
            className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90"
          >
            Submit Service Request
          </Button>
        </Card>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 text-center">
            <Phone className="h-5 w-5 mx-auto mb-2 text-primary" />
            <p className="text-xs font-medium text-foreground">24/7 Support</p>
            <p className="text-xs text-muted-foreground">+592-123-4567</p>
          </Card>
          <Card className="p-4 text-center">
            <Mail className="h-5 w-5 mx-auto mb-2 text-primary" />
            <p className="text-xs font-medium text-foreground">Email Us</p>
            <p className="text-xs text-muted-foreground">support@db.com</p>
          </Card>
          <Card className="p-4 text-center">
            <Building2 className="h-5 w-5 mx-auto mb-2 text-primary" />
            <p className="text-xs font-medium text-foreground">Visit Branch</p>
            <p className="text-xs text-muted-foreground">Find nearest</p>
          </Card>
          <Card className="p-4 text-center">
            <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
            <p className="text-xs font-medium text-foreground">Quick Process</p>
            <p className="text-xs text-muted-foreground">Fast approval</p>
          </Card>
        </div>
      </div>
    </div>
  );
};