import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  MoreHorizontal,
  Send,
  Receipt,
  Smartphone,
  Plus,
  PiggyBank,
  Wallet,
  TrendingUp
} from "lucide-react";
import logo from "@/assets/demerara-logo.png";

interface DashboardProps {
  onNavigate: (page: string) => void;
  onAccountClick: (account: any) => void;
}

export const Dashboard = ({ onNavigate, onAccountClick }: DashboardProps) => {
  const totalBalance = "152,450.00";
  
  const transactions = [
    { id: 1, name: "GTT Payment", amount: "-5,200", date: "Today", type: "debit" },
    { id: 2, name: "Salary Deposit", amount: "+85,000", date: "Yesterday", type: "credit" },
    { id: 3, name: "GPL Bill", amount: "-12,500", date: "2 days ago", type: "debit" },
    { id: 4, name: "Transfer from Jane", amount: "+20,000", date: "3 days ago", type: "credit" },
  ];

  const accounts = [
    {
      type: "Savings Account",
      balance: "95,250.00",
      accountNumber: "****4521",
      icon: PiggyBank,
      color: "bg-gradient-gold",
    },
    {
      type: "Current Account",
      balance: "57,200.00",
      accountNumber: "****8932",
      icon: Wallet,
      color: "bg-gradient-primary",
    },
    {
      type: "Investment Account",
      balance: "125,000.00",
      accountNumber: "****2341",
      icon: TrendingUp,
      color: "bg-primary",
    },
  ];

  const quickActions = [
    { icon: Send, label: "Transfer", color: "bg-primary", action: "transfer" },
    { icon: Receipt, label: "Pay Bills", color: "bg-accent", action: "bills" },
    { icon: Smartphone, label: "Top Up", color: "bg-primary", action: "topup" },
    { icon: Plus, label: "More", color: "bg-muted", action: "more" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <img src={logo} alt="Demerara Bank" className="h-10 object-contain" />
          <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>

        <div className="mb-6">
          <p className="text-primary-foreground/80 text-sm">Good morning</p>
          <h2 className="text-primary-foreground text-2xl font-bold">Michael Peters</h2>
        </div>

        {/* Total Balance Card */}
        <Card className="bg-gradient-gold border-0 p-6 shadow-lg animate-scale-in">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-accent-foreground/70 text-sm mb-1">Total Balance</p>
              <h3 className="text-accent-foreground text-3xl font-bold">
                ${totalBalance}
              </h3>
            </div>
            <div className="bg-accent-foreground/10 p-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-accent-foreground/80 text-sm">
              <div className="bg-success/20 p-1 rounded">
                <ArrowDownLeft className="h-4 w-4 text-success" />
              </div>
              <span>Income</span>
            </div>
            <div className="flex items-center gap-2 text-accent-foreground/80 text-sm">
              <div className="bg-destructive/20 p-1 rounded">
                <ArrowUpRight className="h-4 w-4 text-destructive" />
              </div>
              <span>Expenses</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Accounts Section */}
      <div className="px-6 py-6 space-y-6">
        <div>
          <h3 className="text-foreground font-semibold mb-4">My Accounts</h3>
          <div className="space-y-3">
            {accounts.map((account, index) => (
              <Card
                key={index}
                onClick={() => onAccountClick(account)}
                className={`${account.color} border-0 p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 p-2 rounded-lg">
                      <account.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/80 text-sm">{account.type}</p>
                      <p className="text-primary-foreground text-2xl font-bold mt-1">
                        ${account.balance}
                      </p>
                      <p className="text-primary-foreground/60 text-xs mt-1">
                        {account.accountNumber}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-foreground font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => action.action !== "more" && onNavigate(action.action)}
                className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm`}>
                  <action.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xs text-foreground/70">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-foreground font-semibold">Recent Transactions</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              See All
            </Button>
          </div>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="p-4 border-border hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' ? 'bg-success/10' : 'bg-muted'
                    }`}>
                      {transaction.type === 'credit' ? (
                        <ArrowDownLeft className="h-5 w-5 text-success" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.name}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <p className={`font-semibold ${
                    transaction.type === 'credit' ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
