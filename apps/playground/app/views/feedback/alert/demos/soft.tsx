import { Alert } from "@ninna-ui/feedback";

export default function Soft() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert variant="soft" color="neutral" title="Neutral" description="This is a neutral soft alert message." />
      <Alert variant="soft" color="primary" title="Primary" description="This is a primary soft alert message." />
      <Alert variant="soft" color="secondary" title="Secondary" description="This is a secondary soft alert message." />
      <Alert variant="soft" color="accent" title="Accent" description="This is an accent soft alert message." />
      <Alert variant="soft" color="info" title="Info" description="A new version is available for download." />
      <Alert variant="soft" color="success" title="Success" description="Your changes have been saved successfully." />
      <Alert variant="soft" color="warning" title="Warning" description="Please review your information before continuing." />
      <Alert variant="soft" color="danger" title="Danger" description="There was an error processing your request." />
    </div>
  );
}
