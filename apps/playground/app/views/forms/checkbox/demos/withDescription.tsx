import { Checkbox } from "@ninna-ui/forms";

export default function WithDescription() {
  return (
    <div className="flex flex-col gap-4">
      <Checkbox 
        label="Marketing emails" 
        description="Receive emails about new products, features, and more."
      />
      <Checkbox 
        label="Security updates" 
        description="Get notified about security updates and alerts."
        defaultChecked
      />
    </div>
  );
}
