import { forwardRef, createContext, useContext } from 'react';
import type { CompactSize } from '@ninna-ui/core';
import { cn } from '@ninna-ui/utils';
import { TabsEngine } from '@ninna-ui/react-internal';
import { tabsStyles, TABS_LIST_VARIANTS, TABS_TRIGGER_VARIANTS, TABS_TRIGGER_SIZES } from './tabs.styles';
import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps, TabsVariant } from './tabs.types';

interface TabsContextValue {
  variant: TabsVariant;
  size: CompactSize;
}

const TabsContext = createContext<TabsContextValue>({ variant: 'line', size: 'md' });

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
            tabsStyles.root,
            orientation === 'vertical' && tabsStyles.rootVertical,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsEngine.Root>
    );
  }
);

TabsRoot.displayName = 'Tabs';

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ variant = 'line', size = 'md', loop, className, children, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ variant, size }}>
        <TabsEngine.List
          ref={ref}
          data-slot="tabs-list"
          loop={loop}
          className={cn(
            tabsStyles.list.base,
            TABS_LIST_VARIANTS[variant],
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
    const { variant, size } = useContext(TabsContext);
    return (
      <TabsEngine.Trigger
        ref={ref}
        value={value}
        disabled={disabled}
        data-slot="tabs-trigger"
        className={cn(
          tabsStyles.trigger.base,
          TABS_TRIGGER_VARIANTS[variant],
          TABS_TRIGGER_SIZES[size],
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
        className={cn(tabsStyles.content, className)}
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
