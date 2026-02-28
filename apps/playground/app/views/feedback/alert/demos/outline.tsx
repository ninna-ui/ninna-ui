import { Alert } from "@ninna-ui/feedback";

export default function Outline() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert variant="outline" color="neutral" title="Neutral" description="This is a neutral outline alert message." />
      <Alert variant="outline" color="primary" title="Primary" description="This is a primary outline alert message." />
      <Alert variant="outline" color="secondary" title="Secondary" description="This is a secondary outline alert message." />
      <Alert variant="outline" color="accent" title="Accent" description="This is an accent outline alert message." />
      <Alert variant="outline" color="info" title="Info" description="A new version is available for download." />
      <Alert variant="outline" color="success" title="Success" description="Your changes have been saved successfully." />
      <Alert variant="outline" color="warning" title="Warning" description="Please review your information before continuing." />
      <Alert variant="outline" color="danger" title="Danger" description="There was an error processing your request." />
    </div>
  );
}
