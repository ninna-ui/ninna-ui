import { Accordion } from "@ninna-ui/navigation";

export default function AccordionDisabled() {
  return (
    <Accordion type="single" collapsible>
      <Accordion.Item value="1">
        <Accordion.Trigger>Enabled Item</Accordion.Trigger>
        <Accordion.Content>This item is enabled and can be toggled.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>This content cannot be reached.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Trigger>Another Enabled Item</Accordion.Trigger>
        <Accordion.Content>This item is also enabled.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
