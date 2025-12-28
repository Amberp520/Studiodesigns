import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UIDesign from "./pages/skills/UIDesign";
import UXStrategy from "./pages/skills/UXStrategy";
import Development from "./pages/skills/Development";
import Prototyping from "./pages/skills/Prototyping";
import DesignSystems from "./pages/blog/DesignSystems";
import UXResearch from "./pages/blog/UXResearch";
import MotionDesign from "./pages/blog/MotionDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills/ui-design" element={<UIDesign />} />
          <Route path="/skills/ux-strategy" element={<UXStrategy />} />
          <Route path="/skills/development" element={<Development />} />
          <Route path="/skills/prototyping" element={<Prototyping />} />
          <Route path="/blog/design-systems" element={<DesignSystems />} />
          <Route path="/blog/ux-research" element={<UXResearch />} />
          <Route path="/blog/motion-design" element={<MotionDesign />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
