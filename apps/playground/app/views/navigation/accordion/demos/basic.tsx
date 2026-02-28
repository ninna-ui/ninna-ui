import { Accordion } from "@ninna-ui/navigation";

export default function BasicAccordion() {
  return (
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is Ninna UI?</Accordion.Trigger>
        <Accordion.Content>
          Ninna UI is a modern React component library with beautiful theming and full accessibility.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Content>
          Install via npm or pnpm. See the installation guide for details.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes, all components follow WAI-ARIA patterns and support keyboard navigation.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
