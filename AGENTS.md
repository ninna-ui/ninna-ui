# Ninna UI v0.6.0 — AI Agent Rules

> Drop this file into your project as `AGENTS.md`, `.cursorrules`, or `CLAUDE.md`.
> It tells AI coding agents how to use Ninna UI correctly. Full API: https://ninna-ui.dev/llms-full.txt

## Repository workflow for coding agents

1. Start every issue or task from an up-to-date `main` branch and create a dedicated branch before editing files. Use a clear prefix such as `fix/`, `feat/`, `docs/`, or `chore/`.
2. Read the linked issue and inspect the affected package, tests, Storybook docs, and playground examples before implementing the change.
3. Add a Changesets entry for every public package change. Select only affected public packages, exclude private packages and apps, and use an accurate patch, minor, or major summary.
4. Keep commits focused and use clear conventional commit messages. Do not mix unrelated changes into an issue branch.
5. Run the most relevant tests, type checks, lint checks, builds, and app smoke checks before handing off the branch.

## Golden rules

0. **Use Ninna UI v0.6.0 or later.** All @ninna-ui packages are at 0.6.0 on npm. Always install with @latest (e.g. `pnpm add @ninna-ui/core@latest @ninna-ui/primitives@latest`). Do NOT use 0.1.0 — it is an obsolete early release.
1. Ninna UI is split into tree-shakeable packages. Each component is exported from exactly ONE package.
2. ALWAYS import a component from the package listed in the "Component Import Map" below. Never guess.
3. Never import from `@ninna-ui/react-internal` or `@ninna-ui/utils` (internal packages).
4. There is NO `tailwind.config.ts`. Tailwind v4 is configured via CSS imports only.

## Required setup

Install the packages you need:

```bash
pnpm add @ninna-ui/core@latest @ninna-ui/primitives@latest @ninna-ui/feedback@latest @ninna-ui/forms@latest @ninna-ui/layout@latest @ninna-ui/overlays@latest @ninna-ui/navigation@latest @ninna-ui/data-display@latest
```

Add the CSS (required — without this, components are unstyled):

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@variant dark (&:is(.dark *));
```

## Common mistakes (avoid these)

- Overlays (Modal, Drawer, Popover, Tooltip, DropdownMenu) live in @ninna-ui/overlays — NOT @ninna-ui/primitives.
- Layout primitives (Box, Stack, HStack, VStack, Flex, Grid, Container, Center, Wrap, SimpleGrid, AspectRatio, Separator) live in @ninna-ui/layout.
- Never import from @ninna-ui/react-internal or @ninna-ui/utils — they are internal and not published for app use.
- There is NO tailwind.config.ts. Tailwind v4 is CSS-first: configure via the CSS @import only.
- CSS setup is REQUIRED: @import "tailwindcss"; then @import "@ninna-ui/core/theme/presets/default.css";
- VStack/HStack/Stack gap takes a STRING token (gap="4"), not a number.
- IconButton requires an `icon` prop (<IconButton icon={<Bell />} />) — it does not take children.
- Flex wrap takes a string (wrap="wrap"), not a boolean.
- Put input icons inside InputGroup via the `startElement`/`endElement` props, not a leftIcon prop on Input.
- Checkbox/Switch use the onCheckedChange callback, not onChange.
- Compound components are accessed via dot-notation (Modal.Trigger, Modal.Content, DropdownMenu.Item, etc.).
- Always import each component from the exact package shown in the Component Import Map below — do not guess.
- All @ninna-ui packages are at v0.6.0 on npm. Always install with @latest (e.g. pnpm add @ninna-ui/core@latest). Do NOT use 0.1.0 — it is an obsolete early release with a different API.

## Correct usage example

```tsx
import { Button } from "@ninna-ui/primitives";
import { Input, Field } from "@ninna-ui/forms";
import { VStack } from "@ninna-ui/layout";
import { Modal } from "@ninna-ui/overlays";

