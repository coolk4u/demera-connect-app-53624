import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, User, Building2, Globe, ArrowRightLeft } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

interface TransferPageProps {
  onBack: () => void;
}

type TransferType = "own" | "local" | "third-party" | "wire";

// Validation schemas
const ownTransferSchema = z.object({
  fromAccount: z.string().min(1, "Please select source account"),
  toAccount: z.string().min(1, "Please select destination account"),
  amount: z.string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, "Amount must be greater than 0")
    .refine((val) => parseFloat(val) <= 1000000, "Amount exceeds maximum limit"),
}).refine((data) => data.fromAccount !== data.toAccount, {
  message: "Source and destination accounts must be different",
  path: ["toAccount"],
});

const externalTransferSchema = z.object({
  recipient: z.string().trim().min(2, "Recipient name is required").max(100, "Name too long"),
  accountNumber: z.string().trim().min(8, "Invalid account number").max(20, "Account number too long"),
  amount: z.string()
    .min(1, "Amount is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, "Amount must be greater than 0")
    .refine((val) => parseFloat(val) <= 1000000, "Amount exceeds maximum limit"),
});

interface TransferPageProps {
  onBack: () => void;
}

export const TransferPage = ({ onBack }: TransferPageProps) => {
  const [transferType, setTransferType] = useState<TransferType>("own");
  
  // Own transfer state
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  
  // External transfer state
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  // Mock accounts data (in real app, this would come from props or state management)
  const accounts = [
    { id: "savings", name: "Savings Account", balance: "95,250.00", number: "****4521" },
    { id: "current", name: "Current Account", balance: "57,200.00", number: "****8932" },
    { id: "investment", name: "Investment Account", balance: "125,000.00", number: "****2341" },
  ];

  const transferTypes = [
    { id: "own" as TransferType, label: "Own", icon: ArrowRightLeft, description: "Between your accounts" },
    { id: "local" as TransferType, label: "Local Bank", icon: Building2, description: "Other local banks" },
    { id: "third-party" as TransferType, label: "Third Party", icon: User, description: "To another person" },
    { id: "wire" as TransferType, label: "Wire Transfer", icon: Globe, description: "International" },
  ];

  const handleOwnTransfer = () => {
    try {
      const validatedData = ownTransferSchema.parse({
        fromAccount,
        toAccount,
        amount,
      });

      const fromAcc = accounts.find(acc => acc.id === validatedData.fromAccount);
      const toAcc = accounts.find(acc => acc.id === validatedData.toAccount);
      const transferAmount = parseFloat(validatedData.amount);

      // Check sufficient balance (in real app, this would be done on backend)
      const fromBalance = parseFloat(fromAcc!.balance.replace(/,/g, ""));
      if (transferAmount > fromBalance) {
        toast.error("Insufficient balance in source account");
        return;
      }

      toast.success(`Successfully transferred $${transferAmount.toLocaleString()} from ${fromAcc!.name} to ${toAcc!.name}`);
      
      // Reset form
      setAmount("");
      setFromAccount("");
      setToAccount("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  const handleExternalTransfer = () => {
    try {
      const validatedData = externalTransferSchema.parse({
        recipient,
        accountNumber,
        amount,
      });

      toast.success(`Transfer of $${parseFloat(validatedData.amount).toLocaleString()} to ${validatedData.recipient} initiated successfully!`);
      
      // Reset form
      setAmount("");
      setRecipient("");
      setAccountNumber("");
      setBankName("");
      setSwiftCode("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-primary p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-primary-foreground">Transfer Money</h1>
        </div>

        {/* Transfer Type Selection */}
        <div className="grid grid-cols-2 gap-3">
          {transferTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setTransferType(type.id)}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 transition-all ${
                transferType === type.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-primary-foreground/10 text-primary-foreground"
              }`}
            >
              <type.icon className="h-6 w-6" />
              <span className="text-sm font-medium">{type.label}</span>
              <span className="text-xs opacity-70">{type.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Own Transfer Form */}
        {transferType === "own" && (
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fromAccount">From Account</Label>
              <Select value={fromAccount} onValueChange={setFromAccount}>
                <SelectTrigger id="fromAccount" className="h-12">
                  <SelectValue placeholder="Select source account" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{account.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {account.number} • ${account.balance}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="toAccount">To Account</Label>
              <Select value={toAccount} onValueChange={setToAccount}>
                <SelectTrigger id="toAccount" className="h-12">
                  <SelectValue placeholder="Select destination account" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{account.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {account.number} • ${account.balance}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                onClick={handleOwnTransfer}
                className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Transfer Between Accounts
              </Button>
            </div>
          </Card>
        )}

        {/* Local Bank Transfer Form */}
        {transferType === "local" && (
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
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
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
                onClick={handleExternalTransfer}
                className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Send to Local Bank
              </Button>
            </div>
          </Card>
        )}

        {/* Third Party Transfer Form */}
        {transferType === "third-party" && (
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
                onClick={handleExternalTransfer}
                className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Send to Third Party
              </Button>
            </div>
          </Card>
        )}

        {/* Wire Transfer Form */}
        {transferType === "wire" && (
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
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="swiftCode">SWIFT/BIC Code</Label>
              <Input
                id="swiftCode"
                placeholder="Enter SWIFT code"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="account">Account Number (IBAN)</Label>
              <Input
                id="account"
                placeholder="Enter IBAN"
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
                onClick={handleExternalTransfer}
                className="w-full h-12 bg-gradient-primary text-primary-foreground hover:opacity-90 rounded-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Wire Transfer
              </Button>
            </div>
          </Card>
        )}

        {/* Recent Recipients */}
        {transferType !== "own" && (
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
        )}
      </div>
    </div>
  );
};
