
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  rightElement?: React.ReactNode;
  dir?: 'ltr' | 'rtl';
  index?: number;
}

const SectionTitle = ({
  title,
  subtitle,
  className,
  rightElement,
  dir = 'rtl',
  index = 0,
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'w-full flex justify-between items-center mb-4',
        dir === 'rtl' ? 'flex-row-reverse text-right' : 'text-left',
        className
      )}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="animate-fade-in">
        <div className="flex items-center gap-2">
          {dir === 'rtl' ? (
            <>
              <h2 className="text-xl font-medium tracking-tight">{title}</h2>
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            </>
          ) : (
            <>
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <h2 className="text-xl font-medium tracking-tight">{title}</h2>
            </>
          )}
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      {rightElement && (
        <div className="flex items-center">{rightElement}</div>
      )}
    </div>
  );
};

export default SectionTitle;
