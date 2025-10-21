import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Banknote, 
  UserPlus, 
  CreditCard, 
  TrendingUp,
  Shield,
  HelpCircle,
  FileText,
  Building2,
  Phone,
  Mail,
  Clock
} from "lucide-react";

interface ServicesPageProps {
  onBack: () => void;
}

export const ServicesPage = ({ onBack }: ServicesPageProps) => {
  const services = [
    {
      category: "Loans",
      icon: Banknote,
      color: "bg-gradient-gold",
      services: [
        {
          name: "Personal Loan",
          description: "Quick approval for personal needs",
          features: ["Up to $500,000", "Low interest rates", "Flexible repayment"],
          processingTime: "24-48 hours"
        },
        {
          name: "Home Loan",
          description: "Make your dream home a reality",
          features: ["Up to $50M", "25 year tenure", "Competitive rates"],
          processingTime: "5-7 business days"
        },
        {
          name: "Auto Loan",
          description: "Finance your vehicle purchase",
          features: ["New & used cars", "Up to 7 years", "Quick processing"],
          processingTime: "2-3 business days"
        },
        {
          name: "Business Loan",
          description: "Grow your business with flexible financing",
          features: ["Up to $100M", "Working capital", "Equipment financing"],
          processingTime: "3-5 business days"
        }
      ]
    },
    {
      category: "Account Services",
      icon: UserPlus,
      color: "bg-gradient-primary",
      services: [
        {
          name: "Open New Account",
          description: "Start your banking journey with us",
          features: ["Savings account", "Current account", "Zero balance"],
          processingTime: "Same day"
        },
        {
          name: "Account Upgrade",
          description: "Upgrade to premium banking services",
          features: ["Higher limits", "Premium cards", "Exclusive benefits"],
          processingTime: "1-2 business days"
        },
        {
          name: "Close Account",
          description: "Close your account safely",
          features: ["No hidden charges", "Balance transfer", "Quick process"],
          processingTime: "2-3 business days"
        }
      ]
    },
    {
      category: "Card Services",
      icon: CreditCard,
      color: "bg-gradient-accent",
      services: [
        {
          name: "New Credit Card",
          description: "Apply for credit cards with rewards",
          features: ["Cashback rewards", "Travel benefits", "Online security"],
          processingTime: "5-7 business days"
        },
        {
          name: "Debit Card Replacement",
          description: "Replace lost or damaged debit card",
          features: ["Emergency replacement", "Same day service", "Contactless enabled"],
          processingTime: "Same day"
        },
        {
          name: "Card Upgrade",
          description: "Upgrade to premium card variants",
          features: ["Higher limits", "Lounge access", "Concierge service"],
          processingTime: "3-5 business days"
        }
      ]
    },
    {
      category: "Investment Services",
      icon: TrendingUp,
      color: "bg-gradient-secondary",
      services: [
        {
          name: "Fixed Deposit",
          description: "Secure returns on your savings",
          features: ["Competitive rates", "Flexible tenure", "Loan against FD"],
          processingTime: "Same day"
        },
        {
          name: "Investment Advisory",
          description: "Expert guidance for wealth growth",
          features: ["Portfolio management", "Risk assessment", "Regular reviews"],
          processingTime: "By appointment"
        },
        {
          name: "Mutual Funds",
          description: "Invest in diversified portfolios",
          features: ["SIP options", "Tax benefits", "Professional management"],
          processingTime: "1-2 business days"
        }
      ]
    },
    {
      category: "Support Services",
      icon: HelpCircle,
      color: "bg-gradient-primary",
      services: [
        {
          name: "Account Statement",
          description: "Request detailed transaction history",
          features: ["Email delivery", "PDF format", "Custom date range"],
          processingTime: "Instant"
        },
        {
          name: "Cheque Book Request",
          description: "Order new cheque books",
          features: ["Multiple leaves", "Home delivery", "Personalized design"],
          processingTime: "3-5 business days"
        },
        {
          name: "Update KYC",
          description: "Keep your information current",
          features: ["Document upload", "Video verification", "Secure process"],
          processingTime: "1-2 business days"
        },
        {
          name: "Report Issue",
          description: "Get help with banking problems",
          features: ["24/7 support", "Quick resolution", "Track status"],
          processingTime: "Varies"
        }
      ]
    }
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
          <h1 className="text-primary-foreground text-2xl font-bold">Banking Services</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Explore our comprehensive banking solutions</p>
      </div>

      {/* Services Categories */}
      <div className="px-6 py-6 space-y-6">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`${category.color} p-2.5 rounded-xl`}>
                <category.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h2 className="text-lg font-bold text-foreground">{category.category}</h2>
            </div>

            <div className="space-y-3">
              {category.services.map((service, serviceIndex) => (
                <Card 
                  key={serviceIndex}
                  className="p-5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Processing: {service.processingTime}</span>
                    </div>

                    <div className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Support Card */}
        <Card className="p-6 bg-muted/50">
          <h3 className="font-semibold text-foreground mb-4">Need Assistance?</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Call Us</p>
                <p className="text-muted-foreground">+592-123-4567 (24/7)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email Support</p>
                <p className="text-muted-foreground">support@demerarabank.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Visit Branch</p>
                <p className="text-muted-foreground">Find nearest branch</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Schedule Consultation
          </Button>
        </Card>
      </div>
    </div>
  );
};