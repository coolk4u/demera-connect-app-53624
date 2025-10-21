import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  Send,
  MoreVertical
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/demerara-logo.png";

interface Account {
  type: string;
  balance: string;
  accountNumber: string;
  icon: any;
  color: string;
}

interface AccountDetailPageProps {
  account: Account;
  onBack: () => void;
}

export const AccountDetailPage = ({ account, onBack }: AccountDetailPageProps) => {
  const transactions = [
    {
      id: 1,
      description: "Salary Deposit",
      amount: "+85,000",
      date: "Dec 18, 2024",
      time: "10:30 AM",
      type: "credit",
      category: "Income",
    },
    {
      id: 2,
      description: "GTT Bill Payment",
      amount: "-5,200",
      date: "Dec 17, 2024",
      time: "2:15 PM",
      type: "debit",
      category: "Bills",
    },
    {
      id: 3,
      description: "GPL Payment",
      amount: "-12,500",
      date: "Dec 15, 2024",
      time: "11:45 AM",
      type: "debit",
      category: "Bills",
    },
    {
      id: 4,
      description: "Transfer from Jane",
      amount: "+20,000",
      date: "Dec 14, 2024",
      time: "4:20 PM",
      type: "credit",
      category: "Transfer",
    },
    {
      id: 5,
      description: "ATM Withdrawal",
      amount: "-10,000",
      date: "Dec 13, 2024",
      time: "9:30 AM",
      type: "debit",
      category: "Cash",
    },
    {
      id: 6,
      description: "Online Purchase",
      amount: "-8,500",
      date: "Dec 12, 2024",
      time: "6:15 PM",
      type: "debit",
      category: "Shopping",
    },
  ];

  const documents = [
    { name: "Account Statement", icon: FileText, period: "Nov 2024" },
    { name: "Tax Certificate", icon: FileText, period: "2024" },
    { name: "Transaction History", icon: Calendar, period: "Last 90 days" },
  ];

  const handleDownload = (docName: string) => {
    toast.success(`Downloading ${docName}...`);
  };

  const accountStats = [
    { label: "Monthly Inflow", value: "+125,000", icon: ArrowDownLeft, color: "text-success" },
    { label: "Monthly Outflow", value: "-42,200", icon: ArrowUpRight, color: "text-destructive" },
    { label: "Average Balance", value: "98,450", icon: TrendingUp, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className={`${account.color} p-6 rounded-b-3xl shadow-lg`}>
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Demerara Bank" className="h-10 object-contain" />
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <p className="text-primary-foreground/80 text-sm">{account.type}</p>
            <p className="text-primary-foreground/60 text-xs mt-1">{account.accountNumber}</p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <MoreVertical className="h-6 w-6" />
          </Button>
        </div>

        {/* Balance Card */}
        <Card className="bg-primary-foreground/10 backdrop-blur-sm border-0 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary-foreground/20 p-2 rounded-lg">
              <account.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-primary-foreground/70 text-sm">Available Balance</p>
              <h2 className="text-primary-foreground text-3xl font-bold">${account.balance}</h2>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0"
              size="sm"
            >
              <Send className="h-4 w-4 mr-2" />
              Transfer
            </Button>
            <Button
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Statement
            </Button>
          </div>
        </Card>
      </div>

      {/* Account Stats */}
      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {accountStats.map((stat, index) => (
            <Card key={index} className="p-4 text-center">
              <div className={`inline-flex p-2 rounded-lg bg-muted mb-2`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <p className={`text-sm font-semibold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Download Documents */}
        <div>
          <h3 className="text-foreground font-semibold mb-4">Documents & Statements</h3>
          <div className="grid gap-3">
            {documents.map((doc, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => handleDownload(doc.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <doc.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.period}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost">
                    <Download className="h-5 w-5 text-primary" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-foreground font-semibold">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              Filter
            </Button>
          </div>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card
                key={transaction.id}
                className="p-4 border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "credit" ? "bg-success/10" : "bg-muted"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <ArrowDownLeft className="h-5 w-5 text-success" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {transaction.date} • {transaction.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        transaction.type === "credit" ? "text-success" : "text-foreground"
                      }`}
                    >
                      ${transaction.amount}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
