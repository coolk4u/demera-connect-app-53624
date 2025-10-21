import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PiggyBank, Wallet, TrendingUp, CreditCard } from "lucide-react";

interface ApplyAccountPageProps {
  onBack: () => void;
}

export const ApplyAccountPage = ({ onBack }: ApplyAccountPageProps) => {
  const accountTypes = [
    {
      name: "Savings Account",
      icon: PiggyBank,
      description: "Earn interest on your deposits with flexible access",
      features: ["High interest rates", "No monthly fees", "Online banking", "ATM access"],
      minDeposit: "$1,000",
      color: "bg-gradient-primary",
    },
    {
      name: "Current Account",
      icon: Wallet,
      description: "Perfect for everyday transactions and bill payments",
      features: ["Unlimited transactions", "Checkbook facility", "Overdraft protection", "Mobile banking"],
      minDeposit: "$500",
      color: "bg-gradient-secondary",
    },
    {
      name: "Investment Account",
      icon: TrendingUp,
      description: "Grow your wealth with our investment opportunities",
      features: ["Professional advice", "Diversified portfolio", "Competitive returns", "Regular updates"],
      minDeposit: "$10,000",
      color: "bg-gradient-accent",
    },
    {
      name: "Credit Card",
      icon: CreditCard,
      description: "Convenient credit with rewards and benefits",
      features: ["Rewards program", "Travel insurance", "Purchase protection", "Contactless payment"],
      minDeposit: "N/A",
      color: "bg-gradient-gold",
    },
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
          <h1 className="text-primary-foreground text-2xl font-bold">Apply For New Account</h1>
        </div>
        <p className="text-primary-foreground/80 text-sm">Choose the account that suits your needs</p>
      </div>

      {/* Account Types */}
      <div className="px-6 py-6 space-y-4">
        {accountTypes.map((account, index) => (
          <Card 
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`${account.color} p-3 rounded-xl`}>
                <account.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-foreground mb-1">{account.name}</h3>
                <p className="text-sm text-muted-foreground">{account.description}</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Minimum Deposit:</span>
                <span className="font-semibold text-foreground">{account.minDeposit}</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Key Features:</p>
                <ul className="space-y-1">
                  {account.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
              Apply Now
            </Button>
          </Card>
        ))}

        {/* Help Card */}
        <Card className="p-5 bg-muted/50">
          <h3 className="font-semibold text-foreground mb-2">Need Help Deciding?</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Our banking specialists can help you choose the right account for your needs.
          </p>
          <Button variant="outline" className="w-full">
            Schedule a Consultation
          </Button>
        </Card>
      </div>
    </div>
  );
};