import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Zap, Droplets, Wifi, Phone } from "lucide-react";
import { toast } from "sonner";

interface PayBillsPageProps {
  onBack: () => void;
}

export const PayBillsPage = ({ onBack }: PayBillsPageProps) => {
  const [selectedBiller, setSelectedBiller] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const billers = [
    { id: "gpl", name: "GPL", icon: Zap, color: "bg-yellow-500" },
    { id: "gwi", name: "GWI", icon: Droplets, color: "bg-blue-500" },
    { id: "gtt", name: "GTT", icon: Wifi, color: "bg-purple-500" },
    { id: "digicel", name: "Digicel", icon: Phone, color: "bg-red-500" },
  ];

  const handlePayBill = () => {
    if (!selectedBiller || !accountNumber || !amount) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Payment of $${amount} to ${selectedBiller.toUpperCase()} successful!`);
    setAccountNumber("");
    setAmount("");
    setSelectedBiller("");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-primary p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-primary-foreground">Pay Bills</h1>
        </div>

        <Card className="bg-accent/20 border-0 p-4 backdrop-blur-sm">
          <p className="text-primary-foreground/80 text-sm mb-2">Quick Balance</p>
          <p className="text-primary-foreground text-2xl font-bold">$152,450.00</p>
        </Card>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Select Biller</h3>
          <div className="grid grid-cols-4 gap-4">
            {billers.map((biller) => (
              <button
                key={biller.id}
                onClick={() => setSelectedBiller(biller.id)}
                className={`flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 ${
                  selectedBiller === biller.id ? "scale-105" : ""
                }`}
              >
                <div
                  className={`${biller.color} ${
                    selectedBiller === biller.id ? "ring-4 ring-primary" : ""
                  } w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm`}
                >
                  <biller.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-foreground/70 font-medium">{biller.name}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedBiller && (
          <Card className="p-6 space-y-4 animate-slide-up">
            <div className="space-y-2">
              <Label htmlFor="billAccount">Account/Reference Number</Label>
              <Input
                id="billAccount"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billAmount">Amount (GYD)</Label>
              <Input
                id="billAmount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-12 text-2xl font-semibold"
              />
            </div>

            <div className="pt-4">
              <Button
                onClick={handlePayBill}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                Pay Bill
              </Button>
            </div>
          </Card>
        )}

        <Card className="p-4 bg-muted/50">
          <h3 className="font-semibold mb-3 text-foreground">Recent Payments</h3>
          <div className="space-y-2">
            {[
              { name: "GPL", amount: "5,200", date: "Dec 15" },
              { name: "GWI", amount: "3,800", date: "Dec 10" },
              { name: "GTT", amount: "4,500", date: "Dec 5" },
            ].map((payment, index) => (
              <div
                key={index}
                className="p-3 bg-card rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-foreground">{payment.name}</p>
                  <p className="text-xs text-muted-foreground">{payment.date}</p>
                </div>
                <p className="font-semibold text-foreground">${payment.amount}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
