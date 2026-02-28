import { Alert } from "@ninna-ui/feedback";
import { Bell, Shield, Zap, Heart, Star } from "lucide-react";

export default function WithIcon() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert
        variant="soft"
        color="primary"
        title="Custom Icon"
        description="This alert uses a custom Bell icon."
        icon={<Bell className="h-5 w-5" />}
      />
      <Alert
        variant="soft"
        color="success"
        title="Security Update"
        description="Your account security has been enhanced."
        icon={<Shield className="h-5 w-5" />}
      />
      <Alert
        variant="soft"
        color="warning"
        title="Performance Alert"
        description="System performance is running at optimal levels."
        icon={<Zap className="h-5 w-5" />}
      />
      <Alert
        variant="soft"
        color="danger"
        title="Important Notice"
        description="Please review your account settings."
        icon={<Heart className="h-5 w-5" />}
      />
      <Alert
        variant="soft"
        color="info"
        title="Featured Content"
        description="Check out our new featured articles."
        icon={<Star className="h-5 w-5" />}
      />
      <Alert
        variant="soft"
        color="neutral"
        title="No Icon"
        description="This alert has no icon displayed."
        showIcon={false}
      />
    </div>
  );
}
