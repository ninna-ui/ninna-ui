import { Accordion } from "@ninna-ui/navigation";

export default function AccordionMultiple() {
  return (
    <Accordion type="multiple">
      <Accordion.Item value="1">
        <Accordion.Trigger>Section One</Accordion.Trigger>
        <Accordion.Content>Multiple items can be open at the same time.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Trigger>Section Two</Accordion.Trigger>
        <Accordion.Content>Try opening while the first is open.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Trigger>Section Three</Accordion.Trigger>
        <Accordion.Content>All three can expand simultaneously.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
