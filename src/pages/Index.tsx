import { useState } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { Dashboard } from "@/components/Dashboard";
import { BottomNav } from "@/components/BottomNav";
import { TransferPage } from "@/components/TransferPage";
import { PayBillsPage } from "@/components/PayBillsPage";
import { TopUpPage } from "@/components/TopUpPage";
import { AccountDetailPage } from "@/components/AccountDetailPage";
import { ProfilePage } from "@/components/ProfilePage";

type PageType = "home" | "transfer" | "bills" | "topup" | "profile" | "accountDetail";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activePage, setActivePage] = useState<PageType>("home");
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  const handleNavigate = (page: string) => {
    setActivePage(page as PageType);
  };

  const handleAccountClick = (account: any) => {
    setSelectedAccount(account);
    setActivePage("accountDetail");
  };

  if (showWelcome) {
    return <WelcomeScreen onGetStarted={() => setShowWelcome(false)} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case "transfer":
        return <TransferPage onBack={() => setActivePage("home")} />;
      case "bills":
        return <PayBillsPage onBack={() => setActivePage("home")} />;
      case "topup":
        return <TopUpPage onBack={() => setActivePage("home")} />;
      case "accountDetail":
        return selectedAccount ? (
          <AccountDetailPage
            account={selectedAccount}
            onBack={() => setActivePage("home")}
          />
        ) : null;
      case "profile":
        return <ProfilePage onBack={() => setActivePage("home")} />;
      default:
        return <Dashboard onNavigate={handleNavigate} onAccountClick={handleAccountClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
      <BottomNav activeTab={activePage} onTabChange={handleNavigate} />
    </div>
  );
};

export default Index;
