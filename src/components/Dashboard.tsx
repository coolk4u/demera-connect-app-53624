import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownLeft, CreditCard, MoreHorizontal, Send, Receipt, Smartphone, PiggyBank, Wallet, TrendingUp, Banknote, Landmark, DollarSign, Settings, Menu, Calendar, FileText, UserCog, LogOut, User, Bell } from "lucide-react";
import logo from "@/assets/demerara-logo.png";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { toast } from "sonner";
import card from './Assets/Card.svg';
import background from './Assets/Background.svg';
interface DashboardProps {
  onNavigate: (page: string) => void;
  onAccountClick: (account: any) => void;
}
export const Dashboard = ({
  onNavigate,
  onAccountClick
}: DashboardProps) => {
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
  const accounts = [{
    type: "Savings Account",
    balance: "95,250.00",
    accountNumber: "**** **** **** 4521",
    icon: PiggyBank,
    color: "bg-gradient-gold"
  }, {
    type: "Current Account",
    balance: "57,200.00",
    accountNumber: "**** **** **** 8932",
    icon: Wallet,
    color: "bg-gradient-gold"
  }, {
    type: "Investment Account",
    balance: "125,000.00",
    accountNumber: "**** **** **** 2341",
    icon: TrendingUp,
    color: "bg-gradient-gold"
  }];
  const quickActions = [{
    icon: Send,
    label: "Transfer",
    color: "bg-gradient-primary",
    action: "transfer"
  }, {
    icon: Receipt,
    label: "Pay Bills",
    color: "bg-gradient-secondary",
    action: "bills"
  }, {
    icon: Smartphone,
    label: "Top Up",
    color: "bg-gradient-accent",
    action: "topup"
  }, {
    icon: Banknote,
    label: "Loans",
    color: "bg-gradient-gold",
    action: "loans"
  }, {
    icon: CreditCard,
    label: "Cards",
    color: "bg-gradient-primary",
    action: "cards"
  }, {
    icon: DollarSign,
    label: "Forex",
    color: "bg-gradient-accent",
    action: "forex"
  }, {
    icon: Landmark,
    label: "Services",
    color: "bg-gradient-secondary",
    action: "services"
  }, {
    icon: Calendar,
    label: "Appointment",
    color: "bg-gradient-primary",
    action: "appointment"
  }, {
    icon: FileText,
    label: "New Account",
    color: "bg-gradient-accent",
    action: "apply-account"
  }, {
    icon: UserCog,
    label: "Update Profile",
    color: "bg-gradient-secondary",
    action: "update-profile"
  }, {
    icon: Settings,
    label: "More",
    color: "bg-muted",
    action: "more"
  }];
  return <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar onNavigate={onNavigate} />
        
        <div className="flex-1 min-h-screen bg-background pb-20">
          {/* Header */}
          <div style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} className="p-6 pb-8 rounded-b-[2rem] shadow-lg border-b border-primary-foreground/10 relative bg-green-900">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <SidebarTrigger className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl h-10 w-10">
                      <Menu className="h-6 w-6" />
                    </SidebarTrigger>
                    <img src={logo} alt="Demerara Bank" className="h-12 w-12 object-contain drop-shadow-md" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-xs font-medium">Good morning</p>
                    <h2 className="text-primary-foreground text-xl font-bold tracking-tight">Michael Peters</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl relative">
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-80">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-sm">Notifications</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                            <div className="flex items-start gap-3">
                              <div className="bg-primary/10 p-2 rounded-lg">
                                <ArrowDownLeft className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">Payment Received</p>
                                <p className="text-xs text-muted-foreground mt-1">$2,500 credited to your Savings Account</p>
                                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                            <div className="flex items-start gap-3">
                              <div className="bg-accent/10 p-2 rounded-lg">
                                <CreditCard className="h-4 w-4 text-accent" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">Card Payment</p>
                                <p className="text-xs text-muted-foreground mt-1">$150 spent at Amazon Store</p>
                                <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                        <MoreHorizontal className="h-6 w-6" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => onNavigate("profile")}>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toast.info("Logout functionality")}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Account Cards Carousel */}
              <Carousel className="w-full max-w-full">
                <CarouselContent className="-ml-3">
                  {accounts.map((account, index) => {
                  const isFlipped = flippedCards.has(index);
                  return <CarouselItem key={index} className="pl-3 basis-full md:basis-[95%]">
                        <div className="relative h-44 cursor-pointer perspective-1000" onClick={() => toggleCardFlip(index)}>
                          <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                            {/* Front of card */}
                            <Card className="absolute inset-0 border-0 p-5 shadow-xl backface-hidden rounded-2xl" style={{
                          overflow: 'visible'
                        }}>
                              <img src={card} alt="Card" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="relative z-10 flex flex-col h-full justify-between text-white">
                                <div className="flex justify-between items-start">
                                  <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                                    <account.icon className="h-6 w-6 text-white" />
                                  </div>
                                  <CreditCard className="h-5 w-5 text-white/80" />
                                </div>
                                <div>
                                  <p className="text-white/90 text-sm font-medium mb-2">{account.type}</p>
                                  <p className="text-white text-2xl font-bold tracking-tight">
                                    <span className="text-white text-xl font-bold mr-2">$</span>
                                    <sub className="">* * * *</sub> . <sub>* *</sub> 
                                  </p>
                                  <p className="text-white/70 text-base mt-2 font-medium">
                                    {account.accountNumber}
                                  </p>
                                </div>
                              </div>
                            </Card>
                            
                            {/* Back of card */}
                            <Card className="absolute inset-0 border-0 p-5 shadow-xl backface-hidden rotate-y-180 rounded-2xl" style={{
                          overflow: 'visible'
                        }}>
                              <img src={card} alt="Card" className="absolute inset-0 w-full h-full object-cover" />
                              <div className="relative z-10 flex flex-col h-full justify-between text-white">
                                <div className="flex justify-between items-start">
                                  <h4 className="text-white font-bold text-lg">Details</h4>
                                  <MoreHorizontal className="h-5 w-5 text-white" />
                                </div>
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-white/80 text-xs mb-1">Available Balance</p>
                                    <p className="text-white text-2xl font-bold">$ {account.balance}</p>
                                  </div>
                                  <div className="flex gap-4">
                                    <div>
                                      <p className="text-white/80 text-xs mb-1">Account No.</p>
                                      <p className="text-white text-sm font-medium">{account.accountNumber}</p>
                                    </div>
                                    <div>
                                      <p className="text-white/80 text-xs mb-1">Type</p>
                                      <p className="text-white text-sm font-medium">{account.type.split(' ')[0]}</p>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 mt-2">
                                    <div className="flex items-center gap-1.5 text-white/90 text-xs">
                                      <div className="bg-green-500/30 p-1 rounded">
                                        <ArrowDownLeft className="h-3 w-3 text-green-300" />
                                      </div>
                                      <span>Active</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>
                      </CarouselItem>;
                })}
                </CarouselContent>
                {/* Removed CarouselPrevious and CarouselNext components */}
              </Carousel>
            </div>
          </div>

          {/* Quick Actions & Transactions */}
          <div className="px-6 pb-6 space-y-6">

            {/* Quick Actions */}
            <div>
              <h3 className="text-foreground font-bold text-lg mb-4">Quick Actions</h3>
              <div className="grid grid-cols-4 gap-3">
                {quickActions.map((action, index) => <button key={index} onClick={() => action.action !== "more" && onNavigate(action.action)} className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group">
                    <div className={`${action.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow backdrop-blur-sm`}>
                      <action.icon className="h-6 w-6 text-primary-foreground drop-shadow-sm" />
                    </div>
                    <span className="text-xs text-foreground/80 font-medium text-center leading-tight">{action.label}</span>
                  </button>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>;
};