import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownLeft,
  ArrowLeft,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface TransactionsPageProps {
  onBack: () => void;
}

export const TransactionsPage = ({ onBack }: TransactionsPageProps) => {
  const transactions = [
    { id: 1, name: "GTT Payment", amount: "-5,200", date: "Today", time: "10:30 AM", type: "debit", category: "Utilities" },
    { id: 2, name: "Salary Deposit", amount: "+85,000", date: "Yesterday", time: "09:00 AM", type: "credit", category: "Income" },
    { id: 3, name: "GPL Bill", amount: "-12,500", date: "2 days ago", time: "02:15 PM", type: "debit", category: "Utilities" },
    { id: 4, name: "Transfer from Jane", amount: "+20,000", date: "3 days ago", time: "11:45 AM", type: "credit", category: "Transfer" },
    { id: 5, name: "Restaurant", amount: "-8,500", date: "4 days ago", time: "07:30 PM", type: "debit", category: "Food" },
    { id: 6, name: "Freelance Payment", amount: "+45,000", date: "5 days ago", time: "03:00 PM", type: "credit", category: "Income" },
    { id: 7, name: "Shopping", amount: "-15,200", date: "6 days ago", time: "01:20 PM", type: "debit", category: "Shopping" },
    { id: 8, name: "GWI Water Bill", amount: "-3,800", date: "1 week ago", time: "10:00 AM", type: "debit", category: "Utilities" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary p-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-primary-foreground text-2xl font-bold">Transactions</h1>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-10 bg-card border-0 shadow-md"
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto">
        <Button variant="default" size="sm" className="rounded-full whitespace-nowrap">
          All
        </Button>
        <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
          Income
        </Button>
        <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
          Expenses
        </Button>
        <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
          <Filter className="h-4 w-4 mr-1" />
          Filter
        </Button>
      </div>

      {/* Transactions List */}
      <div className="px-6 space-y-3">
        {transactions.map((transaction) => (
          <Card 
            key={transaction.id} 
            className="p-4 border-border hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  transaction.type === 'credit' ? 'bg-success/10' : 'bg-muted'
                }`}>
                  {transaction.type === 'credit' ? (
                    <ArrowDownLeft className="h-6 w-6 text-success" />
                  ) : (
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{transaction.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-xs text-muted-foreground font-medium">{transaction.date}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground font-medium">{transaction.time}</p>
                  </div>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground font-medium mt-1 inline-block">
                    {transaction.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-lg ${
                  transaction.type === 'credit' ? 'text-success' : 'text-foreground'
                }`}>
                  ${transaction.amount}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};