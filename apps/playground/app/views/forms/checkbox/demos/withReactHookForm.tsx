
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, Field } from '@ninna-ui/forms';
import { Button } from '@ninna-ui/primitives';

interface FormData {
  acceptTerms: boolean;
  newsletter: boolean;
}

export default function WithReactHookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      acceptTerms: false,
      newsletter: false,
    },
  });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
      <Field
        errorText={errors.acceptTerms?.message}
        invalid={!!errors.acceptTerms}
      >
        <Controller
          name="acceptTerms"
          control={control}
          rules={{ required: 'You must accept the terms' }}
          render={({ field }) => (
            <Checkbox
              label="I accept the terms and conditions"
              checked={field.value}
              onCheckedChange={field.onChange}
              ref={field.ref}
              invalid={!!errors.acceptTerms}
            />
          )}
        />
      </Field>

      <Controller
        name="newsletter"
        control={control}
        render={({ field }) => (
          <Checkbox
            label="Subscribe to newsletter"
            checked={field.value}
            onCheckedChange={field.onChange}
            ref={field.ref}
          />
        )}
      />

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
}
