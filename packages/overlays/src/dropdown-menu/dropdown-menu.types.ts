import type { ReactNode, ComponentPropsWithoutRef } from 'react';

/** Props for the DropdownMenu root component */
export interface DropdownMenuProps {
  /** DropdownMenu content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
  /** Whether the dropdown is modal @default true */
  modal?: boolean | undefined;
  /** Reading direction @default 'ltr' */
  dir?: 'ltr' | 'rtl' | undefined;
}

/** Props for the DropdownMenu trigger */
export interface DropdownMenuTriggerProps extends ComponentPropsWithoutRef<'button'> {
  /** Render as child element instead of button */
  asChild?: boolean | undefined;
}

/** Props for the DropdownMenu content */
export interface DropdownMenuContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Which side to place the menu @default 'bottom' */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Distance from trigger in pixels @default 4 */
  sideOffset?: number;
  /** Alignment along the side @default 'start' */
  align?: 'start' | 'center' | 'end';
  /** Whether to loop keyboard navigation @default true */
  loop?: boolean | undefined;
  /** Whether to avoid collisions with viewport boundary */
  avoidCollisions?: boolean | undefined;
}

/** Props for a DropdownMenu item */
export interface DropdownMenuItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /** Whether the item is disabled */
  disabled?: boolean | undefined;
  /** Callback when the item is selected */
  onSelect?: ((event: Event) => void) | undefined;
  /** Text value for typeahead */
  textValue?: string | undefined;
  /** Whether the item is destructive (danger styling) */
  destructive?: boolean | undefined;
}

/** Props for a DropdownMenu checkbox item */
export interface DropdownMenuCheckboxItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /** Whether the item is checked */
  checked?: boolean | 'indeterminate' | undefined;
  /** Callback when checked state changes */
  onCheckedChange?: ((checked: boolean) => void) | undefined;
  /** Whether the item is disabled */
  disabled?: boolean | undefined;
  /** Callback when the item is selected */
  onSelect?: ((event: Event) => void) | undefined;
  /** Text value for typeahead */
  textValue?: string | undefined;
}

/** Props for a DropdownMenu radio group */
export interface DropdownMenuRadioGroupProps extends ComponentPropsWithoutRef<'div'> {
  /** Current value */
  value?: string | undefined;
  /** Callback when value changes */
  onValueChange?: ((value: string) => void) | undefined;
}

/** Props for a DropdownMenu radio item */
export interface DropdownMenuRadioItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  /** Value of the radio item */
  value: string;
  /** Whether the item is disabled */
  disabled?: boolean | undefined;
  /** Callback when the item is selected */
  onSelect?: ((event: Event) => void) | undefined;
  /** Text value for typeahead */
  textValue?: string | undefined;
}

/** Props for a DropdownMenu label */
export interface DropdownMenuLabelProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the label is inset (indented to align with items) */
  inset?: boolean | undefined;
}

/** Props for a DropdownMenu separator */
export interface DropdownMenuSeparatorProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for a DropdownMenu group */
export interface DropdownMenuGroupProps extends ComponentPropsWithoutRef<'div'> {}

/** Props for the DropdownMenu sub menu */
export interface DropdownMenuSubProps {
  /** Sub menu content */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean | undefined;
  /** Default open state */
  defaultOpen?: boolean | undefined;
  /** Callback when open state changes */
  onOpenChange?: ((open: boolean) => void) | undefined;
}

/** Props for the DropdownMenu sub trigger */
export interface DropdownMenuSubTriggerProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the item is disabled */
  disabled?: boolean | undefined;
  /** Text value for typeahead */
  textValue?: string | undefined;
}

/** Props for the DropdownMenu sub content */
export interface DropdownMenuSubContentProps extends ComponentPropsWithoutRef<'div'> {
  /** Distance from trigger in pixels @default 2 */
  sideOffset?: number | undefined;
  /** Whether to loop keyboard navigation */
  loop?: boolean | undefined;
}
