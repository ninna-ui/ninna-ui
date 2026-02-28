import { RadioGroup, RadioCard } from "@ninna-ui/forms";
import { CreditCard, Wallet, Building2 } from "lucide-react";

export default function RadioCardDemo() {
  return (
    <RadioGroup defaultValue="card" orientation="horizontal" className="gap-4">
      <RadioCard
        value="card"
        title="Credit Card"
        description="Pay with Visa, Mastercard, or Amex"
        icon={<CreditCard className="w-6 h-6" />}
      />
      <RadioCard
        value="wallet"
        title="Digital Wallet"
        description="Apple Pay, Google Pay"
        icon={<Wallet className="w-6 h-6" />}
      />
      <RadioCard
        value="bank"
        title="Bank Transfer"
        description="Direct bank payment"
        icon={<Building2 className="w-6 h-6" />}
      />
    </RadioGroup>
  );
}
