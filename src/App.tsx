import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import CropAdvisor from "./pages/CropAdvisor";
import IrrigationGuide from "./pages/IrrigationGuide";
import WaterConservation from "./pages/WaterConservation";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Weather from "./pages/Weather";
import SuccessStories from "./pages/SuccessStories";
import Equipment from "./pages/Equipment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crops" element={<CropAdvisor />} />
            <Route path="/irrigation" element={<IrrigationGuide />} />
            <Route path="/conservation" element={<WaterConservation />} />
            <Route path="/schemes" element={<GovernmentSchemes />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/stories" element={<SuccessStories />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
