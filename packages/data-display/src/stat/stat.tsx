import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { statStyles, STAT_VALUE_SIZES } from './stat.styles';
import type {
  StatProps,
  StatLabelProps,
  StatValueProps,
  StatHelpTextProps,
  StatTrendProps,
  StatIconProps,
} from './stat.types';

const TrendUpIcon = () => (
  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
  </svg>
);

const TrendDownIcon = () => (
  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
  </svg>
);

const StatRoot = forwardRef<HTMLDListElement, StatProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <dl ref={ref} data-slot="stat" className={cn(statStyles.root, className)} {...props}>
        {children}
      </dl>
    );
  }
);

StatRoot.displayName = 'Stat';

const StatLabel = forwardRef<HTMLElement, StatLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <dt ref={ref} data-slot="stat-label" className={cn(statStyles.label, className)} {...props}>
        {children}
      </dt>
    );
  }
);

StatLabel.displayName = 'Stat.Label';

const StatValue = forwardRef<HTMLElement, StatValueProps>(
  ({ size = 'md', className, children, ...props }, ref) => {
    return (
      <dd ref={ref} data-slot="stat-value" className={cn(statStyles.value, STAT_VALUE_SIZES[size], className)} {...props}>
        {children}
      </dd>
    );
  }
);

StatValue.displayName = 'Stat.Value';

const StatHelpText = forwardRef<HTMLParagraphElement, StatHelpTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} data-slot="stat-help" className={cn(statStyles.helpText, className)} {...props}>
        {children}
      </p>
    );
  }
);

StatHelpText.displayName = 'Stat.HelpText';

const StatTrend = forwardRef<HTMLSpanElement, StatTrendProps>(
  ({ direction, positiveIsGood = true, className, children, ...props }, ref) => {
    const getTrendColor = () => {
      if (direction === 'neutral') return statStyles.trendNeutral;
      if (direction === 'up') return positiveIsGood ? statStyles.trendUp : statStyles.trendUpBad;
      return positiveIsGood ? statStyles.trendDown : statStyles.trendDownBad;
    };

    return (
      <span ref={ref} data-slot="stat-trend" data-direction={direction} className={cn(statStyles.trend, getTrendColor(), className)} {...props}>
        {direction === 'up' && <TrendUpIcon />}
        {direction === 'down' && <TrendDownIcon />}
        {children}
      </span>
    );
  }
);

StatTrend.displayName = 'Stat.Trend';

const StatIcon = forwardRef<HTMLDivElement, StatIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="stat-icon" className={cn(statStyles.icon, className)} {...props}>
        {children}
      </div>
    );
  }
);

StatIcon.displayName = 'Stat.Icon';

export const Stat = Object.assign(StatRoot, {
  Label: StatLabel,
  Value: StatValue,
  HelpText: StatHelpText,
  Trend: StatTrend,
  Icon: StatIcon,
});
