
import { useForm, Controller } from 'react-hook-form';
import { PinInput, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  otp: string;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      otp: '',
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`OTP entered: ${data.otp}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field
        label="Verification Code"
        helperText="Enter the 6-digit code sent to your phone"
        errorText={errors.otp?.message}
        invalid={!!errors.otp}
        required
      >
        <Controller
          name="otp"
          control={control}
          rules={{
            required: 'Verification code is required',
            minLength: { value: 6, message: 'Please enter all 6 digits' },
          }}
          render={({ field }) => (
            <PinInput
              length={6}
              value={field.value}
              onChange={field.onChange}
              onComplete={(value) => field.onChange(value)}
              invalid={!!errors.otp}
              otp
            />
          )}
        />
      </Field>

      <Button type="submit">
        Verify
      </Button>
    </form>
  );
}
