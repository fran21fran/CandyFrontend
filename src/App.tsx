import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import HomePage from "@/pages/HomePage";
import LanguagePage from "@/pages/LanguagePage";
import LanguageSelectionPage from "@/pages/LanguageSelectionPage";
import GamesPage from "@/pages/GamesPage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import SupportPage from "@/pages/SupportPage";
import TeamPage from "@/pages/TeamPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import SubscriptionPage from "@/pages/SubscriptionPage";
import SuggestionsPage from "@/pages/SuggestionsPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      {/* Auth pages without background/navigation */}
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/subscription" component={SubscriptionPage} />
      
      {/* Language selection page without background/navigation */}
      <Route path="/language-selection" component={LanguageSelectionPage} />
      
      {/* All other pages with background and navigation */}
      <Route>
        <div className="relative min-h-screen">
          <AnimatedBackground />
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/language/:id" component={LanguagePage} />
            <Route path="/languages" component={LanguagePage} />
            <Route path="/games" component={GamesPage} />
            <Route path="/leaderboard" component={LeaderboardPage} />
            <Route path="/suggestions" component={SuggestionsPage} />
            <Route path="/support" component={SupportPage} />
            <Route path="/team" component={TeamPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
