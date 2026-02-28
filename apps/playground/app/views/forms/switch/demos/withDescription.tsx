import { Switch } from "@ninna-ui/forms";

export default function WithDescription() {
  return (
    <div className="flex flex-col gap-4">
      <Switch 
        label="Email notifications" 
        description="Receive email updates about your account activity" 
      />
      <Switch 
        label="Marketing emails" 
        description="Get notified about new features and promotions" 
        defaultChecked 
      />
    </div>
  );
}
