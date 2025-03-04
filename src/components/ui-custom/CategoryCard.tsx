
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  icon?: React.ReactNode;
  index?: number;
  className?: string;
  onClick?: () => void;
  dir?: 'ltr' | 'rtl';
}

const CategoryCard = ({
  title,
  icon,
  index = 0,
  className,
  onClick,
  dir = 'rtl',
}: CategoryCardProps) => {
  return (
    <div
      className={cn(
        'group flex items-center gap-3 p-4 rounded-xl cursor-pointer card-hover backdrop-blur-sm animate-fade-in',
        'bg-secondary/50 hover:bg-secondary',
        dir === 'rtl' ? 'flex-row-reverse' : '',
        className
      )}
      onClick={onClick}
      style={{
        animationDelay: `${index * 70 + 200}ms`
      }}
    >
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
      )}
      
      <h3 className={cn(
        "font-medium text-sm text-balance flex-1", 
        dir === 'rtl' ? 'text-right arabic-text' : 'text-left'
      )}>
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
