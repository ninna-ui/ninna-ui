import {
  ComponentHeader,
  ComponentSection,
  CodePreview,
  PropsTable,
  UsageExample,
  type PropDefinition,
  type ComponentSectionType,
} from '~/components/docs';
import { Code, Heading } from '@ninna-ui/primitives';
import { toastMeta } from './meta';

import Basic from './demos/basic';
import Colors from './demos/colors';
import Variants from './demos/variants';
import Positions from './demos/positions';
import WithAction from './demos/withAction';
import Duration from './demos/duration';
import Promise from './demos/promise';
import Dismiss from './demos/dismiss';
import SimpleMessages from './demos/simpleMessages';

export const toastSections: ComponentSectionType[] = [
  { id: 'usage', title: 'Usage', level: 2 },
  { id: 'colors', title: 'Colors', level: 3 },
  { id: 'variants', title: 'Variants', level: 3 },
  { id: 'positions', title: 'Positions', level: 3 },
  { id: 'with-action', title: 'With Action', level: 3 },
  { id: 'duration', title: 'Custom Duration', level: 3 },
  { id: 'promise', title: 'Promise', level: 3 },
  { id: 'simple-messages', title: 'Simple Messages', level: 3 },
  { id: 'dismiss', title: 'Dismiss', level: 3 },
  { id: 'api', title: 'API Reference', level: 2 },
  { id: 'toaster-props', title: 'Toaster Props', level: 3 },
  { id: 'toast-options', title: 'Toast Options', level: 3 },
  { id: 'toast-methods', title: 'Toast Methods', level: 3 },
  { id: 'accessibility', title: 'Accessibility', level: 2 },
];

const TOASTER_PROPS: PropDefinition[] = [
  {
    name: 'position',
    type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'",
    defaultValue: "'bottom-right'",
    description: 'Position of toasts on screen',
  },
  {
    name: 'id',
    type: 'string',
    description: 'Unique identifier - only toasts created with a matching toasterId will be shown by this Toaster. Omit for the default global Toaster.',
  },
  {
    name: 'max',
    type: 'number',
    defaultValue: '5',
    description: 'Maximum number of visible toasts',
  },
  {
    name: 'gap',
    type: 'number',
    defaultValue: '8',
    description: 'Gap between toasts in pixels',
  },
  {
    name: 'offset',
    type: 'string | number',
    defaultValue: "'1rem'",
    description: 'Offset from screen edges',
  },
  {
    name: 'pauseOnHover',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Pause auto-dismiss when hovering over toasts',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional CSS classes for the toast container',
  },
];

const TOAST_OPTIONS: PropDefinition[] = [
  {
    name: 'title',
    type: 'ReactNode',
    description: 'Toast title',
  },
  {
    name: 'description',
    type: 'ReactNode',
    description: 'Toast description/message',
  },
  {
    name: 'color',
    type: "'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'danger' | 'warning' | 'info'",
    defaultValue: "'primary'",
    description: 'Color theme of the toast',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Show a spinning loader icon. Use with duration: 0 to keep the toast persistent until updated.',
  },
  {
    name: 'variant',
    type: "'solid' | 'soft' | 'outline'",
    defaultValue: "'soft'",
    description: 'Visual variant',
  },
  {
    name: 'duration',
    type: 'number',
    defaultValue: '5000',
    description: 'Duration in milliseconds (0 = persistent)',
  },
  {
    name: 'closable',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Whether the toast can be dismissed',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    description: 'Custom icon',
  },
  {
    name: 'action',
    type: '{ label: string; onClick: () => void; altText?: string }',
    description: 'Action button configuration',
  },
  {
    name: 'toasterId',
    type: 'string',
    description: 'Route this toast to a specific Toaster by its id. Omit to send to the default global Toaster.',
  },
];

const TOAST_METHODS: PropDefinition[] = [
  {
    name: 'toast.create(options)',
    type: 'string',
    description: 'Create a new toast. Pass color to indicate type (e.g. success, danger). Returns the toast ID.',
  },
  {
    name: 'toast.dismiss(id?)',
    type: 'void',
    description: 'Dismiss a specific toast by ID, or dismiss all toasts if no ID is provided',
  },
  {
    name: 'toast.dismissAll()',
    type: 'void',
    description: 'Dismiss all toasts',
  },
  {
    name: 'toast.update(id, options)',
    type: 'void',
    description: 'Update an existing toast by ID',
  },
  {
    name: 'toast.promise(promise, options)',
    type: 'Promise<T>',
    description: 'Show a loading toast while the promise is pending, then update to success or danger on resolution',
  },
];

const BASIC_USAGE = `import { Toaster, toast } from "@ninna-ui/feedback";

// Add Toaster to your app root
export default function App() {
  return (
    <>
      <YourApp />
      <Toaster />
    </>
  );
}

// Use toast anywhere in your app
function MyComponent() {
  return (
    <button onClick={() => toast.create({ title: "Saved!", color: "success" })}>
      Save
    </button>
  );
}`;

