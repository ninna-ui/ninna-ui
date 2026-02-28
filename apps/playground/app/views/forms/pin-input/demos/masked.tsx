import { PinInput } from '@ninna-ui/forms';

export default function MaskedDemo() {
  return (
    <div className="text-center">
      <p className="text-sm text-base-content/70 mb-3">Enter your PIN (masked)</p>
      <PinInput length={4} mask type="number" />
    </div>
  );
}
