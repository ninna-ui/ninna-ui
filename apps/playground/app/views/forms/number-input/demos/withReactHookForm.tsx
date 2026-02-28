
import { useForm, Controller } from 'react-hook-form';
import { NumberInput, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  quantity: number;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      quantity: 1,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(`Quantity: ${data.quantity}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-xs">
      <Field
        label="Quantity"
        helperText="Select between 1 and 100"
        errorText={errors.quantity?.message}
        invalid={!!errors.quantity}
        required
      >
        <Controller
          name="quantity"
          control={control}
          rules={{
            required: 'Quantity is required',
            min: { value: 1, message: 'Minimum quantity is 1' },
            max: { value: 100, message: 'Maximum quantity is 100' },
          }}
          render={({ field }) => (
            <NumberInput
              value={field.value}
              onChange={field.onChange}
              min={1}
              max={100}
              invalid={!!errors.quantity}
            />
          )}
        />
      </Field>

      <Button type="submit">
        Add to Cart
      </Button>
    </form>
  );
}
