
import { useForm, Controller } from 'react-hook-form';
import { Slider, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  volume: number[];
  priceRange: number[];
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      volume: [50],
      priceRange: [20, 80],
    },
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-sm">
      <Field label="Volume">
        <Controller
          name="volume"
          control={control}
          render={({ field }) => (
            <Slider
              value={field.value}
              onValueChange={field.onChange}
              showValue
              min={0}
              max={100}
            />
          )}
        />
      </Field>

      <Field label="Price Range ($)">
        <Controller
          name="priceRange"
          control={control}
          render={({ field }) => (
            <Slider
              value={field.value}
              onValueChange={field.onChange}
              showValue
              min={0}
              max={100}
              color="success"
            />
          )}
        />
      </Field>

      <Button type="submit" fullWidth>
        Apply Filters
      </Button>
    </form>
  );
}
