import { Accordion } from "@ninna-ui/navigation";

export default function AccordionVariants() {
  const variants = ["outline", "soft", "ghost"] as const;

  return (
    <div className="flex flex-col gap-8">
      {variants.map((variant) => (
        <div key={variant}>
          <p className="text-xs font-semibold uppercase tracking-wide text-base-content/70 mb-2">
            {variant}
          </p>
          <Accordion type="single" collapsible variant={variant}>
            <Accordion.Item value="1">
              <Accordion.Trigger>First Item</Accordion.Trigger>
              <Accordion.Content>Content for first item in {variant} variant.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Trigger>Second Item</Accordion.Trigger>
              <Accordion.Content>Content for second item.</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="3">
              <Accordion.Trigger>Third Item</Accordion.Trigger>
              <Accordion.Content>Content for third item.</Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
