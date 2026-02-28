import { PinInput } from '@ninna-ui/forms';

export default function OtpDemo() {
  return (
    <div className="text-center">
      <p className="text-sm text-base-content/70 mb-3">Enter the 6-digit code sent to your phone</p>
      <PinInput length={6} otp type="number" />
    </div>
  );
}