export function ToastView() {
  return (
    <div className="">
      <ComponentHeader meta={toastMeta} />

      <div className="space-y-12">
        <ComponentSection
          id="usage"
          title="Usage"
          description="Add the Toaster component to your app root, then use the toast function to show notifications."
        >
          <UsageExample code={BASIC_USAGE} />
        </ComponentSection>

        <ComponentSection
          id="basic"
          title="Basic"
          description="Basic toast notification with title and description."
          level={3}
        >
          <CodePreview
            component={<Basic />}
            filePath="app/views/feedback/toast/demos/basic.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="colors"
          title="Colors"
          description="Different toast colors for various notification purposes."
          level={3}
        >
          <CodePreview
            component={<Colors />}
            filePath="app/views/feedback/toast/demos/colors.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="variants"
          title="Variants"
          description="Visual variants for different styles."
          level={3}
        >
          <CodePreview
            component={<Variants />}
            filePath="app/views/feedback/toast/demos/variants.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="positions"
          title="Positions"
          description="Each Toaster instance has its own position. Use id on Toaster and toasterId on toast.create() to route toasts to specific positions independently."
          level={3}
        >
          <CodePreview
            component={<Positions />}
            filePath="app/views/feedback/toast/demos/positions.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="with-action"
          title="With Action"
          description="Toast with an action button."
          level={3}
        >
          <CodePreview
            component={<WithAction />}
            filePath="app/views/feedback/toast/demos/withAction.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="duration"
          title="Custom Duration"
          description="Control how long toasts stay visible."
          level={3}
        >
          <CodePreview
            component={<Duration />}
            filePath="app/views/feedback/toast/demos/duration.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="promise"
          title="Promise"
          description="Show loading, success, or error states based on a promise."
          level={3}
        >
          <CodePreview
            component={<Promise />}
            filePath="app/views/feedback/toast/demos/promise.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="simple-messages"
          title="Simple Messages"
          description="Quick toast with just a string message."
          level={3}
        >
          <CodePreview
            component={<SimpleMessages />}
            filePath="app/views/feedback/toast/demos/simpleMessages.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="dismiss"
          title="Dismiss"
          description="Programmatically dismiss toasts."
          level={3}
        >
          <CodePreview
            component={<Dismiss />}
            filePath="app/views/feedback/toast/demos/dismiss.tsx"
          />
        </ComponentSection>

        <ComponentSection
          id="api"
          title="API Reference"
          description="Complete API documentation for Toast components."
        >
            <div className="space-y-8">
              <div id="toaster-props" className="scroll-mt-20">
                <PropsTable 
                  data={TOASTER_PROPS} 
                  title="Toaster Props" 
                />
              </div>
              <div id="toast-options" className="scroll-mt-20">
                <PropsTable 
                  data={TOAST_OPTIONS} 
                  title="Toast Options" 
                />
              </div>
              <div id="toast-methods" className="scroll-mt-20">
                <PropsTable 
                  data={TOAST_METHODS} 
                  title="Toast Methods" 
                />
              </div>
            </div>
        </ComponentSection>

        <ComponentSection id="accessibility" title="Accessibility" level={2}>
          <div className="prose max-w-none">
            <Heading as="h4" size="base" weight="semibold" className="mb-3">ARIA Support</Heading>
            <ul className="space-y-2 text-base-content/70 mb-6">
              <li>role="status": Used for non-critical toasts (neutral, primary, secondary, accent, success, info, warning)</li>
              <li>role="alert": Used for error toasts (danger) to ensure immediate announcement</li>
              <li>aria-live="polite": Default for non-critical notifications</li>
              <li>aria-live="assertive": Automatically set for error notifications</li>
              <li>aria-atomic="true": Ensures the entire toast is announced</li>
            </ul>
            
            <Heading as="h4" size="base" weight="semibold" className="mb-3">Keyboard Navigation</Heading>
            <ul className="space-y-2 text-base-content/70 mb-6">
              <li>Escape: Dismisses the most recent toast</li>
              <li>Tab: Navigate between toast elements (action button, close button)</li>
              <li>Enter/Space: Activate focused button</li>
            </ul>
            
            <Heading as="h4" size="base" weight="semibold" className="mb-3">Focus Management</Heading>
            <ul className="space-y-2 text-base-content/70 mb-6">
              <li>Toasts are focusable with <Code>tabIndex={0}</Code></li>
              <li>Focus is not stolen when toasts appear</li>
              <li>Close buttons have proper <Code>aria-label</Code></li>
              <li>Action buttons include <Code>aria-label</Code> with altText</li>
            </ul>
            
            <Heading as="h4" size="base" weight="semibold" className="mb-3">Motion &amp; Timing</Heading>
            <ul className="space-y-2 text-base-content/70">
              <li>prefers-reduced-motion: Animations are disabled for users who prefer reduced motion</li>
              <li>Pause on hover: Auto-dismiss pauses when hovering over toasts</li>
              <li>Pause on focus: Auto-dismiss pauses when toast is focused</li>
            </ul>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
