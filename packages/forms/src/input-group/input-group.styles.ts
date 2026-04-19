import type { Size } from '@ninna-ui/core';

export const INPUT_GROUP_SIZES: Record<Size, {
  element: string;
  elementPadding: { start: string; end: string };
  addon: string;
}> = {
  xs: {
    element: "text-xs [&>svg]:w-3.5 [&>svg]:h-3.5",
    elementPadding: { start: "!pl-7", end: "!pr-7" },
    addon: "h-7 text-xs px-2",
  },
  sm: {
    element: "text-sm [&>svg]:w-4 [&>svg]:h-4",
    elementPadding: { start: "!pl-8", end: "!pr-8" },
    addon: "h-8 text-sm px-2",
  },
  md: {
    element: "text-sm [&>svg]:w-5 [&>svg]:h-5",
    elementPadding: { start: "!pl-10", end: "!pr-10" },
    addon: "h-10 text-sm px-3",
  },
  lg: {
    element: "text-base [&>svg]:w-5 [&>svg]:h-5",
    elementPadding: { start: "!pl-11", end: "!pr-11" },
    addon: "h-11 text-base px-4",
  },
  xl: {
    element: "text-base [&>svg]:w-6 [&>svg]:h-6",
    elementPadding: { start: "!pl-12", end: "!pr-12" },
    addon: "h-12 text-base px-4",
  },
};

export const inputGroupStyles = {
  container: 'relative w-full',

  wrapper: 'relative w-full',

  

  // Elements (icons, text inside the input border)

  // Use inset-y-0 for full height, flex items-center for vertical centering

  element: 'absolute inset-y-0 flex items-center text-base-content/70 z-10',

  elementStart: 'left-0 pl-3',

  elementEnd: 'right-0 pr-3',

  // Wrapper is transparent to pointer events so clicks fall through to the
  // underlying input, but any interactive descendants (button, anchor, input,
  // or explicit role="button") opt back in via a descendant selector. This
  // removes the need for React-level heuristics and handles wrapped
  // components (e.g. `<IconButton>`) correctly.
  elementPointerSmart:
    'pointer-events-none [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_input]:pointer-events-auto [&_[role="button"]]:pointer-events-auto',

  // Force-disable all pointer events (including on interactive descendants).
  elementPointerNone: 'pointer-events-none [&_*]:pointer-events-none',

  // Force-enable pointer events on the wrapper and its subtree.
  elementPointerAuto: 'pointer-events-auto',

  

  // Input padding adjustments

  inputWithStartElement: 'pl-10',

  inputWithEndElement: 'pr-10',

  inputWithStartAddon: 'rounded-l-none',

  inputWithEndAddon: 'rounded-r-none',

};



export const inputAddonStyles = {

  base: 'flex items-center justify-center shrink-0 font-medium text-base-content/80 bg-base-100 border border-base-300',

  start: 'rounded-l-md border-r-0',

  end: 'rounded-r-md border-l-0',

};