export default function Example() {
  return (
    <VStack gap="4">
      <Field label="Email">
        <Input placeholder="you@example.com" />
      </Field>
      <Modal>
        <Modal.Trigger asChild>
          <Button color="primary">Open</Button>
        </Modal.Trigger>
        <Modal.Content>Overlays come from @ninna-ui/overlays.</Modal.Content>
      </Modal>
    </VStack>
  );
}
```

## Component Import Map (exact imports — do not guess)

### @ninna-ui/primitives

Avatar -> import { Avatar } from "@ninna-ui/primitives";
AvatarGroup -> import { AvatarGroup } from "@ninna-ui/primitives";
Badge -> import { Badge } from "@ninna-ui/primitives";
Blockquote -> import { Blockquote } from "@ninna-ui/primitives";
Button -> import { Button } from "@ninna-ui/primitives";
Code -> import { Code } from "@ninna-ui/primitives";
Divider -> import { Divider } from "@ninna-ui/primitives";
Heading -> import { Heading } from "@ninna-ui/primitives";
IconButton -> import { IconButton } from "@ninna-ui/primitives";
Kbd -> import { Kbd } from "@ninna-ui/primitives";
Link -> import { Link } from "@ninna-ui/primitives";
LinkBox -> import { LinkBox } from "@ninna-ui/primitives";
LinkOverlay -> import { LinkOverlay } from "@ninna-ui/primitives";
List -> import { List } from "@ninna-ui/primitives";
ListItem -> import { ListItem } from "@ninna-ui/primitives";
Mark -> import { Mark } from "@ninna-ui/primitives";
Text -> import { Text } from "@ninna-ui/primitives";

### @ninna-ui/feedback

Alert -> import { Alert } from "@ninna-ui/feedback";
CircularProgress -> import { CircularProgress } from "@ninna-ui/feedback";
EmptyState -> import { EmptyState } from "@ninna-ui/feedback";
Loading -> import { Loading } from "@ninna-ui/feedback";
Progress -> import { Progress } from "@ninna-ui/feedback";
Skeleton -> import { Skeleton } from "@ninna-ui/feedback";
SkeletonCircle -> import { SkeletonCircle } from "@ninna-ui/feedback";
SkeletonText -> import { SkeletonText } from "@ninna-ui/feedback";
Status -> import { Status } from "@ninna-ui/feedback";
toast -> import { toast } from "@ninna-ui/feedback";
Toast -> import { Toast } from "@ninna-ui/feedback";
Toaster -> import { Toaster } from "@ninna-ui/feedback";
ToastProvider -> import { ToastProvider } from "@ninna-ui/feedback";
useToast -> import { useToast } from "@ninna-ui/feedback";

### @ninna-ui/forms

Checkbox -> import { Checkbox } from "@ninna-ui/forms";
CheckboxGroup -> import { CheckboxGroup } from "@ninna-ui/forms";
CheckboxGroupItem -> import { CheckboxGroupItem } from "@ninna-ui/forms";
Field -> import { Field } from "@ninna-ui/forms";
FileUpload -> import { FileUpload } from "@ninna-ui/forms";
FileUploadItem -> import { FileUploadItem } from "@ninna-ui/forms";
FormControl -> import { FormControl } from "@ninna-ui/forms";
FormGroup -> import { FormGroup } from "@ninna-ui/forms";
FormLabel -> import { FormLabel } from "@ninna-ui/forms";
FormMessage -> import { FormMessage } from "@ninna-ui/forms";
HiddenField -> import { HiddenField } from "@ninna-ui/forms";
Input -> import { Input } from "@ninna-ui/forms";
InputAddon -> import { InputAddon } from "@ninna-ui/forms";
InputGroup -> import { InputGroup } from "@ninna-ui/forms";
NumberInput -> import { NumberInput } from "@ninna-ui/forms";
PinInput -> import { PinInput } from "@ninna-ui/forms";
RadioCard -> import { RadioCard } from "@ninna-ui/forms";
RadioGroup -> import { RadioGroup } from "@ninna-ui/forms";
RadioGroupItem -> import { RadioGroupItem } from "@ninna-ui/forms";
Select -> import { Select } from "@ninna-ui/forms";
SelectGroup -> import { SelectGroup } from "@ninna-ui/forms";
SelectItem -> import { SelectItem } from "@ninna-ui/forms";
SelectSeparator -> import { SelectSeparator } from "@ninna-ui/forms";
Slider -> import { Slider } from "@ninna-ui/forms";
Switch -> import { Switch } from "@ninna-ui/forms";
Textarea -> import { Textarea } from "@ninna-ui/forms";
useFormControl -> import { useFormControl } from "@ninna-ui/forms";
useFormControlProps -> import { useFormControlProps } from "@ninna-ui/forms";

### @ninna-ui/layout

AspectRatio -> import { AspectRatio } from "@ninna-ui/layout";
Box -> import { Box } from "@ninna-ui/layout";
Center -> import { Center } from "@ninna-ui/layout";
Container -> import { Container } from "@ninna-ui/layout";
Flex -> import { Flex } from "@ninna-ui/layout";
Grid -> import { Grid } from "@ninna-ui/layout";
HStack -> import { HStack } from "@ninna-ui/layout";
Separator -> import { Separator } from "@ninna-ui/layout";
SimpleGrid -> import { SimpleGrid } from "@ninna-ui/layout";
Stack -> import { Stack } from "@ninna-ui/layout";
VStack -> import { VStack } from "@ninna-ui/layout";
Wrap -> import { Wrap } from "@ninna-ui/layout";

### @ninna-ui/overlays

Drawer -> import { Drawer } from "@ninna-ui/overlays";
DropdownMenu -> import { DropdownMenu } from "@ninna-ui/overlays";
Modal -> import { Modal } from "@ninna-ui/overlays";
Popover -> import { Popover } from "@ninna-ui/overlays";
Tooltip -> import { Tooltip } from "@ninna-ui/overlays";

### @ninna-ui/navigation

Accordion -> import { Accordion } from "@ninna-ui/navigation";
Breadcrumbs -> import { Breadcrumbs } from "@ninna-ui/navigation";
Pagination -> import { Pagination } from "@ninna-ui/navigation";
Stepper -> import { Stepper } from "@ninna-ui/navigation";
Tabs -> import { Tabs } from "@ninna-ui/navigation";

### @ninna-ui/data-display

Calendar -> import { Calendar } from "@ninna-ui/data-display";
Card -> import { Card } from "@ninna-ui/data-display";
DataTable -> import { DataTable } from "@ninna-ui/data-display";
Stat -> import { Stat } from "@ninna-ui/data-display";
Table -> import { Table } from "@ninna-ui/data-display";
Timeline -> import { Timeline } from "@ninna-ui/data-display";
Tree -> import { Tree } from "@ninna-ui/data-display";

### @ninna-ui/code-block

CodeBlock -> import { CodeBlock } from "@ninna-ui/code-block";
