import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import ShopSelector from "./pages/ShopSelector";
import Inventory from "./pages/Inventory";
import PricingManagement from "./pages/PricingManagement";
import RetailerManagement from "./pages/RetailerManagement";
import CreditPayment from "./pages/CreditPayment";
import HolidayCalendar from "./pages/HolidayCalendar";
import ReportsInvoices from "./pages/ReportsInvoices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/features" element={<Layout><Features /></Layout>} />
          <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shop-selector" element={<ShopSelector />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/pricing-management" element={<PricingManagement />} />
          <Route path="/retailer-management" element={<RetailerManagement />} />
          <Route path="/credit-payment" element={<CreditPayment />} />
          <Route path="/holiday-calendar" element={<HolidayCalendar />} />
          <Route path="/reports-invoices" element={<ReportsInvoices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
