import { forwardRef, createContext, useContext } from 'react';
import type { CompactSize } from '@ninna-ui/core';
import { cn } from '@ninna-ui/utils';
import { TabsEngine } from '@ninna-ui/react-internal';
import { tabsListVariants, tabsTriggerVariants, TABS_ROOT_CLASS, TABS_CONTENT_CLASS } from './tabs.styles';
import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps, TabsVariant } from './tabs.types';

interface TabsContextValue {
  variant: TabsVariant;
  size: CompactSize;
  orientation: 'horizontal' | 'vertical';
}

const TabsContext = createContext<TabsContextValue>({ variant: 'line', size: 'md', orientation: 'horizontal' });

const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      orientation = 'horizontal',
      activationMode = 'automatic',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <TabsContext.Provider value={{ variant: 'line', size: 'md', orientation: orientation ?? 'horizontal' }}>
        <TabsEngine.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          orientation={orientation}
          activationMode={activationMode}
          asChild
        >
          <div
            ref={ref}
            data-slot="tabs"
            data-orientation={orientation}
            className={cn(
              TABS_ROOT_CLASS,
              orientation === 'vertical' && 'flex-row',
              className
            )}
            {...props}
          >
            {children}
          </div>
        </TabsEngine.Root>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = 'Tabs';

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ variant = 'line', size = 'md', loop, className, children, ...props }, ref) => {
    const parent = useContext(TabsContext);
    const orientation = parent.orientation;
    return (
      <TabsContext.Provider value={{ variant, size, orientation }}>
        <TabsEngine.List
          ref={ref}
          data-slot="tabs-list"
          loop={loop}
          className={cn(
            tabsListVariants({ variant, orientation }),
            className
          )}
          {...props}
        >
          {children}
        </TabsEngine.List>
      </TabsContext.Provider>
    );
  }
);

TabsList.displayName = 'Tabs.List';

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled, className, children, ...props }, ref) => {
    const { variant, size, orientation } = useContext(TabsContext);
    return (
      <TabsEngine.Trigger
        ref={ref}
        value={value}
        disabled={disabled}
        data-slot="tabs-trigger"
        className={cn(
          tabsTriggerVariants({ variant, size, orientation }),
          className
        )}
        {...props}
      >
        {children}
      </TabsEngine.Trigger>
    );
  }
);

TabsTrigger.displayName = 'Tabs.Trigger';

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, forceMount, className, children, ...props }, ref) => {
    return (
      <TabsEngine.Content
        ref={ref}
        value={value}
        forceMount={forceMount}
        data-slot="tabs-content"
        className={cn(TABS_CONTENT_CLASS, className)}
        {...props}
      >
        {children}
      </TabsEngine.Content>
    );
  }
);

TabsContent.displayName = 'Tabs.Content';

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
