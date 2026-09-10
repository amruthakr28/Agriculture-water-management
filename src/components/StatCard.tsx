import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  iconBg?: string;
  className?: string;
}

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, subtitle, icon: Icon, iconBg = 'bg-primary/10', className }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn('rounded-2xl bg-card p-6 shadow-card transition-transform hover:scale-[1.02]', className)}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className={cn('rounded-xl p-3', iconBg)}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    );
  }
);

StatCard.displayName = 'StatCard';
