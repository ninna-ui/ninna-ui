import { Alert } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

export default function WithAction() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Alert
        variant="soft"
        color="info"
        title="New Update Available"
        description="A new version of the application is ready to install."
        action={
          <Button size="sm" color="info">
            Update Now
          </Button>
        }
      />
      <Alert
        variant="soft"
        color="warning"
        title="Session Expiring"
        description="Your session will expire in 5 minutes. Would you like to extend it?"
        action={
          <div className="flex gap-2">
            <Button size="sm" variant="outline" color="warning">
              Logout
            </Button>
            <Button size="sm" color="warning">
              Extend Session
            </Button>
          </div>
        }
      />
      <Alert
        variant="soft"
        color="danger"
        title="Payment Failed"
        description="We couldn't process your payment. Please update your payment method."
        action={
          <Button size="sm" color="danger">
            Update Payment
          </Button>
        }
        dismissible
      />
      <Alert
        variant="soft"
        color="success"
        title="Subscription Renewed"
        description="Your subscription has been successfully renewed for another year."
        action={
          <Button size="sm" variant="ghost" color="success">
            View Details
          </Button>
        }
      />
    </div>
  );
}
