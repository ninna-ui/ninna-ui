
import { useForm, Controller } from 'react-hook-form';
import { Select, SelectItem, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  country: string;
  language: string;
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
      <Field
        label="Country"
        errorText={errors.country?.message}
        invalid={!!errors.country}
        required
      >
        <Controller
          name="country"
          control={control}
          rules={{ required: 'Please select a country' }}
          render={({ field }) => (
            <Select
              placeholder="Select a country"
              value={field.value}
              onValueChange={field.onChange}
              invalid={!!errors.country}
            >
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </Select>
          )}
        />
      </Field>

      <Field
        label="Language"
        errorText={errors.language?.message}
        invalid={!!errors.language}
      >
        <Controller
          name="language"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="Select a language"
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </Select>
          )}
        />
      </Field>

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
}
