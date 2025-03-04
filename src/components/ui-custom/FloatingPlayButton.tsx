
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingPlayButtonProps {
  className?: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

const FloatingPlayButton = ({
  className,
  title,
  subtitle,
  onClick,
}: FloatingPlayButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (onClick) onClick();
  };

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 p-2 pr-5 rounded-full shadow-lg animate-float',
        'bg-primary backdrop-blur-lg',
        'transition-all duration-500 ease-in-out',
        isPlaying ? 'pr-6' : '',
        className
      )}
    >
      <button
        onClick={handleClick}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary transition-colors"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      {(title || subtitle) && (
        <div className="text-primary-foreground overflow-hidden max-w-[150px]">
          {title && (
            <h4 className="text-sm font-medium truncate text-balance arabic-text">{title}</h4>
          )}
          {subtitle && (
            <p className="text-xs text-primary-foreground/80 truncate">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingPlayButton;
