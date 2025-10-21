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
  PiggyBank,
  Wallet,
  TrendingUp,
  Banknote,
  Landmark,
  DollarSign,
  Settings,
  Menu,
  Calendar,
  FileText,
  UserCog
} from "lucide-react";
import logo from "@/assets/demerara-logo.png";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

interface DashboardProps {
  onNavigate: (page: string) => void;
  onAccountClick: (account: any) => void;
}

export const Dashboard = ({ onNavigate, onAccountClick }: DashboardProps) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const accounts = [
    {
      type: "Savings Account",
      balance: "95,250.00",
      accountNumber: "****4521",
      icon: PiggyBank,
      color: "bg-gradient-secondary",
    },
    {
      type: "Current Account",
      balance: "57,200.00",
      accountNumber: "****8932",
      icon: Wallet,
      color: "bg-gradient-secondary",
    },
    {
      type: "Investment Account",
      balance: "125,000.00",
      accountNumber: "****2341",
      icon: TrendingUp,
      color: "bg-gradient-secondary",
    },
  ];

  const quickActions = [
    { icon: Send, label: "Transfer", color: "bg-gradient-primary", action: "transfer" },
    { icon: Receipt, label: "Pay Bills", color: "bg-gradient-secondary", action: "bills" },
    { icon: Smartphone, label: "Top Up", color: "bg-gradient-accent", action: "topup" },
    { icon: Banknote, label: "Loans", color: "bg-gradient-gold", action: "loans" },
    { icon: CreditCard, label: "Cards", color: "bg-gradient-primary", action: "cards" },
    { icon: DollarSign, label: "Forex", color: "bg-gradient-accent", action: "forex" },
    { icon: Landmark, label: "Services", color: "bg-gradient-secondary", action: "services" },
    { icon: Calendar, label: "Appointment", color: "bg-gradient-primary", action: "appointment" },
    { icon: FileText, label: "New Account", color: "bg-gradient-accent", action: "apply-account" },
    { icon: UserCog, label: "Update Profile", color: "bg-gradient-secondary", action: "update-profile" },
    { icon: Settings, label: "More", color: "bg-muted", action: "more" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar onNavigate={onNavigate} />
        
        <div className="flex-1 min-h-screen bg-background pb-20">
          {/* Header */}
          <div className="bg-gradient-primary p-6 pb-8 rounded-b-[2rem] shadow-lg border-b border-primary-foreground/10">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl h-10 w-10">
                  <Menu className="h-6 w-6" />
                </SidebarTrigger>
                <img src={logo} alt="Demerara Bank" className="h-12 w-12 object-contain drop-shadow-md" />
                <div>
                  <p className="text-primary-foreground/70 text-xs font-medium">Good morning</p>
                  <h2 className="text-primary-foreground text-xl font-bold tracking-tight">Michael Peters</h2>
                </div>
              </div>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                <MoreHorizontal className="h-6 w-6" />
              </Button>
            </div>

        {/* Account Cards Carousel */}
        <Carousel className="w-full max-w-full px-4">
          <CarouselContent className="-ml-2">
            {accounts.map((account, index) => {
              const isFlipped = flippedCards.has(index);
              return (
                <CarouselItem key={index} className="pl-2 basis-[98%]">
                  <div 
                    className="relative h-40 cursor-pointer perspective-1000"
                    onClick={() => toggleCardFlip(index)}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                      {/* Front of card */}
                      <Card className={`absolute inset-0 ${account.color} border-0 p-5 shadow-xl backface-hidden`}>
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex justify-between items-start">
                            <div className="bg-primary-foreground/20 p-2.5 rounded-xl backdrop-blur-sm">
                              <account.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <CreditCard className="h-5 w-5 text-primary-foreground/60" />
                          </div>
                          <div>
                            <p className="text-primary-foreground/80 text-sm font-medium mb-2">{account.type}</p>
                            <p className="text-primary-foreground text-3xl font-bold tracking-tight">
                              $****.**
                            </p>
                            <p className="text-primary-foreground/60 text-xs mt-2 font-medium">
                              {account.accountNumber}
                            </p>
                          </div>
                        </div>
                      </Card>
                      
                      {/* Back of card */}
                      <Card className={`absolute inset-0 ${account.color} border-0 p-5 shadow-xl backface-hidden rotate-y-180`}>
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex justify-between items-start">
                            <h4 className="text-primary-foreground font-bold text-lg">Details</h4>
                            <MoreHorizontal className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-primary-foreground/70 text-xs mb-1">Available Balance</p>
                              <p className="text-primary-foreground text-2xl font-bold">${account.balance}</p>
                            </div>
                            <div className="flex gap-4">
                              <div>
                                <p className="text-primary-foreground/70 text-xs mb-1">Account No.</p>
                                <p className="text-primary-foreground text-sm font-medium">{account.accountNumber}</p>
                              </div>
                              <div>
                                <p className="text-primary-foreground/70 text-xs mb-1">Type</p>
                                <p className="text-primary-foreground text-sm font-medium">{account.type.split(' ')[0]}</p>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <div className="flex items-center gap-1.5 text-primary-foreground/80 text-xs">
                                <div className="bg-success/20 p-1 rounded">
                                  <ArrowDownLeft className="h-3 w-3 text-success" />
                                </div>
                                <span>Active</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>

      {/* Quick Actions & Transactions */}
      <div className="px-6 pb-6 space-y-6">

        {/* Quick Actions */}
        <div>
          <h3 className="text-foreground font-bold text-lg mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => action.action !== "more" && onNavigate(action.action)}
                className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <div className={`${action.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow backdrop-blur-sm`}>
                  <action.icon className="h-6 w-6 text-primary-foreground drop-shadow-sm" />
                </div>
                <span className="text-xs text-foreground/80 font-medium text-center leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
