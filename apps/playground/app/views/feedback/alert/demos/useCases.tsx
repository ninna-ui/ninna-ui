import { Alert } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

export default function UseCases() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Form Validation Error */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Form Validation</h4>
        <Alert
          variant="soft"
          color="danger"
          title="Please fix the following errors:"
        >
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
            <li>Please accept the terms and conditions</li>
          </ul>
        </Alert>
      </div>

      {/* Success Message */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Success Message</h4>
        <Alert
          variant="soft"
          color="success"
          title="Order Confirmed!"
          description="Your order #12345 has been placed successfully. You will receive a confirmation email shortly."
          dismissible
        />
      </div>

      {/* System Notification */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">System Notification</h4>
        <Alert
          variant="outline"
          color="info"
          title="Scheduled Maintenance"
          description="The system will be undergoing maintenance on Sunday, January 26th from 2:00 AM to 6:00 AM EST."
          action={
            <Button size="sm" variant="ghost" color="info">
              Learn More
            </Button>
          }
        />
      </div>

      {/* Warning Banner */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Warning Banner</h4>
        <Alert
          variant="solid"
          color="warning"
          title="Browser Not Supported"
          description="You are using an outdated browser. Please update to the latest version for the best experience."
          action={
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white">
              Update Browser
            </Button>
          }
        />
      </div>

      {/* Cookie Consent */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium text-base-content/70 uppercase tracking-wide">Cookie Consent</h4>
        <Alert
          variant="soft"
          color="neutral"
          showIcon={false}
          description="We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
          action={
            <div className="flex gap-2">
              <Button size="sm" variant="outline" color="neutral">
                Decline
              </Button>
              <Button size="sm" color="primary">
                Accept
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
}
