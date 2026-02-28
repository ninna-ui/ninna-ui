import { forwardRef, createContext, useContext } from 'react';
import { cn } from '@ninna-ui/utils';
import { AccordionEngine } from '@ninna-ui/react-internal';
import { accordionStyles, ACCORDION_VARIANTS } from './accordion.styles';
import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionVariant,
} from './accordion.types';

const AccordionContext = createContext<{ variant: AccordionVariant }>({ variant: 'outline' });

const ChevronIcon = () => (
  <svg className={accordionStyles.chevron} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { variant = 'outline', className, children, dir, ...rest } = props;
    const variantStyles = ACCORDION_VARIANTS[variant];

    return (
      <AccordionContext.Provider value={{ variant }}>
        <AccordionEngine.Root
          ref={ref}
          data-slot="accordion"
          dir={dir as 'ltr' | 'rtl' | undefined}
          className={cn(accordionStyles.root, variantStyles.root, className)}
          {...rest}
        >
          {children}
        </AccordionEngine.Root>
      </AccordionContext.Provider>
    );
  }
);

AccordionRoot.displayName = 'Accordion';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const { variant } = useContext(AccordionContext);
    const variantStyles = ACCORDION_VARIANTS[variant];
    return (
      <AccordionEngine.Item
        ref={ref}
        value={value}
        disabled={disabled}
        data-slot="accordion-item"
        className={cn(accordionStyles.item, variantStyles.item, className)}
        {...props}
      >
        {children}
      </AccordionEngine.Item>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <AccordionEngine.Header>
        <AccordionEngine.Trigger
          ref={ref}
          data-slot="accordion-trigger"
          className={cn(accordionStyles.trigger, className)}
          {...props}
        >
          {children}
          <ChevronIcon />
        </AccordionEngine.Trigger>
      </AccordionEngine.Header>
    );
  }
);

AccordionTrigger.displayName = 'Accordion.Trigger';

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ forceMount, className, children, ...props }, ref) => {
    return (
      <AccordionEngine.Content
        ref={ref}
        forceMount={forceMount}
        data-slot="accordion-content"
        className={cn(accordionStyles.content, className)}
        {...props}
      >
        <div className={accordionStyles.contentInner}>{children}</div>
      </AccordionEngine.Content>
    );
  }
);

AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
