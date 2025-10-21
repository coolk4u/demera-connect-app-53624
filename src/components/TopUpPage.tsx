import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Smartphone } from "lucide-react";
import { toast } from "sonner";

interface TopUpPageProps {
  onBack: () => void;
}

export const TopUpPage = ({ onBack }: TopUpPageProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");

  const providers = [
    { id: "gtt", name: "GTT", color: "bg-purple-600" },
    { id: "digicel", name: "Digicel", color: "bg-red-600" },
  ];

  const quickAmounts = ["500", "1000", "2000", "5000"];

  const handleTopUp = () => {
    if (!phoneNumber || !amount || !selectedProvider) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Top up of $${amount} to ${phoneNumber} successful!`);
    setPhoneNumber("");
    setAmount("");
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
          <h1 className="text-2xl font-bold text-primary-foreground">Mobile Top Up</h1>
        </div>

        <Card className="bg-accent/20 border-0 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-primary-foreground/80 text-sm">Available Balance</p>
              <p className="text-primary-foreground text-xl font-bold">$152,450.00</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Select Provider</h3>
          <div className="grid grid-cols-2 gap-4">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                  selectedProvider === provider.id
                    ? `${provider.color} text-white scale-105`
                    : "bg-muted text-foreground"
                }`}
              >
                <Smartphone className="h-6 w-6" />
                <span className="text-sm font-medium">{provider.name}</span>
              </button>
            ))}
          </div>
        </div>

        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-12"
              maxLength={7}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topupAmount">Amount (GYD)</Label>
            <Input
              id="topupAmount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-12 text-2xl font-semibold"
            />
          </div>

          <div className="space-y-2">
            <Label>Quick Select</Label>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    amount === amt
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={handleTopUp}
              disabled={!selectedProvider}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full disabled:opacity-50"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Complete Top Up
            </Button>
          </div>
        </Card>

        <Card className="p-4 bg-muted/50">
          <h3 className="font-semibold mb-3 text-foreground">Recent Top Ups</h3>
          <div className="space-y-2">
            {["623-4567", "625-8901", "627-3456"].map((number, index) => (
              <button
                key={index}
                onClick={() => setPhoneNumber(number)}
                className="w-full p-3 bg-card rounded-lg flex items-center gap-3 hover:bg-accent/10 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{number}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
