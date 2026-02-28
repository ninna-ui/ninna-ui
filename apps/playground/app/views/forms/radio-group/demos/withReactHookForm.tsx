
import { useForm, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  plan: string;
  frequency: string;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-sm">
      <Field
        label="Select a plan"
        errorText={errors.plan?.message}
        invalid={!!errors.plan}
        required
      >
        <Controller
          name="plan"
          control={control}
          rules={{ required: 'Please select a plan' }}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              invalid={!!errors.plan}
            >
              <RadioGroupItem value="free" label="Free" />
              <RadioGroupItem value="pro" label="Pro - $9/month" />
              <RadioGroupItem value="enterprise" label="Enterprise - $29/month" />
            </RadioGroup>
          )}
        />
      </Field>

      <Field label="Billing frequency">
        <Controller
          name="frequency"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              orientation="horizontal"
            >
              <RadioGroupItem value="monthly" label="Monthly" />
              <RadioGroupItem value="yearly" label="Yearly (save 20%)" />
            </RadioGroup>
          )}
        />
      </Field>

      <Button type="submit" fullWidth>
        Continue
      </Button>
    </form>
  );
}
