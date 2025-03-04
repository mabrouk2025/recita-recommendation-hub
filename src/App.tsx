
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create placeholder pages for footer navigation
const SearchPage = () => <div className="pt-20 pb-28 min-h-screen flex items-center justify-center text-xl font-medium">صفحة البحث</div>;
const ListenPage = () => <div className="pt-20 pb-28 min-h-screen flex items-center justify-center text-xl font-medium">صفحة الاستماع</div>;
const LibraryPage = () => <div className="pt-20 pb-28 min-h-screen flex items-center justify-center text-xl font-medium">صفحة المكتبة</div>;
const ProfilePage = () => <div className="pt-20 pb-28 min-h-screen flex items-center justify-center text-xl font-medium">صفحة الملف الشخصي</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/listen" element={<ListenPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
