import { useState } from "react";
import { Alert } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

export default function Dismissible() {
  const [showNeutral, setShowNeutral] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showDanger, setShowDanger] = useState(true);
  const [showWarning, setShowWarning] = useState(true);

  const resetAll = () => {
    setShowNeutral(true);
    setShowSuccess(true);
    setShowDanger(true);
    setShowWarning(true);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {showNeutral && (
        <Alert
          variant="soft"
          color="neutral"
          title="Neutral Alert"
          description="Click the X button to dismiss this alert."
          dismissible
          onDismiss={() => setShowNeutral(false)}
        />
      )}
      {showSuccess && (
        <Alert
          variant="soft"
          color="success"
          title="Success!"
          description="Your profile has been updated successfully."
          dismissible
          onDismiss={() => setShowSuccess(false)}
        />
      )}
      {showDanger && (
        <Alert
          variant="soft"
          color="danger"
          title="Error"
          description="Failed to save changes. Please try again."
          dismissible
          onDismiss={() => setShowDanger(false)}
        />
      )}
      {showWarning && (
        <Alert
          variant="soft"
          color="warning"
          title="Warning"
          description="Your session will expire in 5 minutes."
          dismissible
          onDismiss={() => setShowWarning(false)}
        />
      )}
      {(!showNeutral || !showSuccess || !showDanger || !showWarning) && (
        <Button variant="text" color="primary" size="sm" onClick={resetAll}>
          Reset all alerts
        </Button>
      )}
    </div>
  );
}
