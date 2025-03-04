
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, Search, Music, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface FooterTabProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const FooterTab = ({ icon, label, to, isActive }: FooterTabProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex flex-1 flex-col items-center justify-center py-2 gap-1",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    )}
  >
    <div>{icon}</div>
    <span className="text-xs font-medium arabic-text">{label}</span>
  </Link>
);

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 glass backdrop-blur-md shadow-[0_-1px_3px_rgba(0,0,0,0.05)] border-t">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <FooterTab 
            icon={<Home size={20} />} 
            label="الرئيسية" 
            to="/" 
            isActive={currentPath === '/'} 
          />
          
          <FooterTab 
            icon={<Search size={20} />} 
            label="البحث" 
            to="/search" 
            isActive={currentPath === '/search'} 
          />
          
          <FooterTab 
            icon={<Music size={20} />} 
            label="الاستماع" 
            to="/listen" 
            isActive={currentPath === '/listen'} 
          />
          
          <FooterTab 
            icon={<BookOpen size={20} />} 
            label="المكتبة" 
            to="/library" 
            isActive={currentPath === '/library'} 
          />
          
          <FooterTab 
            icon={<User size={20} />} 
            label="حسابي" 
            to="/profile" 
            isActive={currentPath === '/profile'} 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
