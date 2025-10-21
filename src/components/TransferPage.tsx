import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, User, Building2 } from "lucide-react";
import { toast } from "sonner";

interface TransferPageProps {
  onBack: () => void;
}

export const TransferPage = ({ onBack }: TransferPageProps) => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [transferType, setTransferType] = useState<"internal" | "external">("internal");

  const handleTransfer = () => {
    if (!amount || !recipient || !accountNumber) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Transfer initiated successfully!");
    setAmount("");
    setRecipient("");
    setAccountNumber("");
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
          <h1 className="text-2xl font-bold text-primary-foreground">Transfer Money</h1>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setTransferType("internal")}
            className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${
              transferType === "internal"
                ? "bg-accent text-accent-foreground"
                : "bg-primary-foreground/10 text-primary-foreground"
            }`}
          >
            <User className="h-6 w-6" />
            <span className="text-sm font-medium">Internal</span>
          </button>
          <button
            onClick={() => setTransferType("external")}
            className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${
              transferType === "external"
                ? "bg-accent text-accent-foreground"
                : "bg-primary-foreground/10 text-primary-foreground"
            }`}
          >
            <Building2 className="h-6 w-6" />
            <span className="text-sm font-medium">External</span>
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient Name</Label>
            <Input
              id="recipient"
              placeholder="Enter recipient name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="account">Account Number</Label>
            <Input
              id="account"
              placeholder="Enter account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (GYD)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-12 text-2xl font-semibold"
            />
          </div>

          <div className="pt-4">
            <Button
              onClick={handleTransfer}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Transfer
            </Button>
          </div>
        </Card>

        <Card className="p-4 bg-muted/50">
          <h3 className="font-semibold mb-3 text-foreground">Recent Recipients</h3>
          <div className="space-y-2">
            {["Sarah Johnson", "David Williams", "Lisa Brown"].map((name, index) => (
              <button
                key={index}
                onClick={() => setRecipient(name)}
                className="w-full p-3 bg-card rounded-lg flex items-center gap-3 hover:bg-accent/10 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{name}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
