
import React, { useState, useEffect } from 'react';
import { Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300',
        isScrolled ? 'glass shadow-sm backdrop-blur-lg py-3' : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/b7727aff-cf2c-45e7-a6bc-e2e6cafe493f.png" 
            alt="الصوت الندي" 
            className="h-9 w-auto"
          />
          <h1 className={cn(
            "font-bold transition-all duration-300 text-balance arabic-text text-primary",
            isScrolled ? "text-lg" : "text-xl"
          )}>
            الصوت الندي
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <Search size={20} className="text-foreground" />
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <User size={20} className="text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
