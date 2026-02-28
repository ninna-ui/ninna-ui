import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { timelineStyles, TIMELINE_INDICATOR_STATUS } from './timeline.styles';
import type {
  TimelineProps,
  TimelineItemProps,
  TimelineIndicatorProps,
  TimelineContentProps,
  TimelineConnectorProps,
  TimelineHeadingProps,
  TimelineDescriptionProps,
  TimelineTimeProps,
} from './timeline.types';

const TimelineRoot = forwardRef<HTMLDivElement, TimelineProps>(
  ({ orientation = 'vertical', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="timeline"
        data-orientation={orientation}
        className={cn(
          timelineStyles.root,
          orientation === 'horizontal' && timelineStyles.rootHorizontal,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TimelineRoot.displayName = 'Timeline';

const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="timeline-item" className={cn(timelineStyles.item, className)} {...props}>
        {children}
      </div>
    );
  }
);

TimelineItem.displayName = 'Timeline.Item';

const TimelineIndicator = forwardRef<HTMLDivElement, TimelineIndicatorProps>(
  ({ icon, status = 'default', className, children, ...props }, ref) => {
    const hasIcon = !!icon || !!children;
    return (
      <div
        ref={ref}
        data-slot="timeline-indicator"
        data-status={status}
        className={cn(
          timelineStyles.indicator.base,
          hasIcon && timelineStyles.indicator.withIcon,
          TIMELINE_INDICATOR_STATUS[status],
          className
        )}
        {...props}
      >
        {icon || children}
      </div>
    );
  }
);

TimelineIndicator.displayName = 'Timeline.Indicator';

const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="timeline-content" className={cn(timelineStyles.content, className)} {...props}>
        {children}
      </div>
    );
  }
);

TimelineContent.displayName = 'Timeline.Content';

const TimelineConnector = forwardRef<HTMLDivElement, TimelineConnectorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="timeline-connector" aria-hidden="true" className={cn(timelineStyles.connector, className)} {...props} />
    );
  }
);

TimelineConnector.displayName = 'Timeline.Connector';

const TimelineHeading = forwardRef<HTMLHeadingElement, TimelineHeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} data-slot="timeline-heading" className={cn(timelineStyles.heading, className)} {...props}>
        {children}
      </h3>
    );
  }
);

TimelineHeading.displayName = 'Timeline.Heading';

const TimelineDescription = forwardRef<HTMLParagraphElement, TimelineDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} data-slot="timeline-description" className={cn(timelineStyles.description, className)} {...props}>
        {children}
      </p>
    );
  }
);

TimelineDescription.displayName = 'Timeline.Description';

const TimelineTime = forwardRef<HTMLTimeElement, TimelineTimeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <time ref={ref} data-slot="timeline-time" className={cn(timelineStyles.time, className)} {...props}>
        {children}
      </time>
    );
  }
);

TimelineTime.displayName = 'Timeline.Time';

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Indicator: TimelineIndicator,
  Content: TimelineContent,
  Connector: TimelineConnector,
  Heading: TimelineHeading,
  Description: TimelineDescription,
  Time: TimelineTime,
});
