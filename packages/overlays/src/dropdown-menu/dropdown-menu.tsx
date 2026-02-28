import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';
import { DropdownEngine } from '@ninna-ui/react-internal';
import { dropdownMenuStyles } from './dropdown-menu.styles';
import type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuGroupProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
} from './dropdown-menu.types';

const CheckIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const DotIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <circle cx="10" cy="10" r="3" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="ml-auto h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

/**
 * DropdownMenu component for contextual actions triggered by a button.
 *
 * @example
 * ```tsx
 * <DropdownMenu>
 *   <DropdownMenu.Trigger asChild>
 *     <Button>Actions</Button>
 *   </DropdownMenu.Trigger>
 *   <DropdownMenu.Content>
 *     <DropdownMenu.Item onSelect={() => {}}>Edit</DropdownMenu.Item>
 *     <DropdownMenu.Item onSelect={() => {}}>Copy</DropdownMenu.Item>
 *     <DropdownMenu.Separator />
 *     <DropdownMenu.Item destructive onSelect={() => {}}>Delete</DropdownMenu.Item>
 *   </DropdownMenu.Content>
 * </DropdownMenu>
 * ```
 */
const DropdownMenuRoot = ({ children, open, defaultOpen, onOpenChange, modal = true, dir }: DropdownMenuProps) => {
  return (
    <DropdownEngine.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
      dir={dir}
    >
      {children}
    </DropdownEngine.Root>
  );
};

DropdownMenuRoot.displayName = 'DropdownMenu';

const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ asChild, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.Trigger ref={ref} asChild={asChild} data-slot="dropdown-trigger" className={className} {...props}>
        {children}
      </DropdownEngine.Trigger>
    );
  }
);

DropdownMenuTrigger.displayName = 'DropdownMenu.Trigger';

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  (
    {
      side = 'bottom',
      sideOffset = 4,
      align = 'start',
      loop = true,
      avoidCollisions = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <DropdownEngine.Portal>
        <DropdownEngine.Content
          ref={ref}
          data-slot="dropdown-content"
          side={side}
          sideOffset={sideOffset}
          align={align}
          loop={loop}
          avoidCollisions={avoidCollisions}
          className={cn(dropdownMenuStyles.content, className)}
          {...props}
        >
          {children}
        </DropdownEngine.Content>
      </DropdownEngine.Portal>
    );
  }
);

DropdownMenuContent.displayName = 'DropdownMenu.Content';

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ disabled, onSelect, textValue, destructive, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.Item
        ref={ref}
        data-slot="dropdown-item"
        disabled={disabled}
        onSelect={onSelect}
        textValue={textValue}
        className={cn(dropdownMenuStyles.item, destructive && dropdownMenuStyles.itemDestructive, className)}
        {...props}
      >
        {children}
      </DropdownEngine.Item>
    );
  }
);

DropdownMenuItem.displayName = 'DropdownMenu.Item';

const DropdownMenuCheckboxItem = forwardRef<HTMLDivElement, DropdownMenuCheckboxItemProps>(
  ({ checked, onCheckedChange, disabled, onSelect, textValue, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.CheckboxItem
        ref={ref}
        data-slot="dropdown-checkbox-item"
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        onSelect={onSelect}
        textValue={textValue}
        className={cn(dropdownMenuStyles.checkboxItem, className)}
        {...props}
      >
        <span className={dropdownMenuStyles.itemIndicator}>
          <DropdownEngine.ItemIndicator>
            <CheckIcon />
          </DropdownEngine.ItemIndicator>
        </span>
        {children}
      </DropdownEngine.CheckboxItem>
    );
  }
);

DropdownMenuCheckboxItem.displayName = 'DropdownMenu.CheckboxItem';

const DropdownMenuRadioGroup = forwardRef<HTMLDivElement, DropdownMenuRadioGroupProps>(
  ({ value, onValueChange, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.RadioGroup
        ref={ref}
        data-slot="dropdown-radio-group"
        value={value}
        onValueChange={onValueChange}
        className={className}
        {...props}
      >
        {children}
      </DropdownEngine.RadioGroup>
    );
  }
);

DropdownMenuRadioGroup.displayName = 'DropdownMenu.RadioGroup';

const DropdownMenuRadioItem = forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>(
  ({ value, disabled, onSelect, textValue, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.RadioItem
        ref={ref}
        data-slot="dropdown-radio-item"
        value={value}
        disabled={disabled}
        onSelect={onSelect}
        textValue={textValue}
        className={cn(dropdownMenuStyles.radioItem, className)}
        {...props}
      >
        <span className={dropdownMenuStyles.itemIndicator}>
          <DropdownEngine.ItemIndicator>
            <DotIcon />
          </DropdownEngine.ItemIndicator>
        </span>
        {children}
      </DropdownEngine.RadioItem>
    );
  }
);

DropdownMenuRadioItem.displayName = 'DropdownMenu.RadioItem';

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ inset, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.Label
        ref={ref}
        data-slot="dropdown-label"
        className={cn(dropdownMenuStyles.label, inset && dropdownMenuStyles.labelInset, className)}
        {...props}
      >
        {children}
      </DropdownEngine.Label>
    );
  }
);

DropdownMenuLabel.displayName = 'DropdownMenu.Label';

const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <DropdownEngine.Separator
        ref={ref}
        data-slot="dropdown-separator"
        className={cn(dropdownMenuStyles.separator, className)}
        {...props}
      />
    );
  }
);

DropdownMenuSeparator.displayName = 'DropdownMenu.Separator';

const DropdownMenuGroup = forwardRef<HTMLDivElement, DropdownMenuGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} data-slot="dropdown-group" role="group" className={className} {...props}>
        {children}
      </div>
    );
  }
);

DropdownMenuGroup.displayName = 'DropdownMenu.Group';

const DropdownMenuSub = ({ children, open, defaultOpen, onOpenChange }: DropdownMenuSubProps) => {
  return (
    <DropdownEngine.Sub
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {children}
    </DropdownEngine.Sub>
  );
};

DropdownMenuSub.displayName = 'DropdownMenu.Sub';

const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, DropdownMenuSubTriggerProps>(
  ({ disabled, textValue, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.SubTrigger
        ref={ref}
        data-slot="dropdown-sub-trigger"
        disabled={disabled}
        textValue={textValue}
        className={cn(dropdownMenuStyles.subTrigger, className)}
        {...props}
      >
        {children}
        <ChevronRightIcon />
      </DropdownEngine.SubTrigger>
    );
  }
);

DropdownMenuSubTrigger.displayName = 'DropdownMenu.SubTrigger';

const DropdownMenuSubContent = forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ sideOffset = 2, loop, className, children, ...props }, ref) => {
    return (
      <DropdownEngine.Portal>
        <DropdownEngine.SubContent
          ref={ref}
          data-slot="dropdown-sub-content"
          sideOffset={sideOffset}
          loop={loop}
          className={cn(dropdownMenuStyles.subContent, className)}
          {...props}
        >
          {children}
        </DropdownEngine.SubContent>
      </DropdownEngine.Portal>
    );
  }
);

DropdownMenuSubContent.displayName = 'DropdownMenu.SubContent';

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Group: DropdownMenuGroup,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
});
