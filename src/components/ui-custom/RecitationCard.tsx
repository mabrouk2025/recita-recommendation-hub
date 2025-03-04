
import React from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface RecitationCardProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  index?: number;
  className?: string;
  onClick?: () => void;
  featured?: boolean;
  dir?: 'ltr' | 'rtl';
}

const RecitationCard = ({
  title,
  subtitle,
  imageUrl,
  index = 0,
  className,
  onClick,
  featured = false,
  dir = 'rtl',
}: RecitationCardProps) => {
  return (
    <div
      className={cn(
        'relative group overflow-hidden rounded-xl cursor-pointer card-hover',
        featured ? 'aspect-[4/3]' : 'aspect-square',
        className
      )}
      onClick={onClick}
      style={{
        animationDelay: `${index * 100 + 100}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10" />
      
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-accent to-secondary" />
      )}
      
      <div 
        className={cn(
          'absolute bottom-0 left-0 right-0 p-4 z-20',
          dir === 'rtl' ? 'text-right' : 'text-left'
        )}
      >
        <p className="text-xs text-white/80 mb-1">{subtitle}</p>
        <h3 className={cn(
          "font-medium text-white text-balance", 
          featured ? 'text-lg' : 'text-base',
          dir === 'rtl' ? 'arabic-text' : ''
        )}>
          {title}
        </h3>
      </div>
      
      <div className="absolute top-0 right-0 p-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-primary/90 backdrop-blur-sm rounded-full p-2 shadow-lg text-white">
          <Play size={16} className="animate-pulse-soft" />
        </div>
      </div>
    </div>
  );
};

export default RecitationCard;
