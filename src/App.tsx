import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UIDesign from "./pages/skills/UIDesign";
import UXStrategy from "./pages/skills/UXStrategy";
import Development from "./pages/skills/Development";
import Prototyping from "./pages/skills/Prototyping";
import DesignSystems from "./pages/blog/DesignSystems";
import UXResearch from "./pages/blog/UXResearch";
import MotionDesign from "./pages/blog/MotionDesign";
import AccessibilityGuide from "./pages/blog/AccessibilityGuide";
import ColorPsychology from "./pages/blog/ColorPsychology";
import PrototypingPractices from "./pages/blog/PrototypingPractices";
import Blog from "./pages/Blog";
import FintechDashboard from "./pages/projects/FintechDashboard";
import EcommerceRedesign from "./pages/projects/EcommerceRedesign";
import HealthWellnessApp from "./pages/projects/HealthWellnessApp";
import BrandIdentitySystem from "./pages/projects/BrandIdentitySystem";
import SaaSPlatform from "./pages/projects/SaaSPlatform";
import TravelBookingApp from "./pages/projects/TravelBookingApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills/ui-design" element={<UIDesign />} />
          <Route path="/skills/ux-strategy" element={<UXStrategy />} />
          <Route path="/skills/development" element={<Development />} />
          <Route path="/skills/prototyping" element={<Prototyping />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/design-systems" element={<DesignSystems />} />
          <Route path="/blog/ux-research" element={<UXResearch />} />
          <Route path="/blog/motion-design" element={<MotionDesign />} />
          <Route path="/blog/accessibility-guide" element={<AccessibilityGuide />} />
          <Route path="/blog/color-psychology" element={<ColorPsychology />} />
          <Route path="/blog/prototyping-practices" element={<PrototypingPractices />} />
          <Route path="/projects/fintech-dashboard" element={<FintechDashboard />} />
          <Route path="/projects/e-commerce-redesign" element={<EcommerceRedesign />} />
          <Route path="/projects/health-wellness-app" element={<HealthWellnessApp />} />
          <Route path="/projects/brand-identity-system" element={<BrandIdentitySystem />} />
          <Route path="/projects/saas-platform" element={<SaaSPlatform />} />
          <Route path="/projects/travel-booking-app" element={<TravelBookingApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
