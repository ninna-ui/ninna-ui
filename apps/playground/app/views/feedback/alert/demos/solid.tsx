import { Alert } from "@ninna-ui/feedback";

export default function Solid() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert variant="solid" color="neutral" title="Neutral" description="This is a neutral solid alert message." />
      <Alert variant="solid" color="primary" title="Primary" description="This is a primary solid alert message." />
      <Alert variant="solid" color="secondary" title="Secondary" description="This is a secondary solid alert message." />
      <Alert variant="solid" color="accent" title="Accent" description="This is an accent solid alert message." />
      <Alert variant="solid" color="info" title="Info" description="A new version is available for download." />
      <Alert variant="solid" color="success" title="Success" description="Your changes have been saved successfully." />
      <Alert variant="solid" color="warning" title="Warning" description="Please review your information before continuing." />
      <Alert variant="solid" color="danger" title="Danger" description="There was an error processing your request." />
    </div>
  );
}
