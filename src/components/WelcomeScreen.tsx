import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center justify-between p-6 text-primary-foreground">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-slide-up">
        <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm">
          <div className="text-4xl font-bold text-accent">db</div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to<br />Demerara Bank
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-sm">
            Your trusted partner for secure and convenient banking on the go
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <p className="text-xs text-primary-foreground/70">Secure</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-xs text-primary-foreground/70">Fast</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-xs text-primary-foreground/70">Easy</p>
          </div>
        </div>
      </div>

      <Button 
        onClick={onGetStarted}
        size="lg"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};
